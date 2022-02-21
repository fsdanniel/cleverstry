import Sidebar from "../../components/Sidebar";
import Edit from "../../components/Edit";
export default function Task() {
  return (
    <div className="task-wrapper">
      <Sidebar />
      <div className="padding">
        <h1>Tarefa</h1>
      </div>
      <Edit />
    </div>
  );
}
