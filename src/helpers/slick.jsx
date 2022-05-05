import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500
    }   
  return (
    //   <div>
    //       <div className="w-[900px] h-screen bg-orange-500 flex justify-center items-center">
    //     <h3 className="text-9xl">1</h3>
    //   </div>
    //   </div>
    <Slider {...settings}>
      <div className="w-[900px] h-screen bg-orange-500 flex justify-center items-center">
        <h3 className="text-9xl p-10">1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}