import { useEffect, useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { TbSearch } from "react-icons/tb"; 
import { CgShoppingCart } from "react-icons/cg"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";


const Header = () => {
    // const [scrolled, setScrolled] = useState(false);
    // const handleScroll = () => {
    //   const offset = window.scrollY;
    //   if ( offset > 200){
    //      setScrolled(true);
    // } else {
    //   setScrolled(false);
    // }
    
    // };

    // useEffect(() => {
    //      window.addEventListener("scroll", handleScroll)
    // }, []);      


    return <header className="w-full bg-[#212121] text-[white] z-[99] px-5 py-0 border-b-[rgba(0,0,0,0.1)] border-b border-solid">
    <div className="flex justify-between items-center h-[50px] max-w-[1200px] mx-auto my-0">
          <ul className="list-none flex gap-[25px]">
            <li className="ext-sm font-semibold uppercase cursor-pointer">Home</li>
            <li className="ext-sm font-semibold uppercase cursor-pointer">About</li>
            <li className="ext-sm font-semibold uppercase cursor-pointer">Categories</li>
          </ul>
        <div className="text-[22px] font-bold cursor-pointer"> ESTORE </div>
        <div className=" flex items-center gap-5">
               <TbSearch className="text-xl cursor-pointer" />
               <AiOutlineHeart className="text-xl cursor-pointer" /> 
               <span className="relative">
                   <CgShoppingCart className="cursor-pointer"/>
                   <span className="min-w-[20px] text-center absolute top-[-5px] text-xs bg-[#8e2de2] cursor-pointer leading-none p-[2.5px] rounded-[10px] -right-3">5</span>
               </span>
        </div>


    </div>
    </header>
};

export default Header;
 