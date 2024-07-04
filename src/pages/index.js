import Layout from "../components/Layout";
import { FaShop } from "react-icons/fa6";

export default function Home() {
	return (
		<Layout>
			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-whitemd:text-5xl lg:text-6xl">
				Welcome to
				<span className="text-[#418fde] dark:text-blue-500"> FARMATODO</span> !
			</h1>
			<p className="text-lg font-normal text-gray-500 lg:text-xl">
				Use the navigation to view products and manage your cart.
			</p>
			<FaShop
				style={{ fontSize: "100px", marginTop: "20px", color: "#418fde" }}
			/>
		</Layout>
	);
}
