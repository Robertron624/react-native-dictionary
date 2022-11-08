import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default class Homescreen extends Component {

    constructor(props){
        super(props)
        this.state={
            searchString : '',
            meaningText: ''
        }
    }

    searchInDictionary = async () => {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchString}`

        let response = await fetch(url);
        let result = await response.json()
        let meaningText = result[0].meanings[0].definitions[0].definition;
        this.setState({meaningText: meaningText})
    }


  render() {
    return (
        <View>
            <View style={[styles.title]}>
                <Text
                style={[styles.titleText]}
                >
                    Tu diccionario!
                </Text>
            </View>
            <TextInput
                style={[styles.input]}
                onChangeText={(text) => {
                    this.setState({searchString: text})
                }}
                value={this.state.searchString}
                placeholder= "Busca tu palabra..."
            />
            <Button 
                style={[styles.button]}
                color="red"
                title='Buscar'
                onPress={this.searchInDictionary}
            />
            <View>
                <Text>{this.state.meaningText}</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12, 
        borderWidth: 1
    },

    button: {
        height: 40,
        margin: 12,
        width: "44px",
    },

    searchResultText: {
        marginHorizontal: 20
    },

    title:{
        alignItems: "center"
    },

    titleText: {
        fontWeight: "bold",
        fontSize: 44
    }
})