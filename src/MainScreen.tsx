import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from './components/CustomButton';
import React, { useState } from 'react';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import { TaskField } from './components/TaskField';
import { AddModal } from './modals/AddModal';
import { FilterModal } from './modals/FilterModal';

export default function MainScreen() {
    const { tasks } = useSelector((state: RootState) => state);
    const [modalAddVisible, setModalAddVisible] = useState(false);
    const [modalFilterVisible, setModalFilterVisible] = useState(false);
    const [filter, setFilter] = useState<'all' | 'completed' | 'uncompleted'>(
        'all',
    );
    return (
        <View style={styles.container}>
            <View style={styles.menu_wrapper}>
                <AddModal
                    modalVisible={modalAddVisible}
                    setModalVisible={setModalAddVisible}
                />
                <FilterModal
                    modalVisible={modalFilterVisible}
                    setModalVisible={setModalFilterVisible}
                    filter={filter}
                    setFilter={setFilter}
                />
                <View style={styles.topWrapper}>
                    <Button
                        style={styles.tasksButton}
                        styleText={styles.tasksText}
                        title={
                            filter === 'all'
                                ? 'Показывать все задания'
                                : filter === 'completed'
                                ? 'Выполненные'
                                : 'Не выполненные'
                        }
                        onPress={() => {
                            setModalFilterVisible(true);
                        }}
                    />
                </View>
                <View style={styles.tasks}>
                    {tasks.data
                        .filter((task) => {
                            if (filter === 'all') {
                                return true;
                            } else if (filter === 'completed') {
                                return task.checked === true;
                            } else {
                                return task.checked === false;
                            }
                        })
                        .map((task, index) => (
                            <TaskField
                                key={index}
                                task={task}
                                index={index}
                                lastIndex={tasks.data.length - 1}
                            />
                        ))}
                </View>
                <StatusBar style='auto' />
                <View style={styles.bottom_wrapper}>
                    <Button
                        title='Добавить'
                        style={styles.addButton}
                        styleText={styles.addText}
                        onPress={() => {
                            setModalAddVisible(true);
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tasks: {
        marginBottom: 36,
        marginTop: 27,
        paddingHorizontal: 16,
        boxSizing: 'border-box',
        width: '100%',
    },
    menu_wrapper: {},
    bottom_wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 16,
        boxSizing: 'border-box',
    },
    addButton: {
        height: 55,
        backgroundColor: '#3785CC',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    addText: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    topWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#EEEEEF',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        height: 128,
        paddingHorizontal: 16,
    },
    tasksButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9,
        borderRadius: 8,
        // elevation: 3,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: '#3785CC',
        borderWidth: 2,
        width: '100%',
        paddingHorizontal: 16,
    },
    tasksText: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
        letterSpacing: 0.25,
        color: '#3785CC',
    },
});
