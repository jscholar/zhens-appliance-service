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

  initMap() {
    this.map = new this.maps.Map(
      this.mapRef.current,
    );
  }

  render() {
    return (
      <div ref={this.mapRef} id="map" className="map" />
    );
  }
}

export default Map;
