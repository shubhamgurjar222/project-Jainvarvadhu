import { prisma } from "@/lib/prisma";

type SignupInput = {
    gender: "male" | "female";
    first_name: string;
    last_name: string;
    dob: Date;
    community: string;
    country: string;
    email: string;
    hashed_password: string;
    phone_no: string;
    city: string;
    state: string;
    living: string;
    height: string;
    marriedStatus: string;
    diet: string;
    drink: string;
    smoke: string;
    highestqualification: string;
    collegeId: string;
    income: string;
    workDetails: string;
    aboutYourSelf: string;
    hobbies1: string;
    hobbies2: string;
    hobbies3: string;
    hobbies4: string;
    hobbies5: string;
    fatherDetails: string;
    motherDetails: string;
    sisters: string;
    brothers: string;
    familyFinancialStatus: string;
}

export async function signup (data: SignupInput) {
    
    const gender = data.gender;
    const trimmedFirstName = data.first_name?.trim();
    const trimmedLastName = data.last_name?.trim();
    const dob = data.dob;
    const trimmedCommunity = data.community?.trim();
    const trimmedCountry = data.country?.trim();
    const trimmedEmail = data.email?.trim();
    const trimmedPassword = data.hashed_password?.trim();
    const trimmedPhoneNo = data.phone_no?.trim();

    try {
        return await prisma.$transaction(async (tx) => {
            
            const existingEmail = await tx.users.findUnique({
                where: {
                    email: trimmedEmail,
                },
            });
    
            if (existingEmail) {
                return { success: false, message: "Email ld already registred" };
            }
    
            const existingPhoneNo = await tx.users.findUnique({
                where: {
                    phone_no: trimmedPhoneNo,
                },
            })
    
            if (existingPhoneNo) {
                return { success: false, message: "Phone Number already registred" };
            }

            const user = await tx.users.create({
                data: {
                    first_name: trimmedFirstName,
                    last_name: trimmedLastName,
                    email: trimmedEmail,
                    hashed_password: trimmedPassword,
                    phone_no: trimmedPhoneNo,
                    dob: dob,
                    gender: gender,
                    community: trimmedCommunity,
                    country: trimmedCountry,
                },
            });

            const userId = user.id;

            await tx.user_profiles.create({
                data: {
                    user_id: userId,
                    city: data.city.trim(),
                    state: data.state.trim(),
                    height_cm: data.height.trim(),
                    married_status: data.marriedStatus.trim(),
                    diet: data.diet.trim(),
                    drinks: data.drink === "yes",
                    smokes: data.smoke === "yes",
                    income_range: data.income.trim(),
                    work_type: data.workDetails.trim(),
                    about: data.aboutYourSelf.trim(),
                },
            });

            await tx.user_qualifications.create({
                data: {
                    user_id: userId,
                    degree_type: data.highestqualification.trim(),
                    college_id: Number(data.collegeId),
                },
            });

            await tx.family_details.create({
                data: {
                    user_id: userId,
                    father_occupation: data.fatherDetails.trim(),
                    mother_occupation: data.motherDetails.trim(),
                    sister_count: Number(data.sisters),
                    brother_count: Number(data.brothers),
                    financial_status: data.familyFinancialStatus as any,
                },
            });

            await tx.user_hobbies.create({
                data: {
                    user_id: userId,
                    name: [
                        data.hobbies1,
                        data.hobbies2,
                        data.hobbies3,
                        data.hobbies4,
                        data.hobbies5,
                    ]
                        .filter(Boolean)
                        .map(h => h.trim())
                        .join(", "),
                },
            });

            return { success: true, userId };
        })
    
    } catch (error) {
        console.error("Error adding new user in DB:", error);
        return null;
    }

}