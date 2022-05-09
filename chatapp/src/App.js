import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
                height="100vh"
                projectID="0d268cee-8834-4c95-8d05-2ca48763443a"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={ (chatAppProps) => <ChatFeed { ... chatAppProps} /> }
        />
    );
}

export default App;