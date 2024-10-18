import { Home, User, Palette, Phone, Github, Linkedin, NotebookIcon, Twitter } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import ResponsiveComponent from '../ResponsiveComponent';
import clsx from 'clsx';

const getIcon = (icon) => {
    let strokeW = 1;
    switch(icon) {
        case "home":
            return <Home className='w-full h-auto' strokeWidth={strokeW} />
            break;
        case "about":
            return <User className='w-full h-auto' strokeWidth={strokeW} />
            break;
        case "projects":
            return <Palette className='w-full h-auto' strokeWidth={strokeW} />
            break;
        case "contact":
            return <Phone className='w-full h-auto' strokeWidth={strokeW} />
            break;
        case "github":
            return <Github className='w-full h-auto' strokeWidth={strokeW} />
            break;
        case "linkedin":
            return <Linkedin className='w-full h-auto' strokeWidth={strokeW} />
            break;
        case "twitter":
            return <Twitter className='w-full h-auto' strokeWidth={strokeW} />
            break;
        case "resume":
            return <NotebookIcon className='w-full h-auto' strokeWidth={strokeW} />
            break;
        default:
            return <Home className='w-full h-auto' strokeWidth={strokeW} />
    }
};

const NavButton = ({x, y, label, link, icon, newTab, labelDirection="right"}) => {
    return (
        <ResponsiveComponent>
        {({size}) => {
            return size && size >= 480 
            ? (
            <div 
                className='absolute cursor-pointer z-50' 
                style={{transform: `translate(${x}, ${y})`}}
            >
                <Link 
                    href={link} 
                    target={newTab ? '_blank' : '_self'} 
                    className='text-foreground rounded-full flex items-center justify-center 
                    custom-bg' 
                    aria-label={label}
                >
                <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'>
                    {getIcon(icon)}
                    <span className='peer absolute bg-transparent top-0 left-0 w-full h-full'/>
                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
                    bg-background text-foreground text-base rounded-md shadow-lg whitespace-nowrap'>
                        {label}
                    </span>
                </span>
                </Link>
            </div>
            ) : (
            <div 
                className='w-fit cursor-pointer z-50' 
            >
                <Link 
                    href={link} 
                    target={newTab ? '_blank' : '_self'} 
                    className='text-foreground rounded-full flex items-center justify-center 
                    custom-bg' 
                    aria-label={label}
                >
                <span className='relative w-10 h-10 p-2.5 xs:w-14 xs:h-14 xs:p-4 hover:text-accent'>
                    {getIcon(icon)}
                    <span className='peer absolute bg-transparent top-0 left-0 w-full h-full'/>
                    <span className={clsx('absolute hidden peer-hover:block px-2 py-1  mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-base rounded-md shadow-lg whitespace-nowrap', labelDirection === 'left' ? 'right-full left-auto' : 'left-full')}
                    >
                        {label}
                    </span>
                </span>
                </Link>
            </div>
            )
        }}
        </ResponsiveComponent>
    )
}

export default NavButton