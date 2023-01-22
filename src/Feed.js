import React, {useState, useEffect} from "react";
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from "./firebase";
import FlipMove from "react-flip-move";


function Feed() {
  // useState -> react hook to prepare for variable, video 2:50
  const [posts, setPosts] = useState([])
// useEffect -> code run based on given condition
  useEffect(() => {
    // .orderBy("timestamp", "desc") -> sort firebase data by timestamp
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => doc.data()))
      // snapshot.docs.map(doc => doc.data) gives an array of all of the posts in firebase database
      // onSnapshot ->  anytime database delete, edit, add, changes, grab a snapshot, give to setPosts().
    )
  },[])
  // useEffect, means run what's inside useEffect when Feed component loads, but the [] in the end means don't run again after.
  // if the end brasket have [name, age], then what's inside useEffect will run whenever name, age changes.
  return (
    <div className='feed'>
        
        <div className='feed__header'>
            <h2>Home</h2>
        </div>

        
        <TweetBox />
        
        <FlipMove>
        {posts.map((post) =>(
          <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            timestamp={post.timestamp}
          />
        ))}
        </FlipMove>
        
    </div>
  )
}

export default Feed