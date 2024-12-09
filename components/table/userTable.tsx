import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "../icons/editIcon";
import {DeleteIcon} from "../icons/deleteIcon";
import {EyeIcon} from "../icons/eyeIcon";
import {columns, users} from "../data/usersData";
import Image from 'next/image'


const statusColorMap = {
  active: "bg-active",
  paused: "bg-paused",
  vacation: "bg-vacation",
};

type UserProps = {
  id: string | number; // Replace with the actual type of id
  type: string,  
  mobile: string, 
  name: string;
  password: string,
  username: string, 
  lastname: string,
  avatar: string,
  email: string,  
  status: string,
  representativeMobile: string
  signupDate: string, 
  branchRoot: string, 
  branchParent: string, 
  myBranchCode: string, 
  accessedMobiles: [],
}

type UserKeys = 'id' | 'name' | 'email' 


export default function UserTable(props: any) {
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    // const status = ''
    // const activeClass = "w-fit pl-2 pr-2 mr-2 capitalize bg-variant text-primary rounded-xl" 
    // const unActiveClass = "w-fit pl-2 pr-2 mr-2 capitalize bg-variant text-primary rounded-xl" 

    function handleClick() {
      console.log(props.users[0])
    }

    switch (columnKey) {
      case "avatar" as string:
        return (
          <div className="flex flex-row  items-center">
              <Image className="h-20 sm:h-24 w-20 sm:w-24 text-background "
                        // src={user.avatar!='' ? user.avatar : "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=6&m=1214428300&s=170667a&w=0&h=hMQs-822xLWFz66z3Xfd8vPog333rNFHU6Q_kc9Sues="}
                        src={user.avatar}
                        width={60}
                        height={60}
                        unoptimized
                        alt="Picture of the author"
                        style={{borderWidth: 1, borderRadius: 45}}
                    />
              {/* <p className="w-48 mr-2 text-bold text-sm capitalize text-textCloudy">{cellValue ? cellValue : ''}</p> */}
          </div>
         
        );
      case "role" as string:
        return (
          <div className="flex flex-col w-16 sm:24">
            <p className="text-bold text-sm capitalize text-textCloudy">{user.name}</p>
            <p className="text-bold text-sm capitalize text-default-400 text-textCloudy">{cellValue}</p>
          </div>
        );
      case "status" as string:
        return (
          <Chip  className={statusColorMap[user.status as keyof typeof statusColorMap]}  size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions" as string:
        return (
          <div className="relative flex items-center gap-2" >
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon className="text-variant" />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400  cursor-pointer active:opacity-50">
                <EditIcon className="text-variant"/>
              </span>
            </Tooltip>
            <Tooltip content="Delete user" className="text-warning">
              <button onClick={handleClick}>
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon className="text-warning"/>
                  </span>
              </button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table aria-label="Example table with custom cells" dir="ltr">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn  className=" bg-tableBackround" key={column.uid} align={column.uid === "name" ? "center" : "center"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody  items={props.users as UserProps[]}>
        {(item) => (
          <TableRow className="m-10 p-10 bg-tableBackround" key={item.mobile}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
