import Image from "next/image";
import RenderModel from "./components/RenderModel";
import Book from "./components/models/Book";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-screen">
        {
          /* Navigation and 3D model */
          <RenderModel>
            <Book />
          </RenderModel>
        }
      </div>
    </main>
  );
}
