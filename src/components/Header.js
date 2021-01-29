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
  <nav>
    <h1>{title}</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </nav>
);

export default Header;
