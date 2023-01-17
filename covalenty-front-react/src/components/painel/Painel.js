import React from 'react';
import './Painel.css';
import Card from '../card/Card';

function Painel() {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    fetch(
      'https://api.escuelajs.co/api/v1/products/?offset=0&limit=9')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <div className='headerPainel'>
        <h1>
          Destaques do dia
        </h1>
        <h2>Descubra</h2>
      </div>
       <div className='gridCard'>
        {
          products &&
          products
          .map(
            (products) =>
              <Card key={products.id} 
              card={products} />
          )
        }
      </div>
    </>
  )
}

export default Painel