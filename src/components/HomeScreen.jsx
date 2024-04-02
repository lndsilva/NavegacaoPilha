import React from "react";
import { View,Text, Button } from "react-native";

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <Text>Home</Text>
        <Button 
            title="Vá para details"
            onPress={()=> props.navigation.navigate('Details')}
        />
        </View>
    )
}