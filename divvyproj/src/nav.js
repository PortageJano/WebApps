import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    zIndex: 999999,
  },
  paper: {
    marginRight: theme.spacing(2),
    zIndex: 999999,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex: 999999,
  },
  title: {
    flexGrow: 1,
    zIndex: 999999,
  },
  list: {
    width: 250,
    zIndex: 999999,
  },
  fullList: {
    width: 'auto',
    zIndex: 999999,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return(
    <AppBar position="absolute">
      <Toolbar>
        <div>
          <IconButton 
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Navigation Menu"
            >
            <MenuIcon />
          </IconButton>
          <Popper style = {{zindex: 9999}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper style = {{zindex: 9999}} > 
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList style = {{zindex: 9999}} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <Link to='/'>
                        <MenuItem onClick={handleClose} aria-label='Home'>Home</MenuItem>
                      </Link>
                      <Link to='/map'>
                        <MenuItem onClick={handleClose} aria-label='Map'>Map</MenuItem>
                      </Link>
                      <Link to='/graph'>
                        <MenuItem onClick={handleClose} aria-label='Graph'>Graphs</MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Typography variant="h6" className={classes.title}>
          Divvy Bike Visualization
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

