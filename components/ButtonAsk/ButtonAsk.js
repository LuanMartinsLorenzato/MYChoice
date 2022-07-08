import React from 'react';
import { TextSubmit } from './style';
import { Alert } from 'react-native';

function ButtonAsk(props) { 

	const Popup = () => {
		if(props.name === "genre"){
    	Alert.alert("Ajuda",`Escolha um gênero de filme que desejar.\nPor favor escreva corretamente para a busca ser precisa!`)
		} else if(props.name === "ingredient"){
    	Alert.alert("Ajuda","Escolha um ingrediente, pode ser uma fruta!\nCuidado com a pimenta!!")
		}else if(props.name === "color"){
    	Alert.alert("Ajuda","Escolha uma cor, o limite está em 9(nove) caracteres")
		}else if(props.name === "month"){
    	Alert.alert("Ajuda","Atenção!!\nO mês deve ser escrito corretamente!\nEscolha um mês, o limite está em 9(nove) caracteres")
		}else if(props.name === "streaming"){
    	Alert.alert("Ajuda",
			`Atenção!!\nOs filmes são escolhidos de acordo com a plataforma que escolher\n
			Caso não utilize nenhuma clique em continuar que vamos buscar filmes em todas as plataformas.\n
			Caso não tenha encontrado o gênero que gostaria o app fará a buscar por filmes de comédia, se não houver interesse volte e escolha outro gênero!`)
		}else if(props.name === "maf"){
    	Alert.alert("Ajuda","As setas ao lado dos nomes servem para escolher outra opção caso a primeira não te agrade logo de cara!")
		}
	}
  return(
    <TextSubmit onPress={() => (Popup())}>
      ?
    </TextSubmit>
  )
}

export default ButtonAsk;