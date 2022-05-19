import React from 'react'

export default function RegistrationForm() {
  return (
    <>
       <div className="login-wrap dark-bg">
         <div className="login-html">
            <form action="/success" method="post" name="Registration-Form" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="Registration-Form" />
                  <label className="tab">Sign Up</label>
                  <label for="tab-2" className="tab" style={{"display": "none"}}>Sign Up</label>
                <div className="login-form m-t-small">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label for="fname" name="fname" className="label">First Name: </label>
                            <input id="fname" type="text" className="input" data-type="text" name="fname" required="" />
                        </div>
                        <div className="group">
                            <label for="lname" name="lname" className="label">Last Name: </label>
                            <input id="lname" type="text" className="input" data-type="text" name="lname" required="" />
                        </div>
                        <div className="group">
                            <label for="email" name="email" className="label">Email Address</label>
                            <input id="email" type="email" className="input" name="email" placeholder="example@email.com" required="" />
                        </div>
                        <div className="group">
                            <label for="user-address" className="label">Home Address: </label>
                            <textarea id="address" row="3" name="user-address" className="input" required=""> </textarea>
                        </div>
                        <div className="group">
                            <label for="user-phone" className="label" name="user-phone">Phone No:</label>
                            <input id="phone" type="number" name="user-phone" className="input" placeholder="+2347036..." required="" />
                        </div>
                        <div className="group">
                            <label for="user-sex" className="label" name="user-sex">Sex:</label>
                            <select id="inputSex" className="input" name="user-Sex" required="">
                                <option selected="">Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="group">
                            <label className="form-label">Select Course: </label>
                            <p style={{"color": "#0e0d0e"}}>Select your desired course</p>
                        </div>
                        <div className="group__s">
                            <input className="form-check-input" type="radio" value="Web Design" id="inputCourse" name="course" />
                            <label className="form-check-label" for="Web-Design" >
                                Web Design
                            </label>
                        </div>
                        <div className="group__s">
                            <input className="form-check-input" type="radio" value="graphics" id="inputCourse" name="course" />
                            <label className="form-check-label" for="graphic">
                                Graphics Design
                            </label>
                        </div>
                        <div className="group__s">
                            <input className="form-check-input" type="radio" value="application package" id="inputCourse" name="course" />
                            <label className="form-check-label" for="app-package">
                                Application Package (beginners / Intermediate)
                            </label>    
                        </div>
                        <div className="group__s">
                            <input className="form-check-input" type="radio" value="Mobile App Development" id="inputCourse" name="course" />
                            <label className="form-check-label" for="mobile-app">
                                Mobile App Development
                            </label>
                        </div>
                        <div className="group">
                            <input type="submit" className="button m-t-large" value="Sign Up" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}
