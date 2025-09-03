import React, { useEffect } from "react";
import Title from "../Components/Title/Title.js";
import Overview from "../Components/Overview/Overview.js";
import Intro from "./Images/intro.png";
import Problem from "../Components/Problem/Problem.js";
import White from "../Components/WhiteComponent/WhiteComponent.js";
import Black from "../Components/BlackComponent/Black.js";
import Research from "../Components/CommonImages/research.png";
import Person from "../Components/CommonImages/person.png";
import Laptop from "../Components/CommonImages/laptop.png";
import Prototype from "../Components/CommonImages/prototype.png";
import Phone from "../Components/CommonImages/phone.png";
import OriginalOne from "./Images/originalpartone.png";
import OriginalTwo from "./Images/originalparttwo.png";
import SketchOne from "./Images/lofisketches.jpg";
import SketchTwo from "./Images/lofisketchestwo.JPG";
import Maze from "./Images/maze.png";
import Matching from "./Images/matching.png";
import Obstacle from "./Images/obstaclecourse.png";
import TempleRun from "./Images/templerun.png";
import Weather from "./Images/weather.png";
/* Map removed earlier */
import Character from "./Images/character.png";
import Headquarters from "./Images/headquarters1.png";
import Headquarters2 from "./Images/headquarters2.png";
import WeatherTutorial from "./Images/cloudTutorial.png";
import WeatherFinal from "./Images/cloudFinal.png";
import MatchingFinal from "./Images/matching2.png";
import MazeFinal from "./Images/maze2.png";
import TempleRunFinal from "./Images/templeRun2.png";
import MapFinal from "./Images/map2.png";
import Lightbulb from "../Components/CommonImages/lightbulb-black.png";
import Button from "../Components/HomeButton/homeButton.js";
import "./Wifire.css";

