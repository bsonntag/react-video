import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';

export default class Video extends Component {

  static propTypes = {
    autoPlay: PropTypes.bool,
    controls: PropTypes.bool,
    muted: PropTypes.bool,
    onPause: PropTypes.func,
    onPlay: PropTypes.func,
    play: PropTypes.bool,
    src: PropTypes.string,
    srcObject: PropTypes.object,
    volume: PropTypes.number,
  };

  ref = createRef();

  componentDidMount() {
    const { play, srcObject, volume } = this.props;

    if (srcObject) {
      this.ref.current.srcObject = srcObject;
    }

    if (play) {
      this.ref.current.play();
    }

    if (Number.isFinite(volume)) {
      this.ref.current.volume = volume;
    }
  }

  componentDidUpdate(prevProps) {
    const { play, srcObject, volume } = this.props;

    if (srcObject !== prevProps.srcObject) {
      this.ref.current.srcObject = srcObject;
    }

    if (play && !prevProps.play) {
      this.ref.current.play();
    }

    if (!play && prevProps.play) {
      this.ref.current.pause();
    }

    if (Number.isFinite(volume) && volume !== prevProps.volume) {
      this.ref.current.volume = volume;
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
