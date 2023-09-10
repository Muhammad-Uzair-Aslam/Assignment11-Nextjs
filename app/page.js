import HomePage from "./(components)/card/card";
import CardsMore from "./(components)/cardsMore/cardsMore";
import PortfolioCard from "./(components)/portfolioCard/portfolioCard";
import AboutUsSection from "./(components)/aboutUsSection/aboutUsSection";
import Image from "next/image";
import ImagesCard from "./(components)/imagesCard/imagesCard";
import PricingCard from "./(components)/pricingCard/pricingCard";
import Button from "./(components)/button/button";
import ClientsCard from "./(components)/clientsCard/clientsCard";
import OurBlogSection from "./(components)/ourBlogSection/ourBlogSection";
import Footer from "./(components)/footer/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <div className='bg-[#2370C8] text white'>
        {/* <Header/> */}
        <div className=" text-white lg:px-20 md:py-28 px-5 py-5  xl:px-40 sm:px-14">
          <h1 className="text-2xl md:text-6xl font-bold">Creative  <br /> Digital agency</h1>
          <p className="text-white py-5 text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur elit <br />Quasi doloremque impedit quod elis.</p>

          <Button text="Learn More" color="white" bg="#5299eb" />

        </div>

      </div>
      <div className="">
        <h1 className="mt-5  md:mt-10 lg:mt-20 text-xl text-center font-bold text-[#2370C8]">OUR SERVICES</h1>
        <p className="text-center text-2xl font-semibold">We are providing Digital Services</p>
        <HomePage />
      </div>
      <AboutUsSection />
      <div className=" bg-[#F2F9FF] mx-auto p-4 sm:p-6 md:p-14 lg:p-28 ">
        <div className="border-2 border-white flex flex-col  md:flex-row">
          <CardsMore heading="Smart Planing" src="/imgs/plan1.jpg" />
          <CardsMore heading="Our Partnership" src="/imgs/partner.jpg" />
          <CardsMore heading="Super Ideas" src="/imgs/idea.jpeg" />
        </div>
      </div>
      <PortfolioCard />
      <div className=" bg-[#F2F9FF] py-5 md:py-10">
        <h1 className="mt-5  md:mt-10 lg:mt-20 text-xl text-center font-bold text-[#2370C8]">OUR TEAM</h1>
        <p className="text-center text-xl md:text-2xl font-semibold">Our Top Dedicated Professionals</p>
        <div className=" mx-auto grid gap-3 gap-x-4 py-5  md:w-9/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ImagesCard src="/imgs/uzair.jpg" title="Muhammad Uzair Aslam " height="300px" color="black" name="black" desc="Web App Developer" />
          <ImagesCard src="/imgs/waseem.jpg" title="Muhammad Akash " height="300px" name="black" color="black" desc="Graphic Designer" />
          <ImagesCard src="/imgs/hafiz.jpg" title="Hafiz Abu Baker" height="300px" name="black" color="black" desc="Mobile App Developer" />
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-36 my-5 md:my-20 mx-auto" >

        <h1 className="text-[#2370C8] text-xl  font-semibold">Our Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28">
          <div><p className="text-xl mt-2 font-semibold  md:text-2xl">Choose a Plan that is right for you</p></div>
          <div><span className="text-[#2370C8] text-xl px-2 relative -top-2 font-semibold">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer ">

              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-xl  font-semibold relative -top-1">Yearly</span>
            </label>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <PricingCard btnbg="#2370C8" btncolor="white" cardBg="white" color="#2370C8" color1="black" weight="bold" number="$55" cardColor="black" title="Basic Plan" />
          <PricingCard btnbg="white" btncolor="#2370C8" cardBg="#2370C8" color="white" color1="white" weight="bold" number="$99" cardColor="white" title="standard Plan" />
          <PricingCard btnbg="#2370C8" btncolor="white" cardBg="white" color="#2370C8" color1="black" weight="bold" number="$150" cardColor="black" title="premium Plan" />
        </div>

      </div>
      <div className="bg-[#2370C8] my-5 md:my-12 py-5 md:py-14 text-white">
        <h1 className="text-center text-xl md:text-3xl  font-semibold">We're trusted by clients.</h1>
        <div className="grid gap-5  grid-cols-1 md:grid-cols-2 md:mx-44 w-3/4 mx-auto">
           <ClientsCard text="Consultant" title="Mina Watson"/>
           <ClientsCard text="IT Specialist" title="Edward Hunter"/>
        </div>
      </div>
      <div>
        <OurBlogSection/>
      </div>
    </div>
  )
}
