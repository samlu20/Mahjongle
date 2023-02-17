import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

interface IProps {
}

interface IState {
}

export default class HandBuilder extends React.Component<IProps, IState> {

  private isModalOpen: boolean = false;

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <Box
        sx={{
          width: 0.9,
          height: 500,
          margin: 0
        }}
      >
        Tiles shown here
      </Box>
    );
  }

}