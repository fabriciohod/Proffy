import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import backIcon from '../../../assets/images/icons/back.png';
import logoImg from '../../../assets/images/logo.png';
import style from './styles';

interface PageHeaderProps
{
    title: string,
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) =>
{
    const { navigate } = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.toBar}>
                <BorderlessButton onPress={_ => navigate('Landing')}>
                    <Image source={backIcon} resizeMode='contain' />
                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain' />
            </View>
            <View style={style.header}>
                <Text style={style.title}>{title}</Text>
                {headerRight}
            </View>
            {children}
        </View >
    );
};

export default PageHeader;;