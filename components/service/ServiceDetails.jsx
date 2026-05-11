import Image from "next/image";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";

const servicesData = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    subtitle: "Building modern, responsive, and high-performance websites",
    image: "/images/service/service-single.png",
    content: `
      <p>We create stunning, fast, and user-friendly websites using the latest technologies like Next.js, React, and Tailwind CSS.</p>
      <p>Our web solutions are fully responsive, SEO optimized, and built to scale with your business.</p>
    `
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    subtitle: "Complete frontend and backend solutions",
    image: "/images/service/service-single.png",
    content: `
      <p>We provide end-to-end development including APIs, databases, authentication, and scalable server architecture.</p>
      <p>From concept to deployment — we handle everything.</p>
    `
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "High-quality Android & iOS apps",
    image: "/images/service/service-single.png",
    content: `
      <p>Cross-platform mobile applications built with React Native that deliver native-like performance and beautiful UI.</p>
    `
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Intuitive and user-friendly interfaces",
    image: "/images/service/service-single.png",
    content: `
      <p>We design clean, modern, and user-friendly interfaces that enhance user experience and improve engagement.</p>
      <p>Our process includes research, wireframing, prototyping, and usability testing.</p>
    `
  },
  {
    slug: "product-design",
    title: "Product Design",
    subtitle: "From idea to scalable digital product",
    image: "/images/service/service-single.png",
    content: `
      <p>We design complete digital products from scratch, focusing on user needs, business goals, and scalability.</p>
      <p>Our product design process includes research, user journey mapping, wireframes, prototypes, and design systems.</p>
      <p>We help transform your idea into a real, usable, and market-ready product.</p>
    `
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    subtitle: "Creative visuals for strong brand identity",
    image: "/images/service/service-single.png",
    content: `
      <p>We create impactful visuals including logos, branding materials, social media creatives, and marketing assets.</p>
      <p>Our designs help your brand stand out and communicate effectively with your audience.</p>
    `
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    subtitle: "Grow your traffic, leads, and business",
    image: "/images/service/service-single.png",
    content: `
      <p>We optimize your website for search engines and run targeted marketing campaigns.</p>
      <p>Our strategies help increase visibility, traffic, and conversions for your business.</p>
    `
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    subtitle: "Engaging animations and videos",
    image: "/images/service/service-single.png",
    content: `
      <p>We create high-quality animations, explainer videos, and promotional content.</p>
      <p>Perfect for marketing, branding, and storytelling.</p>
    `
  }
];

export default function ServiceDetails({ params }) {
  const { slug } = params || {};   // params se slug le rahe hain

  const service = servicesData.find((s) => s.slug === slug);

  // Agar service na mile toh error message
  if (!service) {
    return (
      <div className="section aximo-section-padding2">
        <div className="container">
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section aximo-section-padding2 pb-0">
      <div className="container">
        <div className="aximo-service-details-wrap">
          
          {/* Dynamic Image */}
          <FadeInUp className="aximo-service-details-thumb">
            <Image 
              src={service.image} 
              alt={service.title} 
              sizes="100vw" 
              width={1200}
              height={600}
              priority
            />
          </FadeInUp>

          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    {service.title}
                    <span className="aximo-title-icon">
                      <Image src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p><strong>{service.subtitle}</strong></p>
                
                {/* Dynamic Content */}
                <div dangerouslySetInnerHTML={{ __html: service.content }} />
              </div>
            </div>
          </div>

          {/* Working Approach Section */}
          <div className="aximo-faq-wrap">
            <WorkingApproach />
          </div>
        </div>
      </div>
    </div>
  );
}