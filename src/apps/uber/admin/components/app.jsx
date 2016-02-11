class App extends React.Component {
  render(){
    return <div>
      <MyComponents.UserMap 
      users={this.props.data.users}
      center={this.props.data.center}/>
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderMap 
      users={this.props.data.providers}
      center={this.props.data.center}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App
