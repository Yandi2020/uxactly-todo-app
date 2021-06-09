export const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const data = [
    { 
        name: 'Montag', 
        id: '_6zytos624',
        todos: [
            { todo: 'Weekly Meeting', id: '_kqyo7g9or' },
            { todo: 'Sync Dave', id: '_gnrvvftwg' },
            { todo: 'Sync Andre', id: '_0ux9fike1' },
        ]
    },
    { 
        name: 'Dienstag', 
        id: '_l2htn8pkl',
        todos: [
            { todo: 'Buy milk from Lidl', id: '_5a8x143xg' },
        ]
    },
    { 
        name: 'Mittwoch', 
        id: '_1g7rezr7w',
        todos: [
            { todo: 'Wash my car in the morning', id: '_t280luu0c' },
        ]
    },
    { 
        name: 'Donnerstag', 
        id: '_v5fmnh1yv',
        todos: [
            { todo: 'learn new programming skills', id: '_1m3durxta' },
        ]
    },
    { 
        name: 'Freitag', 
        id: '_qg5ftgrrc',
        todos: [
            { todo: 'refresh the knowledge of React', id: '_vjdkzdsyn' },
        ]
    },
    { 
        name: 'Samstag', 
        id: '_kad647nmu',
        todos: [
            { todo: 'Meet with friends in the park', id: '_tdikvlj6w' },
        ]
    },
    { 
        name: 'Sonntag', 
        id: '_3nbhy4x2q',
        todos: [
            { todo: 'Cook some food and do fitness', id: '_h9am3rnlj' },
        ]
    }
]

export default data;

