import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { add } from '../store/tasksReducer';
import Button from '../components/CustomButton';

interface AddModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddModal = ({ modalVisible, setModalVisible }: AddModalProps) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const handleSave = () => {
        if (title.trim() !== '' && task.trim() !== '') {
            dispatch(
                add({
                    title,
                    task,
                    checked: false,
                }),
            );
            setModalVisible(false);
            setTitle('');
            setTask('');
        }
    };
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.text_wrapper}>
                        <Text style={styles.title}>Добавить предмет</Text>
                        <Text style={styles.text}>
                            Укажите заголовок и задание
                        </Text>
                    </View>
                    <View style={styles.input_wrapper}>
                        <TextInput
                            placeholder='Заголовок'
                            value={title}
                            style={styles.input}
                            onChangeText={(text) => setTitle(text)}
                            multiline={true}
                            underlineColorAndroid='transparent'
                        />
                        <TextInput
                            placeholder='Задание'
                            value={task}
                            style={styles.input}
                            onChangeText={(text) => setTask(text)}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Button
                            style={styles.buttonLeft}
                            styleText={styles.exit}
                            title='Отмена'
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        />
                        <Button
                            style={styles.buttonRight}
                            styleText={styles.save}
                            title='Сохранить'
                            onPress={handleSave}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    save: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        color: '#3784CC',
    },
    exit: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        color: '#C3C3C5',
    },
    buttonLeft: {
        width: 135,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopWidth: 0.33,
        borderTopColor: '#FFF',
        borderRightWidth: 0.33,
        borderRightColor: '#FFF',
    },
    buttonRight: {
        width: 135,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopWidth: 0.33,
        borderTopColor: '#FFF',
        borderLeftWidth: 0.33,
        borderLeftColor: '#FFF',
    },
    buttons: {
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 44,
    },
    input: {
        borderWidth: 0.5,
        boxSizing: 'border-box',
        borderStyle: 'solid',
        borderColor: 'rgba(60, 60, 67, 0.3)',
        borderRadius: 7,
        width: '100%',
        height: 32,
        marginBottom: 15,
        paddingHorizontal: 6,
    },
    title: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
    },
    text: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: -0.078,
        color: '#737A82',
    },
    text_wrapper: {
        paddingTop: 18,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    input_wrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        marginBottom: 2,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginVertical: 'auto',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    wrapper: {
        backgroundColor: 'rgba(249, 249, 249, 0.94)',
        blur: 27.1282,
        width: 270,
        height: 219,
        borderRadius: 14,
    },
});
