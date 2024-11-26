import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/admin';
import UserCreation from './pages/userCreation';

const App = () =>{
    return(
      <>
        <Routes>
          <Route path="/" element={<AdminDashboard/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="/users" element={<UserCreation/>}/>
        </Routes>
      </>
    )
}
export default App;
