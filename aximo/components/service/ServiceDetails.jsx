import Image from "next/image";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";

// All Services Data
const servicesData = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    subtitle: "Building modern, responsive, and high-performance websites",
    image: "/images/service/service-single.png",
    content: `
      <p>We specialize in creating visually stunning, fast-loading, and fully responsive websites that deliver exceptional user experiences and drive business growth.</p>
      <p>From corporate websites to complex web applications, we bring your vision to life using cutting-edge technologies.</p>
    `,
    tools: "Next.js, React, Tailwind CSS, Framer Motion, WordPress, Shopify, Figma",
    steps: [
      "Requirement Gathering & Discovery",
      "Wireframing & UI/UX Design",
      "Frontend & Backend Development",
      "Quality Assurance & Testing",
      "Deployment & Launch",
      "Ongoing Maintenance & Support"
    ]
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    subtitle: "Complete frontend and backend solutions",
    image: "/images/service/service-single.png",
    content: `
      <p>We provide end-to-end full stack development services, building robust, scalable, and secure web applications from scratch.</p>
      <p>Our team handles everything — from database design to API development and deployment.</p>
    `,
    tools: "Next.js, React, Node.js, Express, MongoDB, PostgreSQL, Firebase, Redux, TypeScript",
    steps: [
      "Project Analysis & Planning",
      "Database Design & Architecture",
      "API Development & Integration",
      "Frontend Development",
      "Testing & Debugging",
      "Deployment & Maintenance"
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "High-quality Android & iOS apps",
    image: "/images/service/service-single.png",
    content: `
      <p>We develop high-performance, native-like mobile applications for both Android and iOS platforms using React Native.</p>
      <p>Our apps are feature-rich, user-friendly, and optimized for performance.</p>
    `,
    tools: "React Native, Expo, Firebase, Redux, TypeScript, Jest",
    steps: [
      "App Idea & Requirement Analysis",
      "UI/UX Design",
      "Frontend & Backend Development",
      "API Integration",
      "Testing on Real Devices",
      "App Store Deployment & Maintenance"
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Intuitive and user-friendly interfaces",
    image: "/images/service/service-single.png",
    content: `
      <p>UI/UX Design is at the heart of every successful digital product. We create intuitive, beautiful, and user-centered designs that enhance user satisfaction and engagement.</p>
    `,
    tools: "Figma, Adobe XD, Photoshop, Illustrator, ProtoPie, Maze",
    steps: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design (UI)",
      "Usability Testing",
      "Design System Creation",
      "Handoff to Development Team"
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    subtitle: "Creative visuals and brand identity",
    image: "/images/service/service-single.png",
    content: `
      <p>We create impactful graphic designs including logos, branding materials, social media creatives, brochures, and marketing collateral that help your brand stand out.</p>
    `,
    tools: "Adobe Photoshop, Illustrator, InDesign, Figma, Canva Pro, After Effects",
    steps: [
      "Brief Understanding & Research",
      "Concept Development",
      "Design Creation & Revisions",
      "Brand Guideline Preparation",
      "Final Delivery in Multiple Formats",
      "Support for Marketing Materials"
    ]
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    subtitle: "Engaging animations and promotional videos",
    image: "/images/service/service-single.png",
    content: `
      <p>We create captivating motion graphics, explainer videos, promotional animations, and dynamic visual content that effectively communicate your message and boost engagement.</p>
    `,
    tools: "After Effects, Cinema 4D, Premiere Pro, Blender, Lottie, Rive",
    steps: [
      "Concept & Storyboarding",
      "Script Writing & Voiceover",
      "Animation & Motion Design",
      "Sound Design & Music Integration",
      "Rendering & Exporting",
      "Client Review & Final Delivery"
    ]
  }
];

export default function ServiceDetails({ params }) {
  const { slug } = params || {};

  const service = servicesData.find((s) => s.slug === slug);

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
                
                {/* Main Content */}
                <div dangerouslySetInnerHTML={{ __html: service.content }} />

                {/* Tools We Use */}
                <h3 className="mt-5">Tools & Technologies We Use</h3>
                <p>{service.tools}</p>

                {/* Our Process / Steps */}
                <h3 className="mt-5">Our Working Process</h3>
                <ol className="aximo-process-list">
                  {service.steps.map((step, index) => (
                    <li key={index}>
                      <span className="step-number">{index + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
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