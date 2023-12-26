import { CloseIcon } from "@iconicicons/react"

export default function TaskList({ tasks, toggleTask, removeTask }: any) {
  const emptyTasks = <p>No task available</p>

  return (
    <div className="py-4">
      <p className="text-neutral-400 italic">{!tasks?.length && emptyTasks}</p>
      <ul className="space-y-4">
        {tasks?.map((task: any) => (
          <li
            key={task.id}
            className="list-none flex items-center bg-[#fff8e5] w-fit p-2 rounded-[6px]"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onClick={() => toggleTask(task.id)}
            />
            <span className="mx-2">{task.text}</span>
            <button
              onClick={() => removeTask(task.id)}
              className="bg-[#11111118] rounded"
            >
              <CloseIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
