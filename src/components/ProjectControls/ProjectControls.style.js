import styled from '@emotion/styled';
import DeleteIcon from '../../assets/DeleteIcon.svg'
import DeleteIcon_Hover from '../../assets/DeleteIcon_Hover.svg'
import EditIcon from '../../assets/EditIcon.svg'
import EditIcon_Hover from '../../assets/EditIcon_Hover.svg'

export const ProjectControlsContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ProjectNameContainer = styled.div`
  flex: 1;
  display: flex;
`;
export const ProjectDateContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const ProjectNameLabel = styled.div`
  color: rgba(0, 0, 0, 0.70);
  font-family: Source Sans Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-top: 20px;
  margin-left: 25px;
`

export const ProjectEditIcon = styled.button(props => ({
  width: '24px',
  height: '24px',
  marginTop: '25px',
  marginLeft: '24px',
  flexShrink: 0,
  cursor: 'pointer',
  border: 'none',
  background: `url(${ props.hovered ? EditIcon_Hover : EditIcon })`
}))

export const UpdatedTimestamp = styled.div`
  margin-top: 22px;
  height: 24px;
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.50);
  font-family: Source Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`

export const DeleteButton = styled.button(props => ({
  width: '24px',
  height: '24px',
  marginTop: '25px',
  marginRight: '24px',
  flexShrink: 0,
  cursor: 'pointer',
  border: 'none',
  background: `url(${ props.hovered ? DeleteIcon_Hover : DeleteIcon })`
}))