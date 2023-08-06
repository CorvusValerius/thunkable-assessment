import { Layout } from 'antd';
import { AddButton, BeaverIcon, HeaderBar, ProjectsLabel } from './AppHeader.style';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';

const { Header } = Layout;

const AppHeader = () => {
  const [hovered, setHovered] = useState(false);
  const { addProject } = useStoreActions(actions => actions.projects);

  return (
    <Header style={ HeaderBar }>
      <BeaverIcon />
      <ProjectsLabel>My Projects</ProjectsLabel>
      <AddButton
        onMouseEnter={ () => setHovered(!hovered) }
        onMouseLeave={ () => setHovered(!hovered) }
        hovered={hovered}
        onClick={ addProject } />
    </Header>
  )
};

export default AppHeader;
