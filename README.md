# @bsonntag/react-video

> A react component that handles video properties and methods by prop.

## Installation

Using npm:

```sh
$ npm install --save @bsonntag/react-video
```

Using yarn:

```sh
$ yarn add @bsonntag/react-video
```

This module uses react's `createRef` API,
so make sure you have at least version 16.3.0 installed.

## Example usage

```js
import Video from '@bsonntag/react-video';
import React from 'react';

const App = () => (
  <Video
    play
    src={'https://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_1mb.mp4'}
    volume={0.5}
  />
);
```

## Props

The `Video` component supports all
[video attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes)
plus the following props:

- `play` - A boolean prop that makes the component call `video.play()` when true, or `video.pause()` when false.
- `srcObject` - Can be used to pass a [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) to the `video.srcObject` property.
- `volume` - Sets the value of `video.volume`. Must be between 0 and 1.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
