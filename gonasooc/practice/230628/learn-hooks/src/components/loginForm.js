import React from 'react';
import useForm from '../hooks/useForm';

export default function LoginForm () {
  const { values, handleChange, resetForm} = useForm({
    username: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">사용자명:</label>
        <input type="text" name='username' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">비밀번호:</label>
        <input type="password" name='password' onChange={handleChange} />
      </div>
      <div>
        <button type="submit">로그인</button>
      </div>

    
    </form>
  )
}