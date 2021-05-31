// const Filters = ({ handleSort, sortOrder }) => {
//   const options = [
//     { value: "", label: "None" },
//     { value: "asc", label: "Ascending" },
//     { value: "desc", label: "Descending" },
//   ];

//   return (
//     <div className="sortBy">
//       Sort by age
//       <Select
//         value={sortOrder}
//         className="select-filter"
//         onChange={handleSort}
//         options={options}
//       />
//     </div>
//   );
// };

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

export default function Filters({ handleSort, sortOrder }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <InputLabel id="demo-controlled-open-select-label">
        Sort by Age
      </InputLabel>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sortOrder}
          onChange={handleSort}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
