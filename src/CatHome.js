import React, { useEffect, useState } from 'react';
import Search from './Search';
import Cat from './Cat';

function CatHome() {
  const [cats, setCats] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchCats(searchInput);
  }, [searchInput]);

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
      <Search searchInput={searchInput} assignValueToSearchInput={assignValueToSearchInput} />
      {showCatData()}
    </div>
  )
}

export default CatHome;