import React from "react";
import Minimalist from "./Templates/Minimalist";

class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Minimalist
          user={this.props.userData}
          employment={this.props.empData}
          empCount={this.props.empCount}
          education={this.props.eduData}
          eduCount={this.props.eduCount}
          project={this.props.projectData}
          projectCount={this.props.projectCount}
          headerColor={this.props.headerColor}
          headerTextColor={this.props.headerTextColor}
        />
      </React.Fragment>
    );
  }
}

export default Resume;
