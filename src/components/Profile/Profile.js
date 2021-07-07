import classesProfile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return(
        <div className={classesProfile.profile}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;