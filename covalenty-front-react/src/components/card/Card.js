import React from 'react'
import './Card.css';

function Card({card}) {  
  return (
    <> {
      card && (
        <div className='card'>
          <div className='tag'>
            {card.category.name}
          </div>
          <div className='image'>
            {card?.images && card?.images
              .map((url) => (
                <img
                  src={url}
                  alt={card.title}
                  style={{
                    borderRadius: '10px',
                    width: '100%'
                  }} key={url} />))}
          </div>
          <div className='info'>
            <p>{card.title}</p>
            <h3>R${card.price}</h3>

          </div>
        </div>)
    }
    </>
  )
}

export default Card

