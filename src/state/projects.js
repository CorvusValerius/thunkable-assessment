import { format } from "date-fns";
import { action, thunk } from "easy-peasy";
import { datetimeFormat } from "../lib/const";

const cleanProject = { name: '', editMode: false, updated: '' };

const projects = {
  projects: [],
  setProjects: action((state, payload) => {
    state.projects = payload;
  }),
  addProject: action((state, payload) => {
    state.projects.push({ ...cleanProject });
  }),
  updateProjectName: action((state, payload) => {
    const { idx, name } = payload;
    const projectsCopy = [...state.projects];
    const timestamp = format(Date.now(), datetimeFormat);
    projectsCopy[idx].name = name;
    projectsCopy[idx].updated = timestamp;
    projectsCopy[idx].editMode = false;
    state.projects = projectsCopy;
  }),
  toggleProjectEditMode: action((state, payload) => {
    const { idx } = payload;
    const projectsCopy = [...state.projects];
    projectsCopy[idx].editMode = !projectsCopy[idx].editMode;
    state.projects = projectsCopy;
  }),
  deleteProject: thunk((actions, payload, { getStoreState, getStoreActions }) => {
    const { deleteIdx } = payload;
    const projectsCopy = [...getStoreState().projects.projects];
    projectsCopy.splice(deleteIdx, 1);
    actions.setProjects(projectsCopy);
    getStoreActions().modals.toggleDeleteModal({ idx: null });
  })
};

export default projects;
