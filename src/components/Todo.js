import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity} from 'react-native';
class Todo extends Component {
  render() {
    return (
        <View style={styles.todoContainer}>
            <View style={styles.textContainer}>
                <Text>{this.props.data.text} </Text>
                <Text>{this.props.data.time}</Text>
            </View>
            <TouchableOpacity
             style={styles.delete}
             onPress={this.props.removeTodo}>
            <Text style={styles.deleteText}>D</Text>
            </TouchableOpacity>
            
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
    todoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        padding: 4,
        backgroundColor: '#EEE',
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    delete: {
        backgroundColor: '#E91E63',
        width: 50,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteText: {
    
    },
});
export default Todo;