import React from 'react';
import { View, Image, Text } from 'react-native';
import style from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../../assets/images/icons/whatsapp.png';

export interface Teacher
{
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;
}

interface TeacherItemProps
{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) =>
{
    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image style={style.avatar} source={{ uri: teacher.avatar }} />
                <View style={style.profileInfo} >
                    <Text style={style.name}>{teacher.name}</Text>
                    <Text style={style.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={style.bio}>{teacher.bio}</Text>
            <View style={style.footer}>
                <Text style={style.price}>
                    Preço/hora {'  '}
                </Text>
                <Text style={style.priceValue}>R$ {teacher.cost.toString().replace('.', ',')}</Text>
                <View style={style.buttonsContainer}>
                    <RectButton style={[style.favoriteButton, style.favotited]}>
                        <Image source={unFavoriteIcon} />
                        {/* <Image source={heartOutLineIcon}/> */}
                    </RectButton>
                    <RectButton style={style.contactButton}>
                        <Image source={whatsAppIcon} />
                        <Text style={style.contactButtonText}>Entrar em contato</Text>
                    </RectButton>

                </View>
            </View>
        </View>
    );
};

export default TeacherItem;