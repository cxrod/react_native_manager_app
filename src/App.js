import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;
