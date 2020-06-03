import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import firebase from '../FirebaseConnection';

export default class Cadastrar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.cadastrar = this.cadastrar.bind(this);

        firebase.auth().signOut();
    }

    cadastrar() {
        if(this.state.email != '' && this.state.senha != '') {
            firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    let uid = user.uid
                    firebase.database().ref('users').child(uid).set({
                        saldo: 0
                    });

                    this.props.navigation.navigate('Interna');
                }
            });

            firebase.auth().createUserWithEmailAndPassword(
                this.state.email,
                this.state.senha
            ).catch((error) => {
                alert(error.code);
            });
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >E-mail</Text>
                <TextInput  placeholder="Digite seu email" style={styles.input} onChangeText={email => this.setState({email})} />

                <Text style={styles.text} >Senha</Text>
                <TextInput  placeholder="Digite sua senha" secureTextEntry={true} style={styles.input} onChangeText={senha => this.setState({senha})} />

                <View style={styles.container2}>
                <TouchableHighlight underlayColor="#CCC" style={styles.button} onPress={this.cadastrar}>
                    <Text style={styles.btnText}>Cadastrar</Text>
                </TouchableHighlight>
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({

    text: {
        fontSize: 20
    },
    container: {
        margin:10, 
        justifyContent: "center",
    },
    input: {
        height: 40,
        backgroundColor: '#CCC',
        padding: 5,
        marginBottom: 10,
        fontSize: 20
    },
    button: {
        backgroundColor: '#ccc',
        margin: 10,
        height: 40,
        width: 200,
        borderRadius: 10,
        justifyContent: 'center'
    },
    btnText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 20
    }, 
    container2: {
        margin:10, 
        justifyContent: "center",
        alignItems: 'center',
    },
});