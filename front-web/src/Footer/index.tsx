import './styles.css'
import {ReactComponent as YoutubeIcon} from './youtube.svg'
import {ReactComponent as Linkedincon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'


function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon/>
                </a>
                <a href="https://linkedin.com/school/devsuperior" target="_new">
                    <Linkedincon/>
                </a>
                <a href="https://instagram.com/devsuperior.ig" target="_new">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;