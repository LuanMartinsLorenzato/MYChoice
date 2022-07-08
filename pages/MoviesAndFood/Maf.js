import React from 'react';
import { Alert } from 'react-native';
import ButtonAsk from '../../components/ButtonAsk/ButtonAsk';
import Header from '../../components/Header/Header';
import SelectInput from '../../components/Select/SelectInput';

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
    let film = 'sl';
    let drink = 'sl';
    let food = 'sl';
    let dessert = 'sl';

    Alert.alert("Parabéns!","Já temos o resultado!\nDivirta-se!!")

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
                    <SelectInput film={film} />

                </ViewF>
                <View>
                    <Text>
                        Bebida: 
                    </Text>
                    <SelectInput drink={drink}/>
                        
                </View>
                <View>
                    <Text>
                        Comida: 
                    </Text>
                    <SelectInput food={food}/>
                        
                </View>
                <ViewL>
                    <Text>
                        Sobremesa:
                    </Text>
                    <SelectInput dessert={dessert}/>
                        
                </ViewL>
                <ButtonAsk name="maf"/>
            </Container>
        </KeyboardView>
    )
}


export default Maf;