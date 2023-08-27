import React, { useState, useEffect } from 'react';
import './todo.css';

function Todolist() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/todos/', {
        method: 'GET',
        headers: { JWT_SECRETKEY: localStorage.token }
      });
      if (response.ok) {
        const responseData = await response.json();
        setTasks(responseData.data);
      } else {
        console.error('Fetching tasks failed');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
          <div className="flex items-center mb-6">
            {/* Your SVG and title */}
          </div>
          {tasks.map((task) => (
            <div key={task.id}>
              <input
                className="hidden"
                type="checkbox"
                id={`task_${task.id}`}
                checked={task.status}
              />
              <label
                className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
                htmlFor={`task_${task.id}`}
              >
                <span className="ml-4 text-sm">{task.name}</span>
              </label>
            </div>
          ))}
         		<button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
				<svg class="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
				</svg>
				<input class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task"/>
			</button>
        </div>
      </div>
      {/* The rest of your component */}
    </div>
  );
}

export default Todolist;
