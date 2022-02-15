import React from 'react';
import { Container, FText, TextContainer, SText, View } from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';


function Person({route}) {
    const navigation = useNavigation();

    function next() {
        navigation.navigate("PChoice", {name: route.params?.name})
    }

    return(
        <View>
            <Header />
            <Container>
                <TextContainer>
                    <FText>
                        Hoje é sua vez {route.params?.name}
                    </FText>
                </TextContainer>
                <SText>
                    Pressione o botão para começar
                </SText>

                <Button onPress={next}/>
            </Container>
        </View>
    )
}
export default Person;