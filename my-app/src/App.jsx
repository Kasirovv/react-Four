import "./App.css";
import React from "react";
import product from "./assets/produkt.png";
import iconnav from "./assets/iconnav.png";
import cursor from "./assets/cursor.png";
import clock from "./assets/clock.png";
import like from "./assets/like.png";
import lle from "./assets/lle.png";
import social from "./assets/amicod.png";
import btn from "./assets/button.png";
import Card from "./components/Card";
import amico from "./assets/amico.png";
import amico2 from "./assets/amico2.png";
import amico3 from "./assets/amico3.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import avatar1 from "./assets/Avator1.png";
import avatar2 from "./assets/Avator2.png";
import avatar3 from "./assets/Avator3.png";
import avatar4 from "./assets/Avator4.png";
import bitmap1 from "./assets/bitmap1.png";
import bitmap2 from "./assets/bitmap2.png";
import bitmap3 from "./assets/bitmap3.png";
import carosolt from "./assets/carosolt.png";
import group1 from "./assets/Group201.png";
import group2 from "./assets/Group202.png";
import group3 from "./assets/Group203.png";
import screen from "./assets/screen.png";
import styled, { css } from "styled-components";

function App() {
  return (
    <div>
      <nav className=" bg-[#E5E5E5]">
        <div className="container mx-auto md:flex justify-between items-center md:w-[90%] m-auto">
          <div className="md:flex items-center justify-between md:w-[12%]">
            <img src={product} />
            <h1 className="text-[#173A56] font-bold text-[30px]">Product</h1>
          </div>
          <div div className="md:flex justify-evenly w-[60%] items-center">
            <a className="font-bold ">Product</a>
            <a>Customers</a>
            <a>Pricing</a>
            <a>Resources</a>
            <button color="inherit" variant="outlined">
              Sign In
            </button>
            <button style={{ backgroundColor: `#02897A`, color: `white` }}>
              Sign Up
            </button>
            <a>
              <img src={iconnav} />
            </a>
          </div>
        </div>
      </nav>
      <section-1>
        <div className="md:flex items-center justify-evenly bg-[#E5E5E5] pt-[70px]">
          <div className="container mx-auto md:w-[22%]">
            <h2 className="text-[40px] font-bold text-gray-800">
              Work at the speed of thought
            </h2>
            <p className="mt-4 text-gray-600">
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="md:flex justify-between items-center pt-[50px] w-[90%]">
              <button
                style={{
                  backgroundColor: `#02897A`,
                  color: `white`,
                  padding: `15px 20px`,
                }}
              >
                Get started
              </button>
              <button style={{ padding: `15px 10px` }}>
                <img src={btn} />
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={social} />
          </div>
        </div>
      </section-1>

      <section-2>
        <div>
          <h1 className="text-center text-[32px] font-bold pt-[70px]">
            Product was Built Specifically <br />
            for You
          </h1>

          <div className="md:flex justify-evenly  m-auto">
            <Card
              img={cursor}
              h1="First click tests"
              p="While most people enjoy casino gambling,"
            />
            <Card
              img={lle}
              h1="Design surveys "
              p="Sports betting, lottery and bingo playing for the fun"
            />
            <Card
              img={like}
              h1="Preference tests"
              p="The Myspace page defines the individual."
            />
            <Card
              img={clock}
              h1="Five second tests"
              p="Personal choices and the overall personality of the person. "
            />
          </div>
          <div className="text-center pt-[70px] ">
            <button
              style={{
                backgroundColor: `#02897A`,
                color: `white`,
                padding: `10px 30px`,
              }}
            >
              SIGN UP NOW
            </button>
          </div>
        </div>
      </section-2>

      {/* <section-3>
        <div className="pt-[120px]"></div>
      </section-3> */}
      <section>
        <div className="flex flex-wrap justify-around items-center mb-40">
          <div>
            <h4 className="text-[#22343D] font-semibold text-base pb-2">
              Effortless Validation for
            </h4>
            <h1 className="font-bold text-3xl pb-5">Management</h1>
            <p className="text-[#22343D] text-base pb-6">
              The Myspace page defines the individual, his or her <br />{" "}
              characteristics, traits, personal choices and the overall <br />{" "}
              personality of the person.
            </p>
            <h5 className="text-[#22343D] font-semibold text-base pb-3">
              Accessory makers
            </h5>
            <p className="text-[#22343D] text-base pb-6">
              While most people enjoy casino gambling, sports betting, <br />{" "}
              lottery and bingo playing for the fun
            </p>
            <h5 className="text-[#22343D] font-semibold text-base pb-3">
              Alterationists
            </h5>
            <p className="text-[#22343D] text-base">
              If you are looking for a new way to promote your business <br />{" "}
              that won't cost you more money,{" "}
            </p>
          </div>
          <div>
            <img src={amico} alt="" />
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="flex flex-wrap justify-around items-center mb-40">
          <div>
            <img src={amico2} alt="" />
          </div>
          <div>
            <h4 className="text-[#22343D] font-semibold text-base pb-2">
              Easier decision making for
            </h4>
            <h1 className="font-bold text-3xl pb-5">Customer Support</h1>
            <p className="text-[#22343D] text-base pb-6">
              The Myspace page defines the individual, his or her <br />{" "}
              characteristics, traits, personal choices and the overall <br />{" "}
              personality of the person.
            </p>
            <p className="flex items-center text-[#22343D] text-base pb-6">
              <img src={icon1} alt="" /> Never worry about overpaying for your{" "}
              <br /> energy again.
            </p>
            <p className="flex items-center text-[#22343D] text-base pb-6">
              <img src={icon2} alt="" /> We will only switch you to energy
              companies <br /> that we trust and will treat you right
            </p>
            <p className="flex items-center text-[#22343D] text-base">
              <img src={icon3} alt="" />
              We track the markets daily and know where the <br /> savings are.
            </p>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex flex-wrap justify-around items-center mb-40">
          <div>
            <h4 className="text-[#22343D] font-semibold text-base pb-2">
              Optimisation for
            </h4>
            <h1 className="font-bold text-3xl pb-5">Collaborative</h1>
            <p className="text-[#22343D] text-base pb-6">
              Few would argue that, despite the advancements of <br /> feminism
              over the past three decades, women still face a <br /> double
              standard when it comes to their behavior.
            </p>
            <h5 className="text-[#22343D] font-semibold text-base pb-3">
              Accessory makers
            </h5>
            <p className="text-[#22343D] text-base pb-6">
              While most people enjoy casino gambling, sports betting, <br />{" "}
              lottery and bingo playing for the fun
            </p>
            <h5 className="text-[#22343D] font-semibold text-base pb-3">
              Alterationists
            </h5>
            <p className="text-[#22343D] text-base">
              If you are looking for a new way to promote your business <br />{" "}
              that won't cost you more money,{" "}
            </p>
          </div>
          <div>
            <img src={amico3} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#E8E8E8] mb-40">
        <h1 className="text-center text-[#22343D] text-3xl font-bold">
          Quick & Easy Process
        </h1>
        <p className="text-center text-[#22343D] text-base font-medium">
          Do you require some help for your project: Conception workshop, <br />
          prototyping, marketing strategy, landing page, Ux/UI?
        </p>

        <div className="mx-60">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap items-center">
              <img src={avatar1} alt="" />
              <p className="bg-white px-3 py-3 rounded-[26.5px]">
                I can take care of your pitch
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              <p className="bg-white px-3 py-3 rounded-[26.5px]">
                I can prototype your app
              </p>
              <img src={avatar2} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap items-center">
              <p className="bg-white px-3 py-3 rounded-[26.5px]">
                I can design you website
              </p>
              <img src={avatar3} alt="" />
            </div>
            <div className="flex flex-wrap items-center">
              <img src={avatar4} alt="" />
              <p className="bg-white px-3 py-3 rounded-[26.5px]">
                I can help marketing strategy
              </p>
            </div>
          </div>
        </div>

        <p className="text-center">
          <button className=" text-white bg-[#02897A] px-6 py-3">
            Contact our expert
          </button>
        </p>
      </section>

      <section className="mx-48 ">
        <h1 className="text-[#22343D] font-bold text-3xl mb-4">
          Contents Strategies
        </h1>
        <p className="text-[#22343D] font-medium text-base mb-4">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.{" "}
        </p>
        <div className="flex flex-wrap items-center justify-around">
          <div className="rounded-lg border">
            <img src={bitmap1} alt="" />
            <p className="ml-5 mt-7 mb-3">
              By <span className="text-[#22343D]"> Wahid Ari </span> | 03 March
              2019
            </p>
            <h3 className="text-[#22343D] text-2xl leading-10 font-bold ml-5 mb-5">
              Increasing Prosperity <br /> With Positive Thinking
            </h3>
          </div>
          <div className="rounded-lg border">
            <img className="rounded-lg" src={bitmap2} alt="" />
            <p className="ml-5 mt-7 mb-3">
              By <span className="text-[#22343D]"> Wahid Ari </span> | 03 March
              2019
            </p>
            <h3 className="text-[#02897A] text-2xl leading-10 font-bold ml-5 mb-5">
              Motivation Is The First <br /> Step To Successg
            </h3>
          </div>
          <div className="rounded-lg border">
            <img className="rounded-lg" src={bitmap3} alt="" />
            <p className="ml-5 mt-7 mb-3">
              By <span className="text-[#22343D]"> Wahid Ari </span> | 03 March
              2019
            </p>
            <h3 className="text-[#22343D] text-2xl leading-10 font-bold ml-5 mb-5">
              Success Steps For Your <br /> Personal Or Business
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          <img className="" src={carosolt} alt="" />
        </div>
      </section>

      <section className="mt-40">
        <h1 className="text-center text-[#22343D] text-3xl font-bold">
          Price Table
        </h1>
        <p className="text-center text-[#22343D] font-medium">
          We offer competitive price
        </p>

        <div className="flex flex-wrap justify-around mt-10">
          <div className="text-center w-72 border">
            <h1 className="text-[#22343D] text-2xl font-bold mb-2 mt-6">
              Free
            </h1>
            <p className="text-[#22343D] mb-2">Brief price description</p>
            <div className="flex flex-wrap justify-center">
              <img className="mb-2" src={group1} alt="" />
            </div>
            <p className="text-[#22343D] mb-2">Only 2 Operators</p>
            <p className="text-[#22343D] mb-2">Notifications</p>
            <p className="text-[#22343D] mb-4">Landing Pages</p>
            <button className="text-lg font-semibold text-white bg-[#02897A] px-4 py-1 rounded-md mb-5">
              Order Now
            </button>
          </div>

          <div className="text-center text-white w-72 border bg-[#02897A]">
            <h1 className=" text-2xl font-bold mb-2 mt-6">Free</h1>
            <p className=" mb-2">Brief price description</p>
            <div className="flex flex-wrap justify-center">
              <img className="mb-2" src={group2} alt="" />
            </div>
            <p className=" mb-2">Only 2 Operators</p>
            <p className=" mb-2">Notifications</p>
            <p className=" mb-4">Landing Pages</p>
            <button className="text-lg font-semibold bg-white text-[#02897A] px-4 py-1 rounded-md mb-5">
              Order Now
            </button>
          </div>

          <div className="text-center w-72 border ">
            <h1 className="text-[#22343D] text-2xl font-bold mb-2 mt-6">
              Free
            </h1>
            <p className="text-[#22343D] mb-2">Brief price description</p>
            <div className="flex justify-center">
              <img className="mb-2" src={group3} alt="" />
            </div>
            <p className="text-[#22343D] mb-2">Only 2 Operators</p>
            <p className="text-[#22343D] mb-2">Notifications</p>
            <p className="text-[#22343D] mb-4">Landing Pages</p>
            <button className="text-lg font-semibold text-white bg-[#02897A] px-4 py-1 rounded-md mb-5">
              Order Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#02897A] m-auto mt-20 w-[968px] flex justify-between flex-wrap items-center rounded-[32px]">
        <div className="ml-6">
          <h1 className="text-white text-3xl font-semibold">
            Join 100 Compannies who <br /> boost their business with <br />
            Product
          </h1>
          <button className="rounded-lg mt-24 text-[#02897A] bg-white px-5 py-2">Get This</button>
        </div>
        <div>
          <img src={screen} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
