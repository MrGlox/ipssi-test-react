const Form = ({ handleChange, value }) => (
  <>
    <input
      // ref={this.myRef}
      type="text"
      onChange={handleChange}
      defaultValue={value}
    />
    <p>{value}</p>
  </>
);

// DECLARATION D'UNE REF
// myRef = React.createRef();
// componentDidMount() {
//   console.log(this.myRef.current);
//   this.myRef.current.addEventListener('input', (ev) => {
//     console.log(ev.target.value);
//   });
// }

export default Form;
