import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Button from '../components/CustomButton';

interface FilterModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    filter: 'all' | 'completed' | 'uncompleted';
    setFilter: React.Dispatch<
        React.SetStateAction<'all' | 'completed' | 'uncompleted'>
    >;
}

export const FilterModal = ({
    modalVisible,
    setModalVisible,
    filter,
    setFilter,
}: FilterModalProps) => {
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
                    <Button
                        style={styles.button}
                        onPress={() => {
                            setFilter('all');
                            setModalVisible(!modalVisible);
                        }}
                        styleText={
                            filter !== 'all' ? styles.text : styles.textActive
                        }
                        title='Показывать все задания'
                    />
                    <Button
                        style={styles.button}
                        onPress={() => {
                            setFilter('completed');
                            setModalVisible(!modalVisible);
                        }}
                        styleText={
                            filter !== 'completed'
                                ? styles.text
                                : styles.textActive
                        }
                        title='Выполненные'
                    />
                    <Button
                        style={styles.button}
                        onPress={() => {
                            setFilter('uncompleted');
                            setModalVisible(!modalVisible);
                        }}
                        styleText={
                            filter !== 'uncompleted'
                                ? styles.text
                                : styles.textActive
                        }
                        title='Не выполненные'
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: '100%',
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
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
        blur: 40.7742,
        width: 359,
        height: 168,
        borderRadius: 14,
        paddingHorizontal: 16,
    },
    text: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
        color: '#737A82',
    },
    textActive: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
        color: '#3785CC',
    },
});
