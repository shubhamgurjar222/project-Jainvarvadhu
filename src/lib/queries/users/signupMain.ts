import { prisma } from "@/lib/prisma";

type ProfileInput = {
  user_id: number;
  city: string;
  state: string;
  height_cm: string;
  married_status: string;
  diet: string;
  drinks: boolean;
  smokes: boolean;
  income_range: string;
  work_type: string;
  about: string;
  
};

async function saveUserDetails(userId: number, data: any) {
    return await prisma.$transaction(async (tx) => {

    await tx.user_profiles.upsert({
      where: { user_id: userId },
      update: {
        city: data.city,
        state: data.state,
        height_cm: data.height,
        married_status: data.marriedStatus,
        diet: data.diet,
        drinks: data.drink === "yes",
        smokes: data.smoke === "yes",
        income_range: data.income,
        work_type: data.workDetails,
        about: data.aboutYourSelf,
      },
      create: {
        user_id: userId,
        city: data.city,
        state: data.state,
        height_cm: data.height,
        married_status: data.marriedStatus,
        diet: data.diet,
        drinks: data.drink === "yes",
        smokes: data.smoke === "yes",
        income_range: data.income,
        work_type: data.workDetails,
        about: data.aboutYourSelf,
      },
    }) ;
    })
}