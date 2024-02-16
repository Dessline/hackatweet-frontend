import styles from '../styles/Login.module.css';
import { useSelector } from 'react-redux';
import { UserToStore } from '../reducers/user';
import { login, logout } from '../reducers/user';
import SignIn from './SignIn';

function Login() {
  const [User, setUser] = useState(null);
  const selectUser = (name) => {
    console.log('CLICK', name);
    setUser(name);
  };
 
  return (
    <div>
      <h3>Last burger:...</h3>
      <User selectBurger={selectUser}/>
    </div>
  );

 
 
 }



export default Login;