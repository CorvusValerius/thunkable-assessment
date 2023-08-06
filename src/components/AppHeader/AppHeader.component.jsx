import { AddButton, BeaverIcon, HeaderBar, ProjectsLabel } from './AppHeader.style';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';

const AppHeader = () => {
  const [hovered, setHovered] = useState(false);
  const { addProject } = useStoreActions(actions => actions.projects);

  return (
    <HeaderBar>
      <BeaverIcon />
      <ProjectsLabel>My Projects</ProjectsLabel>
      <AddButton
        onMouseEnter={ () => setHovered(!hovered) }
        onMouseLeave={ () => setHovered(!hovered) }
        hovered={hovered}
        onClick={ addProject } />
    </HeaderBar>
  )
};

export default AppHeader;
