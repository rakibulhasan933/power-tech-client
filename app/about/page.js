import AboutNavbar from '@/components/Navbar/AboutNavbar'
import Image from 'next/image';
import React from 'react';
import who from "../../components/assets/who-are-you.jpg";

export const metadata = {
	title: 'About',
};

function About() {
	return (
		<div className=' mx-40'>
			<AboutNavbar />
			<div className=" my-12">
				<div className=" flex flex-col  items-center gap-20 ">
					<h2 className=" text-5xl font-semibold">Who We are</h2>
					<Image src={who} className=' w-full rounded-lg' alt='people' />
					<p className=" text-base font-light px-8">
						PowerTech is a leading technology company dedicated to revolutionizing the energy sector. With a strong focus on innovation and sustainability, we strive to empower businesses and individuals with cutting-edge solutions that drive efficiency and reduce environmental impact. Our mission is to reshape the future of energy through advanced technologies, ensuring a cleaner and more sustainable world for generations to come. At Power Tech, we understand the pressing need for sustainable energy solutions in today's world. As the demand for power continues to grow, we are committed to developing and implementing forward-thinking technologies that harness renewable sources and optimize energy consumption. Our team of experts comprises visionary engineers, scientists, and industry professionals.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About