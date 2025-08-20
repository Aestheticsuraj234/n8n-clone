// Home component
import { Button } from "@/components/ui/button";
import { onBoardUser } from "@/modules/auth/actions";
import MotionScreenSection from "@/modules/home/components/motion-screen";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await onBoardUser();
  
  if(!user.success){
    return redirect("/sign-in");
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-full pt-32 px-4">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center max-w-6xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to{" "}
          <span className="text-[#ff2056] px-3 py-2 border rounded-lg border-[#ff2056] dark:bg-neutral-900 bg-neutral-100 inline-block mt-2">
            Coffee Automation
          </span>
        </h1>
        
        <p className="text-lg text-center mt-8 text-neutral-500 dark:text-neutral-400 max-w-4xl leading-relaxed">
          Build with the precision of code or the speed of drag-n-drop. Host with on-prem control or in-the-cloud convenience. n8n gives you more freedom to implement multi-step AI agents and integrate apps than any other tool.
        </p>
        
        <Link href="/get-started">
          <Button className="mt-8 px-8 py-3 text-lg">Get Started</Button>
        </Link>
      </div>
      
      {/* Dashboard Preview Section */}
     
        <MotionScreenSection />
     
    </div>
  );
}