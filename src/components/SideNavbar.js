import React from 'react'
import close from "../assets/images/icon-close.svg"
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from "../utils/leftNavbarSlice"

const SideNavbar = () => {

    const isTrue = useSelector(store => store.navbar.isShow)

    const dispatch = useDispatch();

    function handle() {
        dispatch(toggle())
    }

    if (!isTrue) return null

    return (
        <div className="fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.8)] h-full">
            <div className="bg-white h-full w-[65%] p-5">
                <img onClick={handle} className="mb-9" src={close} alt="" />
                <div className="font-bold text-lg py-3">Collections</div>
                <div className="font-bold text-lg py-3">Men</div>
                <div className="font-bold text-lg py-3">Women</div>
                <div className="font-bold text-lg py-3">About</div>
                <div className="font-bold text-lg py-3">Contact</div>
            </div>
        </div >
    )
}

export default SideNavbar