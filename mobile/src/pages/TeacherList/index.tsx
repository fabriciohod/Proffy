import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

function TeacherList ()
{
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [teacherList, setTeacherList] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function handleFilterSubmit ()
    {
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        setIsFilterVisible(false);
        setTeacherList(res.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={(
                <BorderlessButton onPress={_ => setIsFilterVisible(!isFilterVisible)}>
                    <Feather name="filter" size={20} color="#fff" />
                </BorderlessButton>
            )} >
                {isFilterVisible && (
                    <View style={styles.searchForm}>

                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            placeholderTextColor='#c1bccc'
                            style={styles.input}
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                            placeholder="qual a materia"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor='#c1bccc'
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={(text) => setWeek_day(text)}
                                    placeholder="qual dia"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor='#c1bccc'
                                    style={styles.input}
                                    value={time}
                                    onChangeText={(text) => setTime(text)}
                                    placeholder="qual horario"
                                />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24,
                }}
            >

                {teacherList.map((teacher: Teacher) =>
                {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;