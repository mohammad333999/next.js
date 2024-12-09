import React, { useState, useEffect, useRef } from 'react';
import httpRequest from '../../utility/api/httpRequest'
import { useRouter } from 'next/router'
import localforage from 'localforage';
import { bassUrl } from "../../utility/Constants"

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


const LoginPage: React.FC<LoginProps> = () => {
  const router = useRouter()
  const inputRef = useRef<any>(null)
  const buttonRef = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<UserType>()
  const [passwordInputValue, setPasswordInputValue] = useState('')


  useEffect(() => {
      // localforage.setItem('isShowPage', false)

    // setTimeout(() => {
      localforage.getItem('user').then(value =>
        {
          if (value && typeof value === 'string') { // Check for string and non-empty object
            setUser((prevValue) => JSON.parse(value))
            console.log(JSON.parse(value));
          }
        }
      )
		// }, 100)
    
  }, [])

  async function handleCheckPassword() {
    const result = httpRequest<Boolean>('get', bassUrl+'/admins/checkPassword', 
      {
        params: {
          id: user?.mobile,
          password: passwordInputValue
        }, 
        timeout: 5000 
      }
    )

    result.then(value => 
      // console.log(value.data)
      { 
        if (value.data == true) {router.replace('/dashboard')}
        if (value.data == false) {alert('Insert Right Password')} 
      }
    )

  }

  function handleChangeMobile(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordInputValue(e.target.value)
  }

  async function onSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
    handleCheckPassword()
  }

  const fieldClass1 = "h-12 w-80 sm:w-96 mt-8 mb-4 bg-inputField rounded-xl text-center text-bright placeholder-textCloudy ring-1 ring-success outline-0"
  const fieldClass2 = "h-12 w-80 sm:w-96 mt-8 mb-4 bg-inputField rounded-xl text-center text-lg text-bright ring-2 ring-success outline-0"
  const buttonClass =  "h-12 w-80 sm:w-96 bg-inputField rounded-xl ring-1 ring-success text-bright cursor-pointer active:opacity-85 active:ring-2 hover:ring-2 hover:ring-success hover:text-lg hover:opacity-95" 

  if (user) {
    if (inputRef.current) {
     setTimeout(() => {
      inputRef.current.focus()
     }, 10);
    }
  
    
    return (
      <div className="flex flex-col items-center h-screen bg-cover bg-no-repeat bg-background rounded-md justify-center">
        <div className="flex flex-col px-3 py-3 bg-onBackground  rounded-xl">
          <h1 className="text-lg text-center pr-2 mt-1 font-bold text-textBright">پسورد</h1>
          <p className="w-80 sm:w-96 text-end pr-2 pt-4 text-textBright">برای ورود با شماره {user.mobile} پسورد خود را وارد کنید</p>

          <form className="flex flex-col" onSubmit={onSubmit}>

            <input  
              ref={inputRef}
              className={passwordInputValue.length > 2 ? fieldClass2 : fieldClass1}
              type="text" 
              placeholder='موبایل معرف'
              value={passwordInputValue} onChange={handleChangeMobile}>
            </input>
      
            <button 
                className={buttonClass}
                // className="h-12 min-w-96 bg-inputField rounded-xl ring-1 ring-background text-background cursor-pointer active:opacity-80 active:ring-2 hover:ring-2 hover:text-lg" 
                ref={buttonRef}
                type="submit"
                // onKeyDown={handleKeyPress}
                // onKeyDown={(e) => {
                //   handleKeyPress
                //   if (e.key === "Enter")
                //       handleKeyPress
                //   }}
                // onClick={handleClick}
                > 
                  <p className="text-md text-center">{isLoading ? 'Loading...' : 'ادامه'}</p>
            </button>

          </form>
          
        </div>
      </div>
    )
  }
  else {
		return (
			<div className='flex h-screen place-content-center place-items-center bg-background'>
				<span className='bg-onBackground h-fit p-4 text-xl'>pleas wait...</span>
			</div>
		)
	}

}

export default LoginPage
