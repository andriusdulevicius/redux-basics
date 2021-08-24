import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authRedux';

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const allUsers = useSelector((state) => state.auth.users);
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const dispatch = useDispatch();

  const toggleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {auth && (
            <>
              <li>
                <a href='/'>My Products</a>
              </li>
              <li>
                <a href='/'>My Sales</a>
              </li>
              <li>
                <button onClick={toggleLogout}>Logout</button>
              </li>
              <li>
                <span>Logged in as : {loggedInUser.email}</span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
