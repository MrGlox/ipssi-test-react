import data from '../data.json';
import Item from './Item';

const List = ({ value }) => {
  const filtered = data.filter(({ title }) =>
    title.toLowerCase().includes(value.toLowerCase()),
  );

  return filtered.map((appar, i) => <Item key={'appart' + i} {...appar} />);
};

export default List;
