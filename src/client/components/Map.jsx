import React, { Component, createRef } from 'react';

import loadMap from '../api/loadMap';


class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    loadMap()
      .then((maps) => {
        this.maps = maps;
        this.initMap();
      });
  }

  shouldComponentUpdate() {
    return false;
  }

  initMap() {
    this.map = new this.maps.Map(
      this.mapRef.current,
      {
        center: { lat: 47.5379351, lng: -122.2688035 },
        zoom: 11,
      },
    );
    this.map.data.loadGeoJson('Zip_Codes.geojson');
    this.map.data.setStyle({
      fillColor: 'orange',
      strokeWidth: 1,
      strokeWeight: 1,
      strokeColor: 'blue',
    });
  }

  render() {
    return (
      <div ref={this.mapRef} id="map" className="map" />
    );
  }
}

export default Map;
