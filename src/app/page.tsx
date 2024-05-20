import { motion } from "framer-motion";
import { Caret } from "@/components/caret";
import { DeveloperTyping } from "@/components/developer-typing";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-iron text-xl">Hi, my name is</h1>
        <h2 className="text-7xl text-torch-red">Abraham Oh.</h2>
        <h3 className="text-5xl text-iron">
          I&apos;m a <DeveloperTyping />
        </h3>
      </div>
    </div>
  );
}
