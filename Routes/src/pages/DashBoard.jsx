import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>User Profile</h1>
            <p>Welcome, <strong>{username}</strong>!</p>
            <button onClick={() => navigate("/")}>Go Home</button>
        </div>
    );
};
export default Profile;
