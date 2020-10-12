import React from 'react'
import './style/footer.css'
import { GrLinkedin, GrFacebook } from 'react-icons/gr'
import { FaTelegramPlane } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'
import { FiInstagram } from 'react-icons/fi'
import { RiMailFill } from 'react-icons/ri'
function Footer(props) {
    return (
        <footer>
            <h5>
                <div className='footer'>
                    <div className='footer__top__block'></div>
                    <div className='footer__bottom__block'>
                        <div className='footer__disclaimer__container'>
                            <div className='footer__disclaimer__top'>
                                Дисклеймер
                        </div>
                            <div className='footer__disclaimer__bottom'>
                                «GetNews» - платформа является авторским некоммерческим продуктом. Создана как один из элементов портфолио разработчика, исключительно в целях наглядной демонстрации умений и навыков создателя.  Все API ссылки взяты из открытых источников. Разработчик не претендует на авторство новостных статей, демонстрируемых на портале «GetNews», и не несёт ответственности за их содержимое.
                        </div>
                        </div>
                        <div className='footer__about-us__container'>
                            <div className='footer__social__container'>
                                <GrFacebook className='footer__icon' />
                                <GrLinkedin className='footer__icon' />
                                <FiInstagram className='footer__icon' />
                                <FaTelegramPlane className='footer__icon' />
                                <RiMailFill className='footer__icon'/>
                            </div>
                            <div className='footer__copyright__container'>
                                <BiCopyright className='footer__copyright' />
                                <span className='footer__autor'> MiBudch 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </h5>
        </footer>
    )
}
export default Footer