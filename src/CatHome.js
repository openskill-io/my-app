import React, { useEffect, useState } from 'react';
import Search from './Search';
import Cat from './Cat';

function CatHome() {
  const [cats, setCats] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  //could not find a way to implement useRef here (input field in another component)!!!

  useEffect(() => {
    //debouncer runs 1 second after state change
    const debouncer = setTimeout(() => {
      //do not run if search field goes back to empty string
      if (searchInput.length >= 3)
        searchCats(searchInput);
    }, 1000);

    //when state is changed a second time, return is called 
    //before the above block is run; thus the old timeout is cleared
    return () => {
      clearTimeout(debouncer);
    }
  }, [searchInput]);

  //since above useEffect doesn't run for empty string 
  useEffect(() => {
    searchCats(searchInput)
  }, [])

  const searchCats = (searchInput) => {
    setLoading(true);
    let query = `https://cataas.com/api/cats?limit=10`;
    if (searchInput && searchInput.length > 3) {
      query = query + `&tags=${searchInput}`
    }
    fetch(query)
      .then((response) => response.json())
      .then((catsdata) => {
        setCats(catsdata);
        setLoading(false);
      }).catch((err) => console.log(err));
  }

  const assignValueToSearchInput = (value) => {
    setSearchInput(value);
  }

  const showCatData = () => {
    if (loading) {
      return (<div style={{ textAlign: 'center' }}>Loading...</div>)
    } else {
      return <Cat cats={cats} />
    }
  }

  return (
    <div>
      <Search
        searchInput={searchInput}
        assignValueToSearchInput={assignValueToSearchInput}
      />
      {showCatData()}
    </div>
  )
}

export default CatHome;