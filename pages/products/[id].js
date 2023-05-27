import { getProducts, getProduct } from "@/lib/products";
import Image from "next/image";
import { useUser } from "@/hooks/user";
import AddToCartWidget from "@/components/AddToCartWidget";

export async function getStaticPaths(){
    const products = await getProducts();
    return {
        paths: products.map((p)=>({
            params: { id: p.id.toString()}
        })),
        fallback: 'blocking',
    }
}
export async function getStaticProps({params: {id}}){
    try{
        const product = await getProduct(id);
        return {
        props: { product }, revalidate: 5 * 60
        }
    }catch(err){
        return {notFound: true}
    }
   
}
function Product({product}) {
  const user = useUser();
  return (
    <div className="p-24">
    <h1 className="text-5xl mb-5">{product.title}</h1>
    <div className="flex flex-col lg:flex-row">
      <div>
        <Image src={product.pictureUrl} alt=""
          width={640} height={480} priority
        />
      </div>
      <div className="flex-1 lg:ml-4">
        <p className="text-md">
          {product.description}
        </p>
        <p className="text-lg font-bold mt-2">
          {product.price}
        </p>
        {user && <AddToCartWidget productId={product.id} />}
      </div>
    </div>
  </div>
  );
}

export default Product;
