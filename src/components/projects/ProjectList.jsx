import React from "react";
import { Redirect } from "react-router-dom";
import ProjectSummary from "../projects/ProjectSummary";
import { connect } from "react-redux";
const ProjectList = ({ projectList, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;

  return projectList ? (
    <div className="project-list section">
      {projectList &&
        projectList.map(project => (
          <ProjectSummary key={project.id} project={project} />
        ))}
    </div>
  ) : (
    <h3>loading...</h3>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ProjectList);
