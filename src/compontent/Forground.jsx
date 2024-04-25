import { Cards } from "./Cards"
import { useRef, useState } from 'react'

export const Forground = () => {

    const ref = useRef(null)

    const data = [
        {

            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            filsize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "green" },
        },


        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            filsize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "blue" },
        },


        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            filsize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagcolor: "green" },
        }
    ]
    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap  ' >

                {data.map((items, index) => (
                    <Cards data={items} reference={ref} />

                ))
                }




            </div>
        </>
    )
}