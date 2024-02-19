import React, { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/img/arrow-left-334-svgrepo-com.svg';
import { ReactComponent as ArrowRight } from '../assets/img/arrow-right-333-svgrepo-com.svg';

export const Skills = () => {
    const [startIndex, setStartIndex] = useState(0); // Индекс начала текущего слайда

    const skillsData = [
        { name: "JavaScript", value: 75 },
        { name: "React", value: 60 },
        { name: "html", value: 90 },
        { name: "SCSS", value: 90 },
        { name: "GIT", value: 70 },
        { name: "PHP", value: 40 },
        { name: "Python", value: 50 }
    ];

    const handlePrevSlide = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
        if (document.querySelector('.slider__arrow-btn--second').classList.contains('disabled')) {
            document.querySelector('.slider__arrow-btn--second').classList.remove('disabled')
        }
        if (startIndex === 1) {
            document.querySelector('.slider__arrow-btn--first').classList.add('disabled')
        }
    };

    const handleNextSlide = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, skillsData.length - 3));
        if (document.querySelector('.slider__arrow-btn--first').classList.contains('disabled')) {
            document.querySelector('.slider__arrow-btn--first').classList.remove('disabled')
        }
        if (startIndex === skillsData.length - 4) {
            document.querySelector('.slider__arrow-btn--second').classList.add('disabled')
        }
    };

    return (
        <section className="skills">
            <div className="wrapper">
                <div className="skills__slider">
                    <button className="slider__arrow-btn slider__arrow-btn--first disabled" onClick={handlePrevSlide}>
                        <ArrowLeft className="slider__arrow " />
                    </button>
                    <ul className="skills__list">
                        {skillsData.slice(startIndex, startIndex + 3).map((skill, index) => (
                            <li className="skills__skill" key={index}>
                                <div className={`skills__progress-bar ${skill.name}`} role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                <h2 className="skills__name">{skill.name === 'html' ? 'HTML/CSS' : skill.name}</h2>
                            </li>
                        ))}
                    </ul>
                    <button className="slider__arrow-btn slider__arrow-btn--second" onClick={handleNextSlide}>
                        <ArrowRight className="slider__arrow" />
                    </button>
                </div>
            </div>
        </section>
    );
};
