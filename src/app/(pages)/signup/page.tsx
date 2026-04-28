
import SignupClient from "@/app/(pages)/signup/SignupClient"
import { getCountries, getStatesOfCountry, getCitiesOfState } from '@countrystatecity/countries';

export const metadata = {
    title: "Signup - Wedding Matrimony",
    description: "Signup for the Wedding Matrimony website.",
}


export default  function Signup() {
  
  return <SignupClient />
}