import Link from "next/link";


export default function Footer() {
  return (
    <div className="bg-[#F2F9FF] ">
        <div className="mt-10 p-10 md:mt-20 md:pt-20 md:px-20 flex flex-col text-center md:text-left md:flex-row gap-5 content-center justify-center md:justify-evenly ">
            <div className="md:w-80">
            <h1 className="text-2xl font-semibold text-[#2370C8]">LOGO.</h1>
            <p className="py-2">Lorem ipsum dolor sit amet consed adipi iquid ad demque us modi.Lorem ipsum dolor sit amet consectetur adipisicing  tempora aliquid ad doloremque sapiente saepe delectus modi.</p>
            <input type="radio" className="mx-2 mt-4"/>
            <input type="radio" className="mx-2 mt-4"/>
            <input type="radio" className="mx-2 mt-4"/>
            </div>
            <div className="">
              <h1 className="font-semibold text-xl hover:underline hover:underline-offset-8 hover:decoration-[#2370C8]">Our Links</h1>
               <ul className="space-y-2 pt-3">
                <li className="hover:text-blue-600"><Link href={'/'}>Home</Link></li>
                <li className="hover:text-blue-600"><Link href={'/about'}>About Us</Link></li>
                <li className="hover:text-blue-600"><Link href={'/services'}>Services</Link></li>
                <li className="hover:text-blue-600"><Link href={'/portfolio'}>Team</Link></li>
                <li className="hover:text-blue-600"><Link href={'/blog'}>Blog</Link></li>
               </ul>
            </div>
            <div>
            <h1 className="font-semibold text-xl hover:underline hover:underline-offset-8 hover:decoration-[#2370C8]">Our Company</h1>
              <ul  className="space-y-2 pt-3">
                <li className="hover:text-blue-600">About Company</li>
                <li className="hover:text-blue-600">Our Testimonial</li>
                <li className="hover:text-blue-600">Latest News</li>
                <li className="hover:text-blue-600">Our Mission</li>
                <li className="hover:text-blue-600">Get a free Quot</li>
              </ul>
            </div>
            <div>
            <h1 className="font-semibold text-xl hover:underline hover:underline-offset-8 hover:decoration-[#2370C8]">Our Services</h1>
            <ul className="space-y-2 pt-3">
                <li className="hover:text-blue-600">App development</li>
                <li className="hover:text-blue-600">Web development</li>
                <li className="hover:text-blue-600">Graphic Designing</li>
                <li className="hover:text-blue-600">Web Solution</li>
                <li className="hover:text-blue-600">App Design</li>
              </ul>
            </div>
        </div>
        <hr/>
        <p className="text-center">Copyright .All Rights Reserved</p>
      
    </div>
  )
}
