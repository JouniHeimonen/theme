import { Text, View } from 'react-native';
import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import Styles from '../Styles'
import { useTheme } from '../context/useTheme';
import ThemeSwitchButton from '../components/ThemeSwtichButton';


export default function Settings() {
    const {isDarkMode} = useTheme()
    console.log(isDarkMode)
    return (
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
            <ThemeSwitchButton />
        </View>
    )
}

