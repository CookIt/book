class User extends React.Component {

  render(){

    if (this.props.user){
      // user is authenticated
      return <div>
          <h5 align="center">Welcome to <strong>COOK IT</strong>, {this.props.user.displayName}!</h5>
      </div>
    } else {
      // user is not set
      return <div>
        <h2>You are not logged in yet.</h2>
        <h5>Login to see the map showing all the providers</h5>
      </div>
    }
  }

}
MyComponents.User = User
