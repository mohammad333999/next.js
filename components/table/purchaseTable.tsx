import React, { useState, useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "../icons/editIcon";
import {DeleteIcon} from "../icons/deleteIcon";
import {AddIcon} from "../icons/addIcon";
import {RemoveIcon} from "../icons/removeIcon";
import {EyeIcon} from "../icons/eyeIcon";
import {columns} from "../data/purcheseData";
import Image from 'next/image'
import httpRequest from '../../utility/api/httpRequest'
import localforage from 'localforage';
import { useRouter } from 'next/router';
import PN from "persian-number";

type ResultProps = {
  id: string,
  basketList: [
    {
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
  ],
  purchaseHistory: []
}

type PurchaseProps = {
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

const statusColorMap = {
  available: "bg-gold",
  unavailable: "bg-gold",
};

export default function PurchaseTable(props: any) {
  const router = useRouter()
  var [purchaseList, setPurchaseList] = useState(props.purchaseList || [])
  // const ref = useRef<any>(null)

//   const [user, setUser] = useState(null)
  // const [userId, setUserId] = useState(null)
//   var userId = ''
//   var [recipientAccessMobiles, setRecipientAccessMobiles] = useState([])

//   localforage.getItem('user').then(value =>
//   {
//     setRecipientAccessMobiles((prevValue) => value ? JSON.parse(value).recipientAccessMobiles : [])
//   })

  useEffect(() => {
    // localforage.getItem('user').then(value =>
    //   userId = JSON.parse(value).mobile
    // )
    setPurchaseList(props.purchaseList)

  }, [])

  const renderCell = React.useCallback((purchase: any, columnKey: any) => {
    const cellValue = purchase[columnKey];
    // const [userId, setUserId] = useState(null)



    switch (columnKey) {
      case "row":
        return (
          <div className="place-content-center m-1 sm:mr-0 text-textCloudy">
            { PN.convertEnToPe(cellValue) }
          </div>
        );
      case "product":
        return (
          <div className="flex flex-col mr-1 sm:mr-0">
              <p className="text-bold text-sm capitalize text-active">{cellValue}</p>
          </div>
        );
      case "price":
        return (
          // <Chip className="w-fit pl-1 pr-1 capitalize bg-inputField  ring-1 ring-textCloudy rounded-xl" size="lg" variant="flat">
            <div className="flex flex-col mr-1 sm:mr-0">
              <p className="text-bold capitalize text-textCloudy">{ PN.convertEnToPe(PN.sliceNumber(cellValue)) }</p>
            </div>
          // </Chip>
        );
        case "count":
          return (
            <div className="flex flex-col mr-1">
              <p className="text-bold capitalize text-textCloudy">{ PN.convertEnToPe(cellValue) }</p>
            </div>
          );
          // case "discount":
          //   return (
          //     <div className="flex flex-col mr-1">
          //       <p className="text-bold capitalize text-textCloudy">{cellValue}</p>
          //     </div>
          //   );
        case "totallPrice":
            return (
              <Chip className="w-fit capitalize bg-inputField  ring-1 ring-active rounded-xl" size="lg" variant="flat">
                <div className="flex flex-col">
                  <p className="text-bold capitalize text-active">{ PN.convertEnToPe(PN.sliceNumber(cellValue)) }</p>
                </div>
              </Chip>
            );
    //   case "actions":
    //     return (
    //       <div>
    //         {/* {user && */}
    //           <div className="relative flex flex-col items-center gap-2" >
    //              <Tooltip  content="Delete Accsess" className="text-warning">
    //                 <button onClick={handleDeleteClick}>
    //                     <span className="text-lg text-warning cursor-pointer active:opacity-50">
    //                         <DeleteIcon className="text-warning w-6 h-6" />
    //                     </span>
    //                 </button>
    //             </Tooltip>
    //         </div>
    //       {/* } */}
    //     </div>
    //     );
      default:
        return cellValue;
    }
  }, []);

 
  // console.log(props.user )
//   if (purchaseList[0] && purchaseList[0] > 0) {
//     console.log(props.purchaseList[0].purchaseList[0])
//   }

    // console.log(props.user.recipientAccessMobiles)

    return (
    <Table aria-label="Example table with custom cells" >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn className="h-8 p-1 " key={column.uid} align={column.uid === "name" ? "center" : "center"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={props.purchaseList as PurchaseProps[]}>
          {(item) => (
            <TableRow className="bg-tableBackround"  key={item.id}>
              {(columnKey) => <TableCell >{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  
//   } else {
//     console.log(props.purchaseList)
//     return (
//       <div>
//       no item to display...
//       </div>
//     )
//   }
}
