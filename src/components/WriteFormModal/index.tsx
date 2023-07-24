import React, {useContext} from 'react'
import Modal from "@/components/Modal";
import {GlobalContext} from "@/contexts/GlobalContext";

const WriteFormModal = () => {
    const {isWriteModalOpen, setIsWriteModalOpen} = useContext(GlobalContext)
    return (
        <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen(false)}>
            <form className="flex flex-col space-y-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="w-full h-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
                    placeholder="Title of the blog"
                    type="text" name="title" id="title"/>
                <input
                    className="w-full h-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
                    placeholder="Short description about the blog"
                    type="text" name="shortDescription" id="shortDescription"/>
                <textarea
                    className="w-full h-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
                    placeholder="Blog main body..."
                    name="mainBody" id="mainBody" cols={10} rows={10}/>
            </form>
        </Modal>
    )
}
export default WriteFormModal
