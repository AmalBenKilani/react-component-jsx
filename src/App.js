import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';


function App() {
  return (
    <div className='Box'>
      <>
        <ProfilePhoto />
        <FullName />
        <Address />
      </>
    </div>


  )
}

export default App;
