import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Converter({ navigation }) {

    const [currencies, setCurrencies] = useState([]);
    const [input, setInput] = useState(0);
    const [outcome, setOutcome] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState();
    

  /* let currencies ={
        "success": true,
        "timestamp": 1636348263,
        "base": "EUR",
        "date": "2021-11-08",
        "rates": {
            "AED": 4.247213,
            "AFN": 104.953028,
            "ALL": 122.927247,
            "AMD": 550.902465,
            "ANG": 2.080246,
            "AOA": 690.334946,
            "ARS": 115.237009,
            "AUD": 1.56297,
            "AWG": 2.081412,
            "AZN": 1.966834,
            "BAM": 1.957395,
            "BBD": 2.330544,
            "BDT": 99.008681,
            "BGN": 1.955151,
            "BHD": 0.436445,
            "BIF": 2296.917074,
            "BMD": 1.15634,
            "BND": 1.562336,
            "BOB": 7.970236,
            "BRL": 6.407509,
            "BSD": 1.154313,
            "BTC": 1.7738533e-5,
            "BTN": 85.743741,
            "BWP": 13.214354,
            "BYN": 2.829338,
            "BYR": 22664.259524,
            "BZD": 2.326641,
            "CAD": 1.440394,
            "CDF": 2324.242816,
            "CHF": 1.055968,
            "CLF": 0.034003,
            "CLP": 938.254993,
            "CNY": 7.397567,
            "COP": 4477.925766,
            "CRC": 739.204779,
            "CUC": 1.15634,
            "CUP": 30.643004,
            "CVE": 110.345614,
            "CZK": 25.249144,
            "DJF": 205.492564,
            "DKK": 7.439202,
            "DOP": 65.083487,
            "DZD": 159.534206,
            "EGP": 18.163671,
            "ERN": 17.346529,
            "ETB": 54.845788,
            "EUR": 1,
            "FJD": 2.409639,
            "FKP": 0.847854,
            "GBP": 0.857682,
            "GEL": 3.654322,
            "GGP": 0.847854,
            "GHS": 7.054014,
            "GIP": 0.847854,
            "GMD": 60.129495,
            "GNF": 11081.566543,
            "GTQ": 8.935228,
            "GYD": 241.650719,
            "HKD": 9.002509,
            "HNL": 27.887061,
            "HRK": 7.518518,
            "HTG": 113.996139,
            "HUF": 358.963105,
            "IDR": 16517.330749,
            "ILS": 3.595824,
            "IMP": 0.847854,
            "INR": 85.736349,
            "IQD": 1684.082265,
            "IRR": 48855.355341,
            "ISK": 150.243116,
            "JEP": 0.847854,
            "JMD": 179.200764,
            "JOD": 0.819834,
            "JPY": 131.34283,
            "KES": 128.819038,
            "KGS": 98.057387,
            "KHR": 4705.444519,
            "KMF": 492.935127,
            "KPW": 1040.705448,
            "KRW": 1369.950405,
            "KWD": 0.34918,
            "KYD": 0.961961,
            "KZT": 495.872281,
            "LAK": 11982.679407,
            "LBP": 1745.480837,
            "LKR": 232.586097,
            "LRD": 170.733949,
            "LSL": 17.449271,
            "LTL": 3.41437,
            "LVL": 0.699458,
            "LYD": 5.260061,
            "MAD": 10.499315,
            "MDL": 20.218194,
            "MGA": 4582.465153,
            "MKD": 61.663782,
            "MMK": 2086.927052,
            "MNT": 3296.637324,
            "MOP": 9.256623,
            "MRO": 412.8131,
            "MUR": 49.8961,
            "MVR": 17.865522,
            "MWK": 944.669321,
            "MXN": 23.529063,
            "MYR": 4.805169,
            "MZN": 73.809518,
            "NAD": 17.449545,
            "NGN": 474.400008,
            "NIO": 40.66517,
            "NOK": 9.884853,
            "NPR": 137.198537,
            "NZD": 1.621888,
            "OMR": 0.445693,
            "PAB": 1.154323,
            "PEN": 4.638169,
            "PGK": 4.052906,
            "PHP": 58.086995,
            "PKR": 196.19761,
            "PLN": 4.599475,
            "PYG": 7952.391076,
            "QAR": 4.210239,
            "RON": 4.950057,
            "RSD": 117.683098,
            "RUB": 82.503732,
            "RWF": 1176.340594,
            "SAR": 4.337309,
            "SBD": 9.273027,
            "SCR": 16.013668,
            "SDG": 510.492323,
            "SEK": 9.911642,
            "SGD": 1.561325,
            "SHP": 1.592744,
            "SLL": 12627.230167,
            "SOS": 677.615388,
            "SRD": 24.863587,
            "STD": 23933.898632,
            "SVC": 10.09999,
            "SYP": 1453.486743,
            "SZL": 17.628646,
            "THB": 38.299103,
            "TJS": 13.007903,
            "TMT": 4.047189,
            "TND": 3.283426,
            "TOP": 2.598269,
            "TRY": 11.187368,
            "TTD": 7.839001,
            "TWD": 32.201169,
            "TZS": 2659.581537,
            "UAH": 30.129335,
            "UGX": 4100.966918,
            "USD": 1.15634,
            "UYU": 50.97524,
            "UZS": 12351.240973,
            "VEF": 247260390463.68927,
            "VND": 26201.502885,
            "VUV": 129.852832,
            "WST": 2.979879,
            "XAF": 656.476333,
            "XAG": 0.047613,
            "XAU": 0.000635,
            "XCD": 3.125066,
            "XDR": 0.818948,
            "XOF": 656.476333,
            "XPF": 119.699748,
            "YER": 289.489322,
            "ZAR": 17.322896,
            "ZMK": 10408.444705,
            "ZMW": 20.133427,
            "ZWL": 372.340935
        }
    }*/
    
    const getCurrencies = () => {
        fetch(`http://api.exchangeratesapi.io/latest?access_key=f68c5b02544c8e18affad803ae6fe81a`)
            .then(response => response.json())
            .then(responseJson => setCurrencies(responseJson))
            .catch(error => {
                Alert.alert('error', error.message)
            })
    }

    useEffect(() => {getCurrencies}, []);
    

    const convert = () => {
        
        console.log(selectedCurrency)
        console.log(currencies.rates[selectedCurrency])
        let rate = currencies.rates[selectedCurrency]
        let outcome = rate * input;
        setOutcome(outcome)
        console.log(input)
        console.log(outcome)
    };

    return (
        
        <View>
            <Text>{outcome.toFixed(2)} €</Text>
            <TextInput style={{ fontSize: 20, width: 50, borderColor: 'gray', borderWidth: 1 }}
            value={input}
            onChangeText={input => setInput(input)}/>
            <Picker
            selectedValue={selectedCurrency}
                onValueChange={(itemValue) =>
                    setSelectedCurrency(itemValue)
                } >
                {Object.keys(currencies.rates).map((item, index) => {
                    return (<Picker.Item label={item} value={item} key={index} />)
                })}
            </Picker>
            <Button title='Convert' onPress={convert}/>
            
        </View>
    );
};