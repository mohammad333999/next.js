import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import httpRequest from '../../../utility/api/httpRequest'
import { subtitle, title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { Profile } from '@/components/icons';
import localforage from 'localforage';
import Image from 'next/image'
import AccsessTable from '../../../components/table/accsessTable'
import { subtle } from 'crypto';

type UserType = {
	id: string | number; // Replace with the actual type of id
	type: string,  
	mobile: string, 
	name: string;
  age: string, 
  team: string,
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

type UpdateInfoType = {
	id: string | number; // Replace with the actual type of id
	data: string,  
	name: string;
	team: string,
	age: string, 
  email: string
}

export default function DocsPage() {
  const router = useRouter()
  const ref = useRef<any>(null)
  const [user, setUser] = useState<UserType>()

  const [nameInputValue, setNameInputValue] = useState('')
  const [ageInputValue, setAgeInputValue] = useState('')
  const [teamInputValue, setTeamInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('')


  localforage.getItem('user').then(value =>
    {
      if (typeof value === 'string' && value !== '{}') {
        setUser((prevValue) => value ? JSON.parse(value) : null)
      }
    }
  )

  async function handleClick() {
    // if (!inputValue || inputValue.length != 11) {
    //   alert("mobile not wright")
    //   return
    // }

    const newUser = {
      name: nameInputValue, 
      team: teamInputValue, 
      age: ageInputValue,
      email: emailInputValue, 
    }

    const result = httpRequest<UpdateInfoType>('put', 'http://ithoma.net/admins/updateInfo', 
      {
        mobile: user?.mobile,
        newUser: newUser
        , 
        timeout: 5000 
      }
    )

    result.then(value => 
      {
        if (value.data) {
          localforage.setItem('user', JSON.stringify(value.data))
      
          setNameInputValue(value.data.name)
          setTeamInputValue(value.data.team)
          setAgeInputValue(value.data.age)
          setEmailInputValue(value.data.email)

          // router.reload()
        }
      }
    )

  }

  // function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
  //   setInputValue(e.target.value)
  // }

  const fieldClass1 = 'h-12 w-96 bg-inputField rounded-xl text-center opacity-80 text-textBright' 
  const fieldClass2 = 'h-12 w-96 mt-1 bg-inputField rounded-xl text-center opacity-80 text-textBright'
  const labelClass = 'flex h-12 px-2 min-w-24 text-md items-center justify-center text-end rounded-xl text-textCloudy bg-inputField'


 
   if (user) {
    return (
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-1 py-0 md:py-4">
          <div className="flex flex-col px-8 py-2 pb-8 items-center justify-center inline-block max-w-lg text-center bg-onBackground">

            <Profile className="m-4"/>
            <h1 className={title()}>پروفایل</h1>
            <span className='text-textCloudy'>
              با کلیک روی فیلدها می توانید آنها را ویرایش و با کلیک روی دکمه تایید تغییرات را ثبت کنید 
            </span>

            <div className="flex flex-row mt-8 items-center">
              <Image className="flex flex-row text-background "
                        src={user.avatar!='' ? user.avatar : "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=6&m=1214428300&s=170667a&w=0&h=hMQs-822xLWFz66z3Xfd8vPog333rNFHU6Q_kc9Sues="}
                        width={130}
                        height={130}
                        unoptimized
                        alt="Picture of the author"
                        style={{borderWidth: 1, borderRadius: 65}}
                    />
            </div>

            <div className='flex flex-row mt-8 gap-1 items-center  align-center'>
              <h1 className={labelClass}>نام</h1>
              <input 
                ref={ref}
                className={fieldClass1}
                placeholder= {'name'}
                type="text" 
                value={ nameInputValue != '' ? nameInputValue : user.name } onChange={ (e) => setNameInputValue(e.target.value) }>
              </input>
            </div>

            <div className='flex flex-row  gap-1 items-center items-center align-center'>
              <h1 className={labelClass}>سن</h1>
              <input 
                ref={ref}
                // className="h-12 w-96 mt-1 bg-inputField rounded-xl text-center opacity-80 text-background" 
                className={fieldClass2}
                placeholder='age'
                type="text" 
                value={ ageInputValue != '' ? ageInputValue : user.age } onChange={ (e) => setAgeInputValue(e.target.value) }>
              </input>
            </div>

            <div className='flex flex-row  gap-1 items-center items-center align-center'>
              <h1 className={labelClass}>پست</h1>
              <input 
                // ref={ref}
                // className="h-12 w-96 mt-1 bg-inputField rounded-xl text-center opacity-80 text-background" 
                className={fieldClass2}
                placeholder='team'
                type="text" 
                value={ teamInputValue != '' ? emailInputValue : user.team } onChange={ (e) => setTeamInputValue(e.target.value) }>
              </input>
            </div>

            <div className='flex flex-row  gap-1 items-center items-center align-center'>
              <h1 className={labelClass}>ایمیل</h1>
              <input 
                ref={ref}
                // className="h-12 w-96 mt-1 bg-inputField rounded-xl text-center opacity-80 text-background" 
                className={fieldClass2}
                placeholder='email'
                type="text" 
                value={ emailInputValue != '' ? emailInputValue : user.email} onChange={ (e) => setTeamInputValue(e.target.value) }>
              </input>
            </div>

            <button 
              className="h-12 min-w-96 mt-12 ring-1 ring-background bg-inputField text-textBright rounded-xl active:opacity-85 ring-1 ring-success active:ring-2 hover:ring-2 hover:text-lg hover:opacity-95" 
              onClick={handleClick}>
                تایید
            </button>

          </div>
        </section>
      </DefaultLayout>
    );
   }
}