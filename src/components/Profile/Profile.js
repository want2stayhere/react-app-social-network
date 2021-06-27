import classesProfile from './Profile.module.css';

const Profile = () => {
    return(
        <main className={classesProfile.content}>
            <div className={classesProfile.content__img}>
                <img src="https://www.chippewacountyedc.com/wp-content/uploads/2015/01/Sunrise-Terminal-Fake-1000-200.jpg" alt="content-img"/>
            </div>
            <div className={classesProfile.content__info}>
                <div className={classesProfile.content__info__img}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU" alt="avatar"/>
                </div>
                <div className="{classesProfile.content__info__view}">
                    <div className={classesProfile.content__info__title}>
                        Vasia Pupkin
                    </div>
                    <div className={classesProfile.content__info__item}>Date: 2 january</div>
                    <div className={classesProfile.content__info__item}>City: Minsk</div>
                    <div className={classesProfile.content__info__item}>Web-site: tut.by</div>
                </div>
                
            </div>
            <div className={classesProfile.posts}>
                My post
                <div>New Post</div>
            </div>

            <div className={classesProfile.new__posts}>
                <div className={classesProfile.new__posts__item}>Post 1</div>
                <div className={classesProfile.new__posts__item}>Post 2</div>
                <div className={`${classesProfile.new__posts__item} ${classesProfile.active}`}>Post 3</div>
                <div className={classesProfile.new__posts__item}>Post 4</div>
            </div>
        </main>	
    )
}

export default Profile;