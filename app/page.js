import HomePage from "./(components)/card/card";
import CardsMore from "./(components)/cardsMore/cardsMore";
import PortfolioCard from "./(components)/portfolioCard/portfolioCard";
import AboutUsSection from "./(components)/aboutUsSection/aboutUsSection";
import Image from "next/image";
import ImagesCard from "./(components)/imagesCard/imagesCard";

export default function Home() {
  return (
    <div className="bg-white">
    <div className='bg-[#2370C8] text white'>
    {/* <Header/> */}
    <div className=" text-white lg:px-20 md:py-28 px-5 py-5  xl:px-40 sm:px-14">
    <h1 className="text-2xl md:text-6xl font-bold">Creative  <br/> Digital agency</h1>
    <p className="text-white py-5 text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur elit <br/>Quasi doloremque impedit quod elis.</p>
    <button className="text-white rounded-3xl bg-[#5299eb] px-5 py-2">Learn More</button>
    </div>
    
    </div>
    <div className="">
      <h1 className="mt-5  md:mt-10 lg:mt-20 text-xl text-center font-bold text-[#2370C8]">OUR SERVICES</h1>
      <p className="text-center text-2xl font-semibold">We are providing Digital Services</p>
    <HomePage/>
    </div>
    <AboutUsSection/>
    <div className=" bg-[#F2F9FF] mx-auto p-4 sm:p-6 md:p-14 lg:p-28 ">
       <div className="border-2 border-white flex flex-col  md:flex-row">
        <CardsMore heading="Smart Planing" src="/imgs/plan1.jpg"/>
        <CardsMore heading="Our Partnership" src="/imgs/partner.jpg"/>
        <CardsMore heading="Super Ideas" src="/imgs/idea.jpeg"/>
       </div>
    </div>
    <PortfolioCard/>
    <div className=" bg-[#F2F9FF] py-5 md:py-10">
    <h1 className="mt-5  md:mt-10 lg:mt-20 text-xl text-center font-bold text-[#2370C8]">OUR TEAM</h1>
      <p className="text-center text-xl md:text-2xl font-semibold">Our Top Dedicated Professionals</p>
      <div className=" mx-auto grid gap-3 gap-x-4 py-5  md:w-9/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ImagesCard src="/imgs/machine.png" title="Muhammad Uzair Aslam" height="300px"/>
        <ImagesCard src="/imgs/machine.png" title="Muhammad Uzair Aslam" height="300px"/>
        <ImagesCard src="/imgs/machine.png" title="Muhammad Uzair Aslam" height="300px"/>
      </div>
    </div>
    </div>
  )
}
