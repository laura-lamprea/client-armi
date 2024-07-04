export default function ProductList({ children }) {
	return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto">{children}</div>;
}
