import React, { useEffect, useState } from 'react';

const AddTask = () => {
    // État contenant la liste des tâches
    const [tasks, setTasks] = useState([]);
    // État contenant la tâche saisie
    const [task, setTask] = useState('');
    // Récupérer et afficher toutes les tâches => hook useEffect
    useEffect(() => {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);
    // Ajouter une tâche => POST
    const addTask = (e) => {
        e.preventDefault();
        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task })
        })
            .then(response => response.json())
            .then(newTask => setTasks([...tasks, newTask]));
        setTask('');
    };
    // Modifier une tâche => PUT
    const updateTask = (id, updatedTask) => {
        fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        })
            .then(response => response.json())
            .then(updatedTask => {
                setTasks(tasks.map(todo => (todo._id === id ? updatedTask : todo)));
            });
    };
    // Supprimer une tâche => DELETE
    const deleteTask = (id) => {
        fetch(`/api/tasks/${id}`, { method: 'DELETE' })
            .then(() => {
                setTasks(tasks.filter(task => task._id !== id));
            });
    };
    return (
        <div>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Nouvelle tâche" />
                <button>Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <input
                            type="text"
                            value={task.task}
                            onChange={e => updateTask(task._id, {
                                task: e.target.value,
                                completed: task.completed
                            })}
                        />
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={e => updateTask(task._id, {
                                task: task.task,
                                completed: e.target.checked
                            })}
                        />
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddTask;
