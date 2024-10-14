import Image from "next/image";
import bg from "../../public/background/background-home.jpg";
import RenderModel from "./components/RenderModel";
import Book from "./components/models/Book";
import Navigation from "./components/navigation/index"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25"/>
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
