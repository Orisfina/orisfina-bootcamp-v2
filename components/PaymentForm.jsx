import { useState } from "react";

export default function PaymentForm() {
  const [details, setDetails] = useState({
    fullnames: "",
    email: "",
    phone: "",
  });

  //handle email and Password change Event
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  function generateRandomString() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  const handlePayment = () => {
    const randomString = generateRandomString(10);
    FlutterwaveCheckout({
      public_key: "FLWPUBK-c2fd29edc4b0724664b8d2b400e97cb9-X",
      tx_ref: `oci-${randomString}`,
      amount: 20000,
      currency: "NGN",
      payment_options: "card,account,banktransfer,credit,barter, ussd",
      redirect_url: "https://oci.com.ng/success",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: details.email,
        phone_number: details.phone,
        name: details.fullnames,
      },
      customizations: {
        title: "Orisfina Bootcamp",
        description: "Payment for Web development Training",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    });
  };
  return (
    <>
      <div className="reg-form">
        <h2 className="course-header t-center mb-m">
          Payment for the Web Development Bootcamp Training
        </h2>
        <>
          <div className="form-group">
            <label htmlFor="fullnames" className="form-label">
              {" "}
              Fullnames{" "}
            </label>
            <input
              type="text"
              id="fullnames"
              name="fullnames"
              value={details.fullnames}
              onChange={handleChange}
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
              value={details.email}
              onChange={handleChange}
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
              value={details.phone}
              onChange={handleChange}
              className="group-field"
              data-type="text"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn_signup mt-m"
              value="Proceed"
              onClick={handlePayment}
            />
          </div>
        </>
      </div>
    </>
  );
}
