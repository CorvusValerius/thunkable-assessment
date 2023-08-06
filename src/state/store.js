import { createStore } from 'easy-peasy';
import projects from './projects';
import modals from './modals';

const setupStore = (args) => {
  const version = { version: 1 };
  const slices = {
    projects,
    modals,
  };

  return createStore(slices, version);
};

export default setupStore;
