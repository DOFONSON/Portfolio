import { useEffect } from "react"
import { useState } from "react"
import { ReactComponent as HandIcon } from '../assets/img/hand-with-fingers-splayed-svgrepo-com.svg';


export const Banner = function () {
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [' Web developer', ' Front-end developer', ' JavaScript developer', ' UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200 - Math.random()*100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
           tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
       let i = loopNumber % toRotate.length
       let fullText = toRotate[i]
       let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
       setText(updatedText)

       if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2)
       }

       if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true)
        setDelta(period)
       } else if(isDeleting && updatedText === ''){
        setIsDeleting(false)
        setLoopNumber(loopNumber + 1)
        setDelta(200);
       }
    }


    return (
        <section className="banner">
            <div className="wrapper">
                <div className="banner__row">
                    <div className="banner__left">
                       <span className="banner__welcome">Welcome to my portfolio <HandIcon className="handIcon"/></span>
                       <h2 className="banner__title">Hi i'm Tim Nazarov, and I am <span className="banner__jobs"> {text}</span></h2>
                       <p className="banner__description">My name is Timofey Nazarov, I am a first-year web technology student at Moscow Polytechnic University. 
                          I love programming and everything related to it. I want to become a web developer and work in a friendly team. 
                          I like to develop in it-related fields and that's why I spend a lot of time on it. 
                        </p>
                    </div>
                    <div className="banner__right">
                        <div className="banner__img"> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}