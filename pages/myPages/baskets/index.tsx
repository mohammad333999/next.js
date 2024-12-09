import React, { useState, useEffect } from 'react';
import DefaultLayout from "@/layouts/default";
import BasketTable from '../../../components/table/basketTable';
import PurchaseTable from '../../../components/table/purchaseTable';
import httpRequest from '../../../utility/api/httpRequest'
import localforage from 'localforage';
import { useRouter } from 'next/router';
import { title, subtitle, mySubtitle } from '@/components/primitives';
import { Basket, NoData } from '@/components/icons';
import PN from "persian-number";

type ResultProps = {
	id: string,
	date: string,
	purchases: PurchaseProps[]
}

type PurchaseProps = {
	id: string,
	date: string,
	row: string,
	purchaseList: [{
		totallPrice: number
	}]
}

type BasketProps = {
	basketList: any[]; // Add this line
	id: string,
	purchaseHistory: []
  }
  
  type BasketItem = {
	id: string, 
	type: number, 
	name: string,
	title: string,
	discreption: string,
	price: number,
	oldPrice: number,
	discount: number,
	image: string
  }


export default function DocsPage(props: any) {
// const BasketPage: React.FC = (props) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false)

    const [products, setProducts] = useState(null)
	const [basketList, setBasketList] = useState<BasketItem[]>()
	const [purchaseList, setPurchaseList] = useState<any[]>([])
	var [userId, setUserId] = useState('')
	var [totallPrice, setTotallPrice] = useState(0)
	var [totallHistoryPrice, setTotallHistoryPrice] = useState(0)
	var userId0 = '';

	
    useEffect(() => {
		setTimeout(() => {
			localforage.getItem('user').then(value =>
				{
					if (value) {
						userId0 = JSON.parse(value as string).mobile
						setUserId(userId0)
						handleGetBasket(userId0)
					}
				}
			  )
		}, 0)
	}, [])

	async function handleGetBasket(mobile: string) {
		const result = httpRequest<BasketProps>('get', 'http://ithoma.net:8080/baskets/get',
			{
				params: {
					id: mobile,
				},
				timeout: 15000 
			}
		)

		result.then(value => 
			{
		
				// 	if (value.data && typeof value.data === 'string' && value.data !== '{}') {
				// 	setIsLoading(true)
				// 	// const basketCount = value.data.basketList.length 
				// 	const basketCount = (value.data as { basketList: any[] }).basketList.length;
				// 	localforage.setItem('basketCount', basketCount);
				// 	setBasketList(JSON.parse(value.data).basketList)

				// 	var totallPrice0 = 0
				// 	for (const doc of JSON.parse(value.data).basketList) {
				// 		totallPrice0 += doc.count * doc.price 
				// 	}
				// 	setTotallPrice( totallPrice0  )
				// } else {
				// 	localforage.setItem('basketCount', 0);
				// }

				if (value.data && typeof value.data === 'object') {
					setIsLoading(true)
					const basketCount = value.data.basketList.length 
					localforage.setItem('basketCount', basketCount);
					setBasketList(value.data.basketList)

					var totallPrice0 = 0
					for (const doc of value.data.basketList) {
						totallPrice0 += doc.count * doc.price 
					}
					setTotallPrice( totallPrice0  )
				} else {
					localforage.setItem('basketCount', 0);
				}

				

				handleGetPuschese(mobile)
			}
		)
	}

	async function handleGetBasketFromChild(basketList: any) {
		const basketCount = basketList.length 
		localforage.setItem('basketCount', basketCount);
		setBasketList(basketList)

		var totallPrice0 = 0
		for (const doc of basketList) {
			totallPrice0 += doc.count * doc.price 
		}
		setTotallPrice( totallPrice0  )
	}

	async function handleGetPuschese(mobile: string) {
		const result2 = httpRequest<ResultProps[]>('get', 'http://ithoma.net:8080/purchases/get',
			{
				params: {
					id: mobile,
				},
				timeout: 15000 
			}
		)

		result2.then(value2 => 
			{
				if ( value2.data && value2.data.length > 0  && value2.data[0].purchases.length > 0 ) {
					setIsLoading(true)
					setPurchaseList([value2.data[0].purchases[value2.data[0].purchases.length-1]])

					var totallPrice0 = 0
					for (const doc of value2.data[0].purchases[value2.data[0].purchases.length-1].purchaseList) {
						totallPrice0 += doc.totallPrice + doc.totallPrice 
					}
					setTotallHistoryPrice( totallPrice0  )
				}
			}
		)
	}

	function handleBuyClick() {
		// if (isLoading) { return }

		if (userId) {
			const result2 = httpRequest<ResultProps>('put', 'http://ithoma.net:8080/purchases/put',
				{
					id: userId,
					basketList: basketList
					,
					timeout: 15000 
				}
			)

			result2.then(value2 => 
				{
					if ( value2.data ) {
						setPurchaseList(value2.data ? [value2.data.purchases[value2.data.purchases.length-1]] : [])
					}
					
					const result2 = httpRequest<ResultProps[]>('delete', 'http://ithoma.net:8080/baskets/delete',
						{
							params: {
								userId: userId
							}
						,
							timeout: 15000 
						}
					)

					result2.then(value2 => 
						{
							setBasketList([])
							// console.log(value2.data);
							if (userId) {
								handleGetPuschese(userId)
								localforage.setItem('basketCount', 0);
							}
							
						}
					)
				}
			)
		}
	}


	const buttonClass =  "h-12 w-80 sm:w-96 mb-8 bg-inputField rounded-xl ring-1 ring-success text-bright cursor-pointer active:opacity-85 active:ring-2 hover:ring-2 hover:ring-success hover:text-lg hover:opacity-95" 
		
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center md:py-4">
				<div className="flex flex-col px-0 sm:px-4 py-4 items-center  text-center justify-center bg-onBackground">
					<Basket />
					<h1 className={title()}>سبد خرید</h1>

					{ basketList && basketList.length > 0 ?
						<div>
							<h1 className={subtitle()}>لیست خرید</h1>
							<span className='mb-4 text-textCloudy'>
								برای ثبت سفارش روی دکمه تکمیل خرید کلیک کنید 
							</span>	
							<div style={{ overflowY: 'auto', whiteSpace: 'nowrap' }} >	
								
								{basketList && basketList.length > 0  && (
									<BasketTable onClick={handleGetBasketFromChild} basketList={basketList} />
								)}
			
								
									<div className="flex flex-row justify-items-center bg-textBright w-fit  p-2 m-4 text-center capitalize text-onBackground rounded-lg">
										<h1 className='ml-4'>جمع ردیف</h1> <span>{ PN.convertEnToPe( PN.sliceNumber( totallPrice ) ) }</span>
									</div>
									
								
								<button className={buttonClass} onClick={handleBuyClick}>
									تکمیل خرید
								</button>	
							
							</div>
						</div>
						:
						<div style={{ overflowY: 'auto', whiteSpace: 'nowrap' }} className='colClass text-textCloudy'>	
							<NoData className='p-2'/>
						</div>
					}
					

					{ purchaseList.length > 0 ?
					<div className="flex flex-col min-w-full py-4 items-center inline-block max-w-lg text-center justify-center border-success bg-onBackground">
						{/* <h1 className={subtitle()}>Last Purchase History</h1> */}
						<h1 className={subtitle()}>آخرین فاکتور خرید</h1>
						<PurchaseTable purchaseList={purchaseList[0].purchaseList}/>

						<div className="flex flex-row justify-items-center bg-textBright w-fit  p-2 m-4 text-center capitalize text-onBackground rounded-lg">
							<h1 className='ml-4'>جمع ردیف</h1> <span>{ PN.convertEnToPe( PN.sliceNumber( totallHistoryPrice ) ) }</span>
						</div>

					</div>
					:
					<div className="flex flex-col min-w-full py-8 mt-16 items-center inline-block max-w-lg text-center justify-center border-t-1 border-success bg-onBackground text-textCloudy">
						<h1 className={subtitle()}>Purchase History</h1>
						<NoData className='p-2'/>
					</div>
					}
				</div>
			</section>
		</DefaultLayout>
	)
};

// export default BasketPage;

