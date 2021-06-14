import React, { useRef, useEffect, useContext, useState } from 'react';
import disableScroll from 'disable-scroll';
import { MainContext } from '../Context/MainContext';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setShow) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                disableScroll.off();
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setShow]);
}

/**
 * Component that alerts if you click outside of it
 */

export default function SignUpPopup(props) {
    const {setShow} = useContext(MainContext);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setShow);
    const [showClose, setShowClose] = useState(false);
    const handleClick = () => setShow(false);
    const handleMouseOver = () => setShowClose(true);
    const handleMouseLeave = () => setShowClose(false);
	return (
		<div className="signup-background">
            <div className="signup-popup" ref={wrapperRef} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                {showClose && <div className="close-popup" onClick={handleClick}>x</div>}
                <p className="popup-title">Sign up</p>
                <p className="popup-details">Provide your name and email adress to save your data</p>
                <div className="inputs">
                    <input type="input" placeholder="Name" />
                    <input type="email" placeholder="Email Adress" />
                </div>
                <div className="signup-btn">
                    Sign up
                </div>
            </div>

		</div>
	)
}
