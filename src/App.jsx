import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { authActions } from './../store/index';

function App() {
  return (
    <>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
    </>
  );
}

export default App;
