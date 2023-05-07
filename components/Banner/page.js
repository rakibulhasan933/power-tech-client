"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
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
				pagination={{
					clickable: true,
				}} navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide>
					<Image src={model} width={1400} style={{ height: `calc(100vh - 80px)` }} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={drone} width={1400} style={{ height: `calc(100vh - 80px)` }} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={chip} width={1400} style={{ height: `calc(100vh - 80px)` }} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={control} width={1400} style={{ height: `calc(100vh - 80px)` }} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pilot} width={1400} style={{ height: `calc(100vh - 80px)` }} />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Banner