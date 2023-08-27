import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Signup from "./pages/signUp";
import Signin from "./pages/signIn";
import Todolist from "./pages/todos/todolist";
import hellos from "./pages/hello";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Signup />} path='/' />
      <Route element={<Signin />} path='/signin' />
      <Route element={<Todolist />} path='/todos' />
      <Route element={<hellos />} path='/hellos' />



    </Routes>
    </BrowserRouter>
  );
}

export default App;
