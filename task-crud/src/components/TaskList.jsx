import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tareas {tasks.length - 1}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Crear Tarea
        </Link>
      </header>
      {tasks.length === 1 ? (
        <div className="text-xs">Esperando por nuevas tareas...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3>{task.title}</h3>
                <div className="flex gap-x-2">
                  <Link
                    to={`/edit-task/${task.id}`}
                    className="bg-zinc-700 px-2 py-1 text-xs rounded-md"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                  >
                    Borrar
                  </button>
                </div>
              </header>
              <h3>{task.description}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
