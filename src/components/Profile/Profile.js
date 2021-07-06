import classesProfile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={classesProfile.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;