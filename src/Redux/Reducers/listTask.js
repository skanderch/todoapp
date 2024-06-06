import {
    ADD_TASK,
    DELETE_TASK,
    DONE_TASK,
    EDIT_TASK,
}from "../ActionTypes/ListTask";

const initState = {
    listeTasks: [
        {id: Math.random(), text: "Task 1", isDone: false},
        {id: Math.random(), text: "Task 2", isDone: false},
    ],
};

const listReducer = (state = initState, {type,  payload}) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, listeTasks: [...state.listeTasks, payload]};
            case DELETE_TASK:
                return{
                    ...state,
                    listeTasks: state.listeTasks.filter((el) => el.id !==payload),
                };
                case DONE_TASK:
                    return{
                        ...state,
                        listeTasks: state.listeTasks.map((el) =>
                            el.id === payload ? { ...el, isDone: !el.isDone } : el),

                    };
                    case EDIT_TASK:
                        return{
                            ...state,
                            listeTasks: state.listeTasks.map((el) =>
                                el.id === payload.id ? {...el, text: payload.newTask} : el
                        ),
                    };
                    default:
                        return state;
    }
};

export default listReducer;