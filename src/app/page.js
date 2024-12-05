import Image from "next/image";
import bg from "../../public/background/background-home.jpg";
import Book from "./components/models/Book";
import Navigation from "./components/navigation/index"
import dynamic from "next/dynamic";

const RenderModel = dynamic(() => import("./components/RenderModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25"/>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full fixed">
          <p className="text-center text-accent text-3xl md:text-4xl lg:text-5xl p-4">
            Simon's Developer Website
          </p>
        </div>
        { /* Navigation and 3D model */ }
          <Navigation />
          <RenderModel>
            <Book />
          </RenderModel>
      </div>
    </main>
  );
}
