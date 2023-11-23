'use client'
import React, { useState } from 'react'
import './accordion.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { data } from './accordion-data';

type ToggleNumber = number | null;

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<ToggleNumber>(null);

  const toggle = (i: ToggleNumber) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, i) => (
          <div key={i} className='item'>
            <div className='question' onClick={() => {toggle(i)}}>
              {item.question}
              <span>{selected === i ? <FaAngleUp size={32} /> : <FaAngleDown size={32} />}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordion