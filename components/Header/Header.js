import React from 'react';
import { StyleSheet } from 'react-native'
import { Title } from './style';

function Header() {
    return(
        <Title  style={styles.Title}>MYChoice</Title>
    )   //style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}
}

const styles = StyleSheet.create({
    Title:{
      fontFamily: (Platform.OS === 'ios') ? 'Palatino' : 'serif',
    },
  });

export default Header;