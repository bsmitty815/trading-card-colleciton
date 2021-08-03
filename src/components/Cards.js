import Card from "./Card"
import Search from "./Search"
import { useState, useEffect } from "react";

function Cards() {
    const [cardsData, setCardsData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [sortValue, setSortValue] = useState("All")

    useEffect(() => {
        fetch("http://localhost:9393/cards")
        .then(response => response.json())
        .then(data => setCardsData(data.cards))

    }, [])


    function handleDeleteCard(id) {
      const idInt = parseInt(id)
      const updatedCardDataArray = cardsData.filter((card) => {
        return card.id !== idInt
      })
      setCardsData(updatedCardDataArray)
    }

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value)
    }

    function handleSortChange(e) {
      setSortValue(e.target.value)
    }


    
    return (
      <div>
          <p></p>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} sortValue={sortValue} handleSortChange={handleSortChange} />
          <Card searchTerm={searchTerm} cardsData={cardsData} handleDeleteCard={handleDeleteCard} sortValue={sortValue} />

      </div>
    );
  }
  
  export default Cards;