import Image from "next/image";
import model from "/public/me1.png";
import Logo from "/public/logo.png";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const HeroSection = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]  ">
        <a href="">
          <Image
            src={Logo}
            width={120}
            height={80}
            alt="logo"
            className="max-h-[80px] h-full object-contain object-center  "
          />
        </a>
        <div className="flex flex-col justify-center h-[80%]  ">
          <span className="text-blue-700">It`s Me</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Shaik Mohammed, <br /> Arshad Shareef.
          </h2>
          <Link
            href={"#"}
            className="text-white border-b  border-[#525252] hover:p-[10px] hover:bg-gray-700 transition-all ease-in-out mr-auto py-[10px] font-[600] "
          >
            Hire Me &rarr;
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <Image
          src={model}
          alt="Image"
          width={800}
          height={1200}
          className="w-full max-w-[90vh] object-contain "
        />
      </div>
      <div className="w-[90%] mx-auto py-[30px] flex flex-col z-2 items-center ">
        <a
          href="#"
          className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-gray-700 text-white rounded-lg mx-auto pb-0.5 font-[600]"
        >
          Hire Me
        </a>
        <h2 className="bg-clip-text mt-25 text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans  relative z-20 font-bold tracking-tight">
          About Me
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-5">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-5">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </div>


      <ShootingStars className="z-[-1] "/>
      <StarsBackground className="z-[-1] "/>
    </div>
  )
}

export default HeroSection