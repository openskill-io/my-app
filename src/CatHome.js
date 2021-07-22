import React, { useEffect, useState } from 'react';
import Search from './Search';
import Cat from './Cat';

function CatHome() {
  const [cats, setCats] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [isCatWithTextChecked, setIsCatWithTextChecked] = useState(false)

  useEffect(() => {
    searchCats(searchInput);
  }, [searchInput]);

  useEffect(() => {
    searchCats(searchInput);
  }, [isCatWithTextChecked, searchInput])

  const searchCats = (searchInput) => {
    setLoading(true);
    if (isCatWithTextChecked) {
      let query = `https://cataas.com/cat/says/${searchInput}`;
      fetch(query)
        .then((response) => {
          setLoading(false)
          setCats([response.url])
          console.log(response.url)
        })
    }
    else {
      let query = `https://cataas.com/api/cats?limit=200`;
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
  }

  const assignValueToSearchInput = (value) => {
    setSearchInput(value);
  }

  const handleCatWithTextCheckBox = () => {
    setIsCatWithTextChecked(!isCatWithTextChecked)
  }

  const ShowCatData = () => {
    if (loading) {
      return (<div style={{ textAlign: 'center' }}>Loading...</div>)
    } else {
      return <Cat cats={cats} />
    }
  }

  return (
    <div style={{ backgroundColor: `${isCatWithTextChecked ? "#799496" : "#466995"}`, margin: "20px", padding: "20px" }}>
      <Search searchInput={searchInput} assignValueToSearchInput={assignValueToSearchInput} isCatWithTextChecked={isCatWithTextChecked} handleCatWithTextCheckBox={handleCatWithTextCheckBox} />
      <ShowCatData />
    </div>
  )
}

export default CatHome;