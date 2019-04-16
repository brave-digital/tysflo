import React, { Component } from 'react'
import dragger from "../Assets/svgs/icons/Drager.svg"

let isDragging = false;

export default class Comparison extends Component {

  constructor (props) {
    super(props)
    this.firstSlide = React.createRef()
    this.dragger = React.createRef()

    this.isDragging = false;

    this.startDrag = this.startDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
  }

  startDrag = (event) => {
    event.preventDefault();
   this.isDragging = true;
  }

  endDrag = (event) => {
    this.isDragging = false;
  }

updateDrag = (event) => 
{  
  if (this.isDragging)
  {
    event.preventDefault();
    let draggerSize = 30;
    let position;
    let leftModifier = 1;
  if (event.pageX) {position = event.pageX;}
  if (event.touches && event.touches.length > 0) {position = event.touches[0].pageX; leftModifier*=2; }

  position = Math.min(position, window.innerWidth-draggerSize);
  let positionLeft = Math.max(draggerSize*leftModifier, position);
  position = Math.max(draggerSize, position);

  if (position) {
    this.dragger.current.setAttribute(      'style', 'left:' + positionLeft + 'px');
    this.firstSlide.current.setAttribute (  'style', 'width:' + position + 'px');
  }
  }
}

componentDidMount() {
  this.dragger.current.setAttribute('style', 'left:' + this.firstSlide.current.offsetWidth + 'px');
  document.addEventListener("mouseup", this.endDrag, false);
}


  render () {
              const First = props => (
                <div>{this.props.children[0]}</div>
              );
              const Second = props => (
                <div>{this.props.children[1]}</div>
              );
              return (
                <div
                  className="comparison"
                  onMouseMove={this.updateDrag}
                  onMouseUp={this.endDrag}
                  onTouchMove={this.updateDrag}
                  onTouchEnd={this.endDrag}
                >
                  <div className="image-slider">
                    <div ref={this.firstSlide} className="parent">
                      <div className="block ">
                        <First />
                      </div>
                    </div>

                    <div className="block">
                      <Second />
                    </div>
                  </div>
                  <div
                    ref={this.dragger}
                    onMouseDown={this.startDrag}
                    onTouchStart={this.startDrag}
                    className="dragger"
                  >
                  <h3 className="text-white">
                      Take control{" "}
                      <span className="icon-arrow-right" />
                    </h3>
                    <p className="tiny-text">
                    drag me!</p>
              
                    <img src={dragger} alt="drag icon" />
                  </div>
                </div>
              );
            }
}

