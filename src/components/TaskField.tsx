import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { TaskType, check, remove } from '../store/tasksReducer';
import Checked from '../../assets/checkBox.svg';
import Unchecked from '../../assets/checkBoxUnchecked.svg';
import TrashIcon from '../../assets/trash_icon.svg';

interface TaskFieldProps {
    task: TaskType;
    index: number;
    lastIndex: number;
}

export function TaskField({ task, index, lastIndex }: TaskFieldProps) {
    const dispatch = useDispatch();
    return (
        <View style={styles.task_wrapper}>
            <View style={index !== lastIndex ? styles.row : styles.row_last}>
                <Pressable
                    onPress={() =>
                        dispatch(
                            check({
                                index,
                                value: !task.checked,
                            }),
                        )
                    }
                    style={styles.checkButton}
                >
                    {task.checked ? (
                        <Checked style={styles.checked} />
                    ) : (
                        <Unchecked />
                    )}
                </Pressable>
                <View style={styles.text_column}>
                    <Text
                        ellipsizeMode='tail'
                        numberOfLines={1}
                        style={styles.title}
                    >
                        {task.title}
                    </Text>
                    <Text
                        ellipsizeMode='tail'
                        numberOfLines={1}
                        style={
                            !task.checked
                                ? styles.unchecked_text
                                : styles.checked_text
                        }
                    >
                        {task.task}
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => dispatch(remove(index))}>
                <TrashIcon />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    checked: {
        paddingBottom: 1,
        paddingRight: 1,
    },
    checkButton: {
        width: 36,
        height: 36,
    },
    task_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EEF8FD',
        paddingBottom: 10,
        paddingTop: 10,
    },
    row_last: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_column: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        marginLeft: 17,
        height: 45,
        boxSizing: 'border-box',
        width: '70%',
    },
    unchecked_text: {
        textDecorationLine: 'none',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 17,
        color: '#3B3B3B',
        height: 17,
    },
    checked_text: {
        textDecorationLine: 'line-through',
        color: '#6F767E',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 17,
        height: 17,
    },
    title: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 26,
        color: '#3B3B3B',
        height: 26,
        marginBottom: 2,
    },
});
