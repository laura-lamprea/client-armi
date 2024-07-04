import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div>
			<header>
				<nav>
					<ul>
						<li>
							<Link href="/">
								Home
							</Link>
						</li>
						<li>
							<Link href="/products">
								Products
							</Link>
						</li>
						<li>
							<Link href="/cart">
								Cart
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
			<footer>Farmatodo</footer>
		</div>
	);
}
