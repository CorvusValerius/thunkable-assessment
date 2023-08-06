import styled from '@emotion/styled';
import { Modal } from 'antd';
import Question from '../../assets/Question.svg';

export const DeleteModal = styled(Modal)`
  margin: 0 auto;
  width: 433px !important;
  height: 192px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #EEEFF3;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.20);
  padding-bottom: 0;

  .ant-modal-content {
    height: 100%
  }

  .ant-modal-footer {
    margin-top: 62px
  }
`

export const ModalContent = styled.div`
  display: flex;
`

export const QuestionIcon = styled.div`
  width: 22px;
  height: 22px;
  margin-top: 10px;
  margin-right: 15px;
  flex-shrink: 0;
  background: #F7F9FD url(${ Question });
`

export const CopyContainer = styled.div`
  margin-top: 5px;
`

export const ModalTitle = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-family: Source Sans Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 187.5% */
`

export const ModalBody = styled.div`
  color: rgba(0, 0, 0, 0.50);
  font-family: Source Sans Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`