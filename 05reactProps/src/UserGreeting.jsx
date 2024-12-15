import propTypes from "prop-types";

function UserGreeting(props) {

  const { isLoggedIn = false, username = "Guest" } = props;
  const welcomeMessage = <h2 className="welcome">Welcome, {username}</h2>;
  const loginMessage = <h2 className="login">Please login {username}</h2>;

  return isLoggedIn ? welcomeMessage : loginMessage;
}

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};


export default UserGreeting;
