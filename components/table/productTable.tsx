import React, { useState, useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "../icons/editIcon";
import {DeleteIcon} from "../icons/deleteIcon";
import {AddIcon} from "../icons/addIcon";
import {RemoveIcon} from "../icons/removeIcon";
import {EyeIcon} from "../icons/eyeIcon";
import {columns, products} from "../data/producstData";
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

interface ProductTableProps {
  products: ProductProps[]
}

type BasketProps = {
  basketList: any[]
  id: string
  purchaseHistory: []
}

type ProductProps = {
  id: string | number; // Replace with the actual type of id
  type: number, 
  name: string,
  title: string,
  discreption: string,
  price: number,
  oldPrice: number,
  count: number,
  discount: number,
  image: string
}


// export default function ProductTable(props: any) {
const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  var [products, setProducts] = useState<ProductProps[]>(products)
  const [basketsList, setBasketList] = useState(Array<any>)
  var userId = '';

  function loadMore () {
    alert()
  }


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
    const productIndex = products.indexOf(product)
  

    function handleAddClick() {
      setIsLoading(true)

      const result = httpRequest<BasketProps>('put', bassUrl+'/baskets/put', 
        {
          id: userId,
          product
          , 
          timeout: 5000 
        }
      )
      result.then(value2 =>
        {
       
          if ( value2.data  && typeof value2.data === 'object' ) {
            
						const basketCount = value2.data.basketList.length
						localforage.setItem('basketCount', basketCount);
					} else {
						localforage.setItem('basketCount', 0);
					}

          const fetchData = async () => {
            
            const result = httpRequest<ProductProps[]>('get', bassUrl+'/products/get',
              {	
                timeout: 15000	
              }
            )
      
            result.then(value => 
              {
      
                if ( value.data  && typeof value2.data === 'object' ) {
            
                  for (const doc1 of value.data) {
      
                    const index1 = value.data.indexOf(doc1)
                    
                    for (const doc2 of value2.data.basketList) {
      
                      if ( doc1.id === doc2.id ) {
                        value.data[index1].count = doc2.count
                      } 

                    }

                    setProducts(value.data)
                    setIsLoading(false)
                  }	
                }
              }
            )
          };
      
          fetchData();
        }
      )
    }

    async function handleRemovClick() {
      setIsLoading(true)
      
      const result2 = httpRequest<BasketProps>('delete', bassUrl+'/baskets/delete', 
        {
          params: {
            userId: userId,
            id: product.id
          },
          timeout: 5000 
        }
      )
      result2.then(value2 =>
        {
          if ( value2.data  && typeof value2.data === 'object' ) {
						const basketCount = value2.data.basketList.length
						localforage.setItem('basketCount', basketCount);
					} else {
						localforage.setItem('basketCount', 0);
					}
          
          const fetchData = async () => {
            
              const result = httpRequest<ProductProps[]>('get', bassUrl+'/products/get',
                {	
                  timeout: 15000	
                }
              )
              
              result.then(value => 
                {
                  if (value.data) {

                    if (value2.data && typeof value2.data === 'object' ) {
              
                      for (const doc1 of value.data) {

                        const index1 = value.data.indexOf(doc1)
                        
                        for (const doc2 of value2.data.basketList) {
                      
                          if ( doc1.id === doc2.id ) {
                            value.data[index1].count = doc2.count
                          } 

                        }

                        setProducts(value.data)
                        setIsLoading(false)
                      }	
                    }
                  }
                }
              )
            };
          fetchData();
        }
      )
    }

 

    switch (columnKey) {
      case "name":
        return (
          <div className="h-20 sm:h-24 w-20 sm:w-24 place-content-center" >
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
            <p className="text-bold text-sm capitalize text-textPrice">{ PN.convertEnToPe(PN.sliceNumber(cellValue)) }<span className="m-1 text-bold text-sm capitalize text-textCloudy">/kg</span></p>
          </div>
        );
      case "status":
        return (
          <div>
            {true  &&
              <Chip className={`${statusColorMap[product.status as keyof typeof statusColorMap]}  w-fit pl-2 pr-2 mr-2 capitalize text-onBackground rounded-xl`} size="sm" variant="flat">
                 { cellValue == 'available' ? 'موجود' : 'نا موجود' }
              </Chip>
            }
          </div>
        );
      case "actions":
        return (
          <div>
            {product.available &&
              <div className="relative flex flex-col items-center" >
              <button onClick={ handleAddClick }>
                  <span className="text-lg text-textBright cursor-pointer active:opacity-50">
                    <AddIcon className="text-warning"/>
                  </span>
              </button>
              <div className="place-content-center pl-2 pr-2 pt-1 bg-textBright rounded" >
                { !isLoading &&
                  <span className="text-lg text-onBackground cursor-pointer">
                    { PN.convertEnToPe( product ? product.count : 0 ) }
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

// if (products.length > 0) {
  // console.log((products));
  
  return (
    <Table aria-label="Example table with custom cells" dir="ltr">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn className="h-10 w-0 text-textCloudy" key={column.uid} align={column.uid === "name" ? "center" : "center"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={products} onLoadMore={loadMore}>
          {(item) => (
            <TableRow className="bg-tableBackround"  key={item.id}>
              {(columnKey) => <TableCell >{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
}
// }


export default ProductTable;
