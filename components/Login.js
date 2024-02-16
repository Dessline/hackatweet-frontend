import styles from '../styles/Login.module.css';


import { useDispatch } from 'react-redux';
import { addFriendToStore } from '../reducers/user';

function Login() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}

export default Login;