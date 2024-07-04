import Link from "next/link";
import Image from "next/image";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
	return (
		<nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-sm">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a
					href="https://github.com/laura-lamprea"
					target="_blank"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<Image
						src="/logo.png"
						alt="Logo"
						width={100}
						height={100}
						className="h-8 w-auto"
					/>
				</a>
				<div
					className="items-center justify-between flex w-auto"
					id="navbar-sticky"
				>
					<ul className="flex p-4 md:p-0 font-medium space-x-2 sm:space-x-8 flex-row mt-0">
						<li className="flex gap-2 items-center py-2 px-3 text-gray-900 hover:text-[#418fde]">
							<IoHomeOutline style={{ fontSize: "20px" }} />
							<Link href="/">Home</Link>
						</li>
						<li className="flex gap-2 items-center py-2 px-3 text-gray-900 hover:text-[#418fde]">
							<HiOutlineShoppingBag style={{ fontSize: "20px" }} />
							<Link href="/products">Products</Link>
						</li>
						<li className="flex gap-2 items-center py-2 px-3 text-gray-900 hover:text-[#418fde]">
							<IoCartOutline style={{ fontSize: "20px" }} />
							<Link href="/cart">Cart</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
