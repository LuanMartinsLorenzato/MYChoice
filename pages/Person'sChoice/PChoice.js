import React, {useState} from 'react';
import ButtonAsk from '../../components/ButtonAsk/ButtonAsk';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  KeyboardView,
  Container,
  Subtitle,
  Text,
  View,
  ViewF,
  ViewL,
} from './style';
import { TextInputMask } from 'react-native-masked-text';

function PChoice({route}) {
  const navigation = useNavigation();
  const [genero, setGenero] = useState();
  const [ingredient, setIngredient] = useState();
  const [age, setAge] = useState();
  const [month, setMonth] = useState();
  let numGenre;

  const getGenero = (e) => {
    setGenero(e);
  };

  function setGenre() {
    let genre;
    if(genero) { 
      genre = genero.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();
    }
    switch(genre) {
      case 'infantil':
        numGenre = 6;
        break;
      case 'documentario':
        numGenre = 99;
        break;
      case 'fantasia':
        numGenre = 14;
        break;
      case 'biografia':
        numGenre = 1;
        break;
      case 'musica':
        numGenre = 10402;
        break;
      case 'romance':
        numGenre = 10749;
        break;
      case 'familia':
        numGenre = 10751;
        break;
      case 'guerra':
        numGenre = 10752;
        break;
      case 'reality':
        numGenre = 10764;
        break;
      case 'aventura':
        numGenre = 12;
        break;
      case 'animacao':
        numGenre = 16;
        break;
      case 'drama':
        numGenre = 18;
        break;
      case 'terror':
        numGenre = 27;
        break;
      case 'acao':
        numGenre = 28;
        break;
      case 'comedia':
        numGenre = 35;
        break;  
      case 'historia':
        numGenre = 36;
        break;
      case 'musical':
        numGenre = 4;
        break;
      case 'esporte':
        numGenre = 5;
        break;
      case 'adulto':
        numGenre = 7;
        break;
      case 'ficcao':
        numGenre = 878;
        break;
      case 'misterio':
        numGenre = 9648;
        break;
      case 'ocidental':
        numGenre = 37;
        break;
      case 'crime':
        numGenre = 80;
        break;
      case 'game show':
        numGenre = 9648;
        break;
      default:
        numGenre = 999;
    }
  }

  const getIngredient = (e) => {
    setIngredient(e);
  };

  const getAge = (e) => {
    setAge(e);
  };

  const getMonth = (e) => {
    setMonth(e);
  };

  function next() {
    setGenre();
    if(genero === undefined || ingredient === undefined || age === undefined || month === undefined){
      Alert.alert("Opa!","Tivemos um problema!\nPrecisamos que preencha todos os campos para prosseguir (=");
    }else{
      if(numGenre === 999){
        Alert.alert("Poxa!!",
        `Não encontramos nenhum filme com esse gênero\nClique no interrogação ao lado do campo para entender melhor!`);
      }else if(numGenre === 7){
        Alert.alert("Desculpa!", "Não temos nenhum filme com esse gênero");
      }else{
        navigation.reset({
          index: 0,
          routes: [{name: "Streaming", params:{
          numGenre: numGenre, 
          ingredient: ingredient, 
          age: age, 
          month: month,
          name: route.params?.name
          }}],
        })
      }
    }
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Header />
        <Container>
          <Subtitle>
            Vamos lá {route.params?.name}
          </Subtitle>

          <ViewF>
            <Text>
              Escolha um gênero: 
            </Text>

            <TextInputMask
              type={'custom'}
              options={{
                mask: '************',
              }}
              value={genero}
              style={styles.Input}
              onChangeText={getGenero}
              require
            />

            <ButtonAsk name="genre" />
          </ViewF>

          <View>
            <Text>
              Escolha um ingrediente: 
            </Text>
            <TextInputMask
              type={'custom'}
              options={{
                mask: '*************',
              }}
              value={ingredient}
              style={styles.Input}
              onChangeText={getIngredient}
            />
            <ButtonAsk name="ingredient"/>
          </View>

          <View>
            <Text>
              Adicione sua idade: 
            </Text>

            <TextInputMask
              keyboardType= 'number-pad'
              type={'custom'}
              options={{
                mask: '999',
              }}
              value={age}
              style={styles.Input}
              onChangeText={getAge}
            />

            <ButtonAsk name="age"/>
          </View>

          <ViewL>
            <Text>
              Escolha um mês: 
            </Text>
              <TextInputMask
                type={'custom'}
                options={{
                  mask: '*********',
                }}
                value={month}
                style={styles.Input}
                onChangeText={getMonth}
              />

            <ButtonAsk name="month"/>
          </ViewL>

          <Button onPress={() => (next())}/>
        </Container>
      </KeyboardView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  Input:{
    backgroundColor: '#fff',
    height: 24,
    textAlign: 'center',
    width: '30%',
    borderRadius: 16,
  },
});

export default PChoice;