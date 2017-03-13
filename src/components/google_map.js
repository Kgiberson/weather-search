import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const MY_API_KEY = __GAPI_KEY__

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div style={{height: '100%'}} /> }
			googleMapElement={
				<GoogleMap apiKey="MY_API_KEY" defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
			}
		/>
	);

}
