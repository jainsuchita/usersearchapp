/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import _ from "lodash";
import theme from "../theme";
// import UsersList from "./UsersList";
import Header from "./Header";
// import Filters from "./Filters";

const HomePage = (props) => {
  //   const [users, setUsers] = useState(props.users);
  //   const [sortOrder, setSortOrder] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  //   const inputRef = useRef();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <Header />
        {/* <Filters handleSort={handleSort} sortOrder={sortOrder} /> */}
        {/* <UsersList users={users} isLoading={isLoading} /> */}
      </React.Fragment>
    </ThemeProvider>
  );
};

export default HomePage;
