"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import drone from "../../components/assets/drone-cam.jpg";
import chip from "../../components/assets/computer-chip.jpg";
import model from "../../components/assets/3d-model.jpg";
import pilot from "../../components/assets/pailot.jpg";
import control from "../../components/assets/contor-tech.jpg";
import ProductNavbar from './ProductNavbar'

function page() {
	return (
		<div className=' bg-slate-100'>
			<div className='mx-40'>
				<ProductNavbar />
				<Swiper
					style={{ height: `calc(100vh - 130px)` }}
					effect={"fade"}
					pagination={{
						clickable: true,
					}} navigation={true}
					modules={[EffectFade, Autoplay, Pagination]}
					className="mySwiper"
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
				>
					<SwiperSlide>
						<Image src={model} className="w-full transition-opacity rounded opacity-0 duration-[1s]"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")}
							style={{ height: `calc(100vh - 80px)` }} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={drone} className="w-full rounded" style={{ height: `calc(100vh - 80px)` }} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={chip} className="w-full rounded" style={{ height: `calc(100vh - 80px)` }} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={control} className="w-full rounded" style={{ height: `calc(100vh - 80px)` }} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={pilot} className="w-full rounded" style={{ height: `calc(100vh - 80px)` }} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default page