class App extends React.Component {
  render(){
    var log;
    var signout;
    if(this.props.actions.login) {
      log = this.props.actions.login
      signout = this.props.actions.logout
    }
    else {
      log = this.props.actions.loginFB
      signout = this.props.actions.logoutFB
    }
    return <div>

      <MyComponents.NavBar actions={this.props.actions}/>
        <MyComponents.User
            user={this.props.data.user}
            loginAction={log}
            logoutAction={signout}/>

        <div className="container">

        <div className="card green darken-2">
        <MyComponents.MapView
            premProviders={this.props.data.premProviders}
            center={this.props.data.center}
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>
          </div>

  <div className="card green darken-2">

      <MyComponents.StdMapView
            stdProviders={this.props.data.stdProviders}
            center={this.props.data.center}
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>

          </div>
    </div>
  </div>

  }
}

MyComponents.App = App
