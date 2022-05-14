import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import {
	PaperPlane,
	DiscordIcon,
	YtIcon,
	GithubIcon,
	TwitterIcon,
	MemberIcon,
	CalendarIcon,
} from "../assets/Icons.js";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
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
						<DiscordIcon className="icons" />
					</div>
					<div className="twitter">
						<TwitterIcon className="icons" />
					</div>
					<div className="members">
						<h1>196</h1>
						<p>Członków</p>
						<MemberIcon className="icons" />
					</div>
					<div className="days">
						<h1>697 dni</h1>
						<p>Istnienia Gractwa</p>
						<CalendarIcon className="icons" />
					</div>
					<div className="yt">
						<YtIcon className="icons" />
					</div>
					<div className="github">
						<GithubIcon className="icons" />
					</div>
					<div className="minecraft">
						<PaperPlane className="icons" />
					</div>
				</div>
			</article>
		</>
	);
}
