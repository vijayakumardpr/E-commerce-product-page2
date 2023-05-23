import React from 'react'
import menu from "../assets/images/icon-menu.svg"
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../utils/leftNavbarSlice'
import { showCart } from "../utils/cartSlice"


const Header = () => {
    const count = useSelector(store => store.cart.count)
    const visible = useSelector(store => store.cart.intoCart)

    const dispatch = useDispatch()

    function handle() {
        dispatch(toggle())
    }

    function cartHandle() {
        dispatch(showCart())
    }


    return (
        <div className="flex justify-between items-center p-5 md:mx-10 md:border-b-2 border-gray-200 md:w-[70%] md:py-0">
            <div className='flex items-center '>
                <img className="md:hidden" onClick={handle} src={menu} alt="menu" />
                <img className="ml-3" src={logo} alt="" />
                <ul className="hidden md:flex ml-14 relative">
                    <li className="px-3 py-1 cursor-pointer md:py-7 md:hover:border-b-4 border-orange-500">Collections</li>
                    <li className="px-3 py-1 cursor-pointer md:py-7 md:hover:border-b-4 border-orange-500">Men</li>
                    <li className="px-3 py-1 cursor-pointer md:py-7 md:hover:border-b-4 border-orange-500">Women</li>
                    <li className="px-3 py-1 cursor-pointer md:py-7 md:hover:border-b-4 border-orange-500">About</li>
                    <li className="px-3 py-1 cursor-pointer md:py-7 md:hover:border-b-4 border-orange-500">Contact</li>
                </ul>

            </div>

            <div className='flex items-center relative'>
                <div>
                    <img className="cursor-pointer" onClick={cartHandle} src={cart} alt="cart" />
                    {
                        (count > 0 && visible) &&
                        <div div className="absolute -top-2 left-2 bg-orange-400 px-2 py-0 rounded-full text-xs text-white">
                            {count}
                        </div>
                    }
                </div>
                <img className='w-6 cursor-pointer ml-3 hover:border-2 border-orange-400 rounded-full md:w-10 md:ml-9' src={avatar} alt="" />
            </div>
        </div >
    )
}

export default Header