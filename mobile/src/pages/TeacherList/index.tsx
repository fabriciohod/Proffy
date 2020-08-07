import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList ()
{
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingBottom: 24,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;