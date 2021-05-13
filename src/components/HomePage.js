/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import _ from "lodash";
import theme from "../theme";
import Header from "./Header";
import UsersList from "./UsersList";
// import Filters from "./Filters";
import axios from "axios";

const HomePage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(props.users);
  //   const [sortOrder, setSortOrder] = useState("");
  //   const inputRef = useRef();

  useEffect(() => {
    setIsLoading(true);

    const loadUsers = async () => {
      try {
        const users = await axios.get("./users.json");
        setIsLoading(false);
        if (users.data.length > 0) {
          setUsers(users.data);
        }
      } catch (error) {
        console.log("error:", error);
      }
    };

    loadUsers();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <Header />
        {/* <Filters handleSort={handleSort} sortOrder={sortOrder} /> */}
        <UsersList users={users} isLoading={isLoading} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default HomePage;
