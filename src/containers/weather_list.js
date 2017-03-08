import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(city => city.main.temp * (9/5) - 459.67);
		const pressures = cityData.list.map(city => city.main.pressure);
		const humidities = cityData.list.map(city => city.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		console.log(cityData);
		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color="orange" units="F" /></td>
				<td><Chart data={pressures} color="green" units="hPa"/></td>
				<td><Chart data={humidities} color="blue" units="%"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	// return { weather: weather };
	return { weather }; //es6 syntax
}

export default connect(mapStateToProps)(WeatherList);
