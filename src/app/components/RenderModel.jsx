"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import clsx from 'clsx'
import { Environment } from '@react-three/drei'

const RenderModel = ({children, className}) => {
    return (
        <Canvas className={clsx("w-screen h-screen relative", className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='dawn' />
        </Canvas>
    )
}

export default RenderModel