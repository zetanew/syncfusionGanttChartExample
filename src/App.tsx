import React from "react";
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import Header from "./Components/Header";
import "./App.css";

import { projectData } from './data';
function App() {
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predeceesor"
  }
  return (
    <div className="App">


      <Header />
      <GanttComponent dataSource={projectData}
      taskFields={taskValues}>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name"></ColumnDirective>
          <ColumnDirective field="StartDate" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="Duration" textAlign="Right"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>


      <h1 className="text-3xl font-bold underline">tailwind test!</h1>
    </div>
  );
}

export default App;
