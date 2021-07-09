import React, { useState } from 'react'
import { Text, View,ScrollView,Button, TextInput,StyleSheet,SafeAreaView,Alert } from 'react-native'

import DateTimePickerModal from 'react-native-modal-datetime-picker'

export default function ComplaintNext() {
   
 
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
   <ScrollView>
    <SafeAreaView style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, paddingBottom: 20 }}>Window For Complaint</Text>
      </View>
      <View>
      <Text style={{ fontSize: 15, paddingBottom: 10 ,flex:1 }}>Item serial number</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 ,flex:1 }}>Faulty details</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 ,flex:1 }}>Site / Building Name</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 ,flex:1 }}>Block</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10 ,flex:1 }}>Village</Text>
      <TextInput style={styles.text} />
      <Text style={{ fontSize: 15, paddingBottom: 10,flex:1  }}>Date to visit site(DD/MM/YYYY)</Text>
      <View>

      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        
      />
      
      </View>
</View>
     
    

      <View style={styles.buttons}>

      <Button title='Generate Ticket' onPress={()=>Alert.alert('ticket generated C-pName-dd-yyyy-serial')}/>
      </View>
        
      </SafeAreaView>
    
      </ScrollView>
  )
  }

const styles=StyleSheet.create({
  buttons:{
    bottom:-30,
    position:'relative',
    flex:1
  },
 selectBox:{
  flex:1,
  position:'relative'
 },
text:{
  flex:1,
  borderWidth:0.8,
  borderColor:'#777',
  padding:4,
  margin:5,
  width:300
},
HeadText:{
   fontSize: 15,
    paddingBottom: 10 ,
    backgroundColor:'yellow' ,
    margin:10 ,
    flex:1
},
dropDown:{
   position:'relative',
   flex:1
}
});
