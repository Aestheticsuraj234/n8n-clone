import { Button } from "@/components/ui/button";
import { onBoardUser } from "@/modules/auth/actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await onBoardUser();

  if(!user.success){
    return redirect("/sign-in");
  }


  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <Button>Welcome to n8n Clone</Button>
  </div>
  );
}
