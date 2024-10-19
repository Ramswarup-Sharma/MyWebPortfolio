import React from 'react'
import { Link } from 'react-scroll'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import myimg from "../assets/myimage.png";
const Home = () => {
    return (
        <div
            name="home"
            className="sm:h-screen w-full  md:pt-0 pt-14 pb-5 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center sm:h-full   px-4  md:flex-row">
                <div className="flex flex-col justify-center mr-4">
                    <h2 className='text-white mt-10 sm:mt-8 mb-3 text-2xl'>Hello, My Name Is <span className='text-cyan-400'> Ramswarup Sharma 👋</span></h2>
                    <h2 className="md:text-5xl sm:text-5xl text-2xl   font-bold text-white">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-400 py-4 hidden sm:block max-w-md font-medium">
                        I am experienced in MongoDB, Express.js, React.js, and Node.js. I specialize in building robust full-stack web applications, seamlessly integrating front-end and back-end functionalities to deliver efficient and scalable solutions.
                    </p>

                    <div className='hidden sm:block'>
                        <Link
                            to="professional experience"
                            smooth
                            duration={500}
                            className="group text-white hover:scale-105 w-fit px-6 py-3 my-2 flex items-center rounded-md  button
                            cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className=' md:pt-0 pt-10'>
                    <img
                        src={myimg}
                        alt="my profile"
                        className=" rounded-3xl pictureStyle duration-200 hover:scale-90  mx-auto w-60  md:w-full"
                    />
                    <p className="text-gray-400 py-4 sm:hidden block max-w-md font-medium">
                        I'm Ramswarup Sharma, a Full Stack Developer proficient in MongoDB, Express.js, React.js, and Node.js. I specialize in building robust full-stack web applications, seamlessly integrating front-end and back-end functionalities to deliver efficient and scalable solutions.
                    </p>

                    <div className='sm:hidden block sm:pb-0 pb-9'>
                        <Link
                            to="professional experience"
                            smooth
                            duration={500}
                            className="group text-white hover:scale-105 w-fit  px-6 py-3 my-2 flex items-center rounded-md  button
                            cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
