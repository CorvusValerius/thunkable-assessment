import { useStoreState } from "easy-peasy";
import Project from "../Project/Project.component";
import isTruthy from '../../lib/isTruthy';

const ProjectList = () => {
  const { projects } = useStoreState(({ projects }) => projects);
  return (
    <>
      {
        isTruthy(projects) && 
        projects.map((project, idx) =>
          <Project project={ project } idx={ idx } key={`project_${idx}`} />
        )
      }
    </>
  )
};

export default ProjectList;
