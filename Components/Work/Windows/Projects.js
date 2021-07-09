import React, { useState } from 'react'
import { Text, View,ScrollView,Button} from 'react-native'
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
export default function Projects({navigation}) {

  const pressProjectHandler = () =>{
   navigation.navigate('ProjectNext');
  }

  const [selectedProject, setselectedProject] = useState({})
  const [selectedState, setselectedState] = useState({})
  const [selectedDistrict, setselectedDistrict] = useState({})
  return (  
  <ScrollView >
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, paddingBottom: 20 }}>Window For Installation/Maintainence</Text>
      </View>
      
      <Text style={{ fontSize: 15, paddingBottom: 10 ,backgroundColor:'yellow' ,margin:10 ,alignSelf:'flex-start'}}>Select Project</Text>
      
      <SelectBox 
        
        label="Select single project"
        options={P_OPTIONS}
        value={selectedProject}
        onChange={onProjectChange()}
        hideInputFilter={false}
        
        
      />
     
      <Text style={{ fontSize: 15, paddingBottom: 10 ,backgroundColor:'yellow' ,margin:10 ,alignSelf:'flex-start'}}>Select State</Text>
      
      <SelectBox
       
        label="Select single State"
        options={S_OPTIONS}
        value={selectedState}
        onChange={onStateChange()}
        hideInputFilter={false}
      />
      
      <Text style={{ fontSize: 15, paddingBottom: 10 ,backgroundColor:'yellow' ,margin:10 ,alignSelf:'flex-start'}}>Select District</Text>
      <SelectBox
       
        label="Select single District"
        options={D_OPTIONS}
        value={selectedDistrict}
        onChange={onDistrictChange()}
        hideInputFilter={false}
      />
    
      <Button title='Next' onPress={pressProjectHandler}/>
    
    </View>
    </ScrollView>
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
}

