
import { motion } from "framer-motion"
export const Cards = ({ data , reference}) => {
    return (
        <>
            <motion.div drag  dragConstraints={reference} whileDrag={{scale:1.2}} className=' flex-shrink-0  relative  w-60 h-72 rounded-[45px]   px-8 py-10  bg-zinc-900/90  text-white  overflow-hidden '  >

                <i className="ri-file-text-line  text-white "></i>



                <p className='text-sm leading-tight mt-5  font-semibold  '>{data.desc}</p>

                <div className=' footer  absolute   bottom-0  w-full  left-0'>


                    <div className='flex items-center justify-between mb-3   px-8  py-3'>


                        <h5>{data.filsize}</h5>


                        <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center '>


                            {data.close ? <i class="ri-close-line"></i> : <i class="ri-download-line  text-white  text-sm"></i>}

                        </span>
                    </div>

                    {
                        data.tag.isOpen && (
                            <div className={`w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"}  flex items-center justify-center `} >


                                <h3 className='text-sm  font-semibold' >{data.tag.tagTitle}</h3>

                            </div>
                        )
                    }



                </div>

            </motion.div>


        </>
    )
}