const Profile = () => {
    return(
        <main className="content">
            <div className="content__img">
                <img src="https://www.chippewacountyedc.com/wp-content/uploads/2015/01/Sunrise-Terminal-Fake-1000-200.jpg" alt="content-img"/>
            </div>
            <div className="content-info">
                <div className="content-info__img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU" alt="avatar"/>
                </div>
                <div className="content-info__view">
                    <div className="content-info__title">
                        Vasia Pupkin
                    </div>
                    <div className="content-info__item">Date: 2 january</div>
                    <div className="content-info__item">City: Minsk</div>
                    <div className="content-info__item">Web-site: tut.by</div>
                </div>
                
            </div>
            <div className="posts">
                My post
                <div>New Post</div>
            </div>

            <div className="new-posts">
                <div className="new-posts__item">Post 1</div>
                <div className="new-posts__item">Post 2</div>
                <div className="new-posts__item">Post 3</div>
                <div className="new-posts__item">Post 4</div>
            </div>
        </main>	
    )
}

export default Profile;