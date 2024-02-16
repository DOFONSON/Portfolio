import { useState, useEffect } from "react"


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);
        return window.removeEventListener('scroll', onScroll)
    }, [])
    function onUpdateActiveLink(value) {
        setActiveLink(value)
    }

    function showSocials() {
        document.getElementById('socialsList').hidden = false
    }

    function hideSocials() {
        document.getElementById('socialsList').hidden = true
    }
    return(
        <nav className={scrolled ?  `navigation scrolled` : `navigation`}>
            <div className="wrapper">
                <div className="navigation__title">
                    <h2>Nazarov Tim</h2>
                </div>
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#home" className={activeLink === 'home' ? 'active navbar__link': 'navbar__link'} onClick={() => onUpdateActiveLink('home')}>Home</a></li>
                    <li className="navigation__item"><a href="#skills" className={activeLink === 'skills' ? 'active navbar__link': 'navbar__link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a></li>
                    <li className="navigation__item"><a href="#projects" className={activeLink === 'projects' ? 'active navbar__link': 'navbar__link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a></li>
                    <li className="navigation__item">
                        <span className="navigation__socials" onMouseOver={showSocials} onMouseLeave={hideSocials}>Socials</span>
                        <ul className="socials__list" id="socialsList" hidden={true} onMouseOver={showSocials} onMouseLeave={hideSocials}>
                            <li><a href="https://github.com/DOFONSON" target="blank">gitHub</a></li>
                            <li><a href="mailto:dofodofonson@gmail.com" target="blank">e-mail</a></li>
                            <li><a href="https://web.telegram.org/k/#@d3k1shima" target="blank">telegram</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}