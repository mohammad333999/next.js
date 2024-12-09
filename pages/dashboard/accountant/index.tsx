import React, { useState, useEffect } from 'react';
import httpRequest from '../../../utility/api/httpRequest'
import localforage from 'localforage';
import DefaultLayout from "@/layouts/default";
import UserTable  from "../../../components/table/userTable";
import { title, subtitle } from '@/components/primitives';
import { Marketer } from '@/components/icons';
import { bassUrl } from "../../../utility/Constants"

interface AccountantPageProps {
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


const AccountantPage: React.FC<AccountantPageProps> = (props) => {
    const textClass = 'w-fit p-1 text-lg text-textBright'
	const boxClass = 'flex flex-col p-1 bg-onBackground text-textBright'

	// const { user = null } = props;
	const [user, setUser] = useState(null)
	const [users, setUsers] = useState([])

    localforage.getItem('user').then(value =>
        {
			{
				if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
				  setUser((prevValue) => value? JSON.parse(value as string): null)
				}
			}
         
        }
    )

	useEffect(() => {
        
        handleClick()
		
	}, [])

	// async function handleClick() {
	// 	const result = httpRequest<ResultProps[]>('get', 'http://ithoma.net/admins/getMulti',
	// 		{
	// 			params: {
	// 				id: props.user.mobile,
	// 			},
	// 			timeout: 5000,
	// 		}
	// 	)
	// 	result.then(value => 
	// 		setUsers(JSON.stringify(value.data))
	// 	)
	// }
	async function handleClick() {
		const { data } = await httpRequest('get', bassUrl+'/admins/getMulti', {
		  params: {
			id: props.user?.mobile,
		  },
		  timeout: 5000,
		});
		setUsers(data as any); // no need for JSON.stringify
	  }



    if (user && users) {
        return (
            <DefaultLayout>
				<section className="flex flex-col items-center justify-center gap-1 py-0 md:py-4">
					<div className="flex flex-col px-4 py-4 items-center text-center justify-center bg-onBackground">
						<Marketer />
						<h1 className={title()}>حسابدار</h1>
						<h1 className={subtitle()}>تاریخچه خرید</h1>
						{/* <span className='mb-4 text-textCloudy'>
						Tap To Select User And Set Info.
						</span>		 */}

						{/* <div style={{ overflowY: 'auto', whiteSpace: 'nowrap' }} className='colClass'>	
							<UserTable users={users}/>
						</div> */}

						{/* <div className="flex flex-col min-w-full py-8 mt-16 items-center inline-block max-w-lg text-center justify-center border-t-1 border-success bg-onBackground"> */}
							{/* <h1 className={subtitle()}>Table</h1> */}
							{/* <AccsessTable user={user}/> */}
						{/* </div> */}
					</div>
				</section>
			</DefaultLayout>
        )
    } else {
		return (
			<div className='flex h-screen place-content-center place-items-center bg-background'>
				<span className='bg-onBackground h-fit p-4 text-xl'>pleas wait...</span>
			</div>
		)
	}
  
};

export default AccountantPage;