import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBYY_H3lD2zIzvbQgjYDwM5kb6c05RNaEM',
            authDomain: 'react-native-manager-d43c2.firebaseapp.com',
            databaseURL: 'https://react-native-manager-d43c2.firebaseio.com',
            projectId: 'react-native-manager-d43c2',
            storageBucket: 'react-native-manager-d43c2.appspot.com',
            messagingSenderId: '993331661489'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)} >
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
