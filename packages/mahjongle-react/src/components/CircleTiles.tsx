import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TileSet from '../common/TileSet';

interface IProps {
}

interface IState {
}

function createData(
  tileKey: string,
  tileValue: string,
) {
  return { tileKey, tileValue };
}

const rows = [
  createData('1D', 'One of circle'),
  createData('2D', 'Two of circle'),
  createData('3D', 'Three of circle'),
  createData('4D', 'Four of circle'),
  createData('5D', 'Five of circle'),
  createData('6D', 'Six of circle'),
  createData('7D', 'Sevent of circle'),
  createData('8D', 'Eight of circle'),
  createData('9D', 'Nine of circle'),
];

export default class CircleTiles extends React.Component<IProps, IState> {

  state: any = { };
  
  constructor(props: IProps) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <TableContainer sx={{ minWidth: 300 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tile</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
              <TableRow
                key={row.tileKey + row.tileValue}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TileSet tileKeys={[row.tileKey]}/>
                </TableCell>
                <TableCell align="right">{row.tileValue}</TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }

  // openLoginWindow(code: string) {
  //   return <img src={tileImgs[code]} />
  // }

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

}