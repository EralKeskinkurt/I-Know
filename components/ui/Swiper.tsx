"use client";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function SwiperComp() {

    const trialSlideInf = [
        {
            image: "https://images.unsplash.com/photo-1714334544535-4c5eddeb0ec1",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus labore quis consectetur quae culpa asperiores quod totam iste minima, beatae temporibus dolorem impedit expedita vero obcaecati, officiis ea debitis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem optio quod ipsam? Animi impedit maiores id nobis a totam voluptatibus rerum suscipit, modi esse facilis doloremque ipsa odio inventore."
        },
        {
            image: "https://images.unsplash.com/photo-1714334544535-4c5eddeb0ec1",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus labore quis consectetur quae culpa asperiores quod totam iste minima, beatae temporibus dolorem impedit expedita vero obcaecati, officiis ea debitis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem optio quod ipsam? Animi impedit maiores id nobis a totam voluptatibus rerum suscipit, modi esse facilis doloremque ipsa odio inventore."
        },
        {
            image: "https://images.unsplash.com/photo-1714334544535-4c5eddeb0ec1",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus labore quis consectetur quae culpa asperiores quod totam iste minima, beatae temporibus dolorem impedit expedita vero obcaecati, officiis ea debitis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem optio quod ipsam? Animi impedit maiores id nobis a totam voluptatibus rerum suscipit, modi esse facilis doloremque ipsa odio inventore."
        },
        {
            image: "https://images.unsplash.com/photo-1714334544535-4c5eddeb0ec1",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus labore quis consectetur quae culpa asperiores quod totam iste minima, beatae temporibus dolorem impedit expedita vero obcaecati, officiis ea debitis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem optio quod ipsam? Animi impedit maiores id nobis a totam voluptatibus rerum suscipit, modi esse facilis doloremque ipsa odio inventore."
        }
    ]

    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {trialSlideInf.map(slideInf => {
                    return (
                        <SwiperSlide className='w-full h-full relative'>
                            <Image src={slideInf.image} alt="header-img" className="w-full h-full object-container" width={800} height={800} />
                            <article className="absolute flex flex-col items-start gap-5 w-[50%] right-0 top-[30%] bg-[#e0c18d5c] backdrop-blur-sm p-10 rounded-sm">
                                <h1 className="text-3xl font-medium">{slideInf.title}</h1>
                                <p>{slideInf.description}</p>
                            </article>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}