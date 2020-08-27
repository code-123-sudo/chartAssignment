import * as React from "react";
import * as ReactDOM from "react-dom";
import WeatherChart from './components/weather';

class App extends React.Component {
    constructor() {
        super(...arguments);
    }
    render() {
        return <div><WeatherChart /></div>
    }
};

export default App;
