import NavBar from '@/components/NavBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <NavBar/>
      <Component {...pageProps} />
    </QueryClientProvider>
    </>
  );
}

export default App;