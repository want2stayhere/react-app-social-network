import Post from './Post/Post';
import classesMyPosts from './MyPosts.module.css';

let posts = [
	{id: 1, message: "Hi, how are you", like: 19,},
	{id: 2, message: "How is your name?", like: 45},
	{id: 3, message: "Hello, World!", like: 1},
];

let postsElements = posts.map(post => <Post key={post.id} id={post.id} message={post.message} like={post.like}  />); 


const MyPosts = (props) => {
	return(
		<div className={classesMyPosts.post}>
			<div className={classesMyPosts.post_item}>
				<h3>My posts</h3>  
				<div className={classesMyPosts.post_view}>
				   	<textarea></textarea> 
				   	<div className={classesMyPosts.post_links}>
						<button>Add post</button>
						<button>Remove</button>
				   	</div>
				</div>
			</div>
			<div className={classesMyPosts.new__posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;