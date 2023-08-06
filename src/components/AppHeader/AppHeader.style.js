import styled from '@emotion/styled'
import Beaver from '../../assets/ThunkableBeaver.png';
import AddButtonIcon from '../../assets/AddButton.svg';
import AddButtonIcon_Hover from '../../assets/AddButton_Hover.svg';

export const HeaderBar = {
  position: 'fixed',
  height: '124px',
  width: '100%',
  flexShrink: 0,
  background: '#F7F9FD',
  boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.20)'
};

export const BeaverIcon = styled.div`
  width: 54.634px;
  height: 54.634px;
  margin-top: 8.88px;
  margin-left: 20px;
  background: #F7F9FD url(${Beaver}) 0px 0px / 100% 100% no-repeat;
  mix-blend-mode: darken;
`

export const ProjectsLabel = styled.div`
  flexShrink: 0;
  margin-left: 50px;
  margin-top: 10px;
  color: #424242;
  font-family: Source Sans Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 600,
  line-height: 36px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`

export const AddButton = styled.button(props => ({
  position: 'absolute',
  right: '82px',
  top: '95px',
  width: '60px',
  height: '60px',
  flexShrink: 0,
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  cursor: 'pointer',
  border: 'none',
  background: `url(${ props.hovered ? AddButtonIcon_Hover : AddButtonIcon })`
}))
