import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!auth ? (
        <Auth />
      ) : (
        <>
          <UserProfile />
          <Counter />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
