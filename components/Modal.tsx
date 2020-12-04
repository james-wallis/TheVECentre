import React, { ReactNode } from "react"
import { Cross } from "./Icons"

interface IProps {
    closeModal: Function
    children: ReactNode
}

const Modal = ({ closeModal, children }: IProps) => {
    return (
        <div className="fixed w-screen h-screen bg-gray-500 inset-0 z-50 bg-opacity-70 flex justify-center items-center">
            <div className="w-1/3 h-1/2 bg-white flex justify-center p-10 rounded-md relative border-gray-500">
                <Cross onClick={closeModal} className="absolute h-6 w-6 m-4" length={6} thickness={1} />
                <h3>ReCaptcha</h3>
                {children}
            </div>
        </div>
    )
}

export default Modal