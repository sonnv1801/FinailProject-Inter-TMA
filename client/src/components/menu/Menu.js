import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import './style.css';
export default function Menu() {
  return (
    <div className="container">
      <div className="menu">
        <div className="menu-body">
          <List>
            <ListItem
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  <ArrowForwardIosOutlinedIcon className="icon-menu" />
                </IconButton>
              }
            >
              <ListItemIcon>
                <PhoneAndroidOutlinedIcon className="icon-menu" />
              </ListItemIcon>
              <ListItemText primary={`Phone `} />
              <div className="menu-second">
                <div className="menu-second-body">
                  <ul>
                    <li>Iphone 11</li>
                    <li>Iphone 12</li>
                    <li>Iphone 13</li>
                    <li>Iphone 14</li>
                    <li>Iphone 14</li>
                    <li>Iphone 14</li>
                    <li>Iphone 14</li>
                    <li>Iphone 14</li>
                  </ul>
                </div>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
