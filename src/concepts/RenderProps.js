import React from 'react'
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img alt="x"  src="../logo.svg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{flex: 1, height: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.children(this.state)}
      </div>
    );
  }
}

let withMouse = Comp => {
  return class extends React.Component {
    render() {
      return (
        <Mouse >
          {mouse => <Comp {...this.props} mouse={mouse}></Comp>}
        </Mouse>
      )
    }
  }
}

export default withMouse(Cat)