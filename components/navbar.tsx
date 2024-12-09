import React, { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  BasketIcon,
  Grapes,
  Bell,
  Chat
} from "@/components/icons";
import localforage from 'localforage';
import PN from "persian-number";


export const Navbar = (props: any) => {
  const [basketCount, setBasketCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  localforage.getItem('basketCount').then(value =>
    { 
      setBasketCount(Number(value))
    }
	)

  const notificationRedBox = "flex absolute place-content-center min-w-6 min-h-6 px-1 pt-1 bg-warning rounded-full"


  return (
    <NextUINavbar className="bg-onBackground" maxWidth="xl" position="sticky"
    isBordered
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>

    <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        
      <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />

      <NavbarBrand className="flex justify-start items-start gap-0 min-w-fit ">
        <NextLink className="flex justify-start items-center" href="/components/about">
            <Grapes className='text-active'/>
            <p className="font-bold text-inherit">جزیره میوه</p>
        </NextLink>
      </NavbarBrand>

      <div className="hidden sm:flex gap-4 justify-start ">
          {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>

                { item.label == 'Access' && props.user.role != 'purchaseSupplier' && props.user.role != 'accountant' && props.user.role != 'packagingPacker' && props.user.role != 'deliveryPlayer' && props.user.role != 'customer' &&

                  <NextLink
                  className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                  >
                    {item.label}
                  </NextLink>
                }
              
              { item.label != 'Access' &&
                <NextLink
                  className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                  >
                    {item.label}
                  </NextLink>
                }
          
              </NavbarItem>
          ))}
      </div>

      <NavbarItem className='hidden md:flex text-vacation' >
        <Button as={Link} color="warning" href="/" variant="flat">
          خروج
        </Button>
      </NavbarItem>
    </NavbarContent>


    <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
    
    <Link href="/myPages/baskets">
        <div>
          { basketCount != 0 &&
            <div className={notificationRedBox}>
              <span className="text-sm text-textBright cursor-pointer"> { PN.convertEnToPe( basketCount ) } </span>
            </div>
          }
          <BasketIcon className="mt-4 text-default-500" href="/components/baskets"/>
        </div>
      </Link>
      
      <Link className='h-16' title="Alert">
        <div>
          <div className={notificationRedBox}>
            <span className="text-sm text-textBright cursor-pointer">{ PN.convertEnToPe( 3 ) }</span>
          </div>
          <Bell className="mt-4 text-default-500" href="/components/alerts"/>
        </div>
      </Link>

      <Link href="/myPages/chatRoom">
        <div>
          <div className={notificationRedBox}>
            <span className="text-sm text-textBright cursor-pointer">{ PN.convertEnToPe( 44 ) }</span>
          </div>
          <Chat className="mt-4 text-default-500 "/>
        </div>
      </Link>

      <ThemeSwitch className="mt-4  "/>
        
      {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      
    </NavbarContent>

    <NavbarContent className="sm:hidden basis-1" justify="end">
      
      <Link href="/myPages/baskets">
        <div>
          { basketCount != 0 &&
            <div className={notificationRedBox}>
              <span className="text-sm text-textBright cursor-pointer"> { PN.convertEnToPe( basketCount ) } </span>
            </div>
          }
          <BasketIcon className="mt-4 text-default-500" href="/components/baskets"/>
        </div>
      </Link>
      
      <Link className='h-16' title="Alert">
        <div>
          <div className={notificationRedBox}>
            <span className="text-sm text-textBright cursor-pointer">{ PN.convertEnToPe( 3 ) }</span>
          </div>
          <Bell className="mt-4 text-default-500" href="/components/alerts"/>
        </div>
      </Link>

      <Link href="/myPages/chatRoom">
        <div>
          <div className={notificationRedBox}>
            <span className="text-sm text-textBright cursor-pointer">{ PN.convertEnToPe( 44 ) }</span>
          </div>
          <Chat className="mt-4 text-default-500 "/>
        </div>
      </Link>

      <ThemeSwitch className="mt-4  "/>
        
      {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      {/* <NavbarMenuToggle /> */} 
    </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2" dir='rtl'>
         { true &&
            siteConfig.navMenuItems.map((item, index) => (
             
              <NavbarMenuItem key={`${item}-${index}`}>

                { item.label == 'Access' && props.user.role != 'purchaseSupplier' && props.user.role != 'accountant' && props.user.role != 'packagingPacker' && props.user.role != 'deliveryPlayer' && props.user.role != 'customer' &&
                  <Link
                    className={
                      index === 3
                      ? "text-poused"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "text-vacation"
                        : "text-textBright"
                    }
                    // color={
                    //   index === 3
                    //     ? "primary"
                    //     : index === siteConfig.navMenuItems.length - 1
                    //       ? "textBright"
                    //       : "foreground"
                    // }
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                }

                { item.label != 'Access' &&
                  <Link
                    className={
                      index === 3
                      ? "text-poused"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "text-vacation"
                        : "text-textBright"
                    }
                    // color={
                    //   index === 3
                    //     ? "primary"
                    //     : index === siteConfig.navMenuItems.length - 1
                    //       ? "textBright"
                    //       : "foreground"
                    // }
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                }


              </NavbarMenuItem>
            ))
         }

          <NavbarContent>
          <NavbarItem className='text-vacation' >
            <Button as={Link} color="warning" href="/" variant="flat">
              خروج  
            </Button>
          </NavbarItem>
          </NavbarContent>
          
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
