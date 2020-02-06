import styled from 'styled-components'

export const MainContainer = styled.div`
  text-align: center;
`

export const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const ClockContainer = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`

export const Clock = styled.div`
  flex-grow: 1;
`
export const Title = styled.h2`
  color: white;
`

export const Text = styled.p`
  color: white;
`

export const ButtonContainer = styled.div`
  margin-top: 100px;
  width: 100px;
  height: 50px;
`

export const ButtonUpdateTime = styled.button`
  border-radius: 3px;
  width: 100%;
  height: 100%;
`
