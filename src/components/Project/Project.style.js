import styled from '@emotion/styled';
import { Input } from 'antd';

export const ProjectItem = styled.div`
  margin-left: 10%;
  width: 80%;
  height: 70px;
  flex-shrink: 0;
  background: #FDFDFD;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.10);
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
`

export const ProjectIconContainer = styled.div`
  margin-top: 20px;
  margin-left: 24px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`

export const ProjectIcon = styled.img`
  width: 100%;
  height: 100%;
`

export const ProjectNameInput = styled(Input)`
  width: 186px;
  height: 30px;
  margin-top: 20px;
  margin-left: 25px;
`
