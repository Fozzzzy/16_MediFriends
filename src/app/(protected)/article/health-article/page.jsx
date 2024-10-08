"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNav from "@/components/MobileNav";
import NavDashboard from "@/components/NavDashboard";

// Sample articles data
import image50thn from "public/images/health-article/50tahun.png";
import imagecovid from "public/images/health-article/covid.png";
import imagekesehatandunia from "public/images/health-article/kesehatandunia.png";
import imagepolio from "public/images/health-article/polio.png";
import imagepolusi from "public/images/health-article/polusi.png";
import imagerokok from "public/images/health-article/rokok.png";
import Footer from "@/components/Footer/Footer";

const articles = [
	{
		id: 1,
		title: "Indonesia Tetapkan Kejadian Luar Biasa Polio – delapan tahun sejak ditetapkan bebas polio oleh WHO",
		image: imagepolio,
		link: "https://www.bbc.com/indonesia/articles/c041gz8kkx1o",
	},
	{
		id: 2,
		title: "COVID secara resmi tidak lagi darurat kesehatan global – begini artinya dan pelajaran penting dari pandemi",
		image: imagecovid,
		link: "https://theconversation.com/covid-secara-resmi-tidak-lagi-darurat-kesehatan-global-begini-artinya-dan-pelajaran-penting-dari-pandemi-205202",
	},
	{
		id: 3,
		title: "Berusia 50 tahun? Berikut ini 4 hal yang dapat Anda lakukan untuk tingkatkan kesehatan dan kesejahteraan Anda",
		image: image50thn,
		link: "https://theconversation.com/berusia-50-tahun-berikut-ini-4-hal-yang-dapat-anda-lakukan-untuk-tingkatkan-kesehatan-dan-kesejahteraan-anda-200832",
	},
	{
		id: 4,
		title: "Tiga model solusi atasi kerentanan kesehatan dunia yang makin kompleks dan lintas disiplin",
		image: imagekesehatandunia,
		link: "https://theconversation.com/tiga-model-solusi-atasi-kerentanan-kesehatan-dunia-yang-makin-kompleks-dan-lintas-disiplin-191349",
	},
	{
		id: 5,
		title: "Perubahan Iklim dan Dampaknya bagi Kesehatan di Indonesia",
		image: imagepolusi,
		link: "https://nasional.kompas.com/read/2018/09/25/07130041/perubahan-iklim-dan-dampaknya-bagi-kesehatan-di-indonesia?page=all",
	},
	{
		id: 6,
		title: "Peringatan Kesehatan Bergambar di Kemasan Rokok Diperbaharui",
		image: imagerokok,
		link: "https://sehatnegeriku.kemkes.go.id/baca/rilis-media/20180531/1826040/peringatan-kesehatan-bergambar-kemasan-rokok-diperbaharui/",
	},
];

const ArticleCard = ({ article }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
		});
		AOS.refresh();
	}, []);

	return (
		<div
			className="border border-gray-300 shadow-md rounded-lg p-4 text-center m-4 w-[300px] transition-transform transform hover:scale-110 duration-500"
			data-aos="slide-up"
		>
			<Link href={article.link} passHref>
				<div className="relative w-full h-48">
					<Image
						src={article.image}
						alt={article.title}
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<h3 className="mt-3 text-justify font-semibold">
					{article.title}
				</h3>
			</Link>
		</div>
	);
};

const Home = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<>
			{/* Nav */}
			<MobileNav nav={nav} closeNav={closeNav} />
			<NavDashboard openNav={openNav} closeNav={closeNav} />
			<div className="p-10 max-w-screen-xl mx-auto">
				<h1 className="mt-20 text-5xl text-center mb-10">
					Health Articles
				</h1>
				<div className="flex flex-wrap justify-center">
					{articles.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))}
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Home;
