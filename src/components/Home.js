import axios from "axios";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Bob from "../images/Bob.gif"

export default function Home() {
  const [state, setState] = useState({ value: "" });

  useEffect(() => {
    axios
      .get(
        "https://api.countapi.xyz/update/ethomlison.netlify.app/ethomlison.netlify.app/?amount=1"
      )
      .then(function (response) {
        setState(response.data);
        console.log(state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main className="relative">
      <div className="lg:pt-20 container mx-auto relative ">
        <h6 className="text-sm font-bold cursive sm home-name hover:text-gray-900 text-center">
          This isn't even my final form! 
          <br/>
          <br/>
          Hold onto your horses because I have a new portfolio coming soon. 
        </h6>
        <section class="m-auto text-center">
          <img class="m-auto" src={Bob} />
        </section>
        <section class="mt-10">
          <div className="text-lg flex flex-col justify-center">
            <h2
              className="text-4xl text-gray-900 mb-4 hover:text-gray-900"
              id="test"
            >
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi, I am Elliott. 🖖")
                      .pauseFor(500)
                      .deleteAll();
                    typewriter
                      .typeString("I am a full stack developer. 👨‍💻")
                      .pauseFor(500)
                      .deleteAll();
                    typewriter
                      .typeString(
                        "I was previously a teacher and a correctional officer. 👮"
                      )
                      .pauseFor(500)
                      .deleteAll();
                    typewriter
                      .typeString(
                        "I have learnt French, Korean, and currently I am studying Mandarin.😵"
                      )
                      .pauseFor(500)
                      .deleteAll();
                    typewriter
                      .typeString("I am a lover of Cadbury mini eggs.🥚")
                      .pauseFor(500)
                      .deleteAll();
                    typewriter
                      .typeString("I am your new employee.🤝")
                      .pauseFor(500)
                      .start();
                  }}
                />
              </span>
            </h2>
            <p className=" text-3xl text-gray-900 hover:text-gray-900">
              I am a{" "}
              <a
                href
                class="LHL"
                onClick={() => window.open("http://www.lighthouselabs.ca")}
              >
                Lighthouse Labs
              </a>{" "}
              Web Development Bootcamp alumni. During the bootcamp I learned and
              refined skills in{" "}
              <em>
                Git, CSS, HTML, JavaScript, React, jQuery, Ajax, SQL, Ruby, Ruby-on-Rails
              </em>
              , and other software competencies both in the front and back end. I
              created multiple projects individually and collaboratively, as can
              be seen in the{" "}
              <a class="LHL" href="https://ethomlison.netlify.app/project">
                projects
              </a>{" "}
              tab. I expanded on my skills while working at{" "}
              <a class="LHL" href="https://www.tlcsolutions.ca/">
                TLC Solutions
              </a>{" "}
              as a full stack developer where I collaborated with a couple of senior developers, creating new features to apps, writing documentation, and testing projects regularly. We utilized Vuejs, Laravel, and MySql throughout my stay building out an application for a customer.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="counter">
              {state.value} visitors have seen the magic of this page
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
