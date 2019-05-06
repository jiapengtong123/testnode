const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Running Summary'},
        'task-2': {id: 'task-2', content: 'Swimming Summary'},
        'task-3': {id: 'task-3', content: 'Biking Summary'},
        'task-4': {id: 'task-4', content: 'Walking Summary'},
        'task-5': {id: 'task-5', content: 'Activity 1'},
        'task-6': {id: 'task-6', content: 'Activity 2'},
        'task-7': {id: 'task-7', content: 'Activity 3'},
        'task-8': {id: 'task-8', content: 'Activity 4'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Summary',
            taskIds: [
                'task-1',
                'task-2',
                'task-3',
                'task-4',
            ]
        },
        'column-2': {
            id: 'column-2',
            title: 'Done',
            taskIds: [
                'task-5',
                'task-6',
                'task-7',
                'task-8',
            ]
        }
    },
    columnOrder: ['column-1','column-2'],
};

export default initialData;