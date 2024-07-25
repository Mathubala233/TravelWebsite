import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          We are Happy Tours and travels in madurai. So, We are pleased to introduce ourselves as Travel Company. And, you will cherish to deal with any of your travel needs.We have been in the Tourism field for Several Years and Our commitment towards Quality customer service makes a difference.
          </p>
          <br />
          <p>
          We have excellent executives, well trained drivers, and efficient guides to make you feel at home and to savor your stay in India.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;