import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import { PaperPlane } from "../icons/PaperPlane.js";
export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<article className="main">
				<div className="Map">
					<div className="msg">
						<h1>99,9k</h1>
						<p>Wysłane wiadomości</p>
						<PaperPlane className="icons" />
					</div>
					<div className="bots">
						<p>Status botów</p>
					</div>
					<div className="discord">
						<PaperPlane className="icons" />
					</div>
					<div className="twitter">
						<PaperPlane className="icons" />
					</div>
					<div className="members">
						<h1>99,9k</h1>
						<p>Wysłane wiadomości</p>
						<PaperPlane className="icons" />
					</div>
					<div className="days">
						<h1>99,9k</h1>
						<p>Wysłane wiadomości</p>
						<PaperPlane className="icons" />
					</div>
					<div className="yt">
						<PaperPlane className="icons" />
					</div>
					<div className="github">
						<PaperPlane className="icons" />
					</div>
					<div className="minecraft">
						<PaperPlane className="icons" />
					</div>
				</div>
			</article>
		</>
	);
}
