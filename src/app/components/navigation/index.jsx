"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton'

const Navigation = () => {
    const angleIncrement = 2*Math.PI / BtnList.length
    return (
        // For some reason, width is not centered at 100%
        <div className='w-full fixed h-screen flex items-center justify-center'>
            <div className='relative w-max flex items-center justify-center animate-spin-slow hover:pause group'>
                {
                    BtnList.map((btn, index) => {
                        const btnAngle = index * angleIncrement
                        const radius = 'calc(20vw - 1rem)'
                        const x = `calc(${radius}*${Math.cos(btnAngle)})`
                        const y = `calc(${radius}*${Math.sin(btnAngle)})`
                        return <NavButton key={btn.label} x={x} y={y} {...btn} />
                    })
                }
            </div>
        </div>

    )
}

export default Navigation