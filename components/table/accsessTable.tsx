import React, { useState, useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "../icons/editIcon";
import {DeleteIcon} from "../icons/deleteIcon";
import {AddIcon} from "../icons/addIcon";
import {RemoveIcon} from "../icons/removeIcon";
import {EyeIcon} from "../icons/eyeIcon";
import {columns} from "../data/accsessData";
import Image from 'next/image'
import httpRequest from '../../utility/api/httpRequest'
import localforage from 'localforage';
import { useRouter } from 'next/router';
import {  NoData } from '@/components/icons';
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

const statusColorMap = {
  available: "bg-gold",
  unavailable: "bg-gold",
};

interface AccsessProps {
  // Define properties here
  user?: UserType; // Replace UserType with the actual type of your user object (optional)
  basketCount?: number; // Optional basket count prop
}

type UserType = {
  _id: string,
  mobile: string,
  password: string,
  name: string,
  role: string,
  team: string,
  status: string,
  age: string,
  avatar: string,
  email: string,
  representativeMobile: string,
  signupDate: string,
  branchRoot: string,
  branchParent: string,
  myBranchCode: string,
  recipientAccessMobiles: string[]
}

export default function AccsessTable(props: any) {
  const router = useRouter()
  const [recipientAccessMobiles, setRecipientAccessMobiles] = useState<any[]>([]);

  localforage.getItem('user').then(value =>
    {
      if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
        setRecipientAccessMobiles((prevValue) => value ? JSON.parse(value).recipientAccessMobiles : [])
      }
    })
  

  useEffect(() => {
    // localforage.getItem('user').then(value =>
    //   userId = JSON.parse(value).mobile
    // )

    // localforage.getItem('user').then(value => {
    //   if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
    //     setRecipientAccessMobiles((prevValue) => JSON.parse(value).recipientAccessMobiles);
    //   } else {
    //     // Handle the case where user data is not available (e.g., set default value)
    //     setRecipientAccessMobiles([]); // Or set a default value based on your needs
    //   }
    // });
  }, [])

  const renderCell = React.useCallback((accsess: any, columnKey: any) => {
    const cellValue = accsess[columnKey];
    // const [userId, setUserId] = useState(null)
    // const accsessIndex = recipientAccessMobiles ? recipientAccessMobiles.indexOf(accsess) : 0

    function handleDeleteClick() {
      const result2 = httpRequest<ResultProps[]>('put', 'http://ithoma.net/admins/deleteAccsess', 
        {
          accessProviderMobile: props.user.mobile,
          recipientAccessMobile: accsess.mobile
          , 
          timeout: 5000 
        }
      )
      result2.then(value =>
      {
        localforage.setItem('user', JSON.stringify(value.data))
      })
    }

    switch (columnKey) {
      case "role":
        return (
          <div className="flex flex-col">
            {
              accsess.role &&
              <p className="text-bold text-sm capitalize text-active">{cellValue}</p>
            }
            
          </div>
        );
      case "mobile":
        return (
          <div>
            {true &&
              <Chip className="w-fit pl-2 pr-2 mr-2 capitalize bg-inputField  ring-1 ring-success rounded-xl" size="lg" variant="flat">
                {/* { cellValue == true ? cellValue : "non-existent" } */}
                { PN.convertEnToPe(cellValue) }
              </Chip>
            }
          </div>
        );
        case "date":
          return (
            <div className="flex flex-col">
              <p className="text-xs text-textCloudy">{cellValue}</p>
            </div>
          );
      case "actions":
        return (
          <div>
            {/* {user && */}
              <div className="relative flex flex-col items-center" >
                 <Tooltip  content="Delete Accsess" className="text-warning">
                    <button onClick={handleDeleteClick}>
                        <span className="text-lg text-warning cursor-pointer active:opacity-50">
                            <DeleteIcon className="text-warning w-6 h-6" />
                        </span>
                    </button>
                </Tooltip>
            </div>
          {/* } */}
        </div>
        );
      default:
        return cellValue;
    }
  }, []);

 
  if (recipientAccessMobiles.length > 0 ) {

    return (
    <Table aria-label="Example table with custom cells" className="min-w-96" dir="ltr">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn className="h-8 p-2 " key={column.uid} align={column.uid === "name" ? "center" : "center"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody items={recipientAccessMobiles}>
          
          {(item) => (
  
            <TableRow className="m-10 p-10 bg-tableBackround" key={item?.mobile}>
              {(columnKey) => <TableCell >{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}

        </TableBody>
        
      </Table>
    );
  
  } else {
    return (
      <div className="flex flex-col items-center text-textCloudy">
      <NoData />
  
      no item to display...
    
      </div>
    )
  }
}
