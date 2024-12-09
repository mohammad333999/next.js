import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { 
	leder,
    customer,
    marketer,
    marketerSupervisor, 
    purchaseManager, 
    purchaseSupplier, 
    accountant, 
    packagingSupervisor, 
    packagingPacker, 
    deliverySupervisor, 
    deliveryPlayer 
} from '../../utility/Constants'

import Leader from './leader'
import Customer from './customer'
import Marketer  from './marketer'
import MarketerSupervisor from './marketerSupervisor'
import PurchaseManager from './purchaseManager'
import PurchaseSupplier from './purchaseSupplier'
import Accountant from './accountant'
import PackagingSupervisor from './packagingSupervisor'
import PackagingPacker from './packagingPacker'
import DeliverySupervisor from './deliverySupervisor'
import DeliveryPlayer  from './deliveryPlayer'

import localforage from 'localforage';
import HeaderPage from '../../components/header';
import FooterPage from '../../components/footer';

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
const appBodyClass = "flex flex-col h-screen"


const DashboardPage = () => {
    const router = useRouter()
  	var [parsedData, setParseData]=useState(null)

	localforage.LOCALSTORAGE
	localforage.getItem('user').then(value =>
	
		{
			if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
				  setParseData((prevValue) => value? JSON.parse(value as string): null)
			
			}
		}
	)
	
	
	if (parsedData && 'role' in parsedData) {
		// console.log(parsedData)
		
		switch ((parsedData as { role: string }).role) {
			case leder:
				return(
					<div className={appBodyClass}>
						<Leader user={parsedData} />
					</div>
					)
			case marketerSupervisor:
				return(
					<div className={appBodyClass}>
						<MarketerSupervisor user={parsedData} />
					</div>
					)
			case marketer:
				return(
					<div className={appBodyClass}>
						<Marketer user={parsedData} />
					</div>
					)
			case purchaseManager:
				return(
					<div className={appBodyClass}>
						<PurchaseManager user={parsedData} />
					</div>
					)
			case purchaseSupplier:
				return(
				<div className={appBodyClass}>
						<PurchaseSupplier user={parsedData} />
					</div>
					)
			case accountant:
				return(
					<div className={appBodyClass}>
						<Accountant user={parsedData} />
					</div>
					)
			case packagingSupervisor:
				return(
					<div className={appBodyClass}>
						<PackagingSupervisor user={parsedData} />
					</div>
					)
			case packagingPacker:
				return(
					<div className={appBodyClass}>
						<PackagingPacker user={parsedData} />
					</div>
					)
			case deliverySupervisor:
				return(
					<div className={appBodyClass}>
						<DeliverySupervisor user={parsedData} />
					</div>
					)
			case deliveryPlayer:
				return(
					<div className={appBodyClass}>
						<DeliveryPlayer user={parsedData} />
					</div>
					)
			case customer:
				return(
					<div className={appBodyClass}>
						<Customer user={parsedData} />
					</div>
					)
			default:
				return(
					<div className={appBodyClass}>
						<Customer user={parsedData} />
					</div>
					)
		}
		
	} else {
		setTimeout(() => {
			localforage.getItem('user').then(value =>
				{ if (!value) {router.push('/')} }
			)
		}, 1000)
	}
	
}

export default DashboardPage