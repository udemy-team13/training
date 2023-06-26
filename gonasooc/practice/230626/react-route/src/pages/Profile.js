import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProfileData = {
  donghun: {
    id: 1,
    name: '정동훈',
    description: '리액트 강의함'
  },
  herry: {
    id: 2,
    name: '민호',
    description: '인사이드아웃 사장임'
  }
};

const Profile = () => {
  const {username} = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];
  console.log(profile);

  // console.log(useParams());
  // console.log('username', username);
  // console.log(useNavigate());

  return (
    <div>
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => { navigate(-1) }}>뒤로가기</button>
    </div>
  )
}

export default Profile;