import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

class Home extends React.Component {
    state = {
        name: '',
    };

    render(){
        return (
            <View>
                <Text style={styles.title}>
                    输入你的名字 :
                </Text>
                <TextInput 
                    style={styles.nameInput} 
                    placeholder='李白'
                    onChangeText = {(text) => {
                        this.setState({
                            name: text,
                        });
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity 
                    onPress={() => {
                        //navigate to the second screen, and to pass it
                        Actions.chat({
                            name: this.state.name,
                        });
                    }}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 25
    },
    nameInput: {
        padding: 5,
        height: 50,
        margin: 20,
        fontSize: 25
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }
});
    

export default Home;