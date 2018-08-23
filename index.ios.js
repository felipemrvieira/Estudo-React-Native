import React from 'react';
import { Text, AppRegistry, View, Alert, Button, Image, StyleSheet } from 'react-native';

const generatePhrase = () => {
  
  const mensagens = [
    "Não deixe que a tristeza do passado e o medo do futuro acabe com a felicidade do momento",
    "O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz.",
    "Cada segundo é tempo para mudar tudo para sempre.",
    "Não exijas dos outros qualidades que ainda não possuem.",
    "A felicidade não existe, o que existe são momentos felizes."
  ];
  const totalDeMensagens = mensagens.length;
  let num = Math.random() * totalDeMensagens;
  num = Math.floor(num);
  
  let mensagem = mensagens[num];

  Alert.alert(
    'Mensagem do dia',
    mensagem
  );
};

const App = () => {
  return (

    <View style={styles.container}>
      <Image source={require('./img/logo.png')} />
      <Button
        onPress={generatePhrase}
        title="Gerar Frase"
        color="#841584"
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('app2', () => App);
