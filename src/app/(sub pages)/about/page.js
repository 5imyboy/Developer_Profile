import Image from "next/image";
import bg from "../../../../public/background/background-about.jpg"; 
import RenderModel from "@/app/components/RenderModel";
import AboutDetails from "@/app/components/about";
import dynamic from "next/dynamic";

const Binocular = dynamic(() => import("@/app/components/models/Binocular"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image 
        src={bg} 
        priority sizes="100vw"
        alt="background-image" 
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Binocular />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute w-full flex flex-col items-center text-center top-[%50] sm:top-[%60] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Simon Yong</h1>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
