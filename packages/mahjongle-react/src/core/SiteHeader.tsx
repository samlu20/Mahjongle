import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginModal from './LoginModal';

interface IProps {
}

interface IState {
  isLoginModalOpen?: boolean;
  windowWidth?: number;
}

export default class SiteHeader extends React.Component<IProps, IState> {

  state: any = { 
    width: window.innerWidth,
    height: window.innerHeight,
    isLoginModalOpen: false
  };
  
  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoginModalOpen: false,
      windowWidth: window.innerWidth
    };
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              mahjongle
            </Typography>
            <Button color="inherit" onClick={this.handleLoginModalOpen}>Sign In</Button>
          </Toolbar>
        </AppBar>
        <LoginModal open={!!this.state.isLoginModalOpen} onClose={this.handleLoginModalClose} />
      </React.Fragment>
    );
  }

  // openLoginWindow(code: string) {
  //   return <img src={tileImgs[code]} />
  // }

  handleLoginModalOpen = () => {
    this.setState({ isLoginModalOpen: true });
  }

  handleLoginModalClose = () => {
    this.setState({ isLoginModalOpen: false });
  }

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