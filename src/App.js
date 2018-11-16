import React from 'react';
import qs from 'query-string';



// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: false }
  
//   }
//   componentDidMount(){
//     console.log(this.props)
//     if (this.props.location != null) {
//       var url = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
//       console.log(url['openid.claimed_id'])  
    
//     }

//   }

// render() {
  
//   if (this.state.value = true) {
    
//    return (
//      <p> <a href="http://localhost:3000/auth/steam"><input type="button" value="login" /></a> </p>   );
//    }
//    else{
//    return ( 
//     <p> <a href="http://localhost:3000/auth/steam/return"><input type="button" value="logout" /></a> </p>
//    );
//     }
//   }
// }  
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;