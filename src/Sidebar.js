import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core"
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


function Sidebar() {

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
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon' />
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        {!userName ? (<></>):(
          <div className='sidebar__dropdown'>
            <div className='sidebar__user'>
              <img src={userPhoto} alt={userName} referrerpolicy="no-referrer"/>
              <div className='sidebar__userdetails'>
                <h3>{userName}</h3>
              </div>
            </div>
            <div className="dropdown-content" onClick={handleAuth}>Log out</div>
          </div>
          
        )}
        
        
        
    </div>
    

  )
}

export default Sidebar;