import { NavLink } from 'react-router-dom';

// Syntaxe pour containers
// class Header extends React.Component {
//   componentDidMount(){}
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       </nav>
//     );
//   }
// }

// Syntaxe pour composant d'affichage
const Header = ({ title = '' }) => (
  <>
    <h1>{title}</h1>
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to="/">
            Appartments
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to="/clock">
            Clock
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
