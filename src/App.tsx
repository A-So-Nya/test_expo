import React from 'react';
import { registerRootComponent } from 'expo';
import { store } from './store/store';
import { Provider } from 'react-redux';
import MainScreen from './MainScreen';

function App() {
    return (
        <Provider store={store}>
            <MainScreen />
        </Provider>
    );
}
registerRootComponent(App);
