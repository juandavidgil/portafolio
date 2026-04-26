import { useEffect, useRef, useState } from 'react';
import logo from '../assets/Logos/2.svg';
import "../App.css";

function Section_1() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return(
        <div className='hero-container' ref={ref}>
            
            <div className={`hero-image ${visible ? 'show' : ''}`}>
                <img src={logo} alt='logo' />
            </div>

            <div className={`hero-content ${visible ? 'show' : ''}`}>
                <h2 className='Title_section'>JUAN DAVID GIL</h2>
                
                <p > 
                    Desarrollador Full Stack que construye productos 
                    digitales de verdad: desde la lógica hasta la experiencia final. 
                    Trabajo con TypeScript, React, React Native y Python para crear aplicaciones web y móviles rápidas, 
                    escalables y listas para producción.
                </p>
                <p>  
                    No solo escribo código, construyo soluciones completas. 
                </p>
            </div>

        </div>
    );
}

export default Section_1;