import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../../scripts/appContext';

const TelaPrevisao = () => {
    const { cidade } = useContext(AppContext);
    const [tempo, setTempo] = useState(null);

    const obterPrevisaoDoTempo = async () => {
        if (!cidade) return;

        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bddbeed6a893cf7d820e74ae7f9cb95e&units=metric&lang=pt_br`);
            const data = await response.json();
            if (data && data.main) {
                setTempo({
                    nome: data.name,
                    temperatura: data.main.temp,
                    vento: data.wind.speed,
                    humidade: data.main.humidity,
                    clima: data.weather[0].description,
                });
            }
        } catch (error) {
            console.error('Erro ao buscar dados do clima:', error);
        }
    };

    useEffect(() => {
        obterPrevisaoDoTempo();
    }, [cidade]);

    return (
        <View style={styles.container}>
            {tempo ? (
                <View style={styles.tempoView}>
                    <Text>Nome da Cidade: {tempo.nome}</Text>
                    <Text>Temperatura Atual: {tempo.temperatura}°C</Text>
                    <Text>Velocidade do Vento: {tempo.vento} m/s</Text>
                    <Text>Humidade: {tempo.humidade}%</Text>
                    <Text>Tipo do Clima: {tempo.clima}</Text>
                </View>
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50,
    },
    tempoView: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
});

export default TelaPrevisao;
