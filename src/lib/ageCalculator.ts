
export default function calculateAge(dob: string | Date): number {
  const today = new Date();
  const birthDate = new Date(dob);

  let age: number = today.getFullYear() - birthDate.getFullYear();
  const m: number = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}