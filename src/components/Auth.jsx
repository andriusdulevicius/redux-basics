import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authRedux';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [signIn, setSignIn] = useState(false);
  const [err, setErr] = useState(false);
  const id = Math.floor(Math.random() * 1000);
  const existingUsers = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    existingUsers.map((user) => {
      if (user.email === email && user.password === password) {
        dispatch(authActions.setLoggedInUser({ id, email, password }));
        dispatch(authActions.login());
      } else setErr(true);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === repeatPassword && email !== '') {
      setSignIn(false);
      dispatch(authActions.createUser({ id, email, password }));
      dispatch(authActions.setLoggedInUser({ id, email, password }));
    } else setErr(true);
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          {signIn && (
            <>
              <div className={classes.control}>
                <label htmlFor='repeatPassword'>Repeat Password</label>
                <input
                  type='password'
                  id='repeatPassword'
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  value={repeatPassword}
                />
              </div>
              <button onClick={submitHandler}> Submit </button>{' '}
            </>
          )}
          <button onClick={loginHandler}>Login</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSignIn(true);
            }}
          >
            Sign In
          </button>
          {err && (
            <span style={{ color: 'red' }}>
              Sitokio vartotojo nera, bandykite dar karta, arba sukurkite nauja vartotoja.
            </span>
          )}
        </form>
      </section>
    </main>
  );
};

export default Auth;
