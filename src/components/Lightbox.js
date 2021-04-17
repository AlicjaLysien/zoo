import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 

export default class LightboxGallery extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
 
  const photo = this.props.images.map((item,index) => (
    <div onClick={() => this.setState({ isOpen: true, photoIndex:  index  })}  className="col-md-4 col-6 Light">
      <div className="bg" style={{backgroundImage: `url(${item})`}}></div>
    </div>
  ))

    return (
      <div>
        <div class="container">
          <div class="row">
            {photo}
          </div>
        </div>
 
        {isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex]}
            nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
            prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}