import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";


export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products }, revalidate: parseInt(process.env.REVALIDATE_SECONDS),
};
}
function Home({ products }) {
  return (
    <>
      <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      {/* <h1 className="text-lg p-12">The Plant Shop</h1> */}
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((prod) => (
          <li key={prod.id}>
            <ProductCard product={prod} />
            </li>
        ))}
      </ul>
    </main>
    </>
  );
}
export default Home;
