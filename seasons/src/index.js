import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplayed from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({lat: position.coords.latitude}),
            err =>this.setState({errorMessage: err.message})
        );
    };

    render() {
       if (this.state.errorMessage && !this.state.lat){
           return <div>Error: {this.state.errorMessage}</div>;
       }
       if (!this.state.errorMessage && this.state.lat) {
           return <SeasonDisplayed lat={this.state.lat} />
       }
       return <Spinner message="Please allow your location" />
    }
}

ReactDOM.render(<App />, document.getElementById('root'))