import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Teams from "@/components/home-one/teams";
import Testimonial from "@/components/home-one/testimonial";
import WhyChooseUs from "@/components/home-one/why-choose-us";

// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Web Design & Development",
		description:
		"Building modern, responsive, and high-performance websites using technologies like React, Next.js, and Node.js tailored to your business needs.",
		icon: "icon-web",
		slug: "web-design-development",
	},
	{
		id: crypto.randomUUID(),
		title: "Full Stack Development",
		description:
			"Providing complete frontend and backend solutions including APIs, databases, authentication systems, and scalable server-side architecture.",
		icon: "icon-database",
		slug: "full-stack-development",
	},
	{
		id: crypto.randomUUID(),
		title: "Mobile App Development",
		description:
			"Developing high-quality Android and iOS apps using React Native with smooth performance, modern UI, and scalable architecture.",
		icon: "icon-settings",
		slug: "mobile-app-development",
	},
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description:
			"Designing intuitive and user-friendly interfaces that improve user experience and increase engagement across web and mobile platforms.",
		icon: "icon-design-tools",
		slug: "ui-ux-design",
	},
	
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Creating impactful visuals including logos, branding materials, social media creatives, and marketing assets to build a strong brand identity.",
		icon: "icon-branding",
		slug: "graphic-design",
	},
	{
		id: crypto.randomUUID(),
		title: "SEO & Digital Marketing",
		description:
			"Optimizing websites for search engines and running targeted marketing campaigns to drive traffic, leads, and business growth.",
		icon: "icon-seo",
		slug: "seo-digital-marketing",
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			"Creating engaging animations and promotional videos to help businesses communicate their message effectively and boost conversions.",
		icon: "icon-design-thinking",
		slug: "motion-graphics",
	},
	{
	id: crypto.randomUUID(),
	title: "Product Design",
	description:
		"Designing user-centric digital products from idea to execution, including wireframes, prototypes, and scalable design systems focused on usability and business goals.",
	icon: "icon-target-1",
	slug: "product-design",
},
	
];
const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}
