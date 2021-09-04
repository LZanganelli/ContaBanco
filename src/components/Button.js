import React from "react";
import { TouchableOpacity, Text } from "react-native";
import colors from '../colors.js'


export default function Button({label, onClick, bgColor}) {

    return(
        <TouchableOpacity
            style={{padding: 5, backgroundColor: `${bgColor}`, marginVertical: 5, borderRadius: 20, padding: 10,}}
            onPress={onClick}
        >
            <Text style={{textAlign: 'center', color: colors.white}}> {label} </Text>
        </TouchableOpacity>
    )
}