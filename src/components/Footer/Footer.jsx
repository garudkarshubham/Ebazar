
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/category/payments.jpg";
const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1200px] flex gap-5 justify-between mx-auto my-0 px-5 py-[50px] flex-wrap">
                <div className="max-w-[300px]">
                    <div className="text-xl mb-5">About</div>
                    <div className="text-[rgba(0,0,0,0.5)] text-sm">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="max-w-[300px]">
                    <div className="text-xl mb-5">Contact</div>
                    <div className="flex mb-2.5">
                        <FaLocationArrow className="shrink-0 text-sm text-[rgba(0,0,0,0.5)] mr-2.5 mt-1"/>
                        <div className="text">
                            Kaya Rd, Punna, Kottan, Alap,
                            rahu, 688006
                        </div>
                    </div>
                    <div className="flex mb-2.5">
                        <FaMobileAlt className="shrink-0 text-sm text-[rgba(0,0,0,0.5)] mr-2.5 mt-1"/>
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="flex mb-2.5">
                        <FaEnvelope className="shrink-0 text-sm text-[rgba(0,0,0,0.5)] mr-2.5 mt-1"/>
                        <div className="text">Email: store@sgdev.com</div>
                    </div>
                </div>
                <div className="max-w-[300px]">
                    <div className="text-xl mb-5">Categories</div>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Headphones</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Smart Watches</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Bluetooth Speakers</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Wireless Earbuds</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Home Theatre</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Projectors</span>
                </div>
                <div className="max-w-[300px]">
                    <div className="text-xl mb-5">Pages</div>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Home</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">About</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Privacy Policy</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Returns</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Terms & Conditions</span>
                    <span className="text-[rgba(0,0,0,0.5)] tflex mb-2.5">Contact Us</span>
                </div>
            </div>
            <div className="border-t-[rgba(0,0,0,0.1)] border-t border-solid mb-10">
                <div className="flex items-center flex-col text-center gap-2.5 h-[60px] max-w-[1200px]  justify-between  mx-auto my-0 p-5 ">
                    <span className="text-xs text-[rgba(0,0,0,0.5)]">
                        ESTORE 2022 CREATED BY SG. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img  src={Payment} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Footer;