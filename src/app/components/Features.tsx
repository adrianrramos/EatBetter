import FeaturesCard from "./FeaturesCard";
import Bolt from "../../../assets/bolt-icon.png";
import Beaker from "../../../assets/beaker-icon.png";
import Chart from "../../../assets/barchart-icon.png";
import React from "react";

export default function Features() {
  return (
    <section>
      <FeaturesCard
        title="We Prioritize Speed"
        icon={Bolt}
        description="Streamline your nutrition
                      tracking with our app
                      spend less time logging 
                      meals, more time living well."
      />
      <FeaturesCard
        title="Diet adjuster"
        icon={Beaker}
        description="Science-based nutrition guidance
                      empowering your journey to
                      better health with evidence
                      backed diet plans."
      />
      <FeaturesCard
        title="Monitor Progress"
        icon={Chart}
        description="Visualize your diet progress
                      with graphs and charts on our
                      app, providing insights
                      on  your journey."
      />
    </section>
  );
}
