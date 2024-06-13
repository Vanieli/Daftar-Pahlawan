import React, {useState} from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';
import cTheme from '../cTheme.json';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

export function Input(props) {
  // const [pressable, setPressable] = useState(false)

  return(
    <View style={input.container}>
        <View style={input.labelInput}>
            <View style={{ backgroundColor: cTheme.bgColor,  position: 'absolute', height: 10, width: 10, left: -10, }}><Text></Text></View>
            <View style={{ backgroundColor: cTheme.bgColor,  position: 'absolute', height: 10, width: 10, right: -10, }}><Text></Text></View>
            <Text style={input.txtTitle}>{props.ttl}</Text>
        </View>
        <TextInput
        style={input.txtForm}
        secureTextEntry={props.secure}
        onPressIn={props.onPress}
        keyboardType={props.keyboardType}
        />
    </View>
  );
}

const input = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'stretch',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 45,
    borderWidth: 1.2,
    borderColor: cTheme.lightColor,
  },
  labelInput: {
    // flex: 1,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 35,
    top: '-23%',
    flexDirection: 'row',
  },
  txtForm: {
    width: '95%',
    height: '90%',
    paddingHorizontal: 20,
    color: cTheme.lightColor
  },
  txtTitle: {
    color: `${cTheme.themeColor}b0`, 
    backgroundColor: cTheme.bgColor,
    letterSpacing: 1.8,
    fontSize: 10
  }
});

export function Button(props) {
  return(
    <View style={button.container}>
        <TouchableOpacity style={button.sButton} onPress={props.onPress} >
            <Text style={button.txtTitle}>{props.children}</Text>
        </TouchableOpacity>
    </View>
  );
}

const button = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 40,
    margin: 10,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: cTheme.themeColor,
    backgroundColor: cTheme.themeColor,
    overflow: 'hidden',
    zIndex: 0
  },
  sButton: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 13
  }
}); 
  
export function CheckBox (props) { 
    const iconName = props.isChecked ? 
        "checkbox-marked" : "checkbox-blank-outline"; 
  
    return ( 
        <View style={chkBox.container}> 
            <Pressable onPress={props.onPress} style = {{flexDirection: 'row', gap: 8}}> 
                <MaterialCommunityIcons  
                    name={iconName} size={24} color={cTheme.lightColor} /> 
                    <Text style={chkBox.title}>{props.title}</Text> 
            </Pressable> 
        </View> 
    ); 
}; 
// style={styles.label}
const chkBox = StyleSheet.create({ 
    container: { 
        // justifyContent: "flex-start", 
        // alignItems: "center", 
        flexDirection: "row", 
        // width: 150, 
        // marginTop: 5, 
        // marginHorizontal: 5, 
        transform: [{scale: 0.85}],
        gap: 8
    }, 
    title: { 
        fontSize: 16, 
        color: "#000", 
        marginLeft: 5, 
        // fontWeight: '', 
        letterSpacing: 1.5,
        color: cTheme.lightColor
    }, 
});

