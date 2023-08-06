import { DeleteButton, ProjectControlsContainer, ProjectDateContainer, ProjectEditIcon, ProjectNameContainer, ProjectNameLabel, UpdatedTimestamp } from "./ProjectControls.style";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";

const ProjectControls = ({ project, idx }) => {
  const [editHovered, setEditHovered] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);
  const { toggleProjectEditMode } = useStoreActions(actions => actions.projects);
  const { toggleDeleteModal } = useStoreActions(actions => actions.modals);
  const { name, updated } = project;

  return (
    <ProjectControlsContainer>
      <ProjectNameContainer>
        <ProjectNameLabel>{ name }</ProjectNameLabel>
        <ProjectEditIcon
            alt='Edit Project Name'
            onMouseEnter={ () => setEditHovered(!editHovered) }
            onMouseLeave={ () => setEditHovered(!editHovered) }
            hovered={ editHovered }
            onClick={ () => toggleProjectEditMode({ idx }) }  />
      </ProjectNameContainer>
      <ProjectDateContainer>
        <UpdatedTimestamp>{ updated }</UpdatedTimestamp>
        <DeleteButton
          alt="Delete Project"
          onMouseEnter={ () => setDeleteHovered(!deleteHovered) }
          onMouseLeave={ () => setDeleteHovered(!deleteHovered) }
          hovered={ deleteHovered }
          onClick={ () => toggleDeleteModal({ idx }) } />
      </ProjectDateContainer>
    </ProjectControlsContainer>
  )
};

export default ProjectControls;
