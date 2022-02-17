import React, {useEffect, useRef} from "react";

import {Link, useLocation} from "react-router-dom";

import './header.scss';
import {cleanup} from "@testing-library/react";

/*import logo from */

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'Tv Series',
        path: '/tv',
    },
]

const Header = () => {

    const { pathName } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathName);


    useEffect(() => {
        const shrinkHedaer = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHedaer);
        return () => {
            window.removeEventListener('scroll', shrinkHedaer)
        };
    }, []);


    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    {/*<img src={logo} alt=""/>*/}
                    <Link to="/">tMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e,i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;
