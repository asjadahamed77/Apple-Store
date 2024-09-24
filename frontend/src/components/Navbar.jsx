import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import iphone_icon from "../assets/icons/iphone-icon.png";
import apple_mac from '../assets/icons/apple-mac.png'
import apple_ipad from '../assets/icons/apple-iPad.png'
import apple_watch from '../assets/icons/apple-watch.png'
import apple_airpods from '../assets/icons/apple-airpods.png'
import search_icon from '../assets/icons/search.png'
import favorite_icon from '../assets/icons/favourite.png'
import shopping_cart from '../assets/icons/shopping-cart.png'
import user_icon from '../assets/icons/user.png'
import toggle_menu_icon from '../assets/icons/toggle_menu.png'

const Navbar = () => {
    const [showMenuItems,setShowMenuItems] = useState(false)

    const handleToggleMenu = () => {
        setShowMenuItems(prev => !prev);
    };
    
  return (
    <div className='flex justify-between px-2 fixed top-0 left-0 right-0 lg:justify-evenly md:px-4 items-center  shadow-sm'>
        <img  onClick={handleToggleMenu}  className='w-8 lg:hidden cursor-pointer' src={toggle_menu_icon} alt="" />
      <div className='py-2'>
        <Link to={'/'}><h1 className="text-2xl font-bold">Ajji Store</h1></Link>
      </div>
      <div className='hidden lg:flex gap-6'>
        <div className='py-2'>
          <Link to={'/'}>Home</Link>
        </div>

        {/* iPhones dropdown */}
        <div className="group">
          <div className='flex items-center cursor-pointer'>
            <Link className='py-2' to={'/iphones'}>iPhones</Link>
            <IoMdArrowDropdown />
          </div>

          {/* Full-screen width Dropdown content starting from left of the screen */}
          <div className="absolute left-0 top-11 box-border w-screen   hidden group-hover:flex bg-white p-4 z-10 shadow-sm overflow-x-scroll ease-linear ">
            <ul className="flex w-full items-center justify-evenly transition-all ease-in-out duration-300">
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={iphone_icon} alt="iphone-icon" className="w-8 h-auto" />
                  <p>iPhone 13 Pro Max</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={iphone_icon} alt="iphone-icon" className="w-8 h-auto" />
                  <p>iPhone 13 Pro Max</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={iphone_icon} alt="iphone-icon" className="w-8 h-auto" />
                  <p>iPhone 13 Pro Max</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={iphone_icon} alt="iphone-icon" className="w-8 h-auto" />
                  <p>iPhone 13 Pro Max</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mac dropdown */}
        <div className="group">
          <div className='flex items-center cursor-pointer'>
            <Link className='py-2' to={'/mac'}>Mac</Link>
            <IoMdArrowDropdown />
          </div>

          {/* Full-screen width Dropdown content starting from left of the screen */}
          <div className="absolute left-0 top-11 box-border w-screen   hidden group-hover:flex bg-white p-4 z-10 shadow-sm overflow-x-scroll">
            <ul className="flex w-full items-center justify-evenly">
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={apple_mac} alt="macicon" className="w-10 h-auto" />
                  <p>MacBook Pro</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_mac} alt="macicon" className="w-10 h-auto" />
                  <p>MacBook Air</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_mac} alt="macicon" className="w-10 h-auto" />
                  <p>M3 Pro MacBook</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_mac} alt="macicon" className="w-10 h-auto" />
                  <p>M3 Max</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* iPad dropdown */}
        <div className="group">
          <div className='flex items-center cursor-pointer'>
            <Link className='py-2' to={'/ipad'}>iPad</Link>
            <IoMdArrowDropdown />
          </div>

          {/* Full-screen width Dropdown content starting from left of the screen */}
          <div className="absolute left-0 top-11 box-border w-screen   hidden group-hover:flex bg-white p-4 z-10 shadow-sm overflow-x-scroll">
            <ul className="flex w-full items-center justify-evenly">
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={apple_ipad} alt="macicon" className="w-10 h-auto" />
                  <p>iPad Pro 3</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_ipad} alt="macicon" className="w-10 h-auto" />
                  <p>iPad M2</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_ipad} alt="macicon" className="w-10 h-auto" />
                  <p>iPad Pro</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_ipad} alt="macicon" className="w-10 h-auto" />
                  <p>iPad Mini</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* iWatch dropdown */}
        <div className="group">
          <div className='flex items-center cursor-pointer'>
            <Link className='py-2' to={'/watch'}>Watch</Link>
            <IoMdArrowDropdown />
          </div>

          {/* Full-screen width Dropdown content starting from left of the screen */}
          <div className="absolute left-0 top-11 box-border w-screen   hidden group-hover:flex bg-white p-4 z-10 shadow-sm overflow-x-scroll">
            <ul className="flex w-full items-center justify-evenly">
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={apple_watch} alt="macicon" className="w-10 h-auto" />
                  <p>Series 7</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_watch} alt="macicon" className="w-10 h-auto" />
                  <p>Series 6</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_watch} alt="macicon" className="w-10 h-auto" />
                  <p>Series 5</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_watch} alt="macicon" className="w-10 h-auto" />
                  <p>Series 4</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
         {/* AirPods dropdown */}
         <div className="group">
          <div className='flex items-center cursor-pointer'>
            <Link className='py-2' to={'/airpods'}>AirPods</Link>
            <IoMdArrowDropdown />
          </div>

          {/* Full-screen width Dropdown content starting from left of the screen */}
          <div className="absolute left-0 top-11 box-border w-screen   hidden group-hover:flex bg-white p-4 z-10 shadow-sm overflow-x-scroll">
            <ul className="flex w-full items-center justify-evenly">
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>AirPods Pro 2</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>AirPods Pro</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>AirPods 2</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>AirPods Pro</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Accessories dropdown */}
        <div className="group">
          <div className='flex items-center cursor-pointer'>
            <Link className='py-2' to={'/accessories'}>Accessories</Link>
            <IoMdArrowDropdown />
          </div>

          {/* Full-screen width Dropdown content starting from left of the screen */}
          <div className="absolute left-0 top-11 box-border w-screen   hidden group-hover:flex bg-white p-4 z-10 shadow-sm overflow-x-scroll">
            <ul className="flex w-full items-center justify-evenly">
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                  <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>Apple Charger</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>Apple Cable</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>Sticker</p>
                </Link>
              </li>
              <li className='p-3 hover:bg-gray-50  duration-300 hover:scale-110 transition-all '>
                <Link to="" className="flex flex-col items-center gap-3">
                <img src={apple_airpods} alt="macicon" className="w-10 h-auto" />
                  <p>Apple </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
      <div className='flex items-center gap-3 lg:gap-6 md:gap-5'>
            <Tooltip title="Search">
            <Link to={'/search'}><img className='w-5 h-5 cursor-pointer' src={search_icon} alt="search" /></Link>
            </Tooltip>
           <div className='relative'>
           <Tooltip title="Wishlist Products">
           <Link to={'/wishlist'}><img className='w-6 cursor-pointer' src={favorite_icon} alt="fav" /></Link>
           </Tooltip>
                
                    <p className='absolute right-[-8px] top-[1px] w-4 text-center leading-4 bg-blue-500 text-white aspect-squre rounded-full text-[8px]'>0</p>
               
           </div>
            <div className='relative'>
            <Tooltip title="Shopping Cart" >
            <Link to={'/cart'}><img className='w-7 cursor-pointer' src={shopping_cart} alt="cart" /></Link>
            </Tooltip>
            <p className='absolute right-[-2px] top-[2px] w-4 text-center leading-4 bg-blue-500 text-white aspect-squre rounded-full text-[8px]'>0</p>
            </div>
            <Tooltip title="My Account" >
           <Link to={'/account'}> <img className='w-5 cursor-pointer' src={user_icon} alt="user" /></Link>
            </Tooltip>
        </div>

    {/* Navbar Links in Smaller Screen */}
    <ul 
                className={`lg:hidden shadow-sm border  absolute top-12 left-0 bottom-0 bg-white overflow-hidden transition-all duration-500 ease-in-out ${
                    showMenuItems ? 'w-[250px]' : 'w-0'
                }`}
            >
                <hr />
        <Link to={'/iphones'}><li className='p-3 text-[18px] font-semibold'>iPhones</li></Link>
        <hr />
        <Link to={'/mac'}><li className='p-3 text-[18px] font-semibold'>Mac</li></Link>
        <hr />
        <Link to={'/ipad'}><li className='p-3 text-[18px] font-semibold'>iPad</li></Link>
        <hr />
        <Link to={'/watch'}><li className='p-3 text-[18px] font-semibold'>Watch</li></Link>
        <hr />
        <Link to={'/airpods'}><li className='p-3 text-[18px] font-semibold'>AirPods</li></Link>
        <hr />
        <Link to={'/accessories'}><li className='p-3 text-[18px] font-semibold'>Accessories</li></Link>
        <hr />
    </ul>

    </div>
  );
};

export default Navbar;
