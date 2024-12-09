import React, { useState, useEffect, useRef, FormEvent  } from 'react';
import httpRequest from '../../utility/api/httpRequest'
import { useRouter } from 'next/router'
import localforage from 'localforage';
import { bassUrl } from "../../utility/Constants"


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

type UserType = {
  dob: string,
  firstName: string,
  userBio: string,
}

interface UserProps {
  user: UserType,
}

const RegisterPage: React.FC = () => {
  const router = useRouter()
  const password1tRef = useRef<any>(null)
  const password2Ref = useRef<any>(null)
  const representativeMobileRef = useRef<any>(null)
  const buttonRef = useRef(null);
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [newUserMobile, setNewUserMobile] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [representativeMobile, setRepresentativeMobile] = useState('')

  localforage.getItem('newUserMobile').then(value =>
    {
      if (typeof value === 'string' && value !== '{}') {
        setNewUserMobile((prevValue) => value? JSON.parse(value): null)
      }
    }
  )
 
  useEffect(() => {
    password1tRef.current.focus()
  }, [])

  async function handleClick() {
    if (password1 && password2 == '' && representativeMobile == '') {
      password2Ref.current.focus()
    } else if (password1 && password2 && representativeMobile == '') {
      representativeMobileRef.current.focus()
    } else if (password1 && password2 && representativeMobile) {
      if (password1 && password2 && password1 == password2) {
        if (representativeMobile && representativeMobile.length > 10) {
          const result = httpRequest<ResultProps>('post', bassUrl+'/admins/add', 
            {
              mobile: newUserMobile,
              password: password1 == password2 ? password1 : '',
              representativeMobile: representativeMobile
              , 
              timeout: 5000 
            }
          )
      
          result.then(value => 
            {
              console.log(value.data);
              
              if (value.data  && value.data.mobile == newUserMobile) {
                localforage.setItem('user', JSON.stringify(value.data))
                router.replace('/dashboard')
              }
            }
          )
  
        } else {
          alert('موبایل معرف اشتباه وادد شده یا اجازه دسترسی ندارید')
          
        }
      } else {
        alert('wrong password')
      }
    } else {
      return
    }
  } 

  function handleChangePassword1(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword1(e.target.value)
  }
  function handleChangePassword2(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword2(e.target.value)
  }
  function handleChangeRepresentativeMobile(e: React.ChangeEvent<HTMLInputElement>) {
    setRepresentativeMobile(e.target.value)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
 
    handleClick()
    
    // try {
    //   const formData = new FormData(event.currentTarget)
    //   const response = await fetch('/api/submit', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //   // Handle response if necessary
    //   const data = await response.json()
    //   // ...
    // } catch (error) {
    //   // Handle error if necessary
    //   console.error(error)
    // } finally {
    //   setIsLoading(false) // Set loading to false when the request completes
    // }
  }

  const fieldClass1 = "h-12 w-80 sm:w-96 mt-2 mb-4 bg-inputField rounded-xl text-center text-bright placeholder-textCloudy ring-1 ring-success outline-0"
  const fieldClass2 = "h-12 w-80 sm:w-96 mt-2 mb-4 bg-inputField rounded-xl text-center text-lg text-bright ring-2 ring-success outline-0"
  const buttonClass =  "h-12 w-80 sm:w-96 mt-8 bg-inputField rounded-xl ring-1 ring-success text-bright cursor-pointer active:opacity-85 active:ring-2 hover:ring-2 hover:ring-success hover:text-lg hover:opacity-95" 

  
  // if (user) {
    return (
      <div className="flex flex-col items-center h-screen bg-cover bg-no-repeat bg-background rounded-md justify-center">
        <div className="flex flex-col px-3 py-3 bg-onBackground  rounded-xl">
          <h1 className="text-lg text-center pr-2 mt-1 text-textBright">ثبت نام</h1>
         

          <form className="flex flex-col" onSubmit={onSubmit}>
            <p className="w-96 text-md text-end pr-2 mt-8 text-textBright">برای ثبت نام با شماره {newUserMobile} رمز عبوری با حداقل 4 کاراکتر وارد کنید</p>
            <input 
              ref={password1tRef}
              className={password1.length > 2 ? fieldClass2 : fieldClass1}
              type="text" 
              placeholder='رمز عبور'
              value={password1} onChange={handleChangePassword1}>
            </input>

            <input 
              ref={password2Ref}
              className={password2.length > 2 ? fieldClass2 : fieldClass1}
              type="text" 
              placeholder='تکرار رمز عبور'
              value={password2} onChange={handleChangePassword2}>
            </input>

            <p className="text-md text-end pr-2 mt-4 text-textBright">موبایل معرف را وارد کنید</p>
            <input 
              ref={representativeMobileRef}
              className={representativeMobile.length == 11 ? fieldClass2 : fieldClass1}
              type="text" 
              placeholder='موبایل معرف'
              value={representativeMobile} onChange={handleChangeRepresentativeMobile}>
            </input>
            <button 
              ref={buttonRef}
              className={buttonClass}
              // className="h-12 w-96 mt-8  bg-inputField rounded-xl ring-1 ring-background text-background cursor-pointer active:opacity-80 active:ring-2 hover:ring-2 hover:text-lg" 
              onClick={handleClick}>
                ادامه
            </button>
          </form>

        </div>
      </div>
    )
  }

// }

export default RegisterPage
