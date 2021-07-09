//import {posts} from '../../../index';
import React from 'react';
import Post from './Post/Post';
import classesMyPosts from './MyPosts.module.css';


const MyPosts = (props) => {
	let postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} like={post.like}  />); 

	//ADDPOST
	let newPostEl = React.createRef();
	let addPost =  () => {
		let text = newPostEl.current.value;
		props.addPost(text);
		newPostEl.current.value = '';
	};

	return(
		<div className={classesMyPosts.post}>
			<div className={classesMyPosts.post_item}>
				<h3>My posts</h3>  
				<div className={classesMyPosts.post_view}>
				   	<textarea ref={newPostEl}></textarea> 
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