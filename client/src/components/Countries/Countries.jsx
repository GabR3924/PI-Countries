import React from 'react';
import Card from '../Card/Card';
import style from './Countries.module.css'

const Countries = ({countries}) => {

  return (
    <div className={style.cards}>
      {countries && countries.map(({ name, flag }, index) => (
        <Card key={index}
        name={name}
        flag={flag}/>
      ))}
    </div>
  );
};

export default Countries;
