import classesProfileInfo from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div className={classesProfileInfo.content__img}>
                <img src="https://www.chippewacountyedc.com/wp-content/uploads/2015/01/Sunrise-Terminal-Fake-1000-200.jpg" alt="content-img"/>
            </div>
            <div className={classesProfileInfo.content__info}>
                <div className={classesProfileInfo.content__info__img}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU" alt="avatar"/>
                </div>
                <div className={classesProfileInfo.content__info__view}>
                    <div className={classesProfileInfo.content__info__title}>
                        Vasia Pupkin
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