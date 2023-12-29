import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SlideshowShort from '../components/SlideshowShort'
import RegistrationForm from '../components/RegistrationForm'

const freeTraining: NextPage = () => {
    return (
        <>
            <Head>
                <title>Registration Portal | Orisfina Computer Instiute</title>
                <meta name="description" content="Join thousands of others in starting a career today with our up-to-date syllabus with 100% practical approach. Enrol now!" />
                <meta name="keywords" content="registration for free web design training, free web design training, free web development training " />
            </Head>
            <NavBar />
            <SlideshowShort title='Registration Form' color1='KINDLY FILL THE FORM WITH THE APPROPRIATE DETAILS' />
            <main className='course-registration grid21 container mb-l' >
                <div className='reg-form'>
                    <h2 className='course-header t-center mb-m'>Signup for the Free Training</h2>
                    <>
                        <form
                            action="/success"
                            method="post"
                            name="Free Training 2024"
                            autoComplete="off"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="Free Training 2024" />
                            <div className="form-group">
                                <label htmlFor="fName" className="form-label">
                                    {" "}
                                    First Name{" "}
                                </label>
                                <input
                                    type="text"
                                    id="fName"
                                    name="fName"
                                    className="group-field"
                                    data-type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lName" className="form-label">
                                    {" "}
                                    Last Name{" "}
                                </label>
                                <input
                                    type="text"
                                    id="lName"
                                    name="last-name"
                                    className="group-field"
                                    data-type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    {" "}
                                    Email{" "}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="group-field"
                                    placeholder="example@email.com"
                                    id="email"
                                    data-type="text"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">
                                    {" "}
                                    Phone{" "}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="group-field"
                                    data-type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="whatsApp_no">
                                    {" "}
                                    WhatsApp No.{" "}
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Ignore if its same with your phone No."
                                    name="whatsApp_no"
                                    className="group-field"
                                    data-type="text"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="sex">
                                    {" "}
                                    Sex:
                                </label>
                                <label htmlFor="male">Male</label>
                                <input type="radio" id="male" name="sex" value="Male" />
                                <label htmlFor="css" className="ml-s">
                                    Female
                                </label>
                                <input type="radio" id="female" name="sex" value="Female" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="courses">
                                    Select Course:
                                </label>
                                <select name="courses" id="courses" required>
                                    <option value="Frontend Web Development">
                                        Frontend Web Development
                                    </option>
                                    <option value="Backend Web Development">
                                        Backend Web Development
                                    </option>
                                    <option value="Full-stack Development">
                                        Full-Stack Development
                                    </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="student-status">
                                    Are you a Student?:
                                </label>
                                <select name="student-status" id="student-status">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="current_state">
                                    {" "}
                                    Current State.{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Current loacation"
                                    name="current_state"
                                    className="group-field"
                                    data-type="text"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="haveLaptop">
                                    Do you have a Laptop or one you can lend?:
                                </label>
                                <select name="haveLaptop" id="haveLaptop">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btn btn_signup mt-m"
                                    value="Sign Up"
                                />
                            </div>
                        </form>
                    </>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default freeTraining
