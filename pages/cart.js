import { useQuery } from "react-query";
import { fetchJson } from "../lib/api";
import { Image } from "next/image";
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

function buildCart(cartItems) {
  let total = 0.0;
  const items = [];
  for (const cartItem of cartItems) {
    const itemTotal = cartItem.product.price * cartItem.quantity;
    total += itemTotal;
    items.push({ ...cartItem, total: itemTotal });
  }
  return { items, total };
}

function CartTable({ cartItems }) {
  const cart = buildCart(cartItems);
  return (
    <div className="flex justify-center p-28">
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((cartItem) => (
            <tr key={cartItem.id}>
              <td className="px-4 py-2">
                <div className="text-center">
                  <img src={cartItem.picture} className="w-40" />
                  <span className="text-center"> {cartItem.product.title}</span>
                </div>
              </td>
              <td className="px-4 py-2 text-right">
                {formatCurrency(cartItem.product.price)}
              </td>
              <td className="px-4 py-2 text-right">{cartItem.quantity}</td>
              <td className="px-4 py-2 text-right">
                {formatCurrency(cartItem.total)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="px-4 py-2 text-left">Total</th>
            <th></th>
            <th></th>
            <th className="px-4 py-2 text-right">
              {formatCurrency(cart.total)}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function CartPage() {
  const query = useQuery("cartItems", () => fetchJson("/api/cart"));
  const cartItems = query.data;

  console.log("[CartPage] cartItems:", cartItems);
  return (
    <div title="Cart">{cartItems && <CartTable cartItems={cartItems} />}</div>
  );
}

export default CartPage;
