import React from "react";
import PropTypes from "prop-types";

ProductUser.propTypes = {};

function ProductUser(props) {
  return (
    <div className="grid grid-cols-12 mx-6">
      <div className="col-span-3">Navbar</div>
      <div className="col-span-9">Product User List</div>
    </div>
  );
}

export default ProductUser;
