import styles from '../styles/Login.module.css';
//import { useSelector } from 'react-redux';
//import { UserToStore } from '../reducers/user';
//import { login, logout } from '../reducers/user';
import SignIn from './SignIn';
import { Modal } from 'antd';

function Login() {
  const [User, setUser] = useState(null);
  const selectUser = (name) => {
    console.log('CLICK', name);
    setUser(name);
  };


  const showModal = () => {
		setIsModalVisible(!isModalVisible);
	}


  let modalContent;
	if (!user.isConnected) {
		modalContent = (
			<div className={styles.registerContainer}>
				<div className={styles.registerSection}>
					<p>Sign-up</p>
          <input type="text" placeholder="firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={setSignUpFirstname} />
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="register" onClick={() => handleRegister()}>Register</button>
				</div>
				<div className={styles.registerSection}>
					<p>Sign-in</p>
					<input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<button id="connection" onClick={() => handleConnection()}>Connect</button>
				</div>
			</div>
		);
	}

  let userSection;
	if (user.token) {
		userSection = (
			<div className={styles.logoutSection}>
				<p></p>
				<button onClick={() => handleLogout()}>Logout</button>
				<SignIn onClick={()=>handleHiddenclick()} className={styles.userSection}/>
			</div>
		);
	}else {
		if (isModalVisible) {
			userSection =
				<div className={styles.headerIcons}>
					<SignIn onClick={showModal} className={styles.userSection}  />
				</div>}

    }}

 
  return (
    <div>
      <h3></h3>
      <SignIn />
    </div>
  );

 
 
 



export default Login;