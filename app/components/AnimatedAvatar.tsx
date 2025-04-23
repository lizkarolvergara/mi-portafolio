'use client'

import { useEffect, useRef, useState } from "react"

export default function AnimatedAvatar () {
    const [isBlinking, setIsBlinking] = useState(false)
    const svgRef  = useRef<SVGSVGElement>(null)
    const [isSmiling, setIsSmiling] = useState(false)

    useEffect (() => {
        const interval = setInterval(() => {
            setIsBlinking(true)
            setTimeout(() => setIsBlinking(false), 150)
        }, Math.random() * 2000 + 2000)

        return () => clearInterval(interval)
    }, [])

    useEffect (() => {
        const handleMouseMove = (e:MouseEvent) => {
            const svg = svgRef.current
            if (!svg) return

            const rect = svg.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top 
            const cx = rect.width / 2
            const cy = rect.height /2
            const dx = (x - cx) /100
            const dy = (y-cy) / 100

            const leftEye = svg.querySelector('#eye-left') as SVGElement
            const rightEye = svg.querySelector('#eye-right') as SVGElement

            if (leftEye) leftEye.setAttribute('transform', `translate(${dx}, ${dy})`)
            if (rightEye) rightEye.setAttribute('transform', `translate(${dx}, ${dy})`)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div 
            className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" onClick={() => {
            setIsSmiling(true)
            setTimeout(() => setIsSmiling(false), 1000)
        }}>
            {!isSmiling && 
                (
                    <img src="/avatar-base.svg" alt="avatar"/>
                )
            } 
            {isSmiling ? 
                (
                    <img src="/avatar-smile.svg" alt="avatar"/>
                ) : isBlinking ? (
                    <img src="/eyes-closed.svg" className="absolute inset-0 " />
                ) : (
                    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none" className="absolute inset-0 pointer-events-none w-full h-full">
                        <g id="eyes-open">
                            <g id="eye-right">
                                <ellipse id="Ellipse 4" cx="8.86598" cy="13.5945" rx="8.86598" ry="13.5945" transform="matrix(-0.999396 0.0347579 0.0347579 0.999396 254.233 221.663)" fill="black"/>
                                <path id="Vector 1" d="M254.603 232.295C254.603 232.295 256.751 232.221 257.58 231.305C258.408 230.389 259.206 228.587 259.206 228.587" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector 2" d="M250.895 227.693C250.895 227.693 253.043 227.618 253.871 226.702C254.699 225.786 255.497 223.984 255.497 223.984" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <g id="eye-left">
                                <ellipse id="Ellipse 4_2" cx="173.603" cy="239.595" rx="8.86598" ry="13.5945" transform="rotate(-6.81395 173.603 239.595)" fill="black"/>
                                <path id="Vector 1_2" d="M164.449 237.713C164.449 237.713 162.315 237.968 161.356 237.189C160.397 236.411 159.333 234.752 159.333 234.752" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector 2_2" d="M167.409 232.597C167.409 232.597 165.275 232.852 164.316 232.073C163.357 231.295 162.293 229.636 162.293 229.636" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </g>
                    </svg>
                )
            }



        </div>
    )
}