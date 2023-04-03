import React from 'react';
import tileImgs from '../images/tiles';

export default class TileSet extends React.Component {
  render() {
    // const tiles = ['1D', '2D', '3C', '1B'];
    const tiles = this.props.tileKeys.map(k => k ? k.substring(0,2).toUpperCase() : 'Back');

    return <div>
      {tiles.map((code) => this.getTileImg(code))}
    </div>;
  }

  getTileImg(code: string) {
    return <img key={code} style={{ width: `${(this.props.sizeRatio || 0.25) * 100}%` }} src={tileImgs[code ?? 'Back']} />
  }
}