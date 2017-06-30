import React from "react";
import xService from '../service/xService';

export default class SecondPage extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div class="row">
        <h2>{xService.getPageName(2)}</h2>
        <p>This is the second page content. Todays is {xService.getDate()}</p>
      </div>
    );
  }
}
