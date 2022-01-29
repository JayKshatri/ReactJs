import React from 'react';
import './Card.css'

function Card() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const url = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=10";
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json['data']))
          .catch((error) => console.log(error));
      }, []);
    
      React.useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
      }, [data]);
    
    return(
        <div className="container">
            <div className='row'>{isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data.map((card) => (
                <div className='card-container'>
            <div className="image-container">
                <img src={card.images.large} alt='' />
            </div>
            <div className ="card-title">
                <div className="name"><h3>{card.name}</h3></div>
                <div className="hp"><h3>HP</h3><p>{card.hp}</p></div>
            </div>

            <div className ="card-body">
                {/* <div className='abilities'><h4>Abilities:</h4></div>
                <div className='attack'><h4>Attack:</h4></div> */}
                </div>
               
            </div>

        )))}
        </div>
        </div>
    )
}

export default Card