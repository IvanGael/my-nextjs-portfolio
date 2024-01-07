import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";

import LanguageSwitcher from '../language/languageSwitcher';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const navigation: NavigationItem[] = [
        { name: 'Who am I ?', href: '#about', current: true },
        { name: 'Achievements', href: '#works-section', current: false },
        { name: 'Techs', href: '#techs-section', current: false },
        { name: 'Academic background', href: '#formations-section', current: false },
        { name: 'Career', href: '#experiences-section', current: false },
        { name: 'Articles', href: '#articles-section', current: false },
        // { name: 'Mentors', href: '#mentors-section', current: false },
        // { name: 'Testimonial', href: '#testimonial-section', current: false },
        // { name: 'Join', href: '#join-section', current: false },
    ]
    

    const [navigationState, setNavigationState] = useState(navigation);

    const updateNavigationState = (name: string) => {
        const updatedArray = navigationState.map((item) => ({
            ...item,
            current: item.name === name
        }));

        setNavigationState(updatedArray);
    };


    return (
        <Disclosure as="nav" className="bg-lightpink navbar" >
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8" >
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            {/* <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-30px w-30px lg:hidden"
                                    src={'/assets/logo/Logo.svg'}
                                    alt="Courses-Logo"
                                />
                                <img
                                    className="hidden h-48px w-48px lg:block"
                                    src={'/assets/logo/Logo.svg'}
                                    alt="Courses-Logo"
                                />
                            </div> */}

                            {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4">
                                    {navigationState.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-purple font-bold' : 'hover:text-purple font-medium',
                                                'px-3 py-4 text-15px space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                            onClick={() => updateNavigationState(item.name)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>

                        {/* <LanguageSwitcher/> */}

                        {/* SIGNIN DIALOG */}

                        {/* <Signdialog /> */}

                        <Contactus />


                        {/* REGISTER DIALOG */}

                        {/* <Registerdialog /> */}


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
