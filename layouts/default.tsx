import React, { useState } from 'react';
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import localforage from 'localforage';
import HeaderPage from '../components/header';
import FooterPage from '../components/footer';


export default function DefaultLayout({
  children
}: {
  children: React.ReactNode;
}) {

  var [parsedData, setParseData]=useState(null)
  var [basketCount, setBasketCount]=useState(0)

	localforage.getItem('user').then(value =>
    {
      if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
        setParseData((prevValue) => value? JSON.parse(value): null)
      }
    }
	)
  localforage.getItem('basketCount').then(value =>
		// setBasketCount((prevValue) => value? JSON.parse(value): null)
    // console.log(value)
    {
      if (typeof value === 'string' && value !== '{}') { // Check for string and non-empty object
        setBasketCount(Number(value))
      }
    }
    
	)

  if (parsedData) {
    return (
      <div className="relative flex flex-col h-screen " dir="rtl">
        {/* <Head /> */}
        <Navbar user={parsedData} basketCount={basketCount ?? 0}/>
        <HeaderPage user={parsedData} basketCount={basketCount ?? 0}/>
        <main className="container mx-auto max-w-7xl px-0 flex-grow md:pt-8 pt-1">
          {children}
        </main>
        {/* <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
            title="nextui.org homepage"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">NextUI</p>
          </Link>
        </footer> */}
        {/* <FooterPage  user={parsedData} /> */}
      </div>
    );
  } else {
    return <div>loding...</div>
  }
	

}
