const Form = () => (
  <>
    <input
      // ref={this.myRef}
      type="text"
      // onClick={}
      // onBlur={}
      // onFocus={}
      onChange={(ev) => {
        this.setState({
          value: ev.target.value,
        });
      }}
      defaultValue={this.state.value}
    />
    <p>{this.state.value}</p>
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
