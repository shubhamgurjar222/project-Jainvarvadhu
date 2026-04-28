export default function AdvisorCard(userData: any) {
    
    const firstName = userData.advisorcard.header.dashboard.first_name
    const lastName = userData.advisorcard.header.dashboard.last_name
    const photoURL = userData.advisorcard.header.dashboard.user_photos.photo_url
    
    return (
        <>
            <div className="al">
                <div className="head-pro">
                    <img src={photoURL} alt="" loading="lazy" />
                    <b>Advisor</b>
                    <br />
                    <h4>{`${firstName} ${lastName}`}</h4>
                    {/* <span className="fclick"></span> */}
                </div>
            </div>
        </>
    )
}

