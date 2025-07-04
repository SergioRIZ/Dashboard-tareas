import { useState } from "react";
import TaskItem from "./TaskItem";
import StatsPanel from "./StatsPanel";
import FilterBar from "./FilterBar";

function TaskDashboard() {

        const [task, setTask] = useState([
            {
                id: 1,
                title: "Revisar codigo de React",
                category: "trabajo",
                completed: false,
                createdAt: new Date()
            },
            {
                id: 2,
                title: "Comprar leche",
                category: "personal",
                completed: true,
                createdAt: new Date()
            },
            {
                id: 3,
                title: "Entregar proyecto de Dashboard",
                category: "urgente",
                completed: false,
                createdAt: new Date()
            }
        ]);

    return(
        <>
        <div>
            <h1 className="text-3xl font-bold underline text-center mt-10">
                Dashboard
            </h1>
            <p className="text-center mt-5">Bienvenido a tu Dashboard!</p>
            {task.map(task => (
                <div key={task.id}>
                    {task.title} - {task.category} - {task.completed ? "Completado" : "Pendiente"} - Creado el: {new Date(task.createdAt).toLocaleDateString()}
                </div>
            ))}
        </div>
        </>
    )

}

export default TaskDashboard;