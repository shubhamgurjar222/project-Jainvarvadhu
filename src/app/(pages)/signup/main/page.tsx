
import SignupMainClient from "@/app/(pages)/signup/main/SignupMainDetails"
import getUserByAccessToken from "@/lib/getUserByAccessToken"
import { redirect } from "next/navigation";

export const metadata = {
    title: "Signup Main - Wedding Matrimony",
    description: "Signup Main for the Wedding Matrimony website.",
}

export default async function Page() {
  
  return <SignupMainClient />
  
}