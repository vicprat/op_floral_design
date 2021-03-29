import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
         cursor: pointer;
         border: 2px solid ${props => (props.isActive ? '#23D997' : '#eee')};
       `;
