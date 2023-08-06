import { useStoreState } from 'easy-peasy';
import AppHeader from '../AppHeader/AppHeader.component';
import ProjectDeleteModal from '../ProjectDeleteModal/ProjectDeleteModal.component';
import ProjectList from '../ProjectList/ProjectList.component';
import { MainContent } from './App.style';

const App = () => {
  const { idx } = useStoreState(({ modals }) => modals);

  return (
    <>
      <AppHeader />
      <div style={ MainContent }>
        <ProjectList />
      </div>
      <ProjectDeleteModal projectIdx={ idx } />
    </>
  );
}

export default App;
