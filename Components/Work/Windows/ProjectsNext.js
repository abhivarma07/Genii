import React, { useState } from 'react'
import { Text, View,Button, TextInput,StyleSheet, Alert } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
export default function ProjectsNext() {
  
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    
    
    hideDatePicker();
  };
  
 
  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, paddingBottom: 20 }}>Window For Installation/Maintainence</Text>
      </View>

      <Text style={{ fontSize: 15, paddingBottom: 10 }}>Site / Building Name</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 }}>Block</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 }}>Village</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 }}>Work Details(max- 100 characters)</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 }}>Date to visit site(DD/MM/YYYY)</Text>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        
      />

      
<View style={{alignSelf:'center',padding:20}}>
      <Button title='Generate Ticket'   onPress={()=>Alert.alert('ticket generated I-pName-dd-yyyy-serial')}/>
      </View>
      
      
    </View>
  )

}


const styles=StyleSheet.create({
  buttons:{
    bottom:-10,
    position:'relative',
    flex:1
  },
text:{
    
  borderWidth:0.8,
  borderColor:'#777',
  padding:4,
  margin:5,
  width:300

}
});
