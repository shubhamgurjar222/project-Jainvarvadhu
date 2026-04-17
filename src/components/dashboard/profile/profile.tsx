export default function Profile() {
    return (
        <div className="col-md-8 col-lg-9">
            <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-8 db-sec-com">
                    <h2 className="db-tit">Profiles status</h2>
                    <div className="db-profile">
                        <div className="img">
                            <img src="images/profiles/12.jpg" loading="lazy" alt=""></img>
                        </div>
                        <div className="edit">
                            <a href="user-profile-edit.html" className="cta-dark" target="_blank">Edit profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                    <h2 className="db-tit">Profiles status</h2>
                    <div className="db-pro-stat">
                        <h6>Profile completion</h6>
                        <div className="dropdown">
                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="dropdown">
                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">Edid profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">View profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Profile visibility settings</a>
                                </li>
                            </ul>
                        </div>
                        <div className="db-pro-pgog">
                            <span>
                                <b className="count">90</b>%
                            </span>
                        </div>
                        <ul className="pro-stat-ic">
                            <li>
                                <span>
                                    <i className="fa fa-heart-o like" aria-hidden="true"></i>
                                    <b>12</b>Likes
                                </span>
                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-eye view" aria-hidden="true"></i>
                                    <b>12</b>Views
                                </span>
                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-handshake-o inte" aria-hidden="true"></i>
                                    <b>12</b>Interests
                                </span>
                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-hand-pointer-o clic" aria-hidden="true"></i>
                                    <b>12</b>Clicks
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="inn">
                        <div className="rhs">
                                <div className="form-login">
                                    <form>
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Basic info</h4>
                                                <h1>Edit my profile</h1>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Name:</label>
                                                <input type="text" className="form-control" placeholder="Enter your full name"
                                                    name="name" />
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Email:</label>
                                                <input type="email" className="form-control" id="email"
                                                    placeholder="Enter email" name="email" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Phone:</label>
                                                <input type="number" className="form-control" id="phone"
                                                    placeholder="Enter phone number" name="phone" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Password:</label>
                                                <input type="password" className="form-control" id="pwd"
                                                    placeholder="Enter password" name="pswd" />
                                            </div>
                                        </div>
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Basic info</h4>
                                                <h1>Advanced bio</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Gender:</label>
                                                    <select className="form-select chosen-select" data-placeholder="Select your Gender">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                      </select>
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">City:</label>
                                                    <select className="form-select chosen-select" data-placeholder="Select your City">
                                                        <option>Chennai</option>
                                                        <option>Newyork</option>
                                                        <option>London</option>
                                                        <option>Chicago</option>
                                                      </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Date of birth:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Age:</label>
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Height:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Weight:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Fathers name:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Mothers name:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Address:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Job details</h4>
                                                <h1>Job & Education</h1>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Job type:</label>
                                                <select className="form-select chosen-select" data-placeholder="Select your Hobbies">
                                                    <option>Business</option>
                                                    <option>Employee</option>
                                                    <option>Government</option>
                                                    <option>Jobless</option>
                                                  </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Company name:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Salary:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Job total experience:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className="lb">Degree:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">School:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">College:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Media</h4>
                                                <h1>Social media</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">WhatsApp:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Facebook:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Instagram:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">X:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Youtube:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Linkedin:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>interests</h4>
                                                <h1>Hobbies</h1>
                                            </div>
                                            <div className="chosenini">
                                                <div className="form-group">
                                                    <select className="chosen-select" data-placeholder="Select your Hobbies" multiple>
                                                        <option></option>
                                                        <option>Modelling </option>
                                                        <option>Watching </option>
                                                        <option>movies </option>
                                                        <option>Playing </option>
                                                        <option>volleyball</option> 
                                                        <option>Hangout with family </option>
                                                        <option>Adventure travel </option>
                                                        <option>Books reading </option>
                                                        <option>Music </option>
                                                        <option>Cooking </option>
                                                        <option>Yoga</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}