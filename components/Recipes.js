import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';


export default function Recipes() {

    const [keyword, setKeyword] = useState('');
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
        .then(response => response.json())
        .then(responseJson => setRecipes(responseJson.meals), )
        .catch(error => {
            Alert.alert('error', error.message)
        });
        setKeyword('')
    };

    return (
        <View>
                <TextInput 
                style={{fontSize: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
                placeholder='Ingredient'
                value={keyword}
                onChangeText= {keyword => setKeyword(keyword)}
                />
                <Button title='Find' onPress={getRecipes}/>
            
            <FlatList
            style={{marginLeft : '5%'}}
            keyExtractor={(item, idMeal) => idMeal.toString()}
            renderItem={({item}) =>
                <View>
                    <Text style= {{fontSize: 18}}>
                        {item.strMeal}
                    </Text>
                    <Image style={{ width: 250, height: 100 }} source={{uri: item.strMealThumb}}/>
                    
                </View>}
                data={recipes}/>
        </View>
    )
};