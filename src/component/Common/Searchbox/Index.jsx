import * as React from "react";
import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";
import ConversationData from "./../../Conversation/Conversion.json";



 
export default function Searchbox({ setUsers }) {
  const [serachBoxArr, setSearchBoxArr] = React.useState([]);
  return (
    <Autocomplete
    style={{flexGrow:"1"}}
      id="free-solo-demo"
      freeSolo
      filterOptions={(x) => x}
      options={serachBoxArr.map(
        (option) => `${option.firstName} ${option.lastName} ${option.mobileNumber}`
      )}
      onChange={(event, newValue) => {
        console.log(event);
        setUsers(newValue);
      }}
      onInputChange={(e) => {
        if (e.target.value) {
          const result = top100Users.filter(
            (t) =>
              t.firstName
                .toLowerCase()
                .startsWith(e.target.value.toLowerCase()) ||
              t.lastName.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
              t.mobileNumber.startsWith(e.target.value)
          );
         
          setSearchBoxArr(result);
        } else {
          setSearchBoxArr([]);
        }
      }}
      renderInput={(params) => <TextField {...params}   variant="outlined"  style={{minWidth:"100%", flexGrow:"1", borderColor:"#fff", outline:"none", marginLeft:"5px", marginRight:"5px"}} label="Search" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Users = ConversationData.data.map((p) => {
  return {
    firstName: p.contact.firstName,
    lastName: p.contact.lastName,
    mobileNumber: p.contact.mobile?.number || '',
  };
});
