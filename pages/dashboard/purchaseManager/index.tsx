import React, { useState, useEffect } from 'react';
import DefaultLayout from "@/layouts/default";
import BasketTable from '../../../components/table/basketTable';
import PurchaseTable from '../../../components/table/purchaseTable';
import  TableView  from "../../../components/table/userTable";
import httpRequest from '../../../utility/api/httpRequest'
import localforage from 'localforage';
import { useRouter } from 'next/router';
import { title, subtitle, mySubtitle } from '@/components/primitives';
import { Marketer, NoData } from '@/components/icons';
import MobileNavbarMenu from '../../../components/menu/navbarMenu';
import { bassUrl } from "../../../utility/Constants"

interface PurchaseManagerPageProps {
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
	id: string,
	date: string,
	purchases: PurchaseProps[]
}

type PurchaseProps = {
	id: string,
	date: string,
	row: string,
	purchaseList: []
}


const PurchaseManagerPage: React.FC<PurchaseManagerPageProps> = (props) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false)

	var [user, setUser] = useState('')
	const [purchaseList, setPurchaseList] = useState<PurchaseProps[]>([])
	const [purchaseHistory, setPurchaseHistory] = useState([])
	var [totallList, setTotallList] = useState<any[]>([])
	var [totallPrice, setTotallPrice] = useState(0)
	


	useEffect(() => {
		localforage.getItem('user').then(value =>
			{
				if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
				  	setUser((prevValue) => value? JSON.parse(value as string): null)
					handleGetPuschese(JSON.parse(value).mobile)
				}
			}
		)
		setTimeout(() => {

		}, 1000)
	}, [])


	
	async function handleGetPuschese(usetId: string) {

		const result = httpRequest<ResultProps[]>('get', bassUrl+'/purchases/get',
			{
				params: {
					id: null,
				},
				timeout: 15000 
			}
		)

		result.then(value => 
			{
				if (value.data ) {
					setIsLoading(true)
					var list = []

					console.log(value.data);
					
					for (const doc of value.data) {
			
						for (const doc2 of doc.purchases) {
							list.push(doc2)
						}
						
					}

					setPurchaseList(list)

					handleGetTotallList(usetId)
				}	
			}
		)

	}

	async function handleGetTotallList(usetId: string) {

		const result2 = httpRequest<any[]>('get', bassUrl+'/purchases/getTotall',
			{
				params: {
					id: null,
				},
				timeout: 15000 
			}
		)

		result2.then(value2 => 
			{
				console.log(value2.data);
				
				if (value2.data && value2.data.length > 0 ) {
					setTotallList(value2.data)

					
					if (value2.data.length > 0) {
						var totallPrice0 = 0
						for (const doc of value2.data) {
							totallPrice0 += doc.totallPrice
							
						}
						setTotallPrice( totallPrice0  )
					}
				}
				
			}
		)

	}

	async function handleGetTotallPrice(usetId: string) {
		const result3 = httpRequest<{totallPrice: number}>('get', bassUrl+'/purchases/getTotallPrice',
			{
				params: {
					id: null,
				},
				timeout: 15000 
			}
		)

		result3.then(value3 => 
			{
				console.log(value3.data);
			
				
				if (value3.data ) {
					setTotallPrice(value3.data.totallPrice)
				}
				
			}
		)
	}

	function handleBuyClick() {
	
		const result2 = httpRequest<ResultProps[]>('get', bassUrl+'/purchases/addToHistory',
			{
				timeout: 15000 
			}
		)

		result2.then(value2 => 
			{
		
				setPurchaseList([])

				const result2 = httpRequest<ResultProps[]>('delete', bassUrl+'/purchases/delete',
					{
						timeout: 15000 
					}
				)
				result2.then(value2 => 
					{
						setPurchaseHistory([])
						
					}
				)

			}
		)

	}

	const buttonClass =  "h-12 min-w-96 mb-8 bg-inputField rounded-xl ring-1 ring-success text-bright cursor-pointer active:opacity-85 active:ring-2 hover:ring-2 hover:ring-success hover:text-lg hover:opacity-95" 
		
		return (
			<DefaultLayout>
				<section className="flex flex-col items-center justify-center py-0 md:py-4">
					<div className="flex flex-col px-0 sm:px-4 py-4 items-center text-center justify-center bg-onBackground">
						<Marketer />
						<h1 className={title()}>سرپرست خرید</h1>

						{ purchaseList.length > 0 ?
							<div>
								<h1 className={mySubtitle()}> لیست سفارشات </h1>
								<span className='mb-4 text-textCloudy'>
									لیست همه سفارشات امروز
								</span>	

								{purchaseList.map((purchase) =>
									<div style={{ overflowY: 'auto', whiteSpace: 'nowrap' }} className='colClass p-4 '>	
										
										<h1 className={mySubtitle()}>{purchase.id}</h1>
										<h1 className='text-textCloudy' dir='rtl'>{purchase.date}</h1>
										{/* <h1 className='text-textCloudy'>{purchase.row}</h1> */}
										<PurchaseTable purchaseList={purchase.purchaseList}/>
										
									</div>
								)}
							</div>
							:
							<div style={{ overflowY: 'auto', whiteSpace: 'nowrap' }} className='colClass text-textCloudy'>	
								 <NoData />
							</div>
						}

						{ purchaseList.length > 0 ?
						<div className="flex flex-col py-4 mt-8 items-center  text-center justify-center border-t-1 border-success bg-onBackground">
							
							<PurchaseTable purchaseList={totallList}/>
							<h1 className={mySubtitle()}>جمع کل  <span className='mr-2 text-textPrice'>{totallPrice}</span></h1>

							<button className={buttonClass} onClick={handleBuyClick}>
								تایید خرید سفارشات
							</button>	
						</div>
						:
						<div className="flex flex-col min-w-full py-8 mt-8 items-center text-center justify-center border-t-1 border-success bg-onBackground text-textCloudy">
							<h1 className={mySubtitle()}>Purchase History</h1>
							<NoData />
						</div>
						}
					</div>
				</section>
			</DefaultLayout>
		)

	}

export default PurchaseManagerPage;