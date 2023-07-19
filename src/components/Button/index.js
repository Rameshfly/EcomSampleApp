import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;