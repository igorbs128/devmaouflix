import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: sticky;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  span{
    display:none;
  }
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    animation: bounce 1s;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:hover span{
    
    padding: 5px 20px 5px 5px;
    display: flex;
    z-index: 100;
    background: rgba(0,0,0,0);
    color: #fff;
    left: 0px;
    margin: 10px;
    width: 250px;
    position: absolute;
    top: 10px;
    text-decoration: none
  }
  
`;
