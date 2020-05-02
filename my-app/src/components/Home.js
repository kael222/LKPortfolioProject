import React from "react";
import HomeHeader from "./HomeHeader";
import Statistic from "./Statistic";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import SignupForm from "./FormFooter";

const Home = (props) => {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
};
export default Home;
