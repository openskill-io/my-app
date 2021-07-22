import React from 'react';

function Search(props) {
  const assignValueToSearchInput = (event) => {
    props.assignValueToSearchInput(event.target.value);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 10 }}>
      <input name="search" value={props.searchInput} placeholder="Search for cat" style={{ padding: 20 }} onChange={assignValueToSearchInput} />
    </div>
  )
}

export default Search;