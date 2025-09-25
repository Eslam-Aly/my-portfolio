import React from "react";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section id="home" className="bg-herobg h-screen pt-20 text-white ">
      <div className="container flex flex-col md:flex-row items-center justify-between p-8 mx-auto overflow-y-hidden gap-12 h-full">
        <div className="">
          <div>
            <img src={logo} className="md:w-1/2" alt="logo" />
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              quasi aspernatur quod quam labore, dolorem exercitationem
              assumenda voluptate repellendus repellat?
            </p>
          </div>
        </div>
        <div className="md:w-1/1">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
