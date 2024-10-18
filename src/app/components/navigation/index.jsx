"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton'
import useScreenSize from '../hooks/useScreenSize'
import ResponsiveComponent from '../ResponsiveComponent'

const Navigation = () => {
    const angleIncrement = 2*Math.PI / BtnList.length
    const size = useScreenSize()

    const isLarge = (size >= 1024);
    const isMedium = (size >= 768);

    return (
        // For some reason, width is not centered at 100%
        <div className='w-full fixed h-screen flex items-center justify-center'>
            <ResponsiveComponent>
            {({size}) => {
                return size && size >= 480
                ? (
                <div className='relative w-max flex items-center justify-center animate-spin-slow hover:pause group'>
                    {
                        BtnList.map((btn, index) => {
                            const btnAngle = index * angleIncrement
                            const radius = isLarge ? 'calc(20vw - 1rem)' : (isMedium ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem')
                            const x = `calc(${radius}*${Math.cos(btnAngle)})`
                            const y = `calc(${radius}*${Math.sin(btnAngle)})`
                            return <NavButton key={btn.label} x={x} y={y} {...btn} />
                        })
                    }
                </div>
                ) : (
                <>
                <div className='relative w-full px-2.5 xs:w-max xs:px-0 flex flex-col space-y-4 items-start xs:items-center justify-center group'>
                    {
                        BtnList.slice(0, BtnList.length/2).map((btn, index) => {
                            return <NavButton key={btn.label} x={0} y={0} {...btn} />
                        })
                    }
                </div>
                <div className='relative w-full px-2.5 xs:w-max xs:px-0 flex flex-col space-y-4 items-end xs:items-center justify-center group'>                    {
                        BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => {
                            return <NavButton key={btn.label} x={0} y={0} labelDirection='left' {...btn} />
                        })
                    }
                </div>
                </>
                )
            }}
            </ResponsiveComponent>
        </div>

    )
}

export default Navigation