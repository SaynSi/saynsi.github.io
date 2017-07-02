import React, { Component } from 'react';

import 'styles/main.scss';
import $ from 'jquery';
import { imageList, IMAGE_COUNT } from '../constants/images';

const INTERVAL_TIME_MS = 2500;
const FADING_TIME_MS = 500;
let imagePointer = 0;

function animateBackground() {
  let fadeOutImagePointer = IMAGE_COUNT - 1;
  if (imagePointer !== 0) {
    fadeOutImagePointer = imagePointer - 1;
  }
  const backgroundDOMList = $('.Main .background');
  $(backgroundDOMList[fadeOutImagePointer]).fadeOut(FADING_TIME_MS);
  $(backgroundDOMList[imagePointer++]).fadeIn(FADING_TIME_MS);
  if (imagePointer === IMAGE_COUNT) {
    imagePointer = 0;
  }
}

export default class Main extends Component {
  componentDidMount() {
    setInterval(animateBackground, INTERVAL_TIME_MS);
    animateBackground();
  }

  render() {
    return (
      <div className='Main'>
        {
          imageList.map(d => (
            <div
              className='background'
              style={{ background: `url('${d}') no-repeat 50%/cover` }}
            >
            </div>
          ))
        }
        <h1>Coming Soon</h1>
      </div>
    );
  }
}
