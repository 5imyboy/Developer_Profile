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
      <div className="w-full h-screen">
        { /* Navigation and 3D model */ }
          <Navigation />
          <RenderModel>
            <Book />
          </RenderModel>
      </div>
    </main>
  );
}
