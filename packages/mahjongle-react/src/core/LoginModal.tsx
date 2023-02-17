import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';


interface IProps {
  open: boolean,
  onClose: () => void
}

interface IState {
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 400,
  width: 300,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 0,
};

// export default function LoginModal(props: React.PropsWithChildren<IProps>) {
export default class LoginModal extends React.Component<IProps, IState> {

  private isModalOpen: boolean = false;

  constructor(props: IProps) {
    super(props);
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (this.isModalOpen !== this.props.open) {
      this.isModalOpen = this.props.open;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <Dialog
        sx={{ textAlign: "center" }}
        open={this.isModalOpen}
        onClose={this.props.onClose}
      >
        <DialogTitle>Sign in</DialogTitle>
        <DialogContent sx={{ height: 0.75 }}>
          <DialogContentText>
            Logo here
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose}>Cancel</Button>
          <Button onClick={this.props.onClose}>Sign in</Button>
        </DialogActions>
      </Dialog>
    );
  }

  handleClose = (event: object, reason: string) => {
    this.isModalOpen = false;
    console.log(`isModalOpen: ${this.isModalOpen}`);
    this.forceUpdate();
  }

}