import React, { useEffect } from "react";
import Title from "../Components/Title/Title.js";
import Overview from "../Components/Overview/Overview.js";
import Image from "./Images/finaldesign.png";
import White from "../Components/WhiteComponent/WhiteComponent.js";
import Black from "../Components/BlackComponent/Black.js";
import Research from "../Components/CommonImages/research.png";
import Person from "../Components/CommonImages/person.png";
import Prototype from "../Components/CommonImages/prototype.png";
import Lightbulb from "../Components/CommonImages/lightbulb.png";
import Button from "../Components/HomeButton/homeButton.js";
import Implementation from "../Components/CommonImages/implementation.png";
import Echo from "./Images/amazonEcho.png";
import Raspberry from "./Images/raspberrypi.png";
import Storyboard from "./Images/storyboardGarden.png";
import Storyboard2 from "./Images/storyboard.png";
import Diagram from "./Images/architecture.png";
import Circuit from "./Images/circuit.png";
import "./garden.css";

function Garden() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Title
        Title="Garden of War"
        Label="A voice-controlled plant helper using Alexa + a Raspberry Pi moisture sensor to tell you when to water."
        Duration="3 weeks"
        Team="2 programmers, 1 hardware expert, 1 UX designer"
        Role="UX Designer"
        Color="rgb(80, 200, 120)"
      />

      <Overview
        Image={Image}
        Overview="Caring for houseplants gets tricky when life is busy or when it’s unclear what each plant needs. This project explores a simple way to take the guesswork out of watering."
        Overview2="The concept is straightforward: a person asks Alexa if a plant needs water, a small moisture sensor checks the soil, and Alexa answers in plain language."
        Overview3="As a team, the focus stayed on making the interaction feel light, fast, and easy to use, from the first prompt to a clear answer."
      />

      <White
        Title="Background Research"
        Image={Research}
        Summary="Watering is a common pain point for new plant owners. The team started by looking at what already exists and where people still get stuck."
      >
        <div className="garden-container garden-stack">
          <p>
            Two patterns stood out in the initial scan: information-heavy
            databases and reminder apps.
          </p>

          <div className="garden-row-2">
            <div className="garden-card">
              <h3 className="garden-card-title">Plant databases</h3>
              <p>
                Online databases offer species facts and general guidance, but
                they rarely include specific care schedules like watering
                cadence. For newer plant owners, that missing detail makes
                daily decisions harder.
              </p>
            </div>

            <div className="garden-card">
              <h3 className="garden-card-title">Existing products</h3>
              <ul className="garden-list">
                <li>
                  <strong>Happy Plant</strong>: a reminder app that tracks multiple plants.
                  <ul>
                    <li><em>Pros</em>: Good at reminding people to water on time.</li>
                    <li>
                      <em>Cons</em>: No live sensing; relies on manual inputs, which some people may not be consistent with
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Watering sensor alarm</strong>: chirps when soil is dry.
                  <ul>
                    <li><em>Pros</em>: Real-time signal from the plant’s soil.</li>
                    <li>
                      <em>Cons</em>: Not conversational, and easy to miss if no one is there to hear it. 
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <p>
            This set a clear direction: pair real-time data with a friendly voice
            interface that people actually want to use.
          </p>
        </div>
      </White>

      <Black
        Title="Ideation & Iteration"
        Image={Prototype}
        Summary="The goal was a flow that fits into everyday life. An Amazon Echo made sense for voice interaction already living in many homes."
        Summary2="To add an aspect that previous apps were missing, the concept evolved to include a Raspberry Pi moisture sensor for live soil readings."
      >
        <div className="garden-container garden-stack">
          <img className="garden-media" src={Echo} alt="Amazon Echo device" />

          <h3>Initial design</h3>
          <p>
            The team started with a simple conversation flow to capture the main
            idea and test how the interaction feels.
          </p>

          <div className="garden-card garden-card--tight">
            <ol className="garden-ol">
              <li>A person asks whether the plant needs water.</li>
              <li>
                The skill checks recent watering and compares it to an ideal schedule.
              </li>
              <li>Alexa replies with a clear recommendation.</li>
            </ol>
          </div>

          <p>
            However, there were a few flaws with this design plan. 
          </p>

          <div className="garden-card garden-card--tight">
            <ul className="garden-list">
              <li>If people forget to ask Alexa about their plant, Alexa will have no way of knowing when the plant was last watered.</li>
              <li>Without live data, advice could drift from what the plant needs.</li>
            </ul>
          </div>

          <p>
            To address that, the team added a Raspberry Pi with a soil-moisture
            sensor so the system can check the plant in real time instead of guessing.
          </p>

          <img className="garden-media" src={Raspberry} alt="Raspberry Pi board" />
          <p>
            From there, the moisture value drives Alexa’s response.
          </p>

          <img className="garden-media" src={Storyboard} alt="Storyboard showing interaction flow" />

          <div className="garden-card garden-card--tight">
            <h3 className="garden-card-title">Final design steps</h3>
            <ol className="garden-ol">
              <li>Ask if water is needed.</li>
              <li>Query the Raspberry Pi for current soil moisture.</li>
              <li>Answer based on the live sensor reading.</li>
            </ol>
          </div>
        </div>
      </Black>

      <White
        Title="Implementation"
        Image={Implementation}
        Summary="The Amazon Echo handles the voice UI. A Raspberry Pi reads the moisture sensor and exposes a simple endpoint that returns the current value."
        Summary2="A small circuit connects the probe to the Pi. When Alexa makes a request, the Pi responds in real time so the advice reflects what’s actually in the pot."
      >
        <div className="garden-container garden-stack">
          <figure className="garden-figure">
            <img
              className="garden-media garden-media--wide"
              src={Diagram}
              alt="System architecture diagram"
            />
            <figcaption className="garden-caption">Architecture diagram</figcaption>
          </figure>

          <figure className="garden-figure">
            <img
              className="garden-media garden-media--wide"
              src={Circuit}
              alt="Circuit diagram"
            />
            <figcaption className="garden-caption">Circuit diagram</figcaption>
          </figure>

          <div className="garden-stack">
            <p>
              Testing focused on how Alexa behaves across dry and wet soil so
              the thresholds feel right in use.
            </p>

            <div className="garden-card">
              <h3 className="garden-card-title">Testing process</h3>
              <ol className="garden-ol">
                <li>
                  First, the sensor was tried in air and with water to get a
                  baseline. Air measured around 10.
                </li>
                <li>
                  Next, a six-compartment tray was filled with soil and
                  increasing water to see how readings change.
                  <ul className="garden-list">
                    <li>Dry soil measured ~58.</li>
                    <li>One cup of water: ~64, then ~71 and ~73.</li>
                    <li>By four cups, the sensor topped out around ~78.</li>
                  </ul>
                </li>
              </ol>
              These numbers set the first pass at thresholds: below 70 means
              “needs water,” and 70 or above means “good for now.”
            </div>
          </div>
        </div>
      </White>

      <Black
        Title="My role"
        Image={Person}
        Summary="I owned the design work: research synthesis, storyboards, the voice interaction model, and the phrases that Alexa speaks back."
        Summary2="The goal was a conversation that feels natural, matches the project’s theme, and still gives clear guidance."
      >
        <div className="garden-container garden-stack">
          <img
            className="garden-media garden-media--wide"
            src={Storyboard2}
            alt="Refined storyboard"
          />

          <div className="garden-card garden-card--tight">
            <h3 className="garden-card-title">Original conversation template</h3>
            <p><strong>User:</strong> Alexa, ask “Garden of War,” do I need to water my plant?</p>
            <p><strong>If dry (sensor &lt; 70):</strong> It’s time to water your plant. Remember not to overwater.</p>
            <p><strong>If wet (sensor ≥ 70):</strong> Your plant is sufficiently watered.</p>
          </div>

          <p>
            In this video, you can see how the conversation flows and how the
            response changes when the soil is dry versus wet.
          </p>

          {/* Embedded YouTube video */}
          <div className="garden-yt">
            <iframe
              src="https://www.youtube-nocookie.com/embed/TvjF4AtOl4c?rel=0&modestbranding=1"
              title="Garden at War — Alexa conversation demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p>
            Building on that, I wrote lines that fit the Call of Duty theme while
            staying easy to understand. For example: “Reload your watering can —
            time for plant ops” when it’s dry, and “Hydration level optimal —
            weapons tight” when it’s wet.
          </p>
        </div>
      </Black>

      <White
        Title="Final Thoughts"
        Image={Lightbulb}
        Summary="The prototype does what it set out to do: make it easy to check if a plant needs water. With a single prompt, the Alexa skill gives an answer grounded in a live soil-moisture reading rather than a guess."
        Summary2="This was a short, fast-paced, three-week sprint, and the MVP landed on time and within scope. Our team presented a live demo at the class showcase for the professor and classmates. Any possible future additions to this product would include support for multiple moisture sensors on a single Raspberry Pi, plant-specific profiles or categories, and a history view so owners can see past readings and watering decisions."
      >
        <div className="garden-container">
          <Button />
        </div>
      </White>
    </>
  );
}

export default Garden;
