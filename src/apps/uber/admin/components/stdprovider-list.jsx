class StdProviderList extends React.Component {
  render(){
    var providerArr = []
    
    var providers = this.props.stdProviders;
	

		for (var key in providers){	    
			providerArr.push(<li><b>{providers[key].name}</b></li>);
			providerArr.push(<li>Service: {providers[key].type}</li>);
			providerArr.push(<li>Position: [{providers[key].lat},{providers[key].lon}]</li>);
			providerArr.push(<li>Speciality: {providers[key].specialty}</li>);
			providerArr.push(<li>Rating: {providers[key].rating}</li>);
			providerArr.push(<br/>);
		}
	
	return (<div>
			<ul>
			<li>
				<div className="teal chef-div"><h4><b>STANDARD COOKIT CHEFS</b></h4>
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

MyComponents.StdProviderList = StdProviderList
