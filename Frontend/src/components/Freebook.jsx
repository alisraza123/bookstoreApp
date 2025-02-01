import React from 'react'
import list from '../components/list.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

const FreeBook = () => {
    const filterData = list.filter((data) => data.status === "Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
              slidesToScroll: 1,
            }
          }
        ]
      };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-40 mb-10'>
                <div>
                <h1 className='font-bold text-xl pb-2'>Free Offered Cases</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis inventore nemo dolor esse ea eum itaque deleniti voluptatem quis.
                </p>
                </div>
            
<div >
<Slider {...settings} className='m-3'>
   {
    filterData.map((item)=> <Cards item={item} key={item.id}/>)
   }
      </Slider>

</div>
</div>
        </>
    )
}

export default FreeBook