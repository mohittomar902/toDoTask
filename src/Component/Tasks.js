import React, { useEffect, useState } from "react";
import "./Task.css";
import data from "./data";
import Card from "react-bootstrap/Card";

export const Tasks = ({
  mData,
  setData,
  handle,
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
  const completeTask = (id) => {
    if (mData[id].status === "pending") {
      mData[id].status = "Complete";
      setStatus("Complete");
    } else {
      mData[id].status = "pending";
      setStatus("pending");
    }
    console.log(mData);
  };
  const updateTask = (ind, mdt) => {
    setTname(mdt[ind].TaskName);
    setDesc(mdt[ind].des);
    setStatus(mdt[ind].status);
    setDue(mdt[ind].due);
    setUpdate(true);
    let updated = mData.filter((ele, index) => {
      return index !== ind;
    });
    setData(updated);
  };
  return (
    <Card
      className="d-flex flex-row justify-content-between cart border border-dark overflow-hidden"
      style={{ width: "100vw" }}
    >
      {data.map((ele, index) => {
        return (
          <Card.Body
            className="overflow-auto border border-dark"
            style={{ width: "14.5vw" }}
          >
            <Card.Title>{ele}</Card.Title>
            {mData?.map((ele, ind) => {
              let date = new Date(ele.due);

              if (date.getDay() == index)
                return (
                  <>
                    {" "}
                    <input
                      type="checkbox"
                      className="float-left mb-2 "
                      onClick={() => completeTask(ind)}
                    />
                    <Card.Subtitle
                      className=" mb-2 text-muted  subt ml-4"
                      onClick={() => updateTask(ind, mData)}
                    >
                      {ele.TaskName}
                    </Card.Subtitle>
                  </>
                );
              else return " ";
            })}
          </Card.Body>
        );
      })}
    </Card>
  );
};
