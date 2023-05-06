import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Image } from '@chakra-ui/react';


const Slider = () => {
  return (
    <div>
        <Swiper slidesPreView={1}
        autoplay={{
            delay:2500,
            disableOnInteraction : false,
        }}
        loop={true}
        cssMode={true}
        navigation ={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        >
            <SwiperSlide>
                <Image src ='https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/AppBanner/Offer/03/Desktop_1920x694.webp' w='100%' mt='34px' />
            </SwiperSlide>
            <SwiperSlide>
          <Image src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Digigold/02/Desktop_1920x694.webp' w='100%' mt='34px'
            ml='70px' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Page/01/Desktop_2X.webp' w='100%' mt='34px'
            ml='70px' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Digigold/02/Desktop_1920x694.webp' w='100%' mt='34px'
            ml='70px' />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider