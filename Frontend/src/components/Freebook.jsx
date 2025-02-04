import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import list from '../components/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';
const FreeBook = () => {
  const [book, setBook] = useState([]);
console.log("Akluiasd")
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        const data=res.data.filter((data)=>data.category==="Free");
        // console.log(data)
        setBook(data)
      } catch (error) {
        console.log(error)
      }

    }
    getBook();
  }, [])


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
          {book.length > 0 ? (
  <Slider {...settings} className='m-3'>
    {book.map((item) => <Cards item={item} key={item.id} />)}
  </Slider>
) : (
  <p>Loading...</p> // Jab tak data nahi aata, ye dikhega
)}


        </div>
      </div>
    </>
  )
}

export default FreeBook