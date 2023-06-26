import { useNavigate, useParams } from "react-router-dom";

const profileData = {
  jaehun: {
    id: 1,
    name: "이재훈",
    description: "리액트 강의 수강생",
  },
};

export default function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = profileData[username];

  return (
    <>
      <h1>
        {username} : {profile.name}
      </h1>
    </>
  );
}
