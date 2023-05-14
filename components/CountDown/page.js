"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';

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
		<div className="text-center">
			<div className="flex flex-row items-center justify-center gap-2 mb-2 ">
				<div className="flex flex-col justify-center p-6 mb-2 border-2 rounded-md bg-stone-600">
					<p className="text-5xl font-semibold text-white">0{days}</p>
					<p className="px-2 text-2xl font-semibold">Days</p>
				</div>
				<p className='text-5xl '>:</p>
				<p className="p-6 text-5xl font-semibold text-white border-2 rounded-md bg-stone-600">{hours}</p>
				<p className='text-5xl '>:</p>
				<p className="p-6 text-5xl font-semibold text-white border-2 rounded-md bg-stone-600">{minutes}</p>
				<p className='text-5xl '>:</p>
				<p className="p-6 text-5xl font-semibold text-white border-2 rounded-md bg-stone-600">{seconds}</p>
			</div>
			<div className="flex flex-row items-center justify-center gap-2 mb-2">
				<p className="px-8 uppercase">Days</p>
				<p className="pr-10 uppercase">Hours</p>
				<p className="pr-10 uppercase">Minutes</p>
				<p className="uppercase">Seconds</p>
			</div>
		</div>
	)
}

export default CountDown