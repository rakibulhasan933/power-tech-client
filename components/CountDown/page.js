"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';

function CountDown() {
	const [timeLeft, setTimeLeft] = useState('');
	const endDate = '2023-06-30'; // Replace with your end date
	const endTime = '23:59:59';



	useEffect(() => {
		const interval = setInterval(() => {
			const now = moment();
			const end = moment.tz(`${endDate} ${endTime}`, 'YYYY-MM-DD HH:mm:ss', 'UTC');
			const duration = moment.duration(end.diff(now));
			const days = duration.days();
			const hours = duration.hours();
			const minutes = duration.minutes();
			const seconds = duration.seconds();

			if (duration.asSeconds() <= 0) {
				clearInterval(interval);
				setTimeLeft('Countdown ended');
			} else {
				setTimeLeft(`${days}days ${hours}hours ${minutes}min ${seconds}sec`);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [endDate, endTime]);

	return (
		<div className="text-center">
			<p className="mb-2 text-2xl font-bold">Countdown ends on:</p>
			<p className="text-4xl font-bold">{timeLeft}</p>
		</div>
	)
}

export default CountDown