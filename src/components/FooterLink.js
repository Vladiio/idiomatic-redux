import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "actions/visibilityFilter.actions";

const FooterLink = ({ active, filter, children, onClick }) =>
  active ? (
    <span>{children}</span>
  ) : (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
});

export default connect(
  mapStateToProps,
  {
    onClick: setVisibilityFilter
  }
)(FooterLink);
