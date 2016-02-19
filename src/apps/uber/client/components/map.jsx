
const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet



class MapView extends React.Component {
  
  render(){
    const providers = this.props.premProviders
    const stdproviders = this.props.stdProviders
    const providerElements = _.map(providers, function(p,i){
      var latlng = [p.lat, p.lon]
      return <CircleMarker center={latlng} color='red' key={i}>
        <Popup>
          <span>{(p.name)}<br />{(p.specialty)}<br />{(p.rating)}<br />
		  </span>
        </Popup>
      </CircleMarker>
    })
	const stdElements = _.map(stdproviders, function(p,i){
      var latlng = [p.lat, p.lon]
      return <CircleMarker center={latlng} color='blue' key={i}>
        <Popup>
          <span>{(p.name)}<br />{(p.specialty)}<br />{(p.rating)}<br />
		  </span>
        </Popup>
      </CircleMarker>
    })

    let userElement
    if (this.props.user){
      userElement = <Marker position={this.props.user.pos}/>
    } else {
      userElement = ''
    }

    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    if (this.props.user) {
    return  <div className="container grey darken-3">
    <h2>Service providers:</h2><Map center={this.props.center}
          zoom={13}
          onLeafletClick={this.handleLeafletClick.bind(this)}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        {providerElements}
		{stdElements}
        {userElement}
      </Map></div>
    }
    else {
      return <div></div>
    }
  }


  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)
  }
}

MyComponents.MapView = MapView
