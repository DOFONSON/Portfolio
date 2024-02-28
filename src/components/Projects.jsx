import  memoImg from '../assets/img/memo.png';
import snakeImg from '../assets/img/snake.png';
import colorMixerImg from '../assets/img/color-mixer.png';
import landingImg from '../assets/img/university-landing.png';


export const Projects = function(){
    const projects = [
        {
            name: 'Memo game',
            description: 'React',
            imgUrl: memoImg,
            gitHub: 'https://github.com/DOFONSON/htmlacademy-react-project' 
        },
        {
            name: 'Snake game',
            description: 'JavaScript',
            imgUrl: snakeImg,
            gitHub: 'https://github.com/DOFONSON/Snake_game' 
        },
        {
            name: 'Color mixer',
            description: 'JavaScript & design',
            imgUrl: colorMixerImg,
            gitHub: 'https://github.com/DOFONSON/color-mixer'
        },
        {
            name: 'University landing page',
            description: 'HTML, CSS',
            imgUrl: landingImg,
            gitHub: 'https://github.com/DOFONSON/Tochka-layout'
        },
    ];

    return (
        <section className='projects' id='projects'>
            <div className="wrapper">
                <h2 className='projects__title'>My projects</h2>
                <ul className='projects__list'>
                    {projects.map((project, i) => (
                        <li className='projects__card' key={i}>
                            <h3 className='card__title'> <a href={project.gitHub} className='card__link'>{project.name}</a></h3>
                            <p className='card__description'>{project.description}</p>
                            <img src={project.imgUrl} alt="qweqwe" width={300} className='card__img'/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}