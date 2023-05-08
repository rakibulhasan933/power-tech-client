"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import drone from "../assets/drone-cam.jpg";
import chip from "../assets/computer-chip.jpg";
import model from "../assets/3d-model.jpg";
import pilot from "../assets/pailot.jpg";
import control from "../assets/contor-tech.jpg";

function Banner() {
	return (
		<div>
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
	)
}

export default Banner