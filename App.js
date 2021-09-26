/**
 Name: Poojan Patel
 Student ID- 301228811
 Course: MAPD 712
 Assignment-1: BMI Calculator
 */


import React, { Component } from 'react';
import {StyleSheet, Picker, Text, Button, TextInput, View} from 'react-native';

/*Importing required places*/
class Inputs extends Component{

  /* Adding default values in states */
  state={
    height:0,
    weight:0,
    system:'',
    answer:0,
    statement:'',
  }

  handleHeight=(int) => {
    this.setState({height:int})
  }
  handleWeight=(int) => {
    this.setState({weight:int})
  }
  handleAnswer=(int) =>{
    this.setState({answer:int})
  }
  /* Method for button */
  onPressButton= (height,weight,system) =>{

    /* Check the measurement system selected and calculate accordingly */
    if(this.state.system == 0 || this.state.system == 'si'){

      /* Conversion of inputs*/
      var meters = parseInt(height)*0.0254
      var kg = parseInt(weight)/2.2046
      var ans = kg/Math.pow(meters,2)

    }
    else{
      var meters = parseInt(height)/100
      var ans = parseInt(weight)/Math.pow(meters,2)

    }
    /* Displaying result */
    this.setState({answer:ans})

    /* Adding analysis statement */
    if(ans<18.5){
      this.setState({statement:'Underweight'})
    }
    else if (ans>= 18.5 && ans<=24.9 ){
      this.setState({statement:'Normal Weight'})
    }
    else if (ans>= 25 && ans<=29.9 ){
      this.setState({statement:'OverWeight'})
    }
    else{
      this.setState({statement:'Obesity'})
    }
}

  render(){
  return (
    <View style={styles.container}>
      <Text>BMI Calculator</Text>

      <View style={styles.alignment}>

        <Text style={styles.texts}>Height:</Text>
        <TextInput keyboardType='numeric'
          style={styles.input}
          onChangeText= {this.handleHeight}/>

        <Text style={styles.texts}>Weight:</Text>
        <TextInput keyboardType='numeric'
          style={styles.input}
          onChangeText= {this.handleWeight}/>


        <Picker
          selectedValue = {this.state.system}
          onValueChange = {(itemValue) => this.setState({system:itemValue})}>
        <Picker.Item label = 'SI' value="si"/>
        <Picker.Item label = 'Metric' value="metric"/>
        </Picker>
      </View>


      <Button
        title='Calculate BMI'
        onPress={() => this.onPressButton(this.state.height,this.state.weight,this.state.system)}
        />
      <View style={styles.alignment}>
          <Text style={styles.texts}> Your BMI: </Text>
          <Text style={styles.texts}>{this.state.answer}</Text>
          <Text style={styles.texts}>Analysis: </Text>
          <Text style={styles.texts}>{this.state.statement}</Text>
      </View>

      <View style={styles.cont}>
        <Text style={styles.info}> BMI Categories:</Text>
        <Text style={styles.info}> Underweight less than 18.5</Text>
        <Text style={styles.info}> Normal weight = 18.5–24.9</Text>
        <Text style={styles.info}> Overweight = 25–29.9</Text>
        <Text style={styles.info}> Obesity = BMI of 30 or greater</Text>
      </View>
</View>
  );
  }
}
export default Inputs



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 140,
    fontSize: 46,
  },
  texts:{
    marginTop: 15,
    marginRight:100,
    justifyContent:'flex-start',
  },
  alignment:{
    flexDirection:'column',
  },

  input:{
    borderWidth:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  cont:{
    marginTop:70,
  },
  info:{
    fontSize:15,
    alignItems:'center'
  }
})
