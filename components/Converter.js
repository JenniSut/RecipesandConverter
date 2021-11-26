import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Converter({ navigation }) {

    const [currencies, setCurrencies] = useState([]);
    const [input, setInput] = useState('');
    const [outcome, setOutcome] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState();
    
    const getCurrencies = () => {
        fetch(`http://api.exchangeratesapi.io/latest?access_key=YOURKEY`)
            .then(response => response.json())
            .then(responseJson => setCurrencies(responseJson.rates))
            .catch(error => {
                Alert.alert('error', error.message)
            })
    };

    useEffect(() => { getCurrencies() }, []);
    

    const convert = () => {
        /*console.log(currencies);
        console.log(selectedCurrency)
        console.log(currencies[selectedCurrency])*/
        let rate = currencies[selectedCurrency]
        let outcome = rate * input;
        setOutcome(outcome)
        /*console.log(input)
        console.log(outcome)*/
    };

    return (
        
        <View style={styles.container}>
            <Text style={{ fontSize: 20}}>{outcome.toFixed(2)} €</Text>
            <View style={styles.item}>
                <TextInput style={{ fontSize: 20, width: 50, borderColor: 'gray', borderWidth: 1, height: 40 }}
                value={input}
                onChangeText={input => setInput(input)}/>
                
                <Picker 
                    style={{ fontSize: 20, width: 100, borderColor: 'gray', borderWidth: 1, color: 'black' }}
                    selectedValue={selectedCurrency}
                    onValueChange={(itemValue) =>
                        setSelectedCurrency(itemValue)
                    } >
                {Object.keys(currencies).map((item, index) => {
                        return (<Picker.Item label={item} value={item} key={index} />)
                    })}
                </Picker>
                </View>
            
            <Button title='Convert' onPress={convert}/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flexDirection: 'row'
    },
});
