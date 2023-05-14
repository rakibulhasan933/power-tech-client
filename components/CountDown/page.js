"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';
import Image from 'next/image';
import laptop from "../assets/laptop-font.jpg";

function CountDown() {
	// const [timeLeft, setTimeLeft] = useState('');
	const [days, setDays] = useState('');
	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const [seconds, setSeconds] = useState('');
	const endDate = '2023-05-15'; // Replace with your end date
	const endTime = '23:59:59';

	// console.log(days, hours, minutes, seconds);



	useEffect(() => {
		const interval = setInterval(() => {
			const now = moment();
			const end = moment.tz(`${endDate} ${endTime}`, 'YYYY-MM-DD HH:mm:ss', 'Asia/Dhaka');
			const duration = moment.duration(end.diff(now));
			const days = duration.days();
			const hours = duration.hours();
			const minutes = duration.minutes();
			const seconds = duration.seconds();

			if (duration.asSeconds() <= 0) {
				clearInterval(interval);
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			} else {
				// setTimeLeft(`${days}days ${hours}hours ${minutes}min ${seconds}sec`);
				setDays(days);
				setHours(hours);
				setMinutes(minutes);
				setSeconds(seconds);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [endDate, endTime]);

	return (
		<div className='mx-40'>
			<div className='flex flex-col items-center gap-4 '>
				<div className="grid gap-2 justify-items-center">
					<h2 className="mb-6 text-4xl font-normal">Hurry, limited time offer</h2>
					<p className="mb-6 text-xl font-light ">Unbelievable discounts on laptops in our exclusive flash sale!</p>
				</div>
				<Image src={laptop} className='w-full rounded-xl' alt='laptop' />
				<div className="py-10">
					<div className="flex flex-row gap-5">
						<h2 className="">Sale end in</h2>
						<div className="flex flex-row gap-2">
							<div className="flex flex-col items-center gap-1 ">
								<h2 className="px-8 py-4 font-bold text-orange-700 rounded-lg text-8xl bg-slate-200">{days}</h2>
								<h2 className="">Days</h2>
							</div>
							<div className="flex flex-col items-center">
								<h2 className="font-extrabold text-8xl">:</h2>
							</div>
							<div className="flex flex-col items-center gap-1">
								<h2 className="px-8 py-4 font-bold text-orange-700 rounded-lg text-8xl bg-slate-200">{days}</h2>
								<h2 className="">Days</h2>
							</div>
							<div className="flex flex-col items-center">
								<h2 className="font-extrabold text-8xl">:</h2>
							</div>
							<div className="flex flex-col items-center gap-1">
								<h2 className="px-8 py-4 font-bold text-orange-700 rounded-lg text-8xl bg-slate-200">{days}</h2>
								<h2 className="">Days</h2>
							</div>
							<div className="flex flex-col items-center">
								<h2 className="font-extrabold text-8xl">:</h2>
							</div>
							<div className="flex flex-col items-center gap-1">
								<h2 className="px-8 py-4 font-bold text-orange-700 rounded-lg text-8xl bg-slate-200">{days}</h2>
								<h2 className="">Days</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CountDown