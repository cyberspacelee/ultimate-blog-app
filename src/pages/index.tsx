import React from 'react'
import {IoReorderThreeOutline} from "react-icons/io5";
import {BsBell} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {CiSearch} from "react-icons/ci";
import {HiChevronDown} from "react-icons/hi";

const HomePage = () => {
    return (
        <div className="flex h-full w-full flex-col">
            <header
                className="h-16 w-full flex justify-around items-center bg-white border-b-[1px] border-gray-300 py-4">
                <div>
                    <IoReorderThreeOutline className="text-2xl text-gray-600"/>
                </div>
                <div className="font-thin text-xl">Ultimate Blog App</div>
                <div className="flex items-center space-x-4">
                    <div>
                        <BsBell className="text-2xl text-gray-600"/>
                    </div>
                    <div>
                        <div className="w-6 h-6 bg-gray-600 rounded-full"/>
                    </div>
                    <div>
                        <button
                            className="flex transition hover:border-gray-900 hover:text-gray-900 items-center px-4 py-2.5 space-x-3 rounded border border-gray-200">
                            <div>Write</div>
                            <div>
                                <FiEdit/>
                            </div>
                        </button>
                    </div>
                </div>
            </header>
            <section className="grid grid-cols-12">
                <main className="col-span-8 w-full h-full border-r border-gray-300 px-10">
                    <div className="flex flex-col space-y-4 py-10 w-full">
                        <div className="flex space-x-4 items-center w-full">
                            <label htmlFor="search" className="relative w-full border border-gray-800 rounded-lg">
                                <div className="absolute left-2 h-full flex items-center">
                                    <div className="w-10">
                                        <CiSearch/>
                                    </div>
                                </div>
                                <input type="text" name="search" id="search"
                                       className="outline-none py-2 px-8 text-sm
                                       w-full rounded-lg
                                       placeholder:text-gray-300"
                                       placeholder="Search..."/>
                            </label>
                            <div className="flex items-center w-full space-x-4 justify-end">
                                <div className="flex items-center space-x-2">{
                                    Array.from({length: 4}).map((_, i) => (
                                        <div key={i} className="rounded-3xl bg-gray-200/50 px-4 py-3">
                                            tag {i}
                                        </div>
                                    ))
                                }</div>
                            </div>
                        </div>
                        <div className="w-full justify-between flex items-center border-b border-gray-300 pb-4">
                            <div>Articles</div>
                            <div>
                                <button
                                    className="flex font-semibold items-center space-x-2 rounded-3xl border-gray-800 border px-4 py-2">
                                    <div>Following</div>
                                    <div><HiChevronDown className="text-xl"/></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full justify-center space-y-10">
                        {
                            Array.from({length: 5}).map((_, i) => (
                                <div key={i}
                                     className="group flex flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none">
                                    <div className="flex w-full items-center space-x-2">
                                        <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                                        <div>
                                            <p className="font-semibold">Cyberspace Lee &#x2022; 22 Dec. 2022</p>
                                            <p className="text-sm">developer & worker</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 w-full gap-4">
                                        <div className="col-span-8 flex flex-col space-y-2">
                                            <p className="text-2xl font-bold text-gray-800 group-hover:underline decoration-indigo-500">Lorem
                                                ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <p className="text-sm text-gray-500 break-words">Tenetur quod quidem in
                                                voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam
                                                odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde
                                                amet odit pariatur at!</p>
                                        </div>
                                        <div className="col-span-4">
                                            <div
                                                className="bg-gray-300 h-full w-full rounded-xl transition transform hover:scale-110 duration-300 hover:shadow-lg"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center w-full space-x-4 justify-start">
                                            <div className="flex items-center space-x-2">{
                                                Array.from({length: 4}).map((_, i) => (
                                                    <div key={i}
                                                         className="rounded-3xl bg-gray-200/50 px-4 py-2 text-sm">
                                                        tag {i}
                                                    </div>
                                                ))
                                            }</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </main>
                <aside className="top-16 col-span-4 flex p-4 flex-col space-y-4">
                    <div>
                        <h3 className="my-6 font-semibold text-lg">People you might be interested</h3>
                        <div className="flex flex-col space-y-4 items-center">
                            {
                                Array.from({length: 4}).map((_, i) => (
                                        <div key={i} className="flex space-x-4 items-center">
                                            <div className="bg-gray-500 w-10 h-10 rounded-full flex-none">
                                            </div>
                                            <div>
                                                <div className="text-gray-800 font-bold text-sm">Lorem ipsum</div>
                                                <div className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit.
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-800 hover:text-gray-800">
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className="my-6 font-semibold text-lg">Your reading list</h3>
                        <div className="flex flex-col space-y-4">
                            {
                                Array.from({length: 4}).map((_, i) => (
                                    <div key={i} className="flex space-x-4 items-center group">
                                        <div className="w-2/5 bg-gray-300 h-full rounded-xl aspect-square"></div>
                                        <div className="w-3/5 flex flex-col space-y-2">
                                            <div
                                                className="text-lg font-semibold group-hover:underline decoration-indigo-600">Lorem
                                                ipsum dolor sit amet
                                            </div>
                                            <div>Laboriosam quaerat sapiente minima nam minus similique illum architecto
                                                et!
                                            </div>
                                            <div className="flex items-center space-x-1 w-full"
                                                 style={{fontSize: "14px"}}>
                                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                                <div>Cyberspace Lee &#x2022;</div>
                                                <div>Dec 22, 2022</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </aside>
            </section>
        </div>


    )
}
export default HomePage
