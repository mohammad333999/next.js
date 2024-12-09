import React, { useState, useEffect } from 'react';
import DefaultLayout from "@/layouts/default";
import ProductTable from '../../../components/table/productTable'
import httpRequest from '../../../utility/api/httpRequest'
import localforage from 'localforage';
import { useRouter } from 'next/router';
import { title, subtitle } from '@/components/primitives';
import { Custmer } from '@/components/icons';
import { bassUrl } from "../../../utility/Constants"


interface CustomerPageProps {
	user?: any;
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

  interface BasketProps {
	basketList: any[]
	id: string,
	purchaseHistory: []
  }
  
  type BasketItem = {
	id: string | number; // Replace with the actual type of id
	type: number, 
	name: string,
	title: string,
	discreption: string,
	price: number,
	oldPrice: number,
	discount: number,
	image: string
  }

  type ProductProps = {
	id: string | number; // Replace with the actual type of id
	type: number, 
	name: string,
	title: string,
	discreption: string,
	price: number,
	oldPrice: number,
	count: number,
	discount: number,
	image: string
  }




const CustomerPage: React.FC<CustomerPageProps> = ({user}) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<ProductProps[]>([])
	const [basketList, setBasketList] = useState<any[]>([])

	useEffect(() => {
	
		handleGetClick()
	
	}, []);

	function handleGetClick() {
		setIsLoading(true)
  
		const result = httpRequest<BasketProps>('get', bassUrl+'/baskets/get', 
			{
				params: {
					id: user.mobile,
				},
				timeout: 15000 
			}
		)
		result.then(value2 =>
		  {
		 
			if ( value2.data  && typeof value2.data === 'object' ) {
			  
						  const basketCount = value2.data.basketList.length
						  localforage.setItem('basketCount', basketCount);
					  } else {
						  localforage.setItem('basketCount', 0);
					  }
  
			const fetchData = async () => {
			  
			  const result = httpRequest<ProductProps[]>('get', bassUrl+'/products/get',
				{	
				  timeout: 15000	
				}
			  )
		
			  result.then(value => 
				{
		
				  if ( value.data  && typeof value2.data === 'object' ) {
			  
					for (const doc1 of value.data) {
		
					  const index1 = value.data.indexOf(doc1)
					  
					  for (const doc2 of value2.data.basketList) {
		
						if ( doc1.id === doc2.id ) {
						  value.data[index1].count = doc2.count
						} 
  
					  }
  
					  setProducts(value.data)
					  setIsLoading(false)
					}	
				  }
				}
			  )
			};
		
			fetchData();
		  }
		)
	}					
	

	const textClass = 'w-fit p-1 text-lg text-textBright'
	const colClass = 'flex flex-col p-1 bg-onBackground text-textBright'

	// if (products.length > 0 && basketList.length > 0) {
		// console.log(products);

        return (
			<DefaultLayout>
				<section className="flex flex-col items-center justify-center md:py-4">
					<div className="flex flex-col px-0 sm:px-4 py-4 items-center  text-center justify-center bg-onBackground">
						<Custmer />
						<h1 className={title()}>کاربر</h1>
						<h1 className={subtitle()}>لیست همه محصولات</h1>
						<span className='w-80 sm:w-96 mb-4 text-textCloudy'>
						 	برای اضافه کردن محصول به سبد خرید روی دکمه مثبت کلیک کنید 
						</span>		

						<div style={{ overflowY: 'auto', whiteSpace: 'nowrap' }} className='colClass'>	
						
							{
								products.length > 0 &&
								<ProductTable products={products}/>
							}
							
					
						</div>

						{/* <div className="flex flex-col min-w-full py-8 mt-16 items-center inline-block max-w-lg text-center justify-center border-t-1 border-success bg-onBackground"> */}
							{/* <h1 className={subtitle()}>Table</h1> */}
							{/* <AccsessTable user={user}/> */}
						{/* </div> */}
					</div>
				</section>
			</DefaultLayout>
        )
		
    // } else {
	// 	return (
	// 		<div className='flex h-screen place-content-center place-items-center bg-background'>
	// 			<span className='bg-onBackground h-fit p-4 text-xl'>pleas wait...</span>
	// 		</div>
	// 	)
	// }	
	
};

export default CustomerPage;

