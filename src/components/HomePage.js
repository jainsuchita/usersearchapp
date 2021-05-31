/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import _ from "lodash";
import theme from "../theme";
import Header from "./Header";
import UsersList from "./UsersList";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const inputRef = useRef();

  useEffect(() => {
    setIsLoading(true);

    const loadUsers = async () => {
      try {
        const users = await axios.get("./users.json");
        setIsLoading(false);
        if (users.data.length > 0) {
          setUsers(users.data);
          setFilteredUsers(users.data);
        }
      } catch (error) {
        console.log("error:", error);
      }
    };

    loadUsers();
    // initialize debounce function to search once user has stopped typing every half second
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  const onSearchText = (text, users) => {
    let filtered;
    if (text) {
      filtered = users.filter((user) =>
        user.country.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = users;
    }

    setFilteredUsers(filtered);
  };

  const handleSearch = (event) => {
    inputRef.current(event.target.value, users);
  };

  const handleSort = (event) => {
    const value = event.target.value;
    setSortOrder(value);
    let sortedUsers = filteredUsers;
    if (value === "asc") {
      sortedUsers = [...filteredUsers].sort((a, b) => {
        return a["age"] - b["age"];
      });
    } else if (value === "desc") {
      sortedUsers = [...filteredUsers].sort((a, b) => {
        return b["age"] - a["age"];
      });
    }

    setFilteredUsers(sortedUsers);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <Header
          handleSearch={handleSearch}
          handleSort={handleSort}
          sortOrder={sortOrder}
        />
        <UsersList users={filteredUsers} isLoading={isLoading} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default HomePage;
