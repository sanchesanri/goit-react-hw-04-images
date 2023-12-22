import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    value: 1,
  }

  handlerSubmitForm = () => {
    console.log(1);
  }

  render() {
    return (
      <div>
        React homework template
        <Searchbar onSubmit={this.handlerSubmitForm} />
      </div>
    );
  }
};
