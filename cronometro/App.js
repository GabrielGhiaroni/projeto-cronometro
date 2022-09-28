import React, {
  Component
} from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      botao: 'START',
      ultimoTempo: null
    };


    //valor que começa o timer
    this.valorTimer = null;

    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  };

  start() {
    if(this.valorTimer !== null) {
      clearInterval(this.valorTimer);
      this.valorTimer = null;
      this.setState({botao: 'START'});
    } else {
      this.valorTimer = setInterval(() => {
        this.setState({timer: this.state.timer + 0.1});
      }, 100);
      this.setState({botao: 'PAUSE'});
    };
  };

  clear() {
    if(this.valorTimer !== null) {
      clearInterval(this.valorTimer);
      this.valorTimer = null;
    }

    this.setState({
      timer: 0,
      botao: 'START',
      ultimoTempo: this.state.timer
    })
  };

  render() {
    return ( 
      <View style={styles.container}>

      <Text style={styles.cronometroTexto}>CRONÔMETRO</Text>

      <Image
      source={require('./src/cronometro.png')}
      style= {styles.img}
      />

      <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto} onPress={this.start}>{this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto} onPress={this.clear}>CLEAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ultimoTempo}>
            <Text style={styles.textoTempo}>
              {this.state.ultimoTempo > 0 ? 'Último tempo: ' + this.state.ultimoTempo.toFixed(2) + 's' : ''}
              </Text>
        </View>

      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A2AD91"
  },
  img: {
    width: 250,
    height: 300
  },
  timer: {
    marginTop: -165,
    color: 'white',
    fontSize: 60,
    fontWeight: "bold"
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#586445",
    height: 40,
    marginTop: 50,
    marginLeft: 14,
    marginRight: 14,
    borderRadius: 9,
  },
  btnTexto: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  cronometroTexto: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#586445"
  },
  ultimoTempo: {
    marginTop: 100
  },
  textoTempo: {
    fontStyle: "italic",
    fontSize: 25,
    color: "#FFFF"
  }
});

export default App;