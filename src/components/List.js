import data from '../data.json';
import Item from './Item';

const List = () =>
  data.map((appar, i) => <Item key={'appart' + i} {...appar} />);

export default List;
