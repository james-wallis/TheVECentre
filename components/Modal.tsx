import React, { ReactNode } from "react"

interface IProps {
    closeModal: Function
    children: ReactNode
    title: string
}

const Modal = ({ children, title }: IProps) => {
    return (
        <div className={`fixed w-screen h-screen bg-gray-500 inset-0 z-50 bg-opacity-70 flex justify-center items-center`}>
            <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 h-1/2 bg-white rounded-md relative border-gray-500 text-center">
                <div className="bg-dark-blue rounded-t-md h-1/5 flex justify-start px-6 md:px-10 items-center">
                    <h3 className="text-3xl text-white">{title}</h3>
                </div>
                <div className="flex w-full h-4/5 items-center justify-center flex-col px-6 md:px-10 py-5">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
