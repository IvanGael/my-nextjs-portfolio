"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon, MinusIcon, RectangleGroupIcon, Squares2X2Icon } from '@heroicons/react/24/outline';


interface Name {
    course: string;
    imageSrc: string;
    profession: string
    desc: string
    price: string
    category: 'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing';
}

const names: Name[] = [
    {
        course: 'React, NodeJS, MongoDB',
        imageSrc: '/assets/project_web2.png',
        profession: 'MyShop',
        desc: 'Simple shopping app',
        price: '40',
        category: 'webdevelopment'
    },
    {
        course: 'React, Firebase',
        imageSrc: '/assets/project_web3.png',
        profession: 'MyBlog',
        desc: 'Simple blog app',
        price: '21',
        category: 'webdevelopment'
    },
    {
        course: 'React, Firebase',
        imageSrc: '/assets/project_web4.png',
        profession: 'Resfood',
        desc: 'Reservation of restaurant seats',
        price: '21',
        category: 'webdevelopment'
    },
    {
        course: 'Angular, Spring boot, Postgresql',
        imageSrc: '/assets/project_web1.png',
        profession: 'TPI',
        desc: 'Digitization of judicial documents',
        price: '99',
        category: 'webdevelopment'
    },
    {
        course: 'NextJS, Firebase',
        imageSrc: '/assets/project_web5.png',
        profession: "Diag'Ec",
        desc: "Raising business awareness of the circular economy",
        price: '99',
        category: 'webdevelopment'
    },
    {
        course: 'Java swing, C#',
        imageSrc: '/assets/project_web6.png',
        profession: "Let's go biking",
        desc: "Minimize the distance traveled on foot by prioritizing the use of bicycles",
        price: '99',
        category: 'webdevelopment'
    },
    // {
    //     course: 'Flutter, Go',
    //     imageSrc: '/assets/pg7.png',
    //     profession: "Todo",
    //     desc: "Simple application todo d'ajout de notes ou tâches",
    //     price: '99',
    //     category: 'webdevelopment'
    // },
    {
        course: 'React Native',
        imageSrc: '/assets/project6.png',
        profession: 'Climatrack',
        desc: "Know the weather forecast",
        price: '89',
        category: 'mobiledevelopment'
    },
    {
        course: 'React Native',
        imageSrc: '/assets/project7.png',
        profession: 'ChatZen',
        desc: "ChatGpt clone",
        price: '89',
        category: 'mobiledevelopment'
    },
    {
        course: 'Kotlin, Firebase',
        imageSrc: '/assets/project1.png',
        profession: 'MyChat',
        desc: 'Instant messaging, chats with friends',
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'Kotlin',
        imageSrc: '/assets/project5.png',
        profession: 'CurrencyConverter',
        desc: 'Convert a currency into all currencies',
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'Kotlin',
        imageSrc: '/assets/project3.png',
        profession: 'WorldFeed',
        desc: 'Get news from different countries around the world',
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'Flutter',
        imageSrc: '/assets/project2.png',
        profession: 'OrderEase',
        desc: "Manage orders and payments from your business's customers",
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'Flutter, Firebase',
        imageSrc: '/assets/project4.png',
        profession: "Diag'Ec",
        desc: "Raising business awareness of the circular economy",
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'TensorFlow',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Learn TensorFlow with SQL',
        desc: '',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'AWS',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'AWS Deep Learning AMI',
        desc: '',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'Bokeh',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Learn Bokeh with Python',
        desc: '',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'Scikit',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Scikit with Python Development',
        desc: '',
        price: '89',
        category: 'datascience'
    },
    {
        course: 'Laas',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Infra-as-a-Service',
        desc: '',
        price: '21',
        category: 'cloudcomputing'
    },
    {
        course: 'Iaas',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Info-as-a-Service',
        desc: '',
        price: '29',
        category: 'cloudcomputing'
    },
    {
        course: 'Paas',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Platform-as-a-Service',
        desc: '',
        price: '99',
        category: 'cloudcomputing'
    },
    {
        course: 'Saas',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Software-as-a-Service',
        desc: '',
        price: '58',
        category: 'cloudcomputing'
    }
];

const NamesList = () => {

    const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'all' | null>('webdevelopment');

    const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
    const webDevelopment = names.filter((name) => name.category === 'webdevelopment');
    // const dataScience = names.filter((name) => name.category === 'datascience');
    // const cloudComputing = names.filter((name) => name.category === 'cloudcomputing');

    let selectedNames: Name[] = [];

    if (selectedButton === 'mobiledevelopment') {
        selectedNames = mobileDevelopment;
    } else if (selectedButton === 'webdevelopment') {
        selectedNames = webDevelopment;
    } 
    // else if (selectedButton === 'datascience') {
    //     selectedNames = dataScience;
    // } else if (selectedButton === 'cloudcomputing') {
    //     selectedNames = cloudComputing
    // }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className="text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-contain object-center "
                    />
                </div>
                <p aria-hidden="true" className="mt-2  text-2xl font-semibold ">
                    {name.profession}
                </p>
                <div className='flex justify-between mb-2'>
                    <div className="mt-4 block font-normal text-gray-900">
                        {name.desc}
                    </div>
                    {/* <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        ${name.price}
                    </div> */}
                </div>
                

                <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2 mb-5'>
                    <p className="text-orange font-bold">{name.course}</p>
                    {/* <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    ));


    return (
        <div>
            <div id='works-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">My achievements</h2>
                    {/* <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Explore Classes
                        </button>
                    </div> */}
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('webdevelopment')} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'text-black border-b-4 border-purple' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Web</button>
                    <button onClick={() => setSelectedButton('mobiledevelopment')} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-4 border-purple' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Mobile</button>
                    {/* <button onClick={() => setSelectedButton('datascience')} className={"bg-white " + (selectedButton === 'datascience' ? 'text-black border-b-4 border-purple' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Data Science</button>
                    <button onClick={() => setSelectedButton('cloudcomputing')} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'text-black border-b-4 border-purple' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Cloud Computing</button> */}

                    {/* FOR MOBILE VIEW */}
                    <RectangleGroupIcon onClick={() => setSelectedButton('webdevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'border-b-2 border-purple fill-purple' : '') + " pb-2 block sm:hidden"} />
                    <Squares2X2Icon onClick={() => setSelectedButton('mobiledevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-purple fill-purple' : '') + " pb-2 block sm:hidden"} />
                    {/* <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={70} height={70} className={"bg-white " + (selectedButton === 'datascience' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={70} height={70} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} /> */}

                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NamesList;




