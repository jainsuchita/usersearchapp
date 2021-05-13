import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  cardContent: {
    height: 200,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function UserItem({ name, email, country, photo, gender, age }) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia component="img" image={photo} title="User Photo" />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span>
                  <strong>Email:</strong> {email}
                </span>
                <br></br>
                <span>
                  <strong>Country:</strong> {country}
                </span>
                <br></br>
                <span>
                  <strong>Gender:</strong> {gender}
                </span>
                <span>
                  <strong> Age:</strong> {age}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Grid>
  );
}
