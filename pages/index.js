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
export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<article className="main">
				<div className="Map">
					<a className="msg">
						<h1>99,9k</h1>
						<p>Wysłane wiadomości</p>
						<PaperPlane className="icons" />
					</a>
					<a className="bots">
						<p>Status botów</p>
					</a>
					<a className="discord" href="https://discord.gg/NsR94evcPC">
						<DiscordIcon className="icons" />
					</a>
					<a className="twitter" href="https://twitter.com/gractwo">
						<TwitterIcon className="icons" />
					</a>
					<a className="members">
						<h1>196</h1>
						<p>Członków</p>
						<MemberIcon className="icons" />
					</a>
					<a className="days">
						<h1>
							{Math.floor(
								(Date.now() - new Date("06.07.2020").getTime()) / 86400000
							)}{" "}
							dni
						</h1>
						<p>Istnienia Gractwa</p>
						<CalendarIcon className="icons" />
					</a>
					<a
						className="yt"
						href="https://www.youtube.com/channel/UCM5O0ltiO_ZigZiP-Wa28Ew"
					>
						<YtIcon className="icons" />
					</a>
					<a className="github" href="https://github.com/Gractwo">
						<GithubIcon className="icons" />
					</a>
					<a className="minecraft">
						<PaperPlane className="icons" />
					</a>
				</div>
			</article>
		</>
	);
}
