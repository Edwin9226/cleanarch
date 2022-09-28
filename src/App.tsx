import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Home } from './pages/home';
import { useSelector } from 'react-redux';
import { AppStore } from './redux/store';

function App() {
   const user= useSelector((state: AppStore) => state.user)
   return (<>
    <div>
    {JSON.stringify(user)}
    <Home/>
    </div>
    </>);  
}

export default App
