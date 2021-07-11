//import {posts} from '../../../index';
import React from 'react';
import Post from './Post/Post';
import classesMyPosts from './MyPosts.module.css';


const MyPosts = (props) => {
	let postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} like={post.like}  />); 

	//ADDPOST
	let newPostEl = React.createRef();
	let addPost =  () => {
		props.addPost();
	};
	let onPostChange = () => {
		let text = newPostEl.current.value;
		props.updateNewPostText(text);
	}

	return(
		<div className={classesMyPosts.post}>
			<div className={classesMyPosts.post_item}>
				<h3>My posts</h3>  
				<div className={classesMyPosts.post_view}>
				   	<textarea ref={newPostEl} onChange={onPostChange}  value={props.newPostText} />
				   	<div className={classesMyPosts.post_links}>
						<button onClick={addPost}>Add post</button>
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