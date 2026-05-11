import BreadCrumb from "@/components/common/Breadcrumb";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import AutoSlider from "@/components/home-one/auto-slider";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
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
	
];
function ServicePage() {
	return (
		<>
			<BreadCrumb title="Service" />
			<Services services={servicesData} />
			<AutoSlider />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
