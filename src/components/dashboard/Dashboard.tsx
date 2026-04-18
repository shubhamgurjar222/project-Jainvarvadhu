"use client"

import { fetchResources } from '@/utils/fetchResources';
import { useRouter } from "next/navigation";
import { useAlert } from "@/context/AlertContext";
import { useState } from 'react';
import Home from '@/components/dashboard/home/home';
import Plan from '@/components/dashboard/plan/plan';
import Settings from '@/components/dashboard/user-setting/setting';
import Profile from '@/components/dashboard/profile/profile';
import Interest from '@/components/dashboard/interest/interest'
import Chat from '@/components/dashboard/chat/chat';


export default function Dashboard () {

    enum Page {
        Home = "Home",
        Plan = "Plan",
        Profile = "Profile",
        ChatList = "ChatList",
        Interest = "Interest",
        Settings = "Settings"
    }
    const router = useRouter();
    const { showAlert } = useAlert();
    const [page, setPage] = useState<Page>(Page.Home);

    const handleLogout = async () => {
    const response: any = await fetchResources("/auth/logout");
    if (response.statusCode == 200) {
        showAlert("Success", "User logged out successFully", "success", true)
        router.replace("/login");
    }

  };



    return (
        <section>
            <div className="db">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="db-nav">
                                <div className="db-nav-pro"><img src="images/profiles/12.jpg" className="img-fluid" alt=""></img></div>
                                <div className="db-nav-list">
                                    <ul>
                                        <li><button onClick={() => setPage(Page.Home)} className="act"><i className="fa fa-tachometer" aria-hidden="true"></i>Dashboard</button></li>
                                        <li><button onClick={() => setPage(Page.Profile)} className="act"><i className="fa fa-male" aria-hidden="true"></i>Profile</button></li>
                                        <li><button onClick={() => setPage(Page.Interest)} className="act"><i className="fa fa-handshake-o" aria-hidden="true"></i>Interests</button></li>
                                        <li><button onClick={() => setPage(Page.ChatList)} className="act"><i className="fa fa-commenting-o" aria-hidden="true"></i>Chat list</button></li>
                                        <li><button onClick={() => setPage(Page.Plan)} className="act"><i className="fa fa-money" aria-hidden="true"></i>Plan</button></li>
                                        <li><button onClick={() => setPage(Page.Settings)} className="act"><i className="fa fa-cog" aria-hidden="true"></i>Setting</button></li>
                                        <li><button onClick={handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i>Log out</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        {page === "Home" ? <Home /> : null}
                        {page === "Plan" ? <Plan /> : null}
                        {page === "Profile" ? <Profile /> : null}
                        {page === "ChatList" ? <Chat /> : null}
                        {page === "Interest" ? <Interest /> : null}
                        {page === "Settings" ? <Settings /> : null}

                    </div>
                </div>
            </div>
        </section>
    );
}