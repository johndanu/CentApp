import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { uuid } from 'uuidv4';
import Grid from "@material-ui/core/Grid";
import { CentLogo } from "./MyChat/CentLogo";
import { Link } from "react-router-dom";

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export const Progress = () => {
  const style = {
    height: "85vh",
    margin: "50px",
    width: "185vh",
    backgroundColor: "#F2F2F2",
  };

  const divStyle = {
    height: "71vh",
    width: "175vh",
    backgroundImage:
      "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
    overflowY: "scroll",
    marginLeft: "5vh",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  const cardStyle = {
    padding: "20px",
    marginLeft: "8.5vh",
    marginTop: "4vh",
  };

  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={style}>
      <Grid container>
        <Grid container>
          <Grid item sm={3} style={{ textAlign: "center" }}>
            <Link to="/">
              <CentLogo />
            </Link>
          </Grid>
          {/* <Grid item sm={9}>
            <h2 style={{ textAlign: "center" }}>Progress</h2>
          </Grid> */}
        </Grid>
        <div style={divStyle}>
          <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <DragDropContext
              onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                    key={columnId}
                  >
                    <h2>{column.name}</h2>
                    <div style={{ margin: 8 }}>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                background: snapshot.isDraggingOver
                                  ? "#d6cec1"
                                  : "#b0a48f",
                                padding: 4,
                                width: 250,
                                minHeight: 500
                              }}
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            padding: 16,
                                            margin: "0 0 8px 0",
                                            minHeight: "50px",
                                            backgroundColor: snapshot.isDragging
                                              ? "#b0a48f"
                                              : "#756d5e",
                                            color: "white",
                                            ...provided.draggableProps.style
                                          }}
                                        >
                                          {item.content}
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                );
              })}
            </DragDropContext>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default Progress;