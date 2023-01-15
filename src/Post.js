import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function Post( {displayName,username,verfied,text,image,avatar} ) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="Sample_User_Icon.png" />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>displayname {" "}<span className="post__headerSpecial">
                        <VerifiedUserIcon className="post__badge" />
                        @username
                    </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Hi, I love Disney</p>
                </div>
            </div>
            <img src="https://media0.giphy.com/media/26ufh9clS97q1cdcQ/giphy.gif" alt=""/>
            {/* <img src="" alt=""/> */}
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>
  )
}

export default Post