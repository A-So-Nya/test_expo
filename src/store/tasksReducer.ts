import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TaskType {
    title: string;
    task: string;
    checked: boolean;
}

export interface TasksState {
    data: Array<TaskType>;
}

const initialState: TasksState = {
    data: [],
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<TaskType>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.data.splice(action.payload, 1);
        },
        check: (
            state,
            action: PayloadAction<{
                index: number;
                value: boolean;
            }>,
        ) => {
            state.data[action.payload.index].checked = action.payload.value;
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, remove, check } = tasksSlice.actions;

export default tasksSlice.reducer;
