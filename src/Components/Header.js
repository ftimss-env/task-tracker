import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types'

const Header = ({ title, showAdd, onAdd }) => {
    const onClick = () => {
        console.log('clicked')
    }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} 
      color={showAdd ? 'red': 'green'}
      onClick={onClick}/>
    </header>
  );
};

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
