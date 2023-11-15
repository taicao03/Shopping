import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderProduct() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const data = [
    "https://i.pinimg.com/236x/47/da/2b/47da2b5edc1f727aacd704598d3df288.jpg",
    "https://i.pinimg.com/236x/69/64/40/6964406e27b41ba4a49bbacdafc2bfdd.jpg",
    "https://i.pinimg.com/236x/b6/30/f1/b630f1b844297d7dd36d45a4ebed1131.jpg",
    "https://i.pinimg.com/236x/aa/c7/76/aac776ec3b725e7688c5a2bda050eca1.jpg",
    "https://i.pinimg.com/236x/85/78/c8/8578c80505574612944e32ac4b352bbe.jpg",
    "https://i.pinimg.com/236x/fe/ff/04/feff04605aed73f829e81433cf46f8b0.jpg",
  ];

  return (
    <>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-auto">
          <Slider
            asNavFor={nav1}
            ref={(slider2: React.SetStateAction<undefined>) => setNav2(slider2)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
          >
            {data?.map((item, index) => (
              <img
                src={item}
                alt=""
                className="h-[138px] mb-4 object-cover rounded"
              />
            ))}
          </Slider>
        </div>
        <div className="col-span-4">
          <Slider
            asNavFor={nav2}
            ref={(slider1: React.SetStateAction<undefined>) => setNav1(slider1)}
          >
            {data?.map((item, index) => (
              <img
                className="h-[605px] object-cover rounded"
                src={item}
                alt=""
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
