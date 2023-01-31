import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
const Newsletter = () => {
    return (
        <div className="w-full h-[400px] flex items-center bg-center bg-no-repeat bg-cover;
        bg-[url('/src/assets/category/newsletter-bg.jpeg')]">
            <div className="w-fit flex flex-col items-center text-center mx-auto my-0">
                <span className="uppercase text-[rgba(0,0,0,0.5)] mb-[15px]">Newsletter</span>
                <span className=" leading-[30px] font-medium uppercase text-[28px] mb-5 px-[30px] py-0">
                    Sign up for latest updates and offers
                </span>
                <div className="flex gap-[5px] mb-2.5">
                    <input className=" h-10 border text-base w-[300px] px-3 py-0 rounded-none border-solid border-[rgba(0,0,0,0.2)];
  outline: none" type="text" placeholder="Email Address" />
                    <button className="h-10  flex items-center justify-center cursor-pointer text-base text-[white] w-[120px] border-b-[3px] border-b-[#6516aa] border-0 border-solid outline-none bg-[#8e2de2]">Subscribe</button>
                </div>
                <span className="text-sm text-[rgba(0,0,0,0.5)] mb-5">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="flex gap-2.5">
                    <div className=" w-[30px] h-[30px] flex items-center justify-center text-[white] rounded-[50%] bg-black/80 cursor-pointer">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className=" w-[30px] h-[30px] flex items-center justify-center text-[white] rounded-[50%] bg-black/80 cursor-pointer">
                        <FaFacebookF size={14} />
                    </div>
                    <div className=" w-[30px] h-[30px] flex items-center justify-center text-[white] rounded-[50%] bg-black/80 cursor-pointer">
                        <FaTwitter size={14} />
                    </div>
                    <div className=" w-[30px] h-[30px] flex items-center justify-center text-[white] rounded-[50%] bg-black/80 cursor-pointer">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;