import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"

const Freebook = () => {
   const filterData = list.filter((data) => data.category ==="free");

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   console.log(filterData)
   
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-8 '>
    <div>
      <h1 className='text-black font-bold text-xl pb-2'>free offered courses</h1>
     <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius tempore, ex suscipit accusamus asperiores quam aliquid id aspernatur culpa nulla quae explicabo iure mollitia voluptate rerum veritatis dicta voluptatem consequatur.</p>
    </div>
  
   <div className='text-black'>
    <Slider {...settings}>
        <div>
          <h3>1</h3>
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
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    
  
   </div>
    </div>
   </>
  )
}

export default Freebook
