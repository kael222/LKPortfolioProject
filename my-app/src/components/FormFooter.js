import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      text: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <section className="footers">
        {" "}
        {/* <div className="background"></div> */}
        <div className="forms">
          <h1>Skontaktuj się z nami</h1>
          <div className="decoration"></div>

          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Wpisz swoje imię</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Krzysztof"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="wpisz swój email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="lastName">Wpisz swoją wiadomość</label>
            <input
              id="text"
              name="text"
              type="text"
              placeholder="wpisz swoja wiadomość...wpisz swoja wiadomość...wpisz swoja wiadomość...wpisz swoja wiadomość...wpisz swoja wiadomość...wpisz swoja wiadomość...wpisz swoja wiadomość...wpisz swoja wiadomość...wpisz swoja wiadomość..."
              onChange={formik.handleChange}
              value={formik.values.text}
            />
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </section>
      <section>
        <p>Copyright by Coders Lab</p>
        <span>d</span>
        <span>d</span>
      </section>
    </>
  );
};
export default SignupForm;
