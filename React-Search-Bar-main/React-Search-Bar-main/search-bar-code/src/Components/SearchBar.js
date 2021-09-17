import React, { useState} from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || 
             value.address.toLowerCase().includes(searchWord.toLowerCase()) || 
             value.id.includes(searchWord.toLowerCase()) ||
             value.pincode.includes(searchWord.toLowerCase())
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  // const onKeyUpValue=(event)=> {
  //   console.log(event.target.value)
  // } 

  // const handleKeyPress = (event) => {
  //   console.log('dfghhgfddfghgf ')

  //   if(event.key === 'Enter'){
  //     console.log('enter press here! ')
  //   }
  // }
 const handleKeyDown= (event) =>{
    if(event.keyCode === 13) { 
        console.log('Enter key pressed')
  }
}
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          // onKeyDown={handleKeyDown}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              setWordEntered(event.name)
            }
          }}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 ? (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} >
                <div className="hover" >
                  <p>
                     {value.id} <br/>
                     {value.name} <br/>
                     {value.items} <br />
                     {value.address} <br />
                     {value.pincode}
                     </p>
                </div>
              </a>
            );
          })}
        </div>
      )
      :
      <div className="dataResult">
            <p className="dataItemBlank">No User found </p> 
     </div>
      }
    </div>
  );
}

export default SearchBar;
