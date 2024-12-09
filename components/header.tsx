import React from 'react';
import Image from 'next/image'
import PN from "persian-number";

interface HeaderPageProps {
    user: UserType; // Replace UserType with the actual type of your user object
    basketCount: number;
}

type UserType = {
    _id: "6713bd9f2a8732a6ab599daa",
    mobile: "09179172222",
    password: "123",
    name: "Jane Fisher",
    role: "marketer",
    team: "Management",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "email",
    representativeMobile: "09179170000",
    signupDate: "6/8/03",
    branchRoot: "branchRoot",
    branchParent: "branchParent",
    myBranchCode: "myBranchCode",
    recipientAccessMobiles: []
}

const HeaderPage: React.FC<HeaderPageProps> = ({user, basketCount}) => {
    const textBoxClass = 'flex flex-row items-center'
    const textClass1 = 'w-fit m-1 text-sm text-textCloudy'
    const textClass2 = 'm-1 text-lg text-textCloudy'
 

    if (user) {
        return (
            <div className='bg-onBackground'>

            {/* <div className='flex flex-col w-0  xl:w-1/12 2xl:w-1/6 ml-2'></div> */}
         
                <div className='flex container mx-auto max-w-7xl flex-grow pt-4 pb-3 pl-6 pr-3 justify-between bg-onBackground'>

                   
         
                    <div className='flex flex-col max-w-screen-sm ml-2 '>
                        {/* <span>
                            {basketCount}
                        </span> */}
                        <div className={textBoxClass}>
                            <p className={textClass1}> پست </p>
                            <p className={textClass2}>{user.role ? user.role : '...'}</p>
                        </div>
                        <div className={textBoxClass}>
                            <p className={textClass1}> نام کاربری </p>
                            <p className={textClass2}>{user.name ? user.name : '...'}</p>
                        </div>
                        <div className={textBoxClass}>
                            <p className={textClass1}> موبایل </p>
                            <p className={textClass2}>{ PN.convertEnToPe( user.mobile ? user.mobile : '...' ) }</p>
                        </div>
                        <div className={textBoxClass}>
                            <p className={textClass1}> موبایل معرف </p>
                            <p className={textClass2}>{ PN.convertEnToPe( user.representativeMobile ? user.representativeMobile : '...') }</p>
                        </div>
                    </div>

                    {/* <div className='flex flex-col w-full xl:w-1/12'></div> */}
              
                    <div className='flex flex-col  mt-3 mr-3 items-end'>
                        <Image
                            src={user.avatar}
                            width={110}
                            height={110}
                            unoptimized
                            alt="Picture of the author"
                            style={{borderWidth: 1, borderRadius: 55}}
                        />
                    </div>

                </div>

                {/* <div className='flex flex-col w-0  xl:w-96 2xl:w-1/6 ml-2'></div> */}

            </div>
            
        )
    } else {
        return <div>loding...</div>
    }
};

export default HeaderPage;