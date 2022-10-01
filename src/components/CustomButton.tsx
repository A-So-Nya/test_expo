import React from 'react';
import { Text, Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ButtonPropsType {
    onPress?: () => void;
    title?: string;
    style?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
}

export default function Button({
    onPress,
    title,
    style,
    styleText,
}: ButtonPropsType) {
    // const { onPress, title = 'Save', style, styleText } = props;
    return (
        <Pressable style={style} onPress={onPress}>
            <Text style={styleText}>{title}</Text>
        </Pressable>
    );
}
