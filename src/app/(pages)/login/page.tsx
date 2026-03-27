import { Metadata } from "next"
import Link from "next/link"

export const metadata = {
    title: "Login - Wedding Matrimony",
    description: "Login component for the Wedding Matrimony website.",
}


export default function Login() {
    return (
        <>
            <section>
                <div className="login">
                    <div className="container">
                        <div className="row">

                            <div className="inn">
                                <div className="lhs">
                                    <div className="tit">
                                        <h2>Now <b>Find <br></br> your life partner</b> Easy and fast.</h2>
                                    </div>
                                    <div className="im">
                                        <img src="images/login-couple.png" alt=""></img>
                                    </div>
                                    <div className="log-bg">&nbsp;</div>
                                </div>
                                <div className="rhs">
                                    <div>
                                        <div className="form-tit">
                                            <h4>Start for free</h4>
                                            <h1>Sign in to Jainvarvadhu</h1>
                                            <p>Not a member? <Link href="/signup">Sign up now</Link></p>
                                        </div>
                                        <div className="form-login">
                                            <form>
                                                <div className="form-group">
                                                    <label className="lb">Email:</label>
                                                    <input type="email" className="form-control" id="email"
                                                        placeholder="Enter email" name="email" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="lb">Password:</label>
                                                    <input type="password" className="form-control" id="pwd"
                                                        placeholder="Enter password" name="pswd"></input>
                                                </div>
                                                <div className="form-group form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" name="agree"></input> Remember
                                                        me
                                                    </label>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}