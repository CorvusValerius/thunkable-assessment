import { useStoreActions, useStoreState } from "easy-peasy";
import { CopyContainer, DeleteModal, ModalBody, ModalContent, ModalTitle, QuestionIcon } from "./ProjectDeleteModal.style";


const ProjectDeleteModal = () => {
  const { deleteModalOpen, deleteIdx } = useStoreState(({ modals }) => modals);
  const { toggleDeleteModal } = useStoreActions(actions => actions.modals);
  const { deleteProject } = useStoreActions(actions => actions.projects);

  return (
    <DeleteModal
      open={ deleteModalOpen }
      okText='Yes'
      cancelText='No'
      closeIcon={ false }
      onCancel={ toggleDeleteModal }
      onOk={ () => deleteProject({ deleteIdx }) }>
      <ModalContent>
        <QuestionIcon />
        <CopyContainer>
          <ModalTitle>Are you sure you want to delete this project?</ModalTitle>
          <ModalBody>This action cannot be undone.</ModalBody>
          </CopyContainer>
      </ModalContent>
    </DeleteModal>
  )
};

export default ProjectDeleteModal;
