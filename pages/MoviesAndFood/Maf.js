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

function Maf({route}) {

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
                    <SelectInput name="filme"/>

                </ViewF>
                <View>
                    <Text>
                        Bebida: 
                    </Text>
                    <SelectInput name="drink"/>
                        
                </View>
                <View>
                    <Text>
                        Comida: 
                    </Text>
                    <SelectInput name="food"/>
                        
                </View>
                <ViewL>
                    <Text>
                        Sobremesa:
                    </Text>
                    <SelectInput name="dessert"/>
                        
                </ViewL>
                <ButtonAsk name="maf"/>
            </Container>
        </KeyboardView>
    )
}


export default Maf;