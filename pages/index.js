import Header from "../components/Header.js";

export default function Home() {
	return (
		<>
			<Header />
			<style jsx>{`
				h1,
				p {
					margin: 1rem;
				}
				p {
					border-left: 0.2rem solid black;
					padding-left: 1rem;
				}
			`}</style>
			<h1>Strona w przebudowie.</h1>
			<p>
				Tutaj powstaje Gractwo experience godny Twoich oczu. <br /> Zakładając,
				że zaraz nie dostanę od Ciebie - drogi internauto - wiadomości, że żaden
				taki nie jest. <br />
				I&apos;m onto you. <br />
				<br />~ jamesen
			</p>
		</>
	);
}
