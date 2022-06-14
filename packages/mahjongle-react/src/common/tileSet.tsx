import React from 'react';
import tileImgs from '../images/tiles';

export default class TileSet extends React.Component {
  render() {
    const tiles = ['1D', '2D', '3C', '1B'];

    return <div>
      {tiles.map((code) => this.getTileImg(code))}
    </div>;
  }

  getTileImg(code: string) {
    return <img src={tileImgs[code]} />
  }
}