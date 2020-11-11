import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';

CurtainRevealBox.propTypes = {
    onReveal: PropTypes.func,
    onHide: PropTypes.func,
    isRevealed: PropTypes.bool,
    animationConfig: PropTypes.shape({
        variant: PropTypes.oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']),
        speed: PropTypes.number
    }),
    stayHidden: PropTypes.bool,
    styleConfig: PropTypes.shape({
        curtain: PropTypes.object,
        leftPanel: PropTypes.object,
        rightPanel: PropTypes.object,
        content: PropTypes.object,
        forbidden: PropTypes.object
    }),
    revealCheck: PropTypes.func
};

const generateStylesWithProps = (animationConfig, styleConfig, stayHidden = true) => {
    const transitionVariant = animationConfig && animationConfig.variant ? animationConfig.variant : "ease-out";
    const transitionSpeed = animationConfig && animationConfig.speed ? animationConfig.speed : 1;
    const hideContentAfterReveal = stayHidden ? "none" : "initial";
    styleConfig = styleConfig || {};

    return {
        curtain: {
            borderRadius: 20,
            width: "100%",
            height: "100%",
            ...styleConfig.curtain,
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
            outline: "none"
        },
        curtain_wrapper: {
            width: "100%",
            height: "100%",
        },
        curtain_panel: {
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            zIndex: 99,
            transition: `all ${transitionSpeed}s ${transitionVariant}`
        },
        curtain_panel_left: {
            background: "linear-gradient(90deg, rgba(153,10,77,1) 12%, rgba(198,12,99,1) 29%, rgba(211,13,106,1) 47%, rgba(228,49,133,1) 64%, rgba(236,65,145,1) 76%, rgba(244,82,158,1) 88%)",
            ...styleConfig.leftPanel,
            left: 0,
            right: "50%",
        },
        curtain_panel_right: {
            background: "linear-gradient(270deg, rgba(153,10,77,1) 12%, rgba(198,12,99,1) 29%, rgba(211,13,106,1) 47%, rgba(228,49,133,1) 64%, rgba(236,65,145,1) 76%, rgba(244,82,158,1) 88%)",
            ...styleConfig.rightPanel,
            left: "50%",
            right: 0,
        },
        curtain_content: {
            backgroundColor: "rgba(153,10,77,1)",
            ...styleConfig.content,
            position: "absolute",
            zIndex: 90,
            width: "100%",
            height: "100%",
        },
        curtain_trigger_box: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 100,
            opacity: 0,
            cursor: "pointer",
            margin: 0,
            padding: 0,
            border: "none"
        },
        reveal_left: {
            transform: "translateX(-100%)"
        },
        reveal_right: {
            transform: "translateX(100%)"
        },
        hide: {
            display: hideContentAfterReveal
        },
        forbidden: {
            boxShadow: " 0px 0px 3px 4px rgba(245,3,3,1)",
            transition: `all 0.1s linear`,
            ...styleConfig.forbidden
        }
    }
}



function CurtainRevealBox({ children, revealCheck, onReveal, onHide, isRevealed, animationConfig, styleConfig, stayHidden }) {
    const classes = makeStyles(generateStylesWithProps(animationConfig, styleConfig, stayHidden))();
    const [revealed, setRevealed] = useState(isRevealed);
    const [forbiddenReveal, setForbiddenReveal] = useState(false);

    const canReveal = () => {
        if (revealCheck) {
            return revealCheck();
        }

        return true;
    }

    const reveal = () => {
        if (canReveal()) {
            setRevealed(true);
            setForbiddenReveal(false);
            if (onReveal) {
                onReveal();
            }
        } else {
            setForbiddenReveal(true);
        }
    }

    const hide = () => {
        setRevealed(false);
        if (onHide) {
            onHide();
        }
    }

    const onClick = () => {
        if (revealed) {
            hide();
        } else {
            reveal();
        }
    }

    useEffect(() => {
        setRevealed(isRevealed)
    }, [isRevealed])

    return (
        <div className={`${classes.curtain} ${forbiddenReveal ? classes.forbidden : ""}`}>
            <div className={`${classes.curtain_wrapper}`}>
                <button className={`${classes.curtain_trigger_box} ${revealed ? classes.hide : ""}`} onClick={onClick}></button>
                <div className={`${classes.curtain_panel} ${classes.curtain_panel_left} ${revealed ? classes.reveal_left : ""}`}></div>

                <div className={classes.curtain_content}>
                    {children}
                </div>

                <div className={`${classes.curtain_panel} ${classes.curtain_panel_right} ${revealed ? classes.reveal_right : ""}`}></div>
            </div>
        </div>
    );
}

export default CurtainRevealBox;
