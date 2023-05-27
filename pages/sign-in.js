import { useState } from "react";
import Button from "@/components/Button";
import { fetchJson } from "@/lib/api";
import { useRouter } from "next/router";
import { useSignIn } from "@/hooks/user";

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInError, signInLoading } = useSignIn();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valid = await signIn(email, password);
    if (valid) {
      router.push('/');
    }
  };
  return (
    <div className="p-24 flex justify-center">
      <div>
        <h1 className="text-5xl">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 mt-10">
            <label>
              Email
              <input
                required
                className="block border rounded text-black p-2"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                required
                className="block border rounded text-black p-2"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          {signInError && (
          <p className="text-red-700">
            Invalid credentials
          </p>
        )}
        {signInLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">
            Sign In
          </Button>
        )}
        </form>
      </div>
    </div>
  );
}
export default SignIn;
