import { Metadata } from "next"
import Plans from "@/components/pages/plans"


export const metadata = {
    title: "Service - Wedding Matrimony",
    description: "Service component for the Wedding Matrimony website.",
}


export default function PlansPage() {
    return(
        <>  
            <Plans />
        </>
    ) 
}