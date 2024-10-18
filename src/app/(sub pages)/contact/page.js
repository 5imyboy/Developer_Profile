import Image from "next/image";
import bg from "../../../../public/background/background-contact.jpg"; 
import Form from "@/app/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="w-full sm:w-3/4 flex flex-col items-center justify-center space-y-6 ">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact:
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Send me a message!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
