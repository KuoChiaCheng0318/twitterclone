import React from 'react'
import './Loginfooter.css'
import { useEffect } from "react";
// import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "./firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "./userSlice";

const Loginfooter = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div>
      {!userName ? (
        <div className='footer'>
          <div className='footer_text'>
              <h2>Don’t miss what’s happening</h2>
              <p>People on Twitter are the first to know.</p>
          </div>
          <div className='buttons'>
              <div onClick={handleAuth} className='login'>Log in</div>
              <div onClick={handleAuth} className='signup'>Sign up</div>
          </div>
        </div>
      ):(
        <></>
      )}
    </div>
  )
}

export default Loginfooter