import React from 'react';
import './style.css';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 310 }} className="container-card">
      <CardMedia
        sx={{ height: 200 }}
        image={props.card?.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.card?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card?.description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <del
            style={{ opacity: '0.7', lineHeight: '2' }}
          >{`${props.card?.oldPrice}đ`}</del>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {`${props.card?.newPrice}đ`}
        </Typography>
        <Typography variant="body2">
          <span id="color-tile-card">
            <ReactStars count={props.card?.rates} />
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
