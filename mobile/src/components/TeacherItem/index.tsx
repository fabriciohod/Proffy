import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import style from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';


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
    isFavorite: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, isFavorite }) =>
{
    const [favorite, setFavorite] = useState(isFavorite);

    function handleWhatsApp ()
    {
        Linking.openURL(`https://wa.me/55${teacher.whatsapp}`);
    }

    async function handleToggleFavorite ()
    {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (favorite) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) =>
            {
                return teacherItem.id === teacher.id;
            });
            favoritesArray.splice(favoriteIndex, 1)
            setFavorite(false);
        } else {
            setFavorite(true);
            favoritesArray.push(teacher);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

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
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[style.favoriteButton,
                        favorite ? style.favotited : {}]}
                    >
                        {favorite
                            ? <Image source={unFavoriteIcon} />
                            : <Image source={heartOutLineIcon} />}


                    </RectButton>
                    <RectButton style={style.contactButton} onPress={handleWhatsApp}>
                        <Image source={whatsAppIcon} />
                        <Text style={style.contactButtonText}>Entrar em contato</Text>
                    </RectButton>

                </View>
            </View>
        </View>
    );
};

export default TeacherItem;