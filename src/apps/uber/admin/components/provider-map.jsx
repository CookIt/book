const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class ProviderMap extends React.Component {
  render(){

	/*const providers = this.props.users
    const providerElements = _.map(providers, function(p,i){
      var latlng = [p.lat, p.lon]
      console.log("Providers: "+latlng)
      return <Marker position={latlng} key={i}>
        <Popup>
          <span>{(p.name)}<br />{(p.specialty)}<br />{(p.rating)}</span>
        </Popup>
      </Marker>
    })

    let userElement
    if (this.props.user){
      userElement = <CircleMarker center={this.props.users.pos}/>
    } else {
      userElement = ''
    }*/


    return <Map className="map-div" center={this.props.center}
          zoom={13}
          onLeafletClick={this.handleLeafletClick.bind(this)}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
  }


  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)
  }
}

MyComponents.ProviderMap = ProviderMap