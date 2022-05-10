import Link from "next/link";
import { GractwoLogo } from "./GractwoLogo";

export default function Home() {
	return (
		<nav className="main">
			<GractwoLogo className="logo" />
			<Link href="">&#187;</Link> {/* only this & lastel shows on mobile */}
			<Link href="/">Główna</Link>
			<Link href="">Rankingi</Link>
			<Link href="/o-gractwie">O Gractwie</Link>
			<Link href="">Zaloguj się</Link>
		</nav>
	);
}
