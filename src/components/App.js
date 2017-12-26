import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  renderList(){
    var days = ['Sun', 'mon'],
    let c_d = new Date(),
    var value = c_d.getDay(),
    return {days[value]}
  }


  render(){
    return(
      <div>
        {this.renderList}
      </div>
    )
  }
}

export default App;
