import React from 'react'
import {View , Text, Image} from 'react-native'
import styles from "./style" 

export default function pictures(props) {

    const getPicture = async () => {

        const data = props.route.params.image ;
    }

    return (
       <View  style={styles.container}>
        <Image source={{ uri: props.image }} style={styles.image} />
       </View>
    )
}
