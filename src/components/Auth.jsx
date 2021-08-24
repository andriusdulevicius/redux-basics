import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authRedux';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const existingUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    if (existingUser.email === email && existingUser.password === password) dispatch(authActions.login());
    else setErr(true);
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <button>Login</button>
          {err && <span style={{ color: 'red' }}>Sitokio vartotojo nera, bandykite dar karta.</span>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
