import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { login, putAccessToken } from '../../utils/network-data';

function LoginPage({ loginSuccess }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    const { error, data } = await login({ email, password });
    
    if (!error) {
      putAccessToken(data.accessToken);
      loginSuccess(data);
    }
    setIsLoading(false);
  };

  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <form onSubmit={onSubmitHandler} className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} required />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
    </section>
  );
}

export default LoginPage;
