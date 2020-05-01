import React from "react";
import HomeHeader from "./HomeHeader";
import Statistic from "./Statistic";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import FormFooter from "./FormFooter";
import BasicExample from "./FormFooter";
import SignupForm from "./FormFooter";

const Home = (props) => {
  return (
    <>
      <section>
        <HomeHeader />
      </section>
      <section>
        <Statistic />
      </section>
      <section>
        <FourSteps />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <OurMission />
      </section>
      <section>
        <SignupForm />
      </section>
    </>
  );
};
export default Home;
