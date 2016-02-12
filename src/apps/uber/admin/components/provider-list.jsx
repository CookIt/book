class ProviderList extends React.Component {
  render(){
    var providerArr = []
    var providers = this.props.providers;
	
	for (var i = 0; i < providers.length; i++){
		var provider = providers[i];
		for (var key in provider){	    
			providerArr.push(<li><b>{provider[key].name}</b></li>);
			providerArr.push(<li>Service: {provider[key].type}</li>);
			providerArr.push(<li>Position: [{provider[key].lat},{provider[key].lon}]</li>);
			providerArr.push(<li>Speciality: {provider[key].specialty}</li>);
			providerArr.push(<li>Rating: {provider[key].rating}</li>);
			providerArr.push(<br/>);
		}
	}
	return (<div>
			<ul>
			<li>
				<div className="teal chef-div"><h4><b>COOKIT CHEFS</b></h4>
				<div>
				<ul>
				{providerArr}
				</ul>
				</div>
				</div>
			</li>
			</ul>
		   </div>);
  }
}

MyComponents.ProviderList = ProviderList
