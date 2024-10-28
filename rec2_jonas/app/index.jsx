import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import {useState, useContext} from 'react'
import { Picker } from '@react-native-picker/picker'
import { AppContext } from '../scripts/appContext'

export default telaInicio = () => {
    const {cidade, setCidade} = useContext(AppContext)



    return (
        <View style={styles.container}>
            <Picker
                selectedValue={cidade}
                onValueChange={(itemValue) => setCidade(itemValue)}
                style={{ height: 50, width: 150 }}
            >
                {cidades.map((cidade) => (
                    <Picker.Item key={cidade.value} label={cidade.label} value={cidade.value} />
                ))}
            </Picker>

            {cidade ? (
                <Link href="/previsao">
                    <Text style={styles.button}>avançar</Text>
                </Link>
            ) : null}
        </View>
    )
}

const cidades = [
    { label: 'Aracaju', value: 'Aracaju' },
    { label: 'Belém', value: 'Belém' },
    { label: 'Belo Horizonte', value: 'Belo Horizonte' },
    { label: 'Boa Vista', value: 'Boa Vista' },
    { label: 'Brasília', value: 'Brasília' },
    { label: 'Campo Grande', value: 'Campo Grande' },
    { label: 'Cuiabá', value: 'Cuiabá' },
    { label: 'Curitiba', value: 'Curitiba' },
    { label: 'Florianópolis', value: 'Florianópolis' },
    { label: 'Fortaleza', value: 'Fortaleza' },
    { label: 'Goiânia', value: 'Goiânia' },
    { label: 'João Pessoa', value: 'João Pessoa' },
    { label: 'Macapá', value: 'Macapá' },
    { label: 'Maceió', value: 'Maceió' },
    { label: 'Manaus', value: 'Manaus' },
    { label: 'Natal', value: 'Natal' },
    { label: 'Palmas', value: 'Palmas' },
    { label: 'Porto Alegre', value: 'Porto Alegre' },
    { label: 'Porto Velho', value: 'Porto Velho' },
    { label: 'Recife', value: 'Recife' },
    { label: 'Rio Branco', value: 'Rio Branco' },
    { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
    { label: 'Salvador', value: 'Salvador' },
    { label: 'São Luís', value: 'São Luís' },
    { label: 'São Paulo', value: 'São Paulo' },
    { label: 'Teresina', value: 'Teresina' },
    { label: 'Vitória', value: 'Vitória' },
  ];

  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 400
    }
})