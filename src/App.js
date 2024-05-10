import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Advertisement from './Dashboard/Advertisement';
import Subscription from './Dashboard/Subscription';
import SubscriptionList from './Dashboard/SubscriptionList';
import Services from './Dashboard/Services';
import Entity from './Dashboard/Entity';
import Login from './Login';
import MemberRegistration from './Registration';
import AdminDashboard from './Dashboard/AdminDashboard';
function App() {
  return (
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Advertisement" element={<Advertisement />} />
          <Route path="/" element={<Login />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Entity" element={<Entity />} />
          <Route path="/SubscriptionList" element={<SubscriptionList />} />
          <Route path="/Services" element={<Services />} />
          <Route path='/Admin' element={<AdminDashboard/>}/>
          <Route path='/Registration' element={<MemberRegistration/>}/>
          {/* <Route path='/calendar' element={<MyApp/>}/> */}
        </Routes>
  );
}

export default App;
