
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [review, setReview] = useState([])
    const [rating, setRating] = useState(3);

    useEffect(() => {
        fetch('./testimonial.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className="max-w-5xl mx-auto">
        <div className="">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[400px]">
                {
                    review.map((item, idx) => <SwiperSlide
                        key={idx}>
                        <div className="w-3/4 mx-auto h-full flex flex-col justify-center items-center">
                            <div>
                                <img className='w-28 h-28 flex justify-center items-center border-2 border-primary rounded-full p-2' src={item.image} alt="" />
                            </div>
                            <h3 className="text-2xl">{item.name}</h3>
                            <p className="text-center">{item.description}</p>
                            <div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    onChange={setRating}
                                />
                                <div className="flex justify-center items-center my-1">
                                <button className="text-center btn btn-xs bg-primary px-4 py-1 rounded-full " type="button" onClick={() => setRating(0)}>
                                   Review Reset
                                </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    </section>
    );
};

export default Testimonial;