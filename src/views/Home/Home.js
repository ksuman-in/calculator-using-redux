import React, { Component } from 'react';
import './Home.scss';
import Button from '../../component/Button';
import ButtonValue from '../../constant/ButtonValue';
import Display from './Display';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  bottonCheck = evt => {
    console.log(evt);
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-header">
          <Display className="display-operation" value="200" />
          <Display className="display-screen" value="100" />
        </div>
        <div className="button-grp">
          {ButtonValue.map((el, index) => {
            const { label } = el;
            return <Button key={index} className="button" label={label} onClick={() => this.bottonCheck(el)} />
          })}
        </div>
      </div>
    )
  }
}

export default Home;