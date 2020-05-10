import React, {useEffect} from "react";
import './style.css'
import {Avatar, Button, Checkbox} from 'antd';
import {ISocial, ISocialAuthCOde} from "../../types/social";
import {Link} from "react-router-dom";


interface ISocialContainerProps {
    handleSubmit(values: ISocialAuthCOde): void,

    social: ISocial[]
    accessToken: string
}


const SocialContainer = (props: ISocialContainerProps) => {
    useEffect(() => {
        const data = {
            provider: 'linkedin',
            code: props.accessToken
        };
        if (props.accessToken) {
            props.handleSubmit(data)
        }
    }, [props.accessToken]);
    return <div className='auth-container'>
        <div className='auth-container__user'>
            {props.social ? props.social.map((item: ISocial, id: number) => {
                return <div key={id} className='auth-container__item'>
                    <Checkbox className='auth-checkbox'></Checkbox>
                    <div><Avatar size={75} icon={<img
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQHfJB1pRoMNfA/profile-displayphoto-shrink_800_800/0?e=1594252800&v=beta&t=mjeLayPNXFerA9z6S2Z909yaFpu-yAcXymL5_0TgqxE"
                        alt=""/>}/>
                        <img className='avatar-soc' src={item.linkedin.provider + `.png`} alt=""/>
                    </div>
                    <div>
                        <p className='auth-text'>{item.linkedin.firstName}</p>
                        <p className='auth-text'>{item.linkedin.lastName}</p>
                        <p className='auth-text_personal'>Personal account</p>
                    </div>
                </div>
            }) : null}
        </div>
        <div className='link-profiles'>Link more profiles</div>
        <div className='auth-social-wrap'>
            <div className='auth-social-item'>
                <Button
                    href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78j0bx7od67w2b&redirect_uri=http://localhost:3000/social&scope=r_liteprofile%20r_emailaddress%20w_member_social'
                    className='auth-social-button'>
                    <div className='auth-social-content'>
                        <img className='auth-social-card__img' src="linkedin.png" alt="linkedin"/>
                        <p className='auth-social-card__text'>Connect</p>
                    </div>
                </Button>
            </div>
            <div className='auth-social-item'>
                <Button href='#' className='auth-social-button'>
                    <div className='auth-social-content'>
                        <img className='auth-social-card__img' src="facecard.png" alt="facebook"/>
                        <p className='auth-social-card__text'>Connect</p>
                    </div>
                </Button>
            </div>
        </div>
        <div className='footer-button'>
            <Link to='/'><Button>Back</Button></Link>
            <Button type="primary">Skip</Button>
        </div>
    </div>
};

export default SocialContainer
