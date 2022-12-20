import React, {useState, useMemo, useEffect} from 'react';
import { Alert } from 'react-native';
import ButtonAsk from '../../components/ButtonAsk/ButtonAsk';
import Header from '../../components/Header/Header';
import SelectInput from '../../components/Select/SelectInput';
import requestApi from '../../services/requestApi.js'
import axios from 'axios';
import requestFood from '../../services/requestFood.js'

import {
    KeyboardView,
    Container,
    Subtitle,
    Text,
    TextR,
    View,
    ViewF,
    ViewL,
} from './style';

function Maf({ route }) {
    let axiosOptions = requestApi(route.params?.stream, route.params?.numGenre, route.params?.page);
    let foods = route.params?.ingredient;
    const [film, setFilm] = useState();
    const [food, setFood] = useState(); // Alterar para ([]) apenas para virar array
    const [drink, setDrink] = useState("Texto");
    const [dessert, setDessert] = useState("Texto");
    let foodObj = [];
    let filmArray = [];
    useEffect(() => {
        Alert.alert("Parabéns!","Já temos o resultado!\nDivirta-se!!")
        async function getDataFilm() {
            await axios.request(axiosOptions).then(function (response) {
                response.data.results.map(index => {
                    filmArray.push(index.title);
                });
                setFilm(filmArray[0]);
            }).catch(function (error) {
            console.error(error);
            Alert.alert("Ops, ocorreu um erro em nossos sistemas\nRecarregue o app e tente novamente!");
            });
        }
        async function getDataFood() {
            await requestFood(route.params?.ingredient).then((data) => {
                data.meals.map(i => {
                    foodObj.push(i)
                })
                setFood(foodObj[0].name) // Alterar para (foodObj) apenas para virar array
            }).catch((e) => {
                console.log(e)
            });
        }
        getDataFood()
        getDataFilm();
    }, []);

    return(
        <KeyboardView>
            <Header />
            <Container>
                <Subtitle>
                    Muito bem {route.params?.name}
                </Subtitle>
                <TextR>
                    Aqui estão os resultados!
                </TextR>
                <ViewF>
                    <Text>
                        Filme: 
                    </Text>
                    {film &&
                        <SelectInput film={film} />
                    }

                </ViewF>
                <View>
                    <Text>
                        Bebida: 
                    </Text>
                    {drink &&
                        <SelectInput drink={drink} />
                    }
                    
                </View>
                <View>
                    <Text>
                        Comida: 
                    </Text>
                    {food &&
                        <SelectInput food={food} />
                    }
                    
                </View>
                <ViewL>
                    <Text>
                        Sobremesa:
                    </Text>
                    {dessert &&
                    <SelectInput dessert={dessert} />
                    }
                    
                </ViewL>
                <ButtonAsk name="maf" />
            </Container>
        </KeyboardView>
    )
}

export default Maf;
