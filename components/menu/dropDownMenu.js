import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function DropDownMenu({ initialRole, onRoleChange }) {
  const [selectedRole, setSelectedRole] = useState(initialRole );

  useEffect(() => {
    onRoleChange 
  }, [setSelectedRole, onRoleChange]);

  function handleRoleChange(event) {
    // console.log(event.target.innerText);

      onRoleChange(event.target.innerText);
      setSelectedRole(event.target.innerText)
   
  }

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          className="h-12 min-w-96 mb-8 bg-inputField rounded-xl ring-1 ring-success text-bright cursor-pointer active:opacity-85 active:ring-2 hover:ring-2 hover:ring-success hover:text-lg hover:opacity-95"
          variant="bordered"
        >
         {selectedRole != 'default' ? selectedRole : 'انتخاب پست'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem value="marketerSupervisor" onClick={handleRoleChange}>Marketer Supervisor</DropdownItem>
        <DropdownItem value="marketer" onClick={handleRoleChange}>Marketer</DropdownItem>
        <DropdownItem value="purchaseManager" onClick={handleRoleChange}>Purchase Manager</DropdownItem>
        <DropdownItem value="purchaseSupplier" onClick={handleRoleChange}>Purchase Supplier</DropdownItem>
        <DropdownItem value="accountant" onClick={handleRoleChange}>Accountant</DropdownItem>
        <DropdownItem value="packagingSupervisor" onClick={handleRoleChange}>Packaging Supervisor</DropdownItem>
        <DropdownItem value="packagingPacker" onClick={handleRoleChange}>Packaging Packer</DropdownItem>
        <DropdownItem value="deliverySupervisor" onClick={handleRoleChange}>Delivery Supervisor</DropdownItem>
        <DropdownItem value="deliveryPlayer" onClick={handleRoleChange}>Delivery Player</DropdownItem>
        <DropdownItem value="customer" onClick={handleRoleChange}>Customer</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}