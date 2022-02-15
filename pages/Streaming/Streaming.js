import React from 'react';
import ButtonAsk from '../../components/ButtonAsk/ButtonAsk';
import Header from '../../components/Header/Header';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import apiPage from '../../services/api';
import {
  Subtitle,
  Text,
  TextF,
  TextC,
  View,
  Container,
} from './style';

function Streaming({route}) {
  const navigation = useNavigation();
  const genre = route.params?.numGenre;

  function next(streamSelected) {
    const stream = streamSelected;
    
    apiPage(stream, genre);

    navigation.reset({
      index: 0,
      routes: [{name: "Maf", params:{
        numGenre: route.params?.numGenre, 
        ingredient: route.params?.ingredient, 
        color: route.params?.color, 
        month: route.params?.month,
        name: route.params?.name,
        stream: streamSelected,
        }}],
    });
  };

  return(
    <View>
      <Header />
      <Container>
        <Subtitle>
          Ótimas escolhas!
        </Subtitle>

        <TextF>
          Temos muitas plataformas de streming,
        </TextF>

        <Text>
          escolha uma da qual já utilize.
        </Text>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          //onPress={(value) => (getValue(value))}
          onPress={() => (next("netflix"))}
        >

          <Image
            source={require('../../assets/Netflix.png')}
            style={styles.ImgBtn1}
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => (next("disney"))}
        >

          <Image
            source={require('../../assets/Disney.png')}
            style={styles.ImgBtn2}
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => (next("paramount"))}
        >

          <Image
            source={require('../../assets/Paramount.jpg')}
            style={styles.ImgBtn3}
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => (next("prime"))}
        >

          <Image
            source={require('../../assets/prime-video.png')}
            style={styles.ImgBtn4}
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => (next("continuar"))}
        >

          <TextC>
            Continuar...
          </TextC>

        </TouchableOpacity>

        <ButtonAsk name="streaming"/>

      </Container>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 55,
    borderRadius: 16,
    marginBottom: 24,
    width: '100%',
    justifyContent: 'center',
  },

  ImgBtn1:{
    alignItems: 'center',
    height: 20,
    width: 110,
    resizeMode: 'stretch',
  },

  ImgBtn2:{
    height: 55,
    width: 110,
    resizeMode: 'stretch',
  },

  ImgBtn3:{
    height: 40,
    width: 110,
    resizeMode: 'stretch',
  },

  ImgBtn4:{
    height: 30,
    width: 110,
    resizeMode: 'stretch',
  },
});

export default Streaming;