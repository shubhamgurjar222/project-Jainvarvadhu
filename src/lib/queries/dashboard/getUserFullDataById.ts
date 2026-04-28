import { prisma } from "@/lib/prisma";

export default async function getUserFullDataById(userId: number) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone_no: true,
        dob: true,
        gender: true,

        family_details: {
          select: {
            father_occupation: true,
            mother_occupation: true,
            mother_tongue: true,
            sister_count: true,
            brother_count: true,
            financial_status: true,
            living_with_family: true,
          },
        },

        user_hobbies: {
          select: {
            name: true,
          },
        },

        user_photos: {
          select: {
            photo_url: true,
            is_primary: true,
          },
        },

        user_profiles: {
          select: {
            city: true,
            state: true,
            height_cm: true,
            married_status: true,
            manglik_status: true,
            complexion: true,
            blood_group: true,
            diet: true,
            drinks: true,
            smokes: true,
            income_range: true,
            work_type: true,
            about: true,
          },
        },

        user_qualifications: {
          select: {
            degree_type: true,
            stream: true,
            passing_year: true,
            colleges: {
              select: {
                college_name: true,
                state: true,
                district: true,
              },
            },
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}