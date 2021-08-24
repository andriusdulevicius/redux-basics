import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authRedux';

const Footer = () => {
  const dispatch = useDispatch();

  const toggleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.header}>
      <span>All rights reserved by Andrius Dulevicius &copy; 2021.</span> <button onClick={toggleLogout}>Logout</button>
    </div>
  );
};

export default Footer;
