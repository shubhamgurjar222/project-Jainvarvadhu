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
}

export async function signup (data: SignupInput) {
    
    const gender = data.gender;
    const trimmedFirstName = data.first_name?.trim();
    const trimmedLastName = data.last_name?.trim();
    const trimmedDOB = data.dob;
    const trimmedCommunity = data.community?.trim();
    const trimmedCountry = data.country?.trim();
    const trimmedEmail = data.email?.trim();
    const trimmedPassword = data.hashed_password?.trim();
    const trimmedPhoneNo = data.phone_no?.trim();
    

    try {
        const existingEmail = await prisma.users.findUnique({
            where: {
                email: trimmedEmail,
            },
        });

        if (existingEmail) {
            return { success: false, message: "Email ld already registred" };
        }

        const existingPhoneNo = await prisma.users.findUnique({
            where: {
                phone_no: trimmedPhoneNo,
            },
        })

        if (existingPhoneNo) {
            return { success: false, message: "Phone Number already registred" };
        }

        const response = await prisma.users.create({
            data: {
                first_name: trimmedFirstName,
                last_name: trimmedLastName,
                email: trimmedEmail,
                hashed_password: trimmedPassword,
                phone_no: trimmedPhoneNo,
                dob: trimmedDOB,
                gender: gender,
                community: trimmedCommunity,
                country: trimmedCountry,
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                hashed_password: true,
                phone_no: true,
                dob: true,
                gender: true,
                community: true,
                country: true,
                created_at: true,
                updated_at: true
            },
        });
    
        return response;
    } catch (error) {
        console.error("Error adding new user in DB:", error);
        return null;
    }

}