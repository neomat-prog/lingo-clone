import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button variant={"ghost"} className="w-[180px]">
          <Image
            src={"/hr.svg"}
            alt="Croatian"
            height={32}
            width={40}
            style={{ width: "auto" }}
            className="mr-2 rounded-md"
          />
          Croatian
        </Button>
        <Button variant={"ghost"} className="w-[180px]">
          <Image
            src={"/es.svg"}
            alt="Spanish"
            height={32}
            width={40}
            style={{ width: "auto" }}
            className="mr-2 rounded-md"
          />
          Spanish
        </Button>
        <Button variant={"ghost"} className="w-[180px]">
          <Image
            src={"/fr.svg"}
            alt="French"
            height={32}
            width={40}
            style={{ width: "auto" }}
            className="mr-2 rounded-md"
          />
          French
        </Button>
        <Button variant={"ghost"} className="w-[180px]">
          <Image
            src={"/jp.svg"}
            alt="Japanese"
            height={32}
            width={40}
            style={{ width: "auto" }}
            className="mr-2 rounded-md"
          />
          Japanese
        </Button>
        <Button variant={"ghost"} className="w-[180px]">
          <Image
            src={"/it.svg"}
            alt="Italian"
            height={32}
            width={40}
            style={{ width: "auto" }}
            className="mr-2 rounded-md"
          />
          Italian
        </Button>
      </div>
    </footer>
  );
};
