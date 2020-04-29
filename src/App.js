import React from 'react';

import {Cards,Chart, CountryPicker} from './components';
import styles from './App.module.scss';
import { fetchData } from './api';
import covidImage from './images/covid.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data : fetchedData});
    };

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country);
        //set the state
        this.setState({data : fetchedData,country: country});
    }

    render(){
        const {data,country} = this.state;
        return(
            <div className={styles.container}>
                <img src={covidImage} alt="COVID-19" className={styles.image}></img>
               <Cards  data={data}></Cards>
               <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
               <Chart data={data} country={country}></Chart>
            </div>
        )
    };
}

export default App;