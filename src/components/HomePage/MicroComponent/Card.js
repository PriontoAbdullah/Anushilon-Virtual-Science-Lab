import React from 'react';

function Card({ children: cardBody }) {
  return (
    <div
      className="card w-100 mx-8 sm:mx-0 bg-white rounded-2xl break-words shadow-4xl font-body hover:shadow-2xl"
    >
      {cardBody}
    </div>
  );
}

export default Card;
