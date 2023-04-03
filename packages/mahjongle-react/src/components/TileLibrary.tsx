import React, { Component } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import BambooTiles from './BambooTiles';
import CharacterTiles from './CharacterTiles';
import CircleTiles from './CircleTiles';
import HonorTiles from './HonorTiles';

interface IProps {
}

interface IState {
  currentSuit: TileSuit,
  tileComponent: Component
}

const enum TileSuit {
  Numbers = 'numbers',
  Dots = 'dots',
  Bamboo = 'bamboo',
  Honors = 'honors',
}

export default class TileLibrary extends React.Component<IProps, IState> {

  state: any = { currentSuit: 'numbers', tileComponent: <CharacterTiles /> };
  
  constructor(props: IProps) {
    super(props);

    this.state = { currentSuit: 'numbers', tileComponent: <CharacterTiles /> };
  }

  render() {
    return (
      <React.Fragment>
        <Paper>
          <Box sx={{ width: 120, padding: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tile suit</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.currentSuit}
                label="Tile set"
                onChange={this.handleTileSetChange}
              >
                <MenuItem value={TileSuit.Numbers}>Numbers</MenuItem>
                <MenuItem value={TileSuit.Dots}>Dots</MenuItem>
                <MenuItem value={TileSuit.Bamboo}>Bamboo</MenuItem>
                <MenuItem value={TileSuit.Honors}>Honors</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>
        <Paper sx={{ marginTop: 2 }}>
          <Box sx={{ minWidth: 120, padding: 2 }}>
            {this.state.tileComponent}
          </Box>
        </Paper>
      </React.Fragment>
    );
  }

  handleTileSetChange = (event: SelectChangeEvent) => {
    this.state.currentSuit = event.target.value as TileSuit;
    switch (this.state.currentSuit){
      case TileSuit.Numbers :
          this.state.tileComponent = <CharacterTiles/>;
          break;
      case TileSuit.Dots :
          this.state.tileComponent = <CircleTiles/>;
          break;
      case TileSuit.Bamboo :
          this.state.tileComponent = <BambooTiles/>;
          break;
      case TileSuit.Honors :
          this.state.tileComponent = <HonorTiles/>;
          break;
    }

    this.forceUpdate();
  }

}