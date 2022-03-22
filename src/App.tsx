import React from 'react';
// Toaster
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Css load
import './App.css';

// Containers
import { Dashboard } from './containers/dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard />
      <ToastContainer />
    </div>
  );
};

export default App;
