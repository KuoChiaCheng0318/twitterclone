import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import { useState } from 'react';
import db from './firebase';
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "./firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "./userSlice";
import { useEffect } from "react";

function TweetBox() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e=> {
        e.preventDefault();
        db.collection('posts').add({
            displayName: userName.toString(),
            username: userName.toString(),
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: userPhoto,
            timestamp: firebase.firestore.Timestamp.now()
        });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                {/* <Avatar src="up.jpg" /> */}
                <Avatar src={userPhoto} />
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening" type="text" />
            </div>    
            <input 
            onChange={e => setTweetImage(e.target.value)}
            value={tweetImage} 
            className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type="text" />
            
            <Button onClick={sendTweet}type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox