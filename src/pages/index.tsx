import React from 'react'
import {IoReorderThreeOutline} from "react-icons/io5";
import {BsBell} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";

const HomePage = () => {
    return (
        <div className="flex h-screen w-full flex-col">
            <header className="h-16 w-full flex justify-around items-center bg-white border-b-[1px] border-gray-300">
                <div>
                    <IoReorderThreeOutline className= "text-2xl text-gray-600"/>
                </div>
                <div className="font-thin text-xl">Ultimate Blog App</div>
                <div className="flex items-center space-x-4">
                    <div>
                        <BsBell className="text-2xl text-gray-600" />
                    </div>
                    <div>
                        <div className="w-6 h-6 bg-gray-600 rounded-full"/>
                    </div>
                    <div>
                        <button className="flex transition hover:border-gray-900 hover:text-gray-900 items-center px-4 py-2.5 space-x-3 rounded border border-gray-200">
                            <div>Write</div>
                            <div>
                                <FiEdit/>
                            </div>
                        </button>
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-12">
            </div>
        </div>


    )
}
export default HomePage
