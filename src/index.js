import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';

export default class Video extends Component {

  static propTypes = {
    play: PropTypes.bool,
    srcObject: PropTypes.object,
    volume: PropTypes.number,
  };

  ref = createRef();

  play() {
    this.ref.current.play();
  }

  setSrcObject(srcObject) {
    this.ref.current.srcObject = srcObject;
  }

  setVolume(volume) {
    this.ref.current.volume = volume;
  }

  componentDidMount() {
    const { play, srcObject, volume } = this.props;

    if (srcObject) {
      this.setSrcObject(srcObject);
    }

    if (play) {
      this.play();
    }

    if (volume != null) {
      this.setVolume(volume);
    }
  }

  componentDidUpdate(prevProps) {
    const { play, srcObject, volume } = this.props;

    if (srcObject !== prevProps.srcObject) {
      this.setSrcObject(srcObject);
    }

    if (play && !prevProps.play) {
      this.play();
    }

    if (!play && prevProps.play) {
      this.ref.current.pause();
    }

    if (volume != null && volume !== prevProps.volume) {
      this.setVolume(volume);
    }
  }

  render() {
    const videoProps = Object.keys(this.props).reduce((result, key) => {
      if (!['play', 'srcObject', 'volume'].includes(key)) {
        result[key] = this.props[key];
      }

      return result;
    }, {});

    return (
      <video
        {...videoProps}
        ref={this.ref}
      />
    );
  }

}
