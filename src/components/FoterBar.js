import React from "react";
import PropTypes from "prop-types";
const FoterBar = ({ names, children, text, number }) => {
  console.log(names);

  return (
    <div>
      <div>{text}</div>
      <div>{number + 1}</div>
      {children}
      CopyRigth{" "}
      {names.map((el) => (
        <p>{el}</p>
      ))}
    </div>
  );
};
FoterBar.defaultProps = {
  names: ["Gpe F2"],
};
FoterBar.propTypes = {
  number: PropTypes.number.isRequired,
};
export default FoterBar;
