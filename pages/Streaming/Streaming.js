import React from 'react';
import ButtonAsk from '../../components/ButtonAsk/ButtonAsk';
import Header from '../../components/Header/Header';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NETFLIX, DISNEY, PRIME, PARAMOUNT, STREAMS } from '../../defaults';
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
  let page;

  function next(streamSelected) {
    let newStream;

    streamSelected === 'continuar' ? 
      newStream = STREAMS[parseInt(Math.random() * 3)] : 
      newStream = streamSelected;

    newStream === 'netflix' ? 
      page = NETFLIX[genre] : 0;

    newStream === 'disney' ? 
      page = DISNEY[genre] : 0;

    newStream === 'prime' ? 
      page = PRIME[genre] : 0;

    newStream === 'paramount' ? 
      page = PARAMOUNT[genre] : 0;

    navigation.reset({
      index: 0,
      routes: [{name: "Maf", params:{
        page:page,
        numGenre: route.params?.numGenre,
        ingredient: route.params?.ingredient, 
        age: route.params?.age,
        month: route.params?.month,
        name: route.params?.name,
        stream: newStream,
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