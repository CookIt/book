class App extends React.Component {
  render(){
    return <div>
      <MyComponents.UserMap 
      users={this.props.data.users}
      center={this.props.data.center}/>
      <MyComponents.UserList users={this.props.data.users}/>
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#prem">Premium</a></li>
            <li className="tab col s3"><a href="#std">Standard</a></li>
          </ul>
        </div>
        <div id="prem" className="col s12">
          <MyComponents.ProviderMap 
            premProviders={this.props.data.premProviders}
            center={this.props.data.center}/>
            <MyComponents.ProviderList 
      premProviders={this.props.data.premProviders}/>
        </div>

        <div id="std" className="col s12">
          <MyComponents.StdProviderMap 
          stdProviders={this.props.data.stdProviders}
          center={this.props.data.center}/>
          <MyComponents.StdProviderList 
      stdProviders={this.props.data.stdProviders}/>
        </div>
      </div>
    </div>
  }
}

MyComponents.App = App
