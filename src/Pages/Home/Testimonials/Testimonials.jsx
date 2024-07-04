import Sectiontitle from "../../../Components/Sectiontitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className="my-20">
            <Sectiontitle

              subheading="What Our Clients Say"
              heading="Testimonials"
            >
                
            </Sectiontitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 
                {
                    reviews.map(review => <SwiperSlide key={review._id} >
                        <div className="text-center text-2xl m-24">

                        <div className="rating rating-xs text-4xl">
                            <input type="radio" name="rating-5" className="mask mask-star-2 text-4xl bg-orange-400" />
                            <input
                              type="radio"
                              name="rating-5"
                              className="mask mask-star-2 bg-orange-400"
                              defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-yellow-500">{review.name}</h3>
                        </div>
                   
                    </SwiperSlide>)
                }
            </Swiper>
            
        </section>
    );
};

export default Testimonials;