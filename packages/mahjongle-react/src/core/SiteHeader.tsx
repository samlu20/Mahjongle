import React from 'react';

import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LoginModal from './LoginModal';

interface IProps {
}

interface IState {
  isLoginModalOpen?: boolean;
  isMenuOpen?: boolean;
  windowWidth?: number;
}

interface MenuItem {
  text: string;
  route: string;
  icon?: string;
}

export default class SiteHeader extends React.Component<IProps, IState> {

  state: any = { 
    width: window.innerWidth,
    height: window.innerHeight,
    isLoginModalOpen: false,
    isMenuOpen: false,
  };
  
  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoginModalOpen: false,
      windowWidth: window.innerWidth
    };
  }

  private readonly menuItems: Array<MenuItem> = [
    { text: 'Chinese numbers', route: '/numbers' },
    { text: 'Add winning hand', route: '/add-hand' },
    { text: 'Stats', route: '/stats' },
  ];

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
              onClick={this.toggleMenuDrawer(true)}
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
        <Drawer
          anchor={"left"}
          open={this.state.isMenuOpen}
          onClose={this.toggleMenuDrawer(false)}
        >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={this.toggleMenuDrawer(false)}
                onKeyDown={this.toggleMenuDrawer(false)}
              >
                <List>
                  {this.menuItems.map((item: MenuItem, index) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton
                        component={Link} to={item.route}>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
        </Drawer>
      </React.Fragment>
    );
  }

  toggleMenuDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    this.setState({ ...this.state, isMenuOpen: open });
  }

  handleMenuItemClick = (route: string) => {
    // if (!route)
    //   return;

    // const navigate = useNavigate();
    // navigate(route);
  }

  handleLoginModalOpen = () => {
    this.setState({ ...this.state, isLoginModalOpen: true });
  }

  handleLoginModalClose = () => {
    this.setState({ ...this.state, isLoginModalOpen: false });
  }

  updateDimensions = () => {
    this.setState({ ...this.state, windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

}