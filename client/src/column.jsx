import React from 'react';
import Task from './task';
import {Droppable} from 'react-beautiful-dnd';
import styled from "styled-components";

const Container = styled.div`
    background-color:${props => (props.isDraggingOver ? 'yellow' : 'white')};
`;

export default class Column extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.column.title} </h1>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <Container
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >

                            {this.props.tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index}/>
                            ))}
                            {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
            </div>
        );
    }
}
