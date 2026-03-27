import Link from "next/link"
// import AdvisorCard from "@/dashboard/AdvisorCard"

const Header: React.FC = () => {
    return (
        <>
            <header>
                <div id="preloader">
                    <div className="plod">
                        <span className="lod1">
                            <img alt="" loading="lazy" src="/images/loder/1.png" />
                        </span>
                        <span className="lod2">
                            <img alt="" loading="lazy" src="/images/loder/2.png" />
                        </span>
                        <span className="lod3">
                            <img alt="" loading="lazy" src="/images/loder/3.png" />
                        </span>
                    </div>
                </div>

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
                                    <ul>
                                        <li>
                                            <Link href="/plans"> Plans </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact"> Contact US </Link>
                                        </li>
                                        <li>
                                            <Link href="/about"> About US </Link>
                                        </li>
                                        <li>
                                            <Link href="/signup"> Register </Link>
                                        </li>
                                        <li>
                                            <Link href="/login"> Login </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mob-menu">
                                    <div className="mob-me-ic">
                                        <ul>
                                            <li>
                                                <Link href="/login"> Login </Link>
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

export default Header