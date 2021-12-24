import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { auth } from '../../configs/firebase';
import './Header.css';

const useStyles = makeStyles(() => ({
  popover__signIn: {
    textAlign: 'center',
  },
  popover__signup: {
    textAlign: 'center',
  },
  typography: {
    padding: '10px',
  },
  root: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function Header() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  // fires on auth state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        setUser(authUser);
        if (authUser.displayName) {
          // don't update username
        } else {
          // if we just created someone
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        // user logged out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  // Mateial ui popup section
  const classes = useStyles();
  const [targetSignIn, settargetSignIn] = useState(null);
  const [targetSignUp, settargetSignUp] = useState(null);

  const handleSignInPopover = (event) => {
    settargetSignIn(event.currentTarget);
  };

  const handleSignUpPopover = (event) => {
    settargetSignUp(event.currentTarget);
  };

  const handleClose = () => {
    settargetSignIn(null);
    settargetSignUp(null);
  };

  const openSignIn = Boolean(targetSignIn);
  const openSignUp = Boolean(targetSignUp);
  const signInId = openSignIn ? 'simple-popover' : undefined;
  const signUpId = openSignUp ? 'simple-popover' : undefined;

  // ./Mateial ui popup section

  // SingIn handling
  function signIn(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));

    // Closing the popover after signing in
    settargetSignIn(null);
  }

  // SignUp handling
  function signUp(e) {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));

    // Closing the popover after signup
    settargetSignUp(null);
  }

  // Logout handling
  function handleLogout(e) {
    auth.signOut();

    setUsername('');
    setPassword('');
    setEmail('');
    setUser('');
  }

  return (
    <div className="app__header">
      <div className="header__area">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          className="app__headerImage"
        />

        {user ? (
          <Button color="primary" onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <div className="appLoginContainer">
            <Button
              variant="contained"
              aria-describedby={signInId}
              color="primary"
              onClick={handleSignInPopover}
            >
              Sign In
            </Button>
            <Button
              aria-describedby={signUpId}
              color="primary"
              onClick={handleSignUpPopover}
            >
              Sign Up
            </Button>
          </div>
        )}
        <Popover
          className={classes.popover__signIn}
          id={signInId}
          open={openSignIn}
          anchorEl={targetSignIn}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            Sign in using your email.
          </Typography>
          <form
            onSubmit={signIn}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              id="standard-basic"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" color="primary" type="submit">
              Sign in
            </Button>
          </form>
        </Popover>

        <Popover
          className={classes.popover__signup}
          id={signUpId}
          open={openSignUp}
          anchorEl={targetSignUp}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            Sign up using your email.
          </Typography>
          <form
            onSubmit={signUp}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              type="password"
              id="standard-basic"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button variant="contained" color="primary" type="submit">
              Sign up
            </Button>
          </form>
        </Popover>
      </div>
    </div>
  );
}

export default Header;
