import React, { useEffect, useState } from "react";
import "./TaskForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const TaskForm = ({
  mData,
  setData,
  tName,
  setTname,
  due,
  setDesc,
  setDue,
  desc,
  status,
  setStatus,
  isUpdate,
  setUpdate,
}) => {
  function removeTask() {
    setTname("");
    setDesc("");
    setDue(null);
    setStatus("pending");
    setUpdate(false);
  }
  function handleData(e) {
    e.preventDefault();
    let temp = {
      TaskName: tName,
      des: desc,
      due: due,
      status: status,
    };
    setData([...mData, temp]);
    setTname("");
    setDesc("");
    setDue("yyyy-MM-dd");
    setStatus("pending");
    setUpdate(false);
  }
  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(mData));
  }, [mData]);

  return (
    <div className="fromContainer p-4">
      <form onSubmit={(e) => handleData(e)}>
        <div className="form-group">
          <label>Task Name </label>
          <input
            className="form-control"
            id="taskName"
            onChange={(e) => setTname(e.target.value)}
            required
            value={tName}
          />
        </div>
        <div className="form-group">
          <label>Description </label>
          <input
            className="form-control"
            id="des"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Due </label>
          <input
            type="date"
            required
            className="form-control"
            id="due"
            value={due}
            min="2022-05-01"
            max="2022-05-07"
            onChange={(e) => setDue(e.target.value)}
          />
        </div>
        <div className="form-group">Status : {status}</div>
        <div className="form-group">
          <Button type="submit" variant="primary">
            {isUpdate ? "Update Task" : "Add Task"}
          </Button>
          {isUpdate ? (
            <Button
              variant="danger"
              className="remove-btn"
              onClick={() => removeTask()}
            >
              Remove Task
            </Button>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
