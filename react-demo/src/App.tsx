import { Routes, Route } from 'react-router-dom';
import User from './pages/user';
import Message from './pages/message';
export default function App() {
  function Index() {
    return <h1>React App</h1>;
  }
  return (
    <Routes>
      <Route path="/react-demo/user" element={<User></User>} />
      <Route path="/react-demo/message" element={<Message></Message>} />
      <Route path="/react-demo" element={<Index></Index>} />
    </Routes>
  );
}
