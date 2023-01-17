import React from 'react'
import './Slide.css';

function Slide() {

  const [category, setCategory] = React.useState(null);
  React.useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories/')
      .then((response) => response.json())
      .then((json) => setCategory(json));
  }, []);

  return (
    <> {
      category && (
        <div className='main'>
          <button className='turn-back'>
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
          </button>

          <div className='carrossel'>
            {category
              .map(({ id, name, image }) => (
                <div key={id} className='category' style={{ backgroundImage: `url(${image}` }}>
                  {name}
                </div>
              ))}
          </div>

          <button className='turn-forward'>
            <span className="material-symbols-outlined">
              arrow_forward_ios
            </span>
          </button>
        </div>)
    }
    </>
  )
}

export default Slide