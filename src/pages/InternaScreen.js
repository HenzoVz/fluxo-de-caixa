import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HistoricoItem from './HistoricoItem';
import firebase from '../FirebaseConnection';


export default class Interna extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saldo: 0,
            historico: []
        };

        this.addReceita = this.addReceita.bind(this);
        this.addDespesa = this.addDespesa.bind(this);
        this.sair = this.sair.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
                    let state = this.state;
                    state.saldo = snapshot.val().saldo;
                    this.setState(state);
                })
            } 
            else {
                this.props.navigation.navigate('Home');
            }
        });
    }

    addReceita() {

    }

    addDespesa() {

    }

    sair() {
        firebase.auth().signOut()
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <View style={StyleSheet.saldoArea}>
                    <Text style={StyleSheet.saldo}> Saldo: R$ {this.state.saldo}</Text>
                </View>
                <FlatList 
                    style={StyleSheet.historico}
                    data={this.state.historico}
                    renderItem={(item) => <HistoricoItem data={item} />} />
                <View style={StyleSheet.botoesArea}>
                <TouchableHighlight underlayColor="#CCC" style={styles.button} onPress={this.addReceita}>
                    <Text style={styles.btnText}>Receita</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#CCC" style={styles.button} onPress={this.addDespesa}>
                    <Text style={styles.btnText}>Despesa</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#CCC" style={styles.button} onPress={this.sair}>
                    <Text style={styles.btnText}>Sair</Text>
                </TouchableHighlight>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    saldoArea: {
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#DDDDDD'
    },
    saldo: {
        textAlign: "center",
        fontSize: 30
    },
    botoesArea: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#DDDDDD',
        flexDirection: 'row',
        justifyContent: "space-around"
    }, 
    button: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        justifyContent: 'center'
    },
    btnText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 20
    }
})