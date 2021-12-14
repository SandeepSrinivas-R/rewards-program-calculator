import React from 'react';
import './Popup.css';

function Popupbg(props) {
    return (
        <div className="Popup-container">
            <div className="popup-content">
                {
                    props.header ?
                        <div className="popup-header">
                            <p className="popup-title">{props.popupTitle}</p>
                            <div onClick={props.closePopup} className="popup-close">
                                X
                            </div>
                        </div> : <></>
                }
                {props.children}
            </div>
            <div className="popup-bg"></div>
        </div>
    )
}

export default Popupbg;