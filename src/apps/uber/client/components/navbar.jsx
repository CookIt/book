class NavBar extends React.Component {

  render(){
    //actions.logged set appropriately in the data.jsx file
    if(this.props.actions.logged==true) {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
            <a href="#" className="brand-logo left">COOK IT</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#" onClick={this.props.actions.logout}>Logout</a></li>         
              </ul>
        </div>
      </nav>
    ); }

    else {
      return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
        <a href="#" className="brand-logo left">COOK IT</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#" onClick={this.props.actions.login}>Login via Github</a></li>
        </ul>
        </div>
      </nav>
    );
    }
  }

}
MyComponents.NavBar = NavBar
