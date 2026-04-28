import Link from "next/link"
import AdvisorCard from "@/components/dashboard/AdvisorCard"

export default function Header( userData: any ) { 
    console.log(userData)

    return (
        <>
            <header>

                <div className="pop-bg"></div>

                <div className="pop-search">
                    <span className="ser-clo"> + </span>
                    <div className="inn">
                        <form>
                            <input placeholder="Search here..." type="text" />  
                        </form>
                        <div className="rel-sear">
                            <h4>Top searches:</h4>
                            <Link href="all-profiles.html"> Browse all profiles </Link>
                            <Link href="all-profiles.html"> Mens profile </Link>
                            <Link href="all-profiles.html"> Female profile </Link>
                            <Link href="all-profiles.html"> New profiles </Link>
                        </div>
                    </div>
                </div>

                <div className="hom-top">
                    <div className="container">
                        <div className="row">
                            <div className="hom-nav">
                                <div className="logo">
                                    <Link className="logo-brand" href="/">
                                        <img
                                            alt=""
                                            className="ic-logo"
                                            loading="lazy"
                                            src="/images/logo-main.png"
                                        />
                                    </Link>
                                </div>

                                <div className="bl">
                                </div>

                                <AdvisorCard advisorcard={userData}/>

                                <div className="mob-menu">
                                    <div className="mob-me-ic">
                                        <ul>
                                            <li>
                                                <AdvisorCard advisorcard={userData}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}