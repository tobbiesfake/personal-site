import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { slideData } from './Data.js'
import { Slide } from './Slide.js'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './portfolio.css'

export const Portfolio = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const data = slideData;
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className='section__title'>Portfolio</h2>
            <span className='section__subtitle'>Most recent work</span>

            <div className='portfolio__container container'>
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                          }}
                         onBeforeInit={(swiper) => {
                              swiper.params.navigation.prevEl = navigationPrevRef.current;
                              swiper.params.navigation.nextEl = navigationNextRef.current;
                         }}
                        modules={[Navigation]}
                    >
                        {data.map(({ img, alt, title, description, href }, index) => {
                            return(
                                <SwiperSlide key={index}>
                                    <Slide img={img} alt={alt} title={title} href={href} description={description}/>
                                </SwiperSlide>
                            )
                        })}
                        <div className='swiper__navigation'>
                            <div className='swiper-prev' ref={navigationPrevRef}>
                                <i className='uil uil-angle-left-b'></i>
                            </div>
                            <div className='swiper-next' ref={navigationNextRef}>
                                <i className='uil uil-angle-right-b'></i>
                            </div>
                        </div>
                    </Swiper>
                    
                </div>
            </div>
        </section>
    )
}