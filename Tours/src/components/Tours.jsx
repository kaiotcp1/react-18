import React from 'react'
import { useState } from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Ours tours</h2>
      </div>
      <div>
        {tours.map((tour) => {
         return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
  )
}

export default Tours