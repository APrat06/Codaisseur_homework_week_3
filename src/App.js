import React, { Component } from 'react';
import './App.css';
import store from './store';
import {connect} from 'react-redux';
import ModelDetails from './ModelDetails';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {

  state = {}

  updateSelection = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  reduxUpdateState = () => {
    store.dispatch(
      {
        type: "ADD_MODEL",
        payload: data[this.state.value]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <ModelDetails /* items={this.props.reducer} */ items={this.state.value}/>
        <select onChange={this.updateSelection} value={this.state.value}>
          <option value="">-- pick a model --</option>
          <option value={Object.keys(data)[0]}>{Object.keys(data)[0]} ({data["Ivel Z3"].year})</option>
          <option value={Object.keys(data)[2]}>{Object.keys(data)[2]} ({data["Sord M200 Smart Home Computer"].year})</option>
          <option value={Object.keys(data)[1]}>{Object.keys(data)[1]} ({data["Bally Astrocade"].year})</option>
          <option value={Object.keys(data)[3]}>{Object.keys(data)[3]} ({data["Commodore 64"].year})</option>
        </select>
        <button onClick={this.reduxUpdateState}>add</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // reducer: state.reducer
  }
}

export default connect(mapStateToProps)(App)