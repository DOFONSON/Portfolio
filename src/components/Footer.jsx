import tg from '../assets/img/telegram-outline-svgrepo-com.svg';
import vk from '../assets/img/vk-outline-svgrepo-com.svg';
import email from '../assets/img/email-9-svgrepo-com.svg';




export const Footer = () => {
    return(
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__title">
                    <h2 className="title">Nazarov Tim</h2>
                </div>
                <ul className="footer__socials">
                    <li className="socials__link"><a href="https://web.telegram.org/k/#@d3k1shima" target="blank"><img src={tg} alt="123" width={50}/></a></li>
                    <li className="socials__link"><a href="https://vk.com/ya_v_sam0m_d313_ytrat1l_nad3jdy" target='blank'><img src={vk} alt="123" width={50}/></a></li>
                    <li className="socials__link"><a href="mailto:dofodofonson@gmail.com"></a><img src={email} alt="123" width={50}/></li>
                </ul>
            </div>
        </footer>
    )
}