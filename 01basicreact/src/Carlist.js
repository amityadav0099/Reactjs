import React from 'react'

function Carlist() {
    const cars = [
        {brand : 'Honda' , model: 'Verna'},
        {brand : 'bmw' , model: 's7'}
    ];

  return (
    <div>
        <h1>This is my car collection</h1>
        <ul>
            {cars.map((car) =>(
                <li key ={car.brand}>
                    {car.brand}-{car.model}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Carlist