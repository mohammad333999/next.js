import React, { useState, useEffect, useRef } from 'react';
import httpRequest from '../../../utility/api/httpRequest'
import { title, subtitle } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { ChatRoom } from '@/components/icons';
import localforage from 'localforage';
// import ChatTable from '../../../components/table/chatTable'
import DropDownMenu from '../../../components/menu/dropDownMenu'

interface LoginProps {
	user?: UserType;
	// users?: UserType[];
}

type UserType = {
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



export default function DocsPage() {
  const ref = useRef<any>(null)
  const [user, setUser] = useState<UserType>()
  const [inputValue, setInputValue] = useState('')
  const [role, setRole] = useState('default'); // Define the role state


  useEffect(() => {
    // localforage.setItem('isShowPage', false)

  setTimeout(() => {
    localforage.getItem('user').then(value =>
      {
        if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
          setUser((prevValue) => JSON.parse(value))
    
        }
      }
    )
  }, 100)
  
}, [])

  async function handleClick() {
    if (!inputValue || inputValue.length != 11) {
      alert("mobile not wright")
      return
    }
    // const result = httpRequest<Boolean>('put', 'http://ithoma.net/admins/createAccsess', 
    //   {
    //     accessProviderMobile: user.mobile,
    //     recipientAccessMobile: inputValue,
    //     role: role
    //     , 
    //     timeout: 5000 
    //   }
    // )

    // result.then(value => 
    //   {
    //     // console.log(value.data)
    //     localforage.setItem('user', JSON.stringify(value.data))
    //   }
    // )

  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function handleRoleChange(role: any) {
    // console.log('New role:', role);
    setRole(role)
  };

  const fieldClass1 = "h-12 w-96 mt-8 mb-4 bg-inputField rounded-xl text-center text-bright placeholder-textCloudy ring-1 ring-success outline-0"
  const fieldClass2 = "h-12 w-96 mt-8 mb-4 bg-inputField rounded-xl text-center text-lg text-bright ring-2 ring-success outline-0"
  const buttonClass =  "h-12 min-w-96 bg-inputField rounded-xl ring-1 ring-success text-bright cursor-pointer active:opacity-85 active:ring-2 hover:ring-2 hover:ring-success hover:text-lg hover:opacity-95" 
 
  if (user) {
    return (
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-1 py-0 md:py-4">

          <div className="flex flex-col px-8 py-2 items-center inline-block max-w-lg text-center justify-center bg-onBackground">
            <ChatRoom className="m-4"/>
            <h1 className={title()}>Chat Room</h1>
            <span className='text-textCloudy'>
              Register access to the new user by entering the mobile phone.
            </span>
            <input 
              ref={ref}
              // className="h-12 min-w-96 mt-8 mb-2 bg-inputField rounded-xl text-center opacity-80 text-background" 
              className={inputValue.length == 11 ? fieldClass2 : fieldClass1}
              type="text" 
              placeholder='new user mobile'
              value={inputValue} onChange={handleChangeInput}>
            </input>

            {/* {user.role === 'leder' &&
              <DropDownMenu initialRole={role} onRoleChange={ handleRoleChange } />
            } */}
            
            <button 
              className={buttonClass}
              onClick={handleClick}
              >
                Create Access
            </button>
            <div className="flex flex-col min-w-full py-8 mt-16 items-center inline-block text-center justify-center border-t-1 border-success bg-onBackground">
            <h1 className={subtitle()}>Access Table</h1>
              {/* <ChatTable user={user}/> */}
            </div>
          </div>

        </section>
      </DefaultLayout>
    );

  }
}
