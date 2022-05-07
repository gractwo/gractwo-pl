import Link from "next/link";
import { GractwoLogo } from "./GractwoLogo";

export default function Home() {
	return (
		<nav className="main">
			<GractwoLogo className="logo" />
			<Link href="/">
				<a>Główna</a>
			</Link>
			<Link href="">
				<a>Rankingi</a>
			</Link>
			<Link href="/o-gractwie">
				<a>O Gractwie</a>
			</Link>
			<Link href="">
				<a>Zaloguj się</a>
			</Link>
		</nav>
	);
}
