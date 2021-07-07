import classesProfileInfo from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div className={classesProfileInfo.content__img}>
                <img src="https://www.chippewacountyedc.com/wp-content/uploads/2015/01/Sunrise-Terminal-Fake-1000-200.jpg" alt="content-img"/>
            </div>
            <div className={classesProfileInfo.content__info}>
                <div className={classesProfileInfo.content__info__img}>
                    <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkXte9t_yNG9O13HfHx88tYKaKTM5SRkZCeTgDn6uOyic&fn=sqr_288" alt="avatar"/>
                </div>
                <div className={classesProfileInfo.content__info__view}>
                    <div className={classesProfileInfo.content__info__title}>
                        John Rembo
                    </div>
                    <div className={classesProfileInfo.content__info__item}>Date: 2 january</div>
                    <div className={classesProfileInfo.content__info__item}>City: Minsk</div>
                    <div className={classesProfileInfo.content__info__item}>Web-site: tut.by</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;