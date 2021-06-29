import classesPost from './Post.module.css';

const Post = ( props ) => {
    return(
        <div className={classesPost.new__posts__item}>
            <div className={classesPost.new__posts__img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU" alt="avatar"/>
            </div>
            <div className={classesPost.new__posts__info}>
                {props.message}
            </div>
            <div className={classesPost.new__posts__like}>
                {props.like} Like
            </div>
        </div>
    )
}

export default Post;