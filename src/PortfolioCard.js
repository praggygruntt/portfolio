import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import './PortfolioCard.css';
import { Divider } from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
  card: {
    maxWidth: 385,
    display: "block",
    marginTop: "1rem",
    background: "#353535",
    border: "1px solid rgba(255, 255, 255, .36)",
    color: "white",
    marginRight: "10px",
    marginLeft: "10px",
    marginBottom: "15px"
  },
  media: {
    height: 140,
  },
  textContent: {
      fontSize: ".9rem",
      color: "white"
  }
});

export default function PortfolioCard(props) {
  const classes = useStyles();
    const {title, image, chips, text, link} = props;
    console.log(chips);
    const mappedChips = chips.map(chip => <Chip label={chip} key={chip} />)
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction}>
        <CardMedia

          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" component="p" className={classes.textContent}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider light/>
      <CardActions>
        <div className="chip-container" style={{display: "block", width: "100%"}}>
          {mappedChips}
        </div>
        <Button size="small" color="default">
          <a href={link} target="_blank" rel="noopener noreferrer" style={{color: "inherit", textDecoration: "none"}}>View on Github <FontAwesomeIcon size="lg" icon={faGithub}/></a>
        </Button>
      </CardActions>
    </Card>
  );
}