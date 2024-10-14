import { Home, User, Palette, Phone, Github, Linkedin, NotebookIcon, Twitter } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

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

const NavButton = ({x, y, label, link, icon, newTab}) => {
    return (
        <div 
            className='absolute cursor-pointer z-50' 
            style={{transform: `translate(${x}, ${y})`}}
        >
            <Link 
                href={link} 
                target={newTab ? '_blank' : '_self'} 
                className='text-foreground rounded-full flex items-center justify-center 
                bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] 
                shadow-glass-inset hover:shadow-glass-sm' 
                aria-label={label}
            >
            <span className='relative w-6 h-6 p-1.5 animate-spin-slow-reverse group-hover:pause group-hover:text-accent'>
                {getIcon(icon)}
                <span className='peer absolute bg-transparent top-0 left-0 w-full h-full'/>
                <span className='absolute hidden peer-hover:block px-1 py-0.5 left-full mx-2 top-1/2 -translate-y-1/2
                bg-background text-foreground text-xs rounded-md shadow-lg whitespace-nowrap'>
                    {label}
                </span>
            </span>
            </Link>
        </div>
    )
}

export default NavButton