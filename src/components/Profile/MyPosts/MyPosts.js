import Post from '../Post/Post';
import classesMyPosts from './MyPosts.module.css';

const MyPosts = (props) => {
    return(
        <div className="Test">
            <div className={classesMyPosts.post}>
                My posts
                <div>
                   <textarea></textarea> 
                   <button>Add post</button>
                   <button>Remove</button>
                </div>
            </div>
            <div className={classesMyPosts.new__posts}>
                <Post message = "Hi, how are you" like="19" />
                <Post message = "Hello, world!" like="45"  />
                <Post message = "It's good" like="1"  />
            </div>
        </div>
    )
}

export default MyPosts;