import React, { useState } from 'react'
import { Text, View,ScrollView,Button, TextInput,StyleSheet,SafeAreaView } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'



const P_OPTIONS = [
  {
    item: 'Solar power',
    id: 'SPP',
  },
  {
    item: 'Hydal power',
    id: 'HPP',
  },
  {
    item: 'Wind Power',
    id: 'WPP',
  },
  {
    item: 'Thermal power',
    id: 'TPP',
  },
  {
    item: 'Nuclear power',
    id: 'NPP',
  },
  {
    item: 'Geothermal Power',
    id: 'GPP',
  }
]
 
const S_OPTIONS = [
  {
    item: 'NESA',
    id: 'NSA',
  },
  {
    item: 'Assam',
    id: 'HPP',
  },
  {
    item: 'West Bengal',
    id: 'WEB',
  },
  {
    item: 'Odisha',
    id: 'ODS',
  },
  {
    item: 'Manipur',
    id: 'MNP',
  }
 
 

]
const D_OPTIONS = [
  {
    item: 'Rangareddy',
    id: 'RGD',
  },
  {
    item: 'Medchal',
    id: 'MDL',
  },
  {
    item: 'Medak',
    id: 'MDK',
  },
  {
    item: 'Karimnagar',
    id: 'KMR',
  },
  {
    item: 'Khammam',
    id: 'KMM',
  },
  {
    item: 'Warangle',
    id: 'WGN',
  }
 

]
const I_OPTIONS = [
  {
    item: 'Solar Street light',
    id: 'SSL',
  },
  {
    item: 'Inverter',
    id: 'IVR',
  },
  {
    item: 'Battery',
    id: 'BTY',
  },
  {
    item: 'Modules',
    id: 'MDL',
  },
  {
    item: 'Others',
    id: 'OTH',
  }
 

]
export default function Complaint({navigation}) {
      
  const pressComplaintHandler = () =>{
    navigation.navigate('ComplaintNext');
   }
 

  const [selectedProject, setselectedProject] = useState({})
  const [selectedState, setselectedState] = useState({})
  const [selectedDistrict, setselectedDistrict] = useState({})
  const [selectedItem, setselectedItem] = useState({})
  return (
  
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, paddingBottom: 20 }}>Window For Complaint</Text>
      </View>
      
      
      <Text style={styles.HeadText}>Select Project</Text>
      
      <SelectBox  style={styles.selectBox}
        
        label="Select single project"
        options={P_OPTIONS}
        value={selectedProject}
        onChange={onProjectChange()}
        hideInputFilter={false}
        
      />
      <Text style={styles.HeadText}>Select State</Text>
      <SelectBox style={styles.selectBox}
       
       label="Select single State"
       options={S_OPTIONS}
       value={selectedState}
       onChange={onStateChange()}
       hideInputFilter={false}
     />
      
      <Text style={styles.HeadText}>Select District</Text>
      <SelectBox  style={styles.selectBox}
       
        label="Select single District"
        options={D_OPTIONS}
        value={selectedDistrict}
        onChange={onDistrictChange()}
        hideInputFilter={false}
      />
      <Text style={styles.HeadText}>Select Faulty Item</Text>
      
        <SelectBox  style={styles.selectBox}
       
       label="Select single Item"
       options={I_OPTIONS}
       value={selectedItem}
       onChange={onItemChange()}
       hideInputFilter={false}
     />
      
      <Button title='Next' onPress={pressComplaintHandler}/>
     
    </View>
    
  )
  function onProjectChange() {
    return (val) => setselectedProject(val)
  }
  function onDistrictChange() {
    return (val) => setselectedDistrict(val)
  }
  function onStateChange() {
    return (val) => setselectedState(val)
  }
  function onItemChange() {
    return (val) => setselectedItem(val)
  }
}


const styles=StyleSheet.create({
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
    paddingBottom: 8 ,
    backgroundColor:'yellow' ,
    margin:10 ,
    

},
dropDown:{
   position:'relative',
   flex:1
}
});
