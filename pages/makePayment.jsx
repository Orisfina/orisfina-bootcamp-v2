import Head from "next/head";
import PaymentForm from "../components/PaymentForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SlideshowShort from "../components/SlideshowShort";

const makePayment = () => {
 
  return (
    <>
      <Head>
        <title>Payment Portal | Orisfina Computer Instiute</title>
        <meta
          name="description"
          content="Join thousands of others in starting a career today with our up-to-date syllabus with 100% practical approach. Enrol now!"
        />
        <meta
          name="keywords"
          content="web development training, web design in Edo State, web design training in Lagos"
        />
      </Head>
      <NavBar />
      <SlideshowShort
        title="Payment Portal"
        color1="KINDLY FILL THE FORM WITH THE APPROPRIATE DETAILS"
      />
      <main className="course-registration grid21 container mb-l">
        <PaymentForm />
      </main>
      <Footer />
    </>
  );
};

export default makePayment;
