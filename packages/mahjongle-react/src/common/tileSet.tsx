import React from 'react';
import tileImgs from '../images/tiles';

interface IProps {
  tileKeys: Array<string>,
  sizeRatio?: number,
}

interface IState {
}

export default class TileSet extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  render() {
    // const tiles = ['1D', '2D', '3C', '1B'];
    const tiles = this.props.tileKeys.map(k => k.substring(0,2).toUpperCase());

    return <div>
      {tiles.map((code) => this.getTileImg(code))}
    </div>;
  }

  getTileImg(code: string) {
    return <img style={{ width: `${(this.props.sizeRatio || 0.25) * 100}%` }} src={tileImgs[code]} />
  }
}