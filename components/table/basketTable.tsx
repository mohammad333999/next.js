import React, { useState, useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "../icons/editIcon";
import {DeleteIcon} from "../icons/deleteIcon";
import {AddIcon} from "../icons/addIcon";
import {RemoveIcon} from "../icons/removeIcon";
import {EyeIcon} from "../icons/eyeIcon";
import {columns} from "../data/basketsData";
import Image from 'next/image'
import httpRequest from '../../utility/api/httpRequest'
import localforage from 'localforage';
import { useRouter } from 'next/router';
import PN from "persian-number";
import { bassUrl } from "../../utility/Constants"

const statusColorMap = {
  available: "bg-active",
  unavailable: "bg-paused",
  vacation: "bg-vacation",
};

interface BasketTableProps {
  onClick: (basket: any) => void;
  basketList: BasketItem[];
}

type BasketProps = {
  basketList: BasketItem[]; // Add this line
  id: string,
  purchaseHistory: []
}

type BasketItem = {
  id: string, 
  type: number, 
  name: string,
  title: string,
  discreption: string,
  price: number,
  oldPrice: number,
  discount: number,
  image: string
}


// export default function BasketTable(props: BasketTableProps) {
  const BasketTable: React.FC<BasketTableProps> = ({ onClick, basketList }) => {

  const router = useRouter();
  var [basketList, setBasketList] = useState(basketList)
  var userId = '';


  useEffect(() => {

    localforage.getItem('user').then(value => {
      if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
        userId = JSON.parse(value).mobile
      } else {
        userId = ''
      }
    });
  }, [])

  const renderCell = React.useCallback((product: any, columnKey: any) => {
    const cellValue = product[columnKey];
    // const productIndex = products.indexOf(product)
    var isLoading = 0

    function handleAddClick() {
      const result = httpRequest<BasketProps>('put', bassUrl+'/baskets/put', 
        {
          id: userId,
          product
          , 
          timeout: 5000 
        }
      )
      result.then(value =>
        {

          if (value.data && typeof value.data === 'object') {
            const basketCount = value.data.basketList.length;
            localforage.setItem('basketCount', basketCount);
            setBasketList(value.data.basketList);
            onClick(value.data.basketList);
          }
          
        }
      )
    }

    async function handleRemovClick() {
      console.log(product);
      
      
      const result = httpRequest<BasketProps>('delete', bassUrl+'/baskets/delete', 
        {
          params: {
            userId: userId,
            id: product.id
          },
          timeout: 5000 
        }
      )
      result.then(value =>
        {
          
          if (value.data  && typeof value.data === 'object') {
            const basketCount = value.data.basketList.length;
            localforage.setItem('basketCount', basketCount);
            setBasketList(value.data.basketList);
            onClick(value.data.basketList);
          }
        }
      )
    }

    switch (columnKey) {
      case "name":
        return (
          <div className="h-20 sm:h-24 w-20 sm:w-24 place-content-center">
              <Image 
                src={product.image}
                width={600}
                height={600}
                // fill={true}
                alt="Picture of the author"
                style={{borderWidth: 1, borderRadius: 5}}
              />
          </div>
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize  text-textBright">{product.product}</p>
            <p className="m-1 text-bold text-sm capitalize text-textPrice">{ PN.convertEnToPe(PN.sliceNumber(cellValue)) }<span className="m-1 text-bold text-sm capitalize text-textCloudy">/kg</span></p>
          </div>
        );
      case "totallPrice":
        return (
          <div>
            {true &&
              <Chip className={`bg-textBright w-fit pl-2 pr-2 mr-2 capitalize text-onBackground rounded-xl text-md`} size="sm" variant="flat">
                { PN.convertEnToPe( PN.sliceNumber( product.price * product.count ) ) }
              </Chip>
            }
          </div>
        );
      case "actions":
        return (
          <div>
            {product.available &&
              <div className="relative flex flex-col items-center gap-2" >
              <button onClick={ handleAddClick }>
                  <span className="text-lg text-textBright cursor-pointer active:opacity-50">
                    <AddIcon className="text-warning"/>
                  </span>
              </button>
              <div className="place-content-center pl-2 pr-2 pt-1 bg-textBright rounded" >

                {/* { isLoading == 1 &&
                  <Loading className="text-sm  text-onBackground cursor-pointer">
                  
                  </Loading>
                } */}
                { !isLoading &&
                  <span className="text-lg text-onBackground cursor-pointer">
                    { PN.convertEnToPe( product.count) }
                  </span>
                }
             

              </div>
              <button onClick={ handleRemovClick }>
                  <span className="text-lg text-textBright cursor-pointer active:opacity-50">
                    <RemoveIcon className="text-warning"/>
                  </span>
              </button>
            </div>
          }
        </div>
        );
      default:
        return cellValue;
    }
  }, []);

  // if (basketList ) {
    return (
        <Table aria-label="Example table with custom cells" dir="ltr">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn className="h-10 w-0 text-textCloudy" key={column.uid} align={column.uid === "name" ? "center" : "center"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={basketList}>
              {(item) => (
                <TableRow className="bg-tableBackround"  key={item?.id}>
                  {(columnKey) => <TableCell >{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        );
  // }

 
}

export default BasketTable;
