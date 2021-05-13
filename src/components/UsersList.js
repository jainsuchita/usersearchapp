import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import UserItem from "./UserItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
}));

const UsersList = ({ users, isLoading }) => {
  const classes = useStyles();

  if (isLoading) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div className={classes.root}>
        <Grid container xs={12}>
          {users &&
            users.map((user, i) => {
              return <UserItem key={i} {...user} />;
            })}
        </Grid>
      </div>
    );
  }
};

export default UsersList;
