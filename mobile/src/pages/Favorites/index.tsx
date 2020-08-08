import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favorites ()
{
    const [favorites, setFavorites] = useState([]);

    function loadFavorites ()
    {
        AsyncStorage.getItem('favorites')
            .then(res =>
            {
                if (res) {
                    setFavorites(JSON.parse(res).map((teacher: Teacher) => teacher));
                }
            });
    }

    useFocusEffect(() =>
    {
        loadFavorites();
    },);

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24,
                }}
            >
                {favorites.map((teacher: Teacher) =>
                {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            isFavorite
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;