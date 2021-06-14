import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
    console.log('%cHeader.js line:5 showAdd', 'color: #007acc;', showAdd);
  return (
    <header className="header">
      <h1> {title} </h1> <Button text = {showAdd ? "Close" : "Add"} onClick={onAdd} color={!showAdd ? 'green' : 'red'}/>{" "}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue'
// }
export default Header;