function Wifire() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="wfr-container">
      <Title
        Title="Wifire Labs"
        Label="An interactive mobile game that helps people understand and support prescribed burns by walking them through the process of setting one."
        Duration="12 weeks"
        Team="4 UX Designers"
        Role="UX Design Intern"
        Color="rgb(250, 65, 65)"
      />

      <Overview
        Image={Intro}
        Overview="The UC San Diego Design Lab, in partnership with WIFIRE Lab, hosted a campus-wide designathon. The prompt asked for a concept—physical or virtual—that helps the public understand and accept prescribed burns as a tool to reduce megafires."
        Overview2="My team focused on communities in fire-prone areas and designed an interactive game that introduces prescribed fires. Players first experience an out-of-control wildfire, then step through the planning and execution of a prescribed burn from the perspective of a burn boss (the operation lead). The intent is to compare impacts and show the care that goes into planning a safe burn."
        Overview3="This concept was one of the few teams that won the designathon, which led to a summer internship at WIFIRE Lab to bring the idea to life as a working prototype."
      />

      <Problem
        Problem="How might we educate communities in fire prone areas and help them realize that prescribed burns are beneficial, increasing their willingness to incorporate more prescribed burns?"
        Color="rgb(250, 65, 65)"
      />

      {/* User Research */}
      <White
        Title="User Research"
        Image={Research}
        Summary="The team started by building a baseline: collecting articles, videos, and references on prescribed burns to understand common concerns and misconceptions."
        Summary2="Five interviews with residents of fire-prone communities added real-world context and informed early scope decisions."
      >
        <div className="wfr-section">
          <h2 className="wfr-section-title">Interview Questions</h2>

          <div className="wfr-row-2 wfr-userresearch-row">
            <div className="wfr-card">
              <h3 className="wfr-card-title">General Questions</h3>
              <ol className="wfr-list">
                <li>
                  How often are you affected by wildfires?
                  <ul>
                    <li>How prone is your living area to wildfires?</li>
                  </ul>
                </li>
                <li>
                  In what ways have they impacted you?
                  <ul>
                    <li>Your community?</li>
                    <li>Your family?</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="wfr-card">
              <h3 className="wfr-card-title">Specific Questions</h3>
              <ol className="wfr-list">
                <li>How familiar are you with prescribed fires?</li>
                <li>
                  What are your main concerns with firefighters setting a prescribed burn near where you live?
                  <ul>
                    <li>
                      On a scale of one to five, how willing would you be to allow firefighters to set a prescribed fire near where you live? Why?
                    </li>
                  </ul>
                </li>
                <li>
                  What is your current opinion about the effects of a prescribed fire on the environment?
                  <ul>
                    <li>What about on people who live near where they occur?</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="wfr-card wfr-card-center">
            <h3 className="wfr-card-title">Common Insights from Interviews</h3>
            <ul className="wfr-list">
              <li>Most participants had limited familiarity with prescribed burns.</li>
              <li>Perceived risk was high; several people assumed burns are dangerous by default.</li>
              <li>Clear explanations of the process and expected effects increased openness.</li>
            </ul>
          </div>

          <p className="wfr-callout">
            These findings pointed to two needs: a way to “see” the process and a way to compare outcomes side by side.
          </p>
        </div>
      </White>

      {/* Original Idea (stacked + extra gap after second image, use contain to avoid crop) */}
      <Black
        Title="Original Idea"
        Image={Person}
        Summary="The first concept was a VR experience that walks through each step of a prescribed burn. Because of time and hardware limits, the path shifted to a mobile game. A quick physical mock-up helped align on flow and environment."
      >
        <div className="wfr-stack wfr-media-row wfr-media-row--spread wfr-gap-after">
          <img className="wfr-media-img wfr-media-img--contain" src={OriginalOne} alt="Original prototype part 1" />
          <img className="wfr-media-img wfr-media-img--contain" src={OriginalTwo} alt="Original prototype part 2" />
        </div>
      </Black>

      {/* Wireframes & Sketches */}
      <White
        Title="Wireframes & Sketches"
        Image={Laptop}
        Summary="Once the scope moved to mobile, the team sketched core flows: the home screen, a map for orientation, and mini-games that map to the real burn process."
      >
        <div className="wfr-row-2 wfr-media-row">
          <img className="wfr-sketch-img" src={SketchOne} alt="Lo-fi sketches 1" />
          <img className="wfr-sketch-img" src={SketchTwo} alt="Lo-fi sketches 2" />
        </div>
      </White>

      {/* Prototyping */}
      <Black
        Title="Prototyping"
        Image={Prototype}
        Summary="An initial lo-fi prototype in Figma made it easy to test sequence and clarity before polishing visuals. Feedback cycles focused on pacing, orientation, and how well each mini-game explained its purpose."
      >
        <div className="wfr-proto">
          <h2 className="wfr-section-title">Mini Games Order</h2>

          <ol className="wfr-mini-list">
            <li className="wfr-row-2 wfr-mini-row">
              <div className="wfr-card">
                <h3 className="wfr-card-title">1. Escape Route (Maze)</h3>
                <p className="wfr-text">Navigate a safe escape route through a maze.</p>
                <ul className="wfr-list">
                  <li>Safety precautions like planned escape routes are standard practice.</li>
                  <li>Backup plans exist if conditions change unexpectedly.</li>
                </ul>
              </div>
              <img className="wfr-mini-img" src={Maze} alt="Maze mini game" />
            </li>

            <li className="wfr-row-2 wfr-mini-row">
              <div className="wfr-card">
                <h3 className="wfr-card-title">2. Bad Weather (Tapping)</h3>
                <p className="wfr-text">Select good-weather icons and avoid bad-weather ones.</p>
                <ul className="wfr-list">
                  <li>Prescribed burns happen only under safe, identified conditions.</li>
                  <li>Weather selection is a key part of site planning.</li>
                </ul>
              </div>
              <img className="wfr-mini-img" src={Weather} alt="Weather mini game" />
            </li>

            <li className="wfr-row-2 wfr-mini-row">
              <div className="wfr-card">
                <h3 className="wfr-card-title">3. Authorization (Matching)</h3>
                <p className="wfr-text">Match officials to the documents and permits they own.</p>
                <ul className="wfr-list">
                  <li>Multiple permissions and certifications are required.</li>
                  <li>Operations are government-approved and planned in advance.</li>
                </ul>
              </div>
              <img className="wfr-mini-img" src={Matching} alt="Matching mini game" />
            </li>

            <li className="wfr-row-2 wfr-mini-row">
              <div className="wfr-card">
                <h3 className="wfr-card-title">4. Overgrown Forests (“Temple Run”)</h3>
                <p className="wfr-text">Dodge obstacles and manage overgrowth along the route.</p>
                <ul className="wfr-list">
                  <li>Teams monitor the full area during a burn.</li>
                  <li>Overgrowth is a driver for fuel reduction.</li>
                </ul>
              </div>
              <img className="wfr-mini-img" src={TempleRun} alt="Temple Run mini game" />
            </li>

            <li className="wfr-row-2 wfr-mini-row">
              <div className="wfr-card">
                <h3 className="wfr-card-title">5. Obstacle Course (Dino)</h3>
                <p className="wfr-text">Jump obstacles and put out flare-ups near borders.</p>
                <ul className="wfr-list">
                  <li>Field teams manage safety on the ground.</li>
                  <li>Coverage is distributed across the site.</li>
                </ul>
              </div>
              <img className="wfr-mini-img" src={Obstacle} alt="Obstacle mini game" />
            </li>
          </ol>

          <p className="wfr-text-block">
            After testing with fellow interns and a project manager, an intro and conclusion were added to help with context and closure. Character design also moved forward to make the experience more approachable.
          </p>

          {/* single image (Character only) — Map removed */}
          <div className="wfr-stack wfr-media-row">
            <img
              className="wfr-media-img wfr-media-img--contain wfr-media-img--small"
              src={Character}
              alt="Character"
            />
          </div>

          <p className="wfr-text-block">
            With the core loop validated, the team moved into high-fidelity screens for the final prototype.
          </p>
        </div>
      </Black>

      {/* Final Designs */}
      <White
        Title="Final Designs"
        Image={Phone}
        Summary="The hi-fi prototype includes four mini games: preparation, weather, safety routes, and border monitoring."
      >
        {/* Row 1 */}
        <div className="wfr-final-row">
          <figure className="wfr-final-item">
            <img className="wfr-final-img" src={Headquarters} alt="Headquarters" />
            <figcaption className="wfr-label">Headquarters</figcaption>
          </figure>
          <figure className="wfr-final-item">
            <img className="wfr-final-img" src={Headquarters2} alt="Headquarters" />
            <figcaption className="wfr-label">Headquarters</figcaption>
          </figure>
          <figure className="wfr-final-item">
            {/* Map slightly bigger */}
            <img className="wfr-final-img wfr-final-img--map" src={MapFinal} alt="Map" />
            <figcaption className="wfr-label">Map</figcaption>
          </figure>
        </div>

        {/* Row 2 */}
        <div className="wfr-final-row">
          <figure className="wfr-final-item">
            {/* Matching slightly smaller */}
            <img className="wfr-final-img wfr-final-img--matching" src={MatchingFinal} alt="Matching" />
            <figcaption className="wfr-label">Matching game</figcaption>
          </figure>
          <figure className="wfr-final-item">
            <img className="wfr-final-img" src={WeatherTutorial} alt="Weather tutorial" />
            <figcaption className="wfr-label">Weather tutorial</figcaption>
          </figure>
          <figure className="wfr-final-item">
            <img className="wfr-final-img" src={WeatherFinal} alt="Weather game" />
            <figcaption className="wfr-label">Weather game</figcaption>
          </figure>
        </div>

        {/* Row 3 – two items, left-aligned (original behavior) */}
        <div className="wfr-final-row">
          <figure className="wfr-final-item">
            <img className="wfr-final-img" src={MazeFinal} alt="Maze" />
            <figcaption className="wfr-label">Maze game</figcaption>
          </figure>
          <figure className="wfr-final-item">
            <img className="wfr-final-img" src={TempleRunFinal} alt="Temple Run" />
            <figcaption className="wfr-label">Temple run game</figcaption>
          </figure>
        </div>
      </White>

      <Black
        Title="Final Thoughts"
        Image={Lightbulb}
        Summary="The project delivered a clear, teachable experience about prescribed burns within a 12-week timeline. A working Figma prototype was presented at a design showcase, where the concept resonated with reviewers."
      >
        <p className="wfr-text-block">
          The interactive approach helped people compare a wildfire and a prescribed burn side by side and understand the planning behind each step. Looking ahead, there’s room to expand the map, add more realistic scenarios, and test the game in community settings to measure learning and attitude shift over time.
        </p>
        <Button />
      </Black>
    </section>
  );
}

export default Wifire;
