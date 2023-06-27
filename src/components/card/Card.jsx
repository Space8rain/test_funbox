import React, { useState } from "react";
import './Card.css';

export default function Card ({ card }) {

  const [isSelect, setIsSelect] = useState(false);

  function handleSelect (e) {
    setIsSelect(!isSelect)
    setIsHover(false);
  };

  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter () {
    setIsHover(true);
  };

  function handleMouseLeave () {
    setIsHover(false);
  };


  return (
    <article
      onClick={!card.disabled ? handleSelect : undefined}
      className={`card ${card.disabled ? 'disabled' : ''}`}
    >
      <div className={`card__border ${isSelect ? 'select' : ''} ${isHover ? 'hover' : ''}`}>
        <div
          className="card__content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card__description">
            <p className={`card__head ${isSelect ? 'select' : ''} ${isHover ? 'hover' : ''}`}>
              {isSelect && isHover ? 'Котэ не одобряет?' : card.head}
            </p>
            <h1 className="card__title">{card.title}</h1>
            <p className="card__taste">{card.taste}</p>
            <p className="card__promo">
              {card.promo_value}
              <br/>
              {card.promo_bonus}
            </p>
          </div>
          <div className={`card__weight ${isSelect ? 'select' : ''} ${isHover ? 'hover' : ''} `}>
            <p className="card__weight_value">{card.weight_value}</p>
            <p className="card__weight_unit">{card.weight_unit}</p>
          </div>
        </div>
      </div>
      {
        isSelect ?
        <p className="card__msg">
          {card.msg_select}
        </p> :
        card.disabled ?
          <p className="card__msg">
            {`Печалька, ${card.taste} закончился.`}
          </p> :
          <p className="card__msg">
            {`${card.msg}, `} <button onClick={() => setIsSelect(!isSelect)} className="card__msg_link">купи.</button>
          </p>
      }
    </article>
  )
}