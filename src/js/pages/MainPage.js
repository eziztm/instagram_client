import React from "react";
import xService from '../service/xService';
import InputField from "../components/InputField";

import InstagramService from "../service/InstagramService";

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  // This method is used to retrieve the value of Title from the sub-component InputField
  changeTitle(title) {
    this.setState({ title });
  }

  componentWillMount() {
      InstagramService.ping2;
  }


  render() {
    return (
      <div class="row">
        <h2>{xService.getPageName(0)}</h2>
        <p>This is the main page content.</p>

         <a href={InstagramService.getLoginLink()} > Login </a>

        <InputField changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      </div>
    );
  }
}
