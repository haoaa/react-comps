import React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
export interface TransitionProps {
    animation?: AnimationName;
    wrapper?: boolean;
}
declare const Transition: React.FC<TransitionProps & CSSTransitionProps>;
export default Transition;
