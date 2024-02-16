import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignUp = () => {

  const dispatch = useDispatch();
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpFirstname,setSignUpFirstname] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');


  fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
  }).then(response => response.json())
    .then(data => {
      if (data.result) {
        dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
        setSignUpFirstname('');
        setSignUpUsername('');
        setSignUpPassword('');
        setIsModalVisible(false)
      }
    });
};



export default SignUp;