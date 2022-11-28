import './App.css'
import styled from 'styled-components'
import {useChat} from "./containers/hooks/useChat"
import ChatRoom from './containers/ChatRoom'
import SignIn from './containers/SignIn'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 500px;
  margin: auto;
}
`

function App() {
  const {signedIn} = useChat();
  
  
  // useEffect(() => {
  //   displayStatus(status)
  // },[status]
    
    // )

  return (
    <Wrapper>{
      
      signedIn ?
        <ChatRoom/> :
        <SignIn  />
      }</Wrapper>
    
  )
}

export default App
