import { render } from 'react-dom';
import React, { Component, Fragment } from 'react';
import Video from '../src';

class App extends Component {

  state = { play: false };

  handlePause = () => {
    this.setState({ play: false });
  }

  handlePlay = () => {
    this.setState({ play: true });
  }

  render() {
    const { play } = this.state;

    return (
      <Fragment>
        <Video
          onPause={this.handlePause}
          onPlay={this.handlePlay}
          play={play}
          poster={'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg'}
        >
          <source
            src={'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4'}
            type={'video/mp4'}
          />

          <source
            src={'https://archive.org/download/ElephantsDream/ed_hd.ogv'}
            type={'video/ogg'}
          />

          <source
            src={'https://archive.org/download/ElephantsDream/ed_hd.avi'}
            type={'video/avi'}
          />

          {'Your browser does not support HTML5 video tag.'}
        </Video>

        <div>
          <button
            onClick={play ? this.handlePause : this.handlePlay}
            type={'button'}
          >
            {play ? 'Pause' : 'Play'}
          </button>
        </div>
      </Fragment>
    );
  }

}

render(<App />, document.getElementById('root'));
