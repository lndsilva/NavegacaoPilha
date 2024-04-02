import React from "react";
import { View,Text, Button } from "react-native";

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <Text>Details</Text>
        <Button 
            title="Vá para produtos"
            onPress={()=> props.navigation.navigate('Products')}
        />
        </View>
    )
}