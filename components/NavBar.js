import Link from "next/link";
import { useSignOut, useUser } from "../hooks/user";

function NavBar() {
  const user = useUser();
  const signOut = useSignOut();

  return (
    <div className="">
      <nav className="flex justify-between p-12 w-full fixed">
        <Link href="/">The Plant Shop</Link>
        <ul className="flex mx-2">
          <li className="mx-2 hover:underline cursor-pointer">Search</li>

          {user ? (
            <>
              <li className="mx-2 hover:underline cursor-pointer">
                Welcome {user.name}
              </li>

              <li className="mx-2 hover:underline cursor-pointer">
                <Link href="/cart">Bag</Link>
              </li>
              <li className="mx-2 hover:underline cursor-pointer">
                <button onClick={signOut}>Sign Out</button>
              </li>
            </>
          ) : (
            <>
              <li className="mx-2 hover:underline cursor-pointer">
                <Link href="/cart">Bag</Link>
              </li>
              <li className="mx-2 hover:underline cursor-pointer">
                <Link href="/sign-in">Sign In</Link>
              </li>
            </>
          )}
          {/* <li className="mx-2 hover:underline cursor-pointer">Account</li>
          <li className="mx-2 hover:underline cursor-pointer">Bag</li> */}
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
