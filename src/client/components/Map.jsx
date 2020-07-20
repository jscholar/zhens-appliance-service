import React, { Component, createRef } from 'react';

import loadMap from '../api/loadMap';
import MAP_POLYGON from '../constants/MAP_POLYGON.json';

const SEATTLE_BOUNDS = {
  north: 48.0,
  west: -123.0,
  south: 47.0,
  east: -121.5,
};

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
        zoom: window.innerWidth > 500 ? 10 : 9,
        restriction: {
          latLngBounds: SEATTLE_BOUNDS,
          strictBounds: false,
        },
      },
    );
    const serviceArea = new this.maps.Polygon({
      paths: MAP_POLYGON,
      strokeColor: '#FFAD4E',
      strokeOpacity: 0.5,
      fillColor: '#FFAD4E',
      fillOpacity: 0.2,
    });
    serviceArea.setMap(this.map);
  }

  render() {
    return (
      <div ref={this.mapRef} id="map" className="map" />
    );
  }
}

export default Map;
