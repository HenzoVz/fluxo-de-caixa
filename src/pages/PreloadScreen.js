import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import firebase from '../FirebaseConnection';

export default class Preload extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.props.navigation.navigate('Interna');;
            } 
            else {
                this.props.navigation.navigate('Home');
            }
        });

    }

    render() {
        return (
            <ImageBackground source={require('../assets/fundo.jpg')} style={styles.bg}> 
                <View style={styles.container}>
                    <Text style={styles.title}>Fluxo de Caixa</Text>
                </View>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    bg: {
        flex:1,
        width:null
    },
    title: {
        fontSize:30,
        backgroundColor: 'transparent'
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});