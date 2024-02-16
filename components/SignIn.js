import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { login, logout } from '../reducers/user';
//import { Modal } from 'antd';
//import Link from 'next/link';



function SignIn() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
//const [isModalVisible, setIsModalVisible] = useState(false);
  const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
  
  
  fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
					setIsModalVisible(false)
				}
			});
	};



export default SignIn;