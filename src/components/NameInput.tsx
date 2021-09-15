import React from "react";

type State = {
  text: string;
};

class NameInput extends React.Component {
  constructor(prop: any) {
    super(prop)
    this.state = {text: prop.text};
  }

  state: State;

  // typing on RIGHT hand side of =
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onChange} />
      </div>
    );
  }
}

export default NameInput;