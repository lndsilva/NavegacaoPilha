import React from "react";
import { View,Text, Button } from "react-native";

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <Text>Products</Text>
        <Button 
            title="Vá para about"
            onPress={()=> props.navigation.navigate('About')}
        />
        </View>
    )
}