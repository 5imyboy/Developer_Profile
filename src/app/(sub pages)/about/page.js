import Image from "next/image";
import bg from "../../../../public/background/background-about.jpg"; 
import RenderModel from "@/app/components/RenderModel";
import Binocular from "@/app/components/models/Binocular";
import AboutDetails from "@/app/components/about";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Binocular />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute w-full flex flex-col items-center text-center top-[%60] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-9xl text-accent">Simon Yong</h1>
          <p className="font-light text-2xl text-foreground text-ls mt-8">About me:</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
