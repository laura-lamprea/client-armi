import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="mt-40 mx-10 flex flex-col items-center justify-center">
				{children}
			</main>
		</div>
	);
}
