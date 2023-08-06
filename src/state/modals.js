import { action } from "easy-peasy";

const modals = {
  deleteModalOpen: false,
  deleteIdx: null,
  toggleDeleteModal: action((state, payload) => {
    const { idx } = payload;
    state.deleteIdx = idx;
    state.deleteModalOpen = !state.deleteModalOpen;
  })
};

export default modals;
