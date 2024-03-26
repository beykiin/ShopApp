import React from 'react';
import { View, TextInput } from 'react-native'; 
import styles from './SearchBarPage.style'

const SearchBarPage = () => {


    const [ number, onChageNumber ] = React.useState('');

        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChageNumber}
                    value={number}
                    placeholder='Search...'
                    keyboardType='text'
                />
            </View>
        )

};


export default SearchBarPage