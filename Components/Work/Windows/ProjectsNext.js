import React, { useState, Component } from 'react'
import { Text, View,Button, TextInput,StyleSheet, Alert } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import DatePicker from 'react-native-datepicker' ;

export default function ProjectsNext(){
const [date, setDate] = useState(new Date())

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
     <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2029"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

<View style={{alignSelf:'center',padding:20}}>
      <Button title='Generate Ticket'   onPress={()=>Alert.alert('ticket generated I-pName-dd-yyyy-serial')}/>
      </View>
      
      
    </View>
  );

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

},
datePickerStyle: {
  width: 200,
  marginTop: 20,
},
});
