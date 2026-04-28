import Link from "next/link"


export default function Home() {
    return (
        <div className="col-md-8 col-lg-9">
                            <div className="col-md-12 db-sec-com db-new-pro-main">
                                <h2 className="db-tit">New Profiles Matches</h2>
                                <ul className="slider slick-initialized slick-slider">
                                    <div aria-live="polite" className="slick-list draggable">
                                        <div className="slick-track" role="listbox" style={{opacity: 1, width: "1358px", transform: "translate3d(-388px, 0px, 0px)"}}>
                                            <li className="slick-slide" data-slick-index="0" aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide00" style={{width: "194px"}}>
                                                <div className="db-new-pro">
                                                    <img src="images/profiles/16.jpg" alt="" className="profile"></img>
                                                    <div>
                                                        <h5>Julia ann</h5>
                                                        <span className="city">New york</span>
                                                        <span className="age">22 Years old</span>
                                                    </div>
                                                    <div className="pro-ave" title="User currently available">
                                                        <span className="pro-ave-yes"></span>
                                                    </div>
                                                    <Link href="profile-details" className="fclick" target="_blank" tabIndex={-1}>&nbsp;</Link>
                                                </div>
                                            </li>
                                            <li className="slick-slide" data-slick-index="1" aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide01" style={{width: "194px"}}>
                                                <div className="db-new-pro">
                                                    <img src="images/profiles/2.jpg" alt="" className="profile"></img>
                                                    <div>
                                                        <h5>Julia ann</h5>
                                                        <span className="city">New york</span>
                                                        <span className="age">22 Years old</span>
                                                    </div>
                                                    <Link href="profile-details" className="fclick" target="_blank" tabIndex={-1}>&nbsp;</Link>
                                                </div>
                                            </li>
                                            <li className="slick-slide slick-current slick-active" data-slick-index="2" aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide02" style={{width: "194px"}}>
                                                <div className="db-new-pro">
                                                    <img src="images/profiles/3.jpg" alt="" className="profile"></img>
                                                    <div>
                                                        <h5>Julia ann</h5>
                                                        <span className="city">New york</span>
                                                        <span className="age">22 Years old</span>
                                                    </div>
                                                    <Link href="profile-details" className="fclick" target="_blank" tabIndex={0}>&nbsp;</Link>
                                                </div>
                                            </li>
                                            <li className="slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide03" style={{width: "194px"}}>
                                                <div className="db-new-pro">
                                                    <img src="images/profiles/4.jpg" alt="" className="profile"></img>
                                                    <div>
                                                        <h5>Julia ann</h5>
                                                        <span className="city">New york</span>
                                                        <span className="age">22 Years old</span>
                                                    </div>
                                                    <Link href="profile-details" className="fclick" target="_blank" tabIndex={0}>&nbsp;</Link>
                                                </div>
                                            </li>
                                            <li className="slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide04" style={{width: "194px"}}>
                                                <div className="db-new-pro">
                                                    <img src="images/profiles/5.jpeg" alt="" className="profile"></img>
                                                    <div>
                                                        <h5>Julia ann</h5>
                                                        <span className="city">New york</span>
                                                        <span className="age">22 Years old</span>
                                                    </div>
                                                    <Link href="profile-details" className="fclick" target="_blank" tabIndex={0}>&nbsp;</Link>
                                                </div>
                                            </li>
                                            <li className="slick-slide slick-active" data-slick-index="5" aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide05" style={{width: "194px"}}>
                                                <div className="db-new-pro">
                                                    <img src="images/profiles/6.jpg" alt="" className="profile"></img>
                                                    <div>
                                                        <h5>Julia ann</h5>
                                                        <span className="city">New york</span>
                                                        <span className="age">22 Years old</span>
                                                    </div>
                                                    <div className="pro-ave" title="User currently available">
                                                        <span className="pro-ave-yes"></span>
                                                    </div>
                                                    <Link href="profile-details" className="fclick" target="_blank" tabIndex={0}>&nbsp;</Link>
                                                </div>
                                            </li>
                                            <li className="slick-slide slick-active" data-slick-index="6" aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide06" style={{width: "194px"}}>
                                                <div className="db-new-pro">
                                                    <img src="images/profiles/14.jpg" alt="" className="profile"></img>
                                                    <div>
                                                        <h5>Julia ann</h5>
                                                        <span className="city">New york</span>
                                                        <span className="age">22 Years old</span>
                                                    </div>
                                                    <div className="pro-ave" title="User currently available">
                                                        <span className="pro-ave-yes"></span>
                                                    </div>
                                                    <Link href="profile-details" className="fclick" target="_blank" tabIndex={0}>&nbsp;</Link>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                                    <h2 className="db-tit">Profiles status</h2>
                                    <div className="db-pro-stat">
                                        <h6>Profile completion</h6>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="dropdown">
                                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">Edid profile</Link></li>
                                            <li><Link className="dropdown-item" href="#">View profile</Link></li>
                                            <li><Link className="dropdown-item" href="#">Profile visibility settings</Link></li>
                                            </ul>
                                        </div>
                                        <div className="db-pro-pgog">
                                            <span><b className="count act">90</b>%</span>
                                        </div>
                                        <ul className="pro-stat-ic">
                                            <li><span><i className="fa fa-heart-o like" aria-hidden="true"></i><b>12</b>Likes</span></li>
                                            <li><span><i className="fa fa-eye view" aria-hidden="true"></i><b>12</b>Views</span></li>
                                            <li><span><i className="fa fa-handshake-o inte" aria-hidden="true"></i><b>12</b>Interests</span></li>
                                            <li><span><i className="fa fa-hand-pointer-o clic" aria-hidden="true"></i><b>12</b>Clicks</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                                    <h2 className="db-tit">Plan details</h2>
                                    <div className="db-pro-stat">
                                        <h6 className="tit-top-curv">Standard plan</h6>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="dropdown">
                                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">Edid profile</Link></li>
                                            <li><Link className="dropdown-item" href="#">View profile</Link></li>
                                            <li><Link className="dropdown-item" href="#">Plan change</Link></li>
                                            <li><Link className="dropdown-item" href="#">Download invoice now</Link></li>
                                            </ul>
                                        </div>
                                        <div className="db-plan-card">
                                            <img src="images/icon/plan.png" alt=""></img>
                                        </div>
                                        <div className="db-plan-detil">
                                            <ul>
                                                <li>Plan name: <strong>Standard</strong></li>
                                                <li>Validity: <strong>6 Months</strong></li>
                                                <li>Valid till <strong>24 June 2024</strong></li>
                                                <li><Link href="" className="cta-3">Upgrade now</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-4 db-sec-com">
                                    <h2 className="db-tit">Recent chat list</h2>
                                    <div className="db-pro-stat">
                                        <div className="db-inte-prof-list db-inte-prof-chat">
                                            <ul>
                                                <li>
                                                    <div className="db-int-pro-1"> <img src="images/profiles/2.jpg" alt=""></img> </div>
                                                    <div className="db-int-pro-2">
                                                        <h5>Julia Ann</h5> <span>Illunois, United States</span> </div>
                                                </li>
                                                <li>
                                                    <div className="db-int-pro-1"> <img src="images/profiles/16.jpg" alt=""></img> </div>
                                                    <div className="db-int-pro-2">
                                                        <h5>Julia Ann</h5> <span>Illunois, United States</span> </div>
                                                </li>
                                                <li>
                                                    <div className="db-int-pro-1"> <img src="images/profiles/13.jpg" alt=""></img> </div>
                                                    <div className="db-int-pro-2">
                                                        <h5>Julia Ann</h5> <span>Illunois, United States</span> </div>
                                                </li>
                                                <li>
                                                    <div className="db-int-pro-1"> <img src="images/profiles/14.jpg" alt=""></img> </div>
                                                    <div className="db-int-pro-2">
                                                        <h5>Julia Ann</h5> <span>Illunois, United States</span> </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 db-sec-com">
                                    <h2 className="db-tit">Interest request</h2>
                                    <div className="db-pro-stat">
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="dropdown">
                                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" href="#">Edid profile</Link></li>
                                                <li><Link className="dropdown-item" href="#">View profile</Link></li>
                                                <li><Link className="dropdown-item" href="#">Plan change</Link></li>
                                                <li><Link className="dropdown-item" href="#">Download invoice now</Link></li>
                                            </ul>
                                        </div>
                                        <div className="db-inte-main">
                                        
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                <Link className="nav-link active" data-bs-toggle="tab" href="#home" aria-selected="true" role="tab">New requests</Link>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                <Link className="nav-link" data-bs-toggle="tab" href="#menu1" aria-selected="false" tabIndex={-1} role="tab">Accept request</Link>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                <Link className="nav-link" data-bs-toggle="tab" href="#menu2" aria-selected="false" tabIndex={-1} role="tab">Denay request</Link>
                                                </li>
                                            </ul>
                                    
                                            <div className="tab-content">
                                                <div id="home" className="container tab-pane active" role="tabpanel"><br></br>
                                                    <div className="db-inte-prof-list">
                                                        <ul>
                                                            <li>
                                                                <div className="db-int-pro-1"> <img src="images/profiles/men1.jpg" alt=""></img> <span className="badge bg-primary user-pla-pat">Platinum user</span></div>
                                                                <div className="db-int-pro-2">
                                                                    <h5>John Smith</h5> 
                                                                    <ol className="poi">
                                                                        <li>City: <strong>Illunois</strong></li>
                                                                        <li>Age: <strong>21</strong></li>
                                                                        <li>Height: <strong>5.7</strong></li>
                                                                        <li>Job: <strong>Working</strong></li>
                                                                    </ol>
                                                                    <ol className="poi poi-date">
                                                                        <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                    </ol>
                                                                    <Link href="profile-details" className="cta-5" target="_blank">View full profile</Link>
                                                                </div>
                                                                <div className="db-int-pro-3">
                                                                    <button type="button" className="btn btn-success btn-sm">Accept</button>
                                                                    <button type="button" className="btn btn-outline-danger btn-sm">Denay</button>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="db-int-pro-1"> <img src="images/profiles/men2.jpg" alt=""></img> <span className="badge bg-primary user-pla-gold">Gold user</span></div>
                                                                <div className="db-int-pro-2">
                                                                    <h5>John Smith</h5> 
                                                                    <ol className="poi">
                                                                        <li>City: <strong>Illunois</strong></li>
                                                                        <li>Age: <strong>21</strong></li>
                                                                        <li>Height: <strong>5.7</strong></li>
                                                                        <li>Job: <strong>Working</strong></li>
                                                                    </ol>
                                                                    <ol className="poi poi-date">
                                                                        <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                    </ol>
                                                                    <Link href="profile-details" className="cta-5" target="_blank">View full profile</Link>
                                                                </div>
                                                                <div className="db-int-pro-3">
                                                                    <button type="button" className="btn btn-success btn-sm">Accept</button>
                                                                    <button type="button" className="btn btn-outline-danger btn-sm">Denay</button>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="db-int-pro-1"> <img src="images/profiles/men3.jpg" alt=""></img> <span className="badge bg-primary user-pla-free">Free user</span></div>
                                                                <div className="db-int-pro-2">
                                                                    <h5>John Smith</h5> 
                                                                    <ol className="poi">
                                                                        <li>City: <strong>Illunois</strong></li>
                                                                        <li>Age: <strong>21</strong></li>
                                                                        <li>Height: <strong>5.7</strong></li>
                                                                        <li>Job: <strong>Working</strong></li>
                                                                    </ol>
                                                                    <ol className="poi poi-date">
                                                                        <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                    </ol>
                                                                    <Link href="profile-details" className="cta-5" target="_blank">View full profile</Link>
                                                                </div>
                                                                <div className="db-int-pro-3">
                                                                    <button type="button" className="btn btn-success btn-sm">Accept</button>
                                                                    <button type="button" className="btn btn-outline-danger btn-sm">Denay</button>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="db-int-pro-1"> <img src="images/profiles/men4.jpg" alt=""></img> </div>
                                                                <div className="db-int-pro-2">
                                                                    <h5>John Smith</h5> 
                                                                    <ol className="poi">
                                                                        <li>City: <strong>Illunois</strong></li>
                                                                        <li>Age: <strong>21</strong></li>
                                                                        <li>Height: <strong>5.7</strong></li>
                                                                        <li>Job: <strong>Working</strong></li>
                                                                    </ol>
                                                                    <ol className="poi poi-date">
                                                                        <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                    </ol>
                                                                    <Link href="profile-details" className="cta-5" target="_blank">View full profile</Link>
                                                                </div>
                                                                <div className="db-int-pro-3">
                                                                    <button type="button" className="btn btn-success btn-sm">Accept</button>
                                                                    <button type="button" className="btn btn-outline-danger btn-sm">Denay</button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="menu1" className="container tab-pane fade" role="tabpanel"><br></br>
                                                    <div className="db-inte-prof-list">
                                                        <ul>
                                                            <li>
                                                                <div className="db-int-pro-1"> <img src="images/profiles/men5.jpg" alt=""></img> </div>
                                                                <div className="db-int-pro-2">
                                                                    <h5>John Smith</h5> 
                                                                    <ol className="poi">
                                                                        <li>City: <strong>Illunois</strong></li>
                                                                        <li>Age: <strong>21</strong></li>
                                                                        <li>Height: <strong>5.7</strong></li>
                                                                        <li>Job: <strong>Working</strong></li>
                                                                    </ol>
                                                                    <ol className="poi poi-date">
                                                                        <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                        <li>Accept on: 3:000 PM, 21 August 2024</li>
                                                                    </ol>
                                                                    <Link href="profile-details" className="cta-5" target="_blank">View full profile</Link>
                                                                </div>
                                                                <div className="db-int-pro-3">
                                                                    <button type="button" className="btn btn-outline-danger btn-sm">Denay</button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="menu2" className="container tab-pane fade" role="tabpanel"><br></br>
                                                    <div className="db-inte-prof-list">
                                                        <ul>
                                                            <li>
                                                                <div className="db-int-pro-1"> <img src="images/profiles/men1.jpg" alt=""></img> </div>
                                                                <div className="db-int-pro-2">
                                                                    <h5>John Smith</h5> 
                                                                    <ol className="poi">
                                                                        <li>City: <strong>Illunois</strong></li>
                                                                        <li>Age: <strong>21</strong></li>
                                                                        <li>Height: <strong>5.7</strong></li>
                                                                        <li>Job: <strong>Working</strong></li>
                                                                    </ol>
                                                                    <ol className="poi poi-date">
                                                                        <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                        <li>Denay on: 3:000 PM, 21 August 2024</li>
                                                                    </ol>
                                                                    <Link href="profile-details" className="cta-5" target="_blank">View full profile</Link>
                                                                </div>
                                                                <div className="db-int-pro-3">
                                                                    <button type="button" className="btn btn-success btn-sm">Accept</button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}