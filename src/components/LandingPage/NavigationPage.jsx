import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Moon, Calendar, Syringe, Hospital, Book } from "lucide-react";

const NavigationPage = () => {
	const router = useRouter();

	const handleNavigation = (path) => {
		router.push(path);
	};

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
		});
		AOS.refresh();
	}, []);

	return (
		<div className="relative flex flex-col items-center justify-center bg-[url('/images/hero/navigation-background.jpg')] bg-no-repeat bg-cover min-h-screen p-6 bg-[#FAF8F5]">
			<div className="absolute inset-0 bg-gradient-to-b from-[#3DAEF5] to-[#1D2F6F] opacity-70 backdrop-blur-3xl"></div>

			<div className="w-full max-w-6xl">
				<h1
					className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-[#FAF8F5]"
					data-aos="slide-down"
				>
					Explore Your Health Insights
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
					<div
						onClick={() => handleNavigation("/profile")}
						className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#FFFFFF] hover:border-[#3DAEF5] shadow-lg transition-all duration-300 hover:bg-sky-50 active:bg-sky-100 cursor-pointer"
						data-aos="fade-up"
					>
						<div className="flex items-center mb-4">
							<div className="bg-[#3DAEF5] p-2 md:p-3 rounded-full mr-4">
								<User className="w-5 h-5 md:w-6 md:h-6 text-[#FAF8F5]" />
							</div>
							<h2 className="text-lg md:text-xl font-semibold text-[#141414]">
								Profile & BMI Calculator
							</h2>
						</div>
						<p className="text-gray-600 text-sm md:text-base">
							Manage your profile and track your Body Mass Index
						</p>
					</div>

					<div
						onClick={() => handleNavigation("/visit-history")}
						className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#FFFFFF] hover:border-[#3DAEF5] shadow-lg transition-all duration-300 hover:bg-sky-50 active:bg-sky-100 cursor-pointer"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="flex items-center mb-4">
							<div className="bg-[#3DAEF5] p-2 md:p-3 rounded-full mr-4">
								<Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#FAF8F5]" />
							</div>
							<h2 className="text-lg md:text-xl font-semibold text-[#141414]">
								Visit History
							</h2>
						</div>
						<p className="text-gray-600 text-sm md:text-base">
							Track your medical visits
						</p>
					</div>

					<div
						onClick={() => handleNavigation("/sleep-history")}
						className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#FFFFFF] hover:border-[#3DAEF5] shadow-lg transition-all duration-300 hover:bg-sky-50 active:bg-sky-100 cursor-pointer"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="flex items-center mb-4">
							<div className="bg-[#3DAEF5] p-2 md:p-3 rounded-full mr-4">
								<Moon className="w-5 h-5 md:w-6 md:h-6 text-[#FAF8F5]" />
							</div>
							<h2 className="text-lg md:text-xl font-semibold text-[#141414]">
								Sleep Tracker
							</h2>
						</div>
						<p className="text-gray-600 text-sm md:text-base">
							Monitor your sleep patterns
						</p>
					</div>

					<div
						onClick={() => handleNavigation("/vaccine-history")}
						className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#FFFFFF] hover:border-[#3DAEF5] shadow-lg transition-all duration-300 hover:bg-sky-50 active:bg-sky-100 cursor-pointer"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="flex items-center mb-4">
							<div className="bg-[#3DAEF5] p-2 md:p-3 rounded-full mr-4">
								<Syringe className="w-5 h-5 md:w-6 md:h-6 text-[#FAF8F5]" />
							</div>
							<h2 className="text-lg md:text-xl font-semibold text-[#141414]">
								Vaccine History
							</h2>
						</div>
						<p className="text-gray-600 text-sm md:text-base">
							View your vaccination records
						</p>
					</div>

					<div
						onClick={() => handleNavigation("/nearest-hospital")}
						className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#FFFFFF] hover:border-[#3DAEF5] shadow-lg transition-all duration-300 hover:bg-sky-50 active:bg-sky-100 cursor-pointer"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<div className="flex items-center mb-4">
							<div className="bg-[#3DAEF5] p-2 md:p-3 rounded-full mr-4">
								<Hospital className="w-5 h-5 md:w-6 md:h-6 text-[#FAF8F5]" />
							</div>
							<h2 className="text-lg md:text-xl font-semibold text-[#141414]">
								Nearby Hospitals
							</h2>
						</div>
						<p className="text-gray-600 text-sm md:text-base">
							Find hospitals near you
						</p>
					</div>

					<div
						onClick={() => handleNavigation("/article")}
						className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#FFFFFF] hover:border-[#3DAEF5] shadow-lg transition-all duration-300 hover:bg-sky-50 active:bg-sky-100 cursor-pointer"
						data-aos="fade-up"
						data-aos-delay="500"
					>
						<div className="flex items-center mb-4">
							<div className="bg-[#3DAEF5] p-2 md:p-3 rounded-full mr-4">
								<Book className="w-5 h-5 md:w-6 md:h-6 text-[#FAF8F5]" />
							</div>
							<h2 className="text-lg md:text-xl font-semibold text-[#141414]">
								Articles
							</h2>
						</div>
						<p className="text-gray-600 text-sm md:text-base">
							Read informative articles about health
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavigationPage;
