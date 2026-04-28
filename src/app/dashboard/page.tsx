import Dashboard from "@/components/dashboard/Dashboard";
import getUserByAccessToken from "@/lib/getUserByAccessToken";
import { redirect } from "next/navigation";
import getUserFullDataById from "@/lib/queries/dashboard/getUserFullDataById"

export default async function page() {
  const user = await getUserByAccessToken()

  if (!user) {
    redirect("/login")
  }

  const userId = user.id
  const userData = await getUserFullDataById(userId)
  
  return (
    <>
      <Dashboard dashboard={userData} />
    </>
  );
}