import Image from "next/image";
import Call2Img from "../../public/images/icon/call2.svg";
import EmailImg from "../../public/images/icon/email.svg";
import MapImg from "../../public/images/icon/map.svg";
import Star2Img from "../../public/images/v1/star2.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						<span className="aximo-title-animation">
							Contact Information
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={Call2Img} alt="Call Img" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Call us</span>
								<p>+91 89492 17986</p>
								<p>+91 89492 17986</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={EmailImg} alt="Email" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Email us</span>
								<p>anas.dev2203@gmail.com</p>
								<p>anas.dev2203@gmail.com</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={MapImg} alt="Map" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Office address</span>
								<p>Ec 29 sajjan nagar udaipur.</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
