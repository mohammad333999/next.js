import React, { useState, useEffect, useRef, FormEvent } from 'react';
import httpRequest from '../utility/api/httpRequest'
import { useRouter } from 'next/router'
import localforage from 'localforage';
import { Button } from "@nextui-org/button";
import { bassUrl } from "../utility/Constants"

type ResultProps = {
  id: number, 
  type: string,  
  mobile: string, 
  password: string,
  username: string, 
  lastname: string,
  email: string,  
  representativeMobile: string
  signupDate: string, 
  branchRoot: string, 
  branchParent: string, 
  myBranchCode: string, 
  accessedMobiles: [],
}

interface Props {
  bio: string,
  open: boolean,
}

type UserType = {
  dob: string,
  firstName: string,
  userBio: string,
}

interface UserProps {
  user: UserType,
}


const IndexPage: React.FC = () => {
  const router = useRouter()
  const inputRef = useRef<any>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [mobileInputValue, setMobileInputValue] = useState('')

 
  useEffect(() => {
    setTimeout(() => { 
      inputRef.current.focus()
		}, 100)
  }, [])

  const handleClick = async () => {
    if (!mobileInputValue || mobileInputValue.length < 10) {
      alert('Mobile number is invalid');
      return;
    }

    try {
      const result = httpRequest<ResultProps[]>('get', bassUrl+'/admins/find', {
        params: {
          id: mobileInputValue,
        },
        timeout: 50000,
      });

      result.then( value => 
        {
          if (value.data && value.data.length > 0) {
            localforage.setItem('user', JSON.stringify(value.data[0]))
            router.push('/login');
          } else if (value.data && value.data.length == 0) {
             localforage.setItem('newUserMobile', JSON.stringify(mobileInputValue));
            router.push('/register');
          } else {
            alert('No Response');
          }
        }
   
      )
    
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred. Please try again.');
    }
  };

  function handleChangeMobile(e: React.ChangeEvent<HTMLInputElement>) {
    setMobileInputValue(e.target.value)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
 
    handleClick()
  }

  const fieldClass1 = "h-12 w-80 sm:w-96 mt-8 mb-4 bg-inputField rounded-xl text-center text-bright placeholder-textCloudy ring-1 ring-success outline-0"
  const fieldClass2 = "h-12 w-80 sm:w-96 mt-8 mb-4 bg-inputField rounded-xl text-center text-lg text-bright ring-2 ring-success outline-0"
  const buttonClass =  "h-12 w-80 sm:w-96 bg-inputField rounded-xl ring-1 ring-success text-bright cursor-pointer active:opacity-85 active:ring-2 hover:ring-2 hover:ring-success hover:text-lg hover:opacity-95" 

  return (
    <div className="flex flex-col items-center h-screen bg-cover bg-no-repeat bg-background rounded-md justify-center">
      <div className="flex flex-col px-3 py-3 bg-onBackground  rounded-xl">
        <h1 className="text-lg text-center pr-2 mt-1 font-bold text-textBright">ورود</h1>
        <p className="text-md text-end pr-2 pt-4 text-textBright">برای ورود شماده موبایل خود را وارد کنید</p>
       
        <form className="flex flex-col"  onSubmit={onSubmit}>
          <input 
            ref={inputRef}
            className={mobileInputValue.length == 11 ? fieldClass2 : fieldClass1} 
            type="text" 
            placeholder='موبایل'
            value={mobileInputValue} onChange={handleChangeMobile}>
          </input>
     
          <button 
          className={buttonClass}
              // className="h-12 min-w-96 bg-inputField rounded-xl ring-1 ring-success text-textBright cursor-pointer active:opacity-80 active:ring-2 hover:ring-2 hover:text-lg" 
              ref={buttonRef}
              type="submit"
              // onKeyDown={handleKeyPress}
              // onKeyDown={(e) => {
              //   handleKeyPress
              //   if (e.key === "Enter")
              //       handleKeyPress
              //   }}
              onClick={handleClick}> 
                <p className="text-md text-center">{isLoading ? 'Loading...' : 'ادامه'}</p>
          </button>
        </form>

      </div>
    </div>
  )

}

export default IndexPage
