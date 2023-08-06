import { useEffect, useState } from 'react';
import { useStoreActions } from "easy-peasy";
import { ProjectIcon, ProjectIconContainer, ProjectItem, ProjectNameInput } from "./Project.style";
import ThunkableBeaverFull from '../../assets/defaultProjectIcon_2x.png';
import ProjectControls from '../ProjectControls/ProjectControls.component';

const ProjectComponent = ({ project, idx }) => {
  const [name, setName] = useState('');
  const { updateProjectName } = useStoreActions(actions => actions.projects);
  const { name: projectName, editMode } = project;

  useEffect(() => {
    if (editMode) {
      setName(projectName);
    }
  }, [editMode, projectName]);

  return (
    <ProjectItem>
      <ProjectIconContainer>
        <ProjectIcon
          src={ ThunkableBeaverFull }
          alt='Beaver Icon'  />
      </ProjectIconContainer>
      {
        (projectName && !editMode)
          ? <ProjectControls project={ project } idx={ idx } />
          : <ProjectNameInput
              placeholder='Name your project'
              value={ name }
              onChange={ (e) => setName(e.target.value) }
              onPressEnter={ () => updateProjectName({ idx, name }) } />
      }
    </ProjectItem>
  );
};

export default ProjectComponent;
