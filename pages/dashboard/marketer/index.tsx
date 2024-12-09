import React, { useState, useEffect } from 'react';
import httpRequest from '../../../utility/api/httpRequest'
import localforage from 'localforage';
import UserTable  from "../../../components/table/userTable";
import { Admin } from 'mongodb';
import DefaultLayout from "@/layouts/default";
import ProductTable from '@/components/table/productTable';
import { title, subtitle } from '@/components/primitives';
import { Marketer } from '@/components/icons';
import { bassUrl } from "../../../utility/Constants"

interface MarketerProps {
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



const MarketerPage: React.FC<MarketerProps> = (props) => {
    const textClass = 'w-fit p-1 text-lg text-textBright'
	const boxClass = 'flex flex-col p-1 bg-onBackground text-textBright'

	// const [user, setUser] = useState(null)
	const [users, setUsers] = useState<UserType[]>([])

	// localforage.getItem('user').then(value =>
	// 	setUser((prevValue) => value? JSON.parse(value): null)
	// )

	useEffect(() => {
		handleClick()
	}, [])

	async function handleClick() {
		const result = httpRequest<UserType[]>('get', bassUrl+'/admins/getMulti',
			{
				params: {
					id: props.user?.mobile,
				},
				timeout: 5000,
			}
		)
		result.then(value => 
			{
				if (value.data && value.data?.length > 0) {
					setUsers(value.data)
				}
			}
		)
	}


    // if (users) {
	
        return (
			<DefaultLayout>
				<section className="flex flex-col items-center justify-center gap-1 py-0 md:py-4">
					<div className="flex flex-col px-4 py-4 items-center inline-block max-w-lg text-center justify-center bg-onBackground">
						<Marketer />
						<h1 className={title()}>بازاریاب</h1>
						<h1 className={subtitle()}>لیست کاربران</h1>
						<span className='mb-4 text-textCloudy'>
							بر روی کاربر مورد نظر کلیک کنید و اطلاعات ان را مشاهده کنید
						</span>		

						{
							users &&
							<div style={{ overflowY: 'auto', whiteSpace: 'nowrap' }} className='colClass'>	
								<UserTable users={users}/>
							</div>
						}

						{/* <div className="flex flex-col min-w-full py-8 mt-16 items-center inline-block max-w-lg text-center justify-center border-t-1 border-success bg-onBackground"> */}
							{/* <h1 className={subtitle()}>Table</h1> */}
							{/* <AccsessTable user={user}/> */}
						{/* </div> */}
					</div>
				</section>
			</DefaultLayout> 
        )

    // }
};

export default MarketerPage;