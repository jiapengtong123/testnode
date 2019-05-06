import React from 'react';
import './task.css';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    
    margin: 1rem;
    padding: 1rem;
    width: 200px;
    height: 100px;
    
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color:${props => (props.isDragging ? 'skyblue' : 'white')};
`;

const Handle = styled.div`
    height: 20px;
    width: 20px;
    background-color: orange; 
    border-radius: 4px;
    margin-right: 10px;
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        /*{...provided.dragHandleProps}*/
                        isDragging={snapshot.isDragging}
                    >
                        <Handle {...provided.dragHandleProps}/>
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}
