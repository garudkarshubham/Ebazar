
import BannerImg from "../../../assets/category/banner.jpg";

const Banner = () => {
    return (
        <div className="relative bg-[linear-gradient(to_right,#8e2de2,#4a00e0)] h-[calc(100vh_-_80px)] px-0 py-10">
            <div className="h-full flex justify-end items-center flex-col-reverse max-w-[calc(100%_-_20px)] relative   mx-auto my-0">
                <div className="text-[white] text-center flex flex-col items-center absolute -translate-y-2/4 left-[50px]  top-2/4">
                    <h1 className=" font-bold leading-none text-[white] text-[180px] mb-5">SALES</h1>
                    <p className="  max-w-[500px] text-lg leading-6  mb-10 mr-10">
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="flex justify-center gap-5">
                        <div className="uppercase text-[13px] font-medium w-fit transition-all duration-[ease] delay-[0.3s] cursor-pointer px-5 py-2.5 border-2 border-solid border-[white] hover:opacity-60">Read More</div>
                        <div className="bg-[white] text-[black] uppercase text-[13px] font-medium w-fit transition-all duration-[ease] delay-[0.3s] cursor-pointer px-5 py-2.5 border-2 border-solid border-[black] hover:opacity-60">Shop Now</div>
                    </div>
                </div>
                <img className="relative z-[9] flex justify-between bg-[#8e2de2] w-[500px] mr-[60px] ml-[60px] mt-[50px] mb-5 my-0" src={BannerImg} alt=''/>
            </div>
        </div>
    );
};

export default Banner;