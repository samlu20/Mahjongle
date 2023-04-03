import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import CharacterTiles from './CharacterTiles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import TileSet from '../common/TileSet';

interface IProps {
}

interface IState {
  currentHand: Array<string>,
  tileComponent: Component,
  selectedTileCode: string,
  tileDialogOpen: boolean,
  resetDialogOpen: boolean,
}

const enum TileSuit {
  Numbers = 'numbers',
  Dots = 'dots',
  Bamboo = 'bamboo',
  Honors = 'honors',
}

function createData(
  tileKey?: string,
  tileValue?: string,
) {
  return { tileKey, tileValue };
}


export default class HandBuilder extends React.Component<IProps, IState> {

  state: any = { 
    currentSuit: 'numbers', 
    tileComponent: <CharacterTiles />,
    resetDialogOpen: false,
    tileDialogOpen: false,
    selectedTileCode: '1N'
  };
  
  constructor(props: IProps) {
    super(props);

    let hand = [
      createData(),
      createData(),
      createData(),
      createData(),
      createData(),
      createData(),
      createData(),
      createData(),
      createData(),
      createData(),
      createData(),
    ];

    this.state = { 
      currentHand: hand, 
      tileComponent: <CharacterTiles />,
      resetDialogOpen: false,
      tileDialogOpen: false,
      selectedTileCode: '1N'
    };
  }

  componentDidMount() {
    /*
    fetch("http://localhost:5262/Tile/GetDotTiles")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )
    */
  }

  render() {
    return (
      <React.Fragment>
        <Paper>
          <Box sx={{ display: 'flex', padding: 3 }}>
            {this.state.currentHand?.map((tile: any) => (
            // <TileSet tileKeys={[tile.tileKey]} sizeRatio={0.75} />
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                width: image.width,
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
          <Button onClick={this.onAdd}>Add</Button>
          <Button onClick={this.onResetDialogOpen}>Reset</Button>
        </Paper>
        <Dialog
          open={this.state.tileDialogOpen}
          onClose={this.onTileDialogClose}
          aria-labelledby="tile-dialog-title"
          aria-describedby="tile-dialog-description"
        >
          <DialogTitle id="tile-dialog-title">
            {"Tile selector"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="tile-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onTileDialogClose}>Cancel</Button>
            <Button onClick={this.onUpdateHand} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.resetDialogOpen}
          onClose={this.onResetDialogClosed}
          aria-labelledby="reset-dialog-title"
          aria-describedby="reset-dialog-description"
        >
          <DialogTitle id="reset-dialog-title">
            {"Confirm"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="reset-dialog-description">
              Reset mahjong hand?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onResetDialogClosed}>Cancel</Button>
            <Button onClick={this.onResetDialogConfirm} autoFocus>
              Reset
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

  onReset = () => {

  }

  onAdd = () => {
    
  }

  onUpdateHand = () => {
    console.log(this.state.selectedTileCode);
  }

  onTileDialogOpen = () => {
    this.setState({ ...this.state, tileDialogOpen: true });
  }

  onTileDialogClose = () => {
    this.setState({ ...this.state, tileDialogOpen: false });
  }

  onResetDialogOpen = () => {
    this.setState({ ...this.state, resetDialogOpen: true });
  }

  onResetDialogClosed = () => {
    this.setState({ ...this.state, resetDialogOpen: false });
  }

  onResetDialogConfirm = () => {
    this.onReset();
    this.setState({ ...this.state, resetDialogOpen: false });
  }

}