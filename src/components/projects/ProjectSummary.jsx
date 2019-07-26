import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectSummary = ({ project, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  const my =
    project.content && project.content.length > 110
      ? `${project.content.substring(0, 110)}... `
      : project.content;
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{my}</p>
          <p className="grey-text">
            {moment(project.createdAt.toDate()).calendar()}
          </p>
          <hr />
          <Link to={`project/${project.id}`}>See More</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ProjectSummary);
