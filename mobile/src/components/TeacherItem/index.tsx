import React from 'react';
import { View, Image, Text } from 'react-native';
import style from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../../assets/images/icons/unfavorite.png'
import whatsAppIcon from '../../../assets/images/icons/whatsapp.png'

const TeacherItem = () =>
{
    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image style={style.avatar} source={{ uri: 'https://github.com/fabriciohod.png' }} />
            <View style={style.profileInfo} >
                <Text style={style.name}>Fabrício</Text>
                <Text style={style.subject}>Química</Text>
            </View>
            </View>
            <Text style={style.bio}>
                Entusiasta das melhores tecnologias de química avançada.
                {'\n'}{'\n'}
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
           </Text>
           <View style={style.footer}>
               <Text style={style.price}>
                    Preço/hora {'  '}
               </Text>
               <Text style={style.priceValue}>R$ 20,00</Text>
               <View style={style.buttonsContainer}>
                    <RectButton style={[style.favoriteButton, style.favotited]}>
                        <Image source={unFavoriteIcon}/>
                        {/* <Image source={heartOutLineIcon}/> */}
                    </RectButton>
                    <RectButton style={style.contactButton}>
                        <Image source={whatsAppIcon}/>
                        <Text style={style.contactButtonText}>Entrar em contato</Text>
                    </RectButton>

               </View>
           </View>
        </View>
    );
};

export default TeacherItem;