import React, { useState } from 'react';
import { 
  StyleSheet, 
  Dimensions, 
  ImageBackground, 
  View, 
  Alert, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import {
  InputP1,
  Subtitle,
  KeyboardView,
  Container,
  InputP2,
  Input,
} from './style';


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

function Entrance() {
  const [lista, setLista] = useState([
        {
            img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
        },
        {
            img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
        },
        {
            img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
        },
        {
            img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
        },
        {
            img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
        },
        {
            img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
        },
    ]);
  const [firstName, setfirstName] = useState("");
  const [secondName, setsecondName] = useState("");
  const numBackground = Math.floor(Math.random() * 6);
  const [background, setbackground] = useState(lista[numBackground].img);

  const getFirstName = (e) =>{
    setfirstName(e);
  };
    
  const getSecondName = (e) =>{
    setsecondName(e);
  };

  const setName = () => {
    const num = Math.floor(Math.random() * 2);

    if(secondName === ""){
      return firstName;

    } else {
      if(num === 0) {
        return firstName;

      } else {
        return secondName;
      };
    }
  }

  const navigation = useNavigation();
  function next() {
    if (firstName === "" && secondName === "") {
      Alert.alert("Iih!","Tivemos um erro\nEscreva pelo menos um nome");
            
    } else if (firstName === "" && secondName !== firstName) {
      alert("Digite seu nome no primeiro campo");

    } else {
      navigation.navigate("Person", {name: setName()});

    };
  }

  return(
        
    <View style={{flex:1, height: screenHeight}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground
            source={{uri: background}}
            style={styles.ImgBg}
            blurRadius={6}
          >
            <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <Header />

              <Container>
                <Subtitle> Vamos de filmes? </Subtitle>

                <InputP1> Preciso que me fale seu nome! </InputP1>
                <Input  placeholder="Escreva seu nome" onChangeText={(e) => (getFirstName(e))}/>

                <InputP2> Tem mais alguém ai? </InputP2>
                <Input placeholder="Escreva o nome de mais uma pessoa" onChangeText={(e) => (getSecondName(e))}/>

                <Button onPress={() => (next())}/>
              </Container>
            </KeyboardView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </View>
        
  )
}

const styles = StyleSheet.create({
  ImgBg:{
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000',
  },
});

export default Entrance;
