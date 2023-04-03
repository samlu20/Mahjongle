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
  createData('1B', 'One of bamboo'),
  createData('2B', 'Two of bamboo'),
  createData('3B', 'Three of bamboo'),
  createData('4B', 'Four of bamboo'),
  createData('5B', 'Five of bamboo'),
  createData('6B', 'Six of bamboo'),
  createData('7B', 'Seven of bamboo'),
  createData('8B', 'Eight of bamboo'),
  createData('9B', 'Nine of bamboo'),
];

export default class BambooTiles extends React.Component<IProps, IState> {

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