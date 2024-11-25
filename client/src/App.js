import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import UserCreation from './pages/userCreation';

const App = () =>{
    return(
      <>
        <Routes>
          <Route path="/" element={<UserCreation/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </>
    )
}
export default App;
