import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import moment from 'moment';
import Todo from './Todo';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            todo: ''
        };
    }

    addTodo(){
        const todos = this.state.todos;
        if(this.state.todo){
            const date = moment().valueOf();
            const time = moment(date).format('MMM hh:mm a');
            const newTodo = {
                time: time,
                text: this.state.todo
            }
            todos.push(newTodo);
            this.setState({todos})
            this.setState({todo: ''});
        }
    }
    removeTodo(key){
        const todos = this.state.todos.filter((todo, index) => index !==key);
        this.setState({todos});
    }
  render() {
    const todos = this.state.todos.map((val, key) => {
        return <Todo key={key} data={val} removeTodo={this.removeTodo.bind(this, key)}/>
    })
    console.log(todos);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>-TODO APP-</Text>
            </View>
            <ScrollView style={styles.main}> 
                {todos}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                 placeholder="Add Todo"
                  placeholderTextColor="#fff"
                  style={styles.textInput}
                  onChangeText={(todo) => this.setState({todo})}
                  value={this.state.todo}
                  underlineColorAndroid="transparent"
                  onEndEditing={this.addTodo.bind(this)}/>
            </View>
            <TouchableOpacity 
            style={styles.addButton}
            onPress={this.addTodo.bind(this)}>
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
