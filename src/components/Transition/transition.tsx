import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

export interface TransitionProps {
  animation?: AnimationName,
  wrapper? : boolean
}

const Transition: React.FC<TransitionProps & CSSTransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...rest
  } = props
  return (
    <CSSTransition
      classNames ={classNames ? classNames : animation}
      {...rest}
      >
      {wrapper? <div>{children}</div>: children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition