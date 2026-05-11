import FadeInStagger from "@/components/animation/FadeInStagger";
import Portfolio1Img from "../../../public/images/portfolio/pkconntess.png";
import Portfolio2Img from "../../../public/images/portfolio/chilliapple.png";
import Portfolio3Img from "../../../public/images/portfolio/hotelops.png";
import Portfolio4Img from "../../../public/images/portfolio/northpacific.png";
import Portfolio5Img from "../../../public/images/portfolio/crowndigital.png";
import Portfolio6Img from "../../../public/images/portfolio/ArGroup.png";
import Portfolio7Img from "../../../public/images/portfolio/stone.png";
import Portfolio8Img from "../../../public/images/portfolio/menumaster.png";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
  {
    id: crypto.randomUUID(),
    title: "PK Connect",
    description:
      "Developed a civic engagement app for Jan Suraj, allowing users to join as founding members, share insights, and drive youth participation in Bihar’s political ecosystem.",
    img: Portfolio1Img,
    category: "app",
   link: "https://play.google.com/store/apps/details?id=com.pk.connect"

  },

  {
    id: crypto.randomUUID(),
    title: "HotelOps",
    description:
      "A hotel management app that simplifies bookings, operations, and guest experience.",
    img: Portfolio3Img,
    category: "app",
    link: "https://play.google.com/store/apps/details?id=com.nilehospitality"
  },
  {
    id: crypto.randomUUID(),
    title: "Chilli Apple",
    description:
      "A mobile app for ordering and managing Chilli Apple's food delivery services.",
    img: Portfolio2Img,
    category: "app",
    link: "https://play.google.com/store/apps/details?id=com.phppoets.jainthela"
  },
  {
    id: crypto.randomUUID(),
    title: "MenuMaster: Digital QR Menu",
    description:
      "From digital menu QR codes to online orders and reservations, Menumaster reduces manual work while turning guest activity into useful data.",
    img: Portfolio8Img,
    category: "app",
    link:'https://play.google.com/store/apps/details?id=com.muzafferus.menumaster&hl=en_IN'
  },
  {
    id: crypto.randomUUID(),
    title: "North Pacific Hybrid Seeds",
    description:
      "North Pacific Hybrid Seeds is more than just a seed company — we are a team driven by a vision to strengthen Indian agriculture with reliable, high-performance hybrid seeds.",
    img: Portfolio4Img,
    category: "web",
    link:'https://northstarpacifichybridseeds.com/'
  },
  {
    id: crypto.randomUUID(),
    title: "Crown IT Solutions",
    description:
      "Crown IT Solutions (CWG IT Solutions), part of Crown Worldwide Group, helps businesses in Kuwait operate smarter through a combination of trusted business software and professional services.",
    img: Portfolio5Img,
    category: "web",
    link:'https://www.cwg-its.com/'
  },
  {
    id: crypto.randomUUID(),
    title: "Ar Rafi Group",
    description:
      "AR RAFI Group is an established Indian exporter active in the beauty and wellness sector since 2019.We do not just manufacture products for your brand.",
    img: Portfolio6Img,
    category: "web",
    link:'https://www.arrafigroup.com/'
  },{
    id: crypto.randomUUID(),
    title: "Stone Source",
    description:
      "Built a stone sourcing solution that connects global buyers with verified suppliers, ensuring quality materials, transparent pricing, and efficient procurement",
    img: Portfolio7Img,
    category: "web",
    link:'https://stonesource.in/'
  },
 
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Packaging Design",
  //     description:
  //       "Creating packaging solutions for products that not only protect attract customers on store.",
  //     img: Portfolio4Img,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Environmental Design",
  //     description:
  //       "Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
  //     img: Portfolio5Img,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Environmental Design",
  //     description:
  //       "Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
  //     img: Portfolio6Img,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Advertising Campaigns",
  //     description:
  //       "Developing creative concepts for print, digital, and video advertising campaigns, including ad design and copywriting",
  //     img: Portfolio7Img,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Website Development",
  //     description:
  //       "Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
  //     img: Portfolio8Img,
  //   },
];
function PortfolioList({ category }) {
  const filteredData = portfolioListData.filter(
    (item) => item.category === category,
  );
  return (
    <div className="section aximo-project-page aximo-section-padding5">
      <div className="container">
        <div className="row">
          {filteredData.map((portfolio, index) => (
            <FadeInStagger
              className="col-lg-6"
              key={portfolio.id}
              index={index}
            >
              <PortfolioCard portfolio={portfolio} index={index} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioList;
