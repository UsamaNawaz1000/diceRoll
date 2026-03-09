import { Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
    name: string;
}>;

export default function Icons({ name }: IconProps) {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={50} color="#FF6B6B" />;
        case 'cross':
            return <Icon name="times" size={50} color="#4ECDC4" />;
        case 'empty':
            return <View style={{ width: 50, height: 50 }} />; // Empty placeholder
        default:
            return <Icon name="question-circle" size={50} color="#999" />;
    }
}