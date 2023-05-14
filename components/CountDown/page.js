"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';
import Marquee from 'react-fast-marquee';

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
		<div>
			<Marquee>
				<div className="rounded ">
					<h2 className="font-bold text-orange-600 text-8xl">Flash sale!!!</h2>
				</div>
			</Marquee>
		</div>
	)
}

export default CountDown