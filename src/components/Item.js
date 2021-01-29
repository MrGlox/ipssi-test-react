import { Children } from 'react';
import './Item.css';

// Syntaxe pour composant d'affichage
const Item = ({ title = '', status = false, dispo = new Date(), children }) => (
  <div>
    <h2>{title}</h2>
    {status ? <div className="green"></div> : <div className="red"></div>}
    <div>{dispo.toDateString()}</div>
    {children}
  </div>
);

export default Item;
