
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import FormComponent from './Form_validation/FormComponent';
// import SuccessComponent from './Form_validation/SuccessComponent';
import ToDoList from './Todo-List/ToDoList';
import './App.css'
const App = () => {
  return (<div className='main'>
    {/* <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/success" element={<SuccessComponent />} />
      </Routes>
    </Router> */}

    <ToDoList/>
    </div>
  );
};

export default App;
