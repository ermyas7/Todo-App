import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Todo from './Todo';
class Main extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>-TODO APP-</Text>
            </View>
            <ScrollView style={styles.main}>
                <Todo/> 
            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                 placeholder="Add Todo"
                  placeholderTextColor="#fff"
                  style={styles.textInput} />
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    header: {
        height: 65,
        backgroundColor: '#E91E63',
        borderStyle: 'solid',
        borderBottomWidth: 6,
        borderColor: '#999',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    headerText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600', 
    },
    main: {

    },
    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#999',
        flexDirection: 'row',
        height: 50,
        width: '100%',
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    },
    addButton: {
        position: 'absolute',
        right: 20,
        bottom: 70,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E91E63',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 30
    }

})


export default Main;
