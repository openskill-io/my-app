import React from 'react';

function Search(props) {
  const assignValueToSearchInput = (event) => {
    props.assignValueToSearchInput(event.target.value);
  }

  return (
    <div style={{ marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <input name="search" value={props.searchInput} placeholder="Search for cat" style={{ padding: 20 }} onChange={assignValueToSearchInput} />
      <form >
        <input type="checkbox" name="catWithText" value={props.isCatWithTextChecked} onClick={props.handleCatWithTextCheckBox} />
        <label for="catWithText">Cat with text </label>
      </form>
    </div>
  )
}

export default Search;