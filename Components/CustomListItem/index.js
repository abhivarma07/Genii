import React from 'react'
import { View, Text } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements' ;

console.ignoredYellowBox = ['Setting a timer'];

const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar
            rounded
            source={
                require("../../assets/profile.png")
            }
            />
        </ListItem>
    )
}

export default CustomListItem
