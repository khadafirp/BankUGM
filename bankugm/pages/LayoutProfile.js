import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Image, SafeAreaView, FlatList, ScrollView, Picker } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import RNPickerSelect from 'react-native-picker-select';
import { Assets } from 'react-navigation-stack';

export default class LayoutProfile extends Component {

  state = {
    selectedValue: "",
    spinnerShow: true
  }

      render(){

        return (
          <View style={styles.container}>            
            <View style= {styles.card}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.titleOpeningText}>
                  Detail Akun
                </Text>
              </View>

              <View style={styles.cardImage}>
                <Image
                  style= {{width: 50, height: 50,}}
                  source= {require('../assets/ic_user.png')}
                  color= {'#014A75'}
                />
              </View>    

              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.titleOpeningText}>
                  Nasyith Majidi
                </Text>
              </View>
            </View>

            <View>
              <Text style={{fontWeight: 'bold', color: '#000', marginStart: 20, marginTop: 15, fontSize: 15}}>
                DETAIL AKUN
              </Text>

              <View style= {styles.cardDetailAkun}>
                <Text style= {styles.title}>
                  Email
                </Text>

                <Text style={styles.textIsi}>
                  nassyithmajidi@gmail.com
                </Text>

                <View style= {{height: 1, marginStart: 17, marginEnd: 17, marginTop: 6, backgroundColor: '#BDBDBD'}}/>

                <Text style= {styles.title}>
                  User ID
                </Text>

                <Text style={styles.textIsi}>
                  081329421231
                </Text>

                <View style= {{height: 1, marginStart: 17, marginEnd: 17, marginTop: 6, backgroundColor: '#BDBDBD'}}/>

                <Text style= {styles.title}>
                  Nama Lengkap
                </Text>

                <Text style={styles.textIsi}>
                  NASYITH MAJIDI
                </Text>

                <View style= {{height: 1, marginStart: 17, marginEnd: 17, marginTop: 6, backgroundColor: '#BDBDBD'}}/>

                <Text style= {styles.title}>
                  Email
                </Text>

                {/* <TouchableOpacity onPress={() => { (this.state.spinnerShow === true) ? this.setState({spinnerShow: false}) : this.setState({spinnerShow : true})}}>
                  <Text 
                    style={styles.textIsi}>
                      {(this.state.spinnerShow === true) ? "Pilih Bahasa" : this.state.selectedValue}
                  </Text>
                </TouchableOpacity>  */}

                <View style={{marginStart: 17, marginTop: 8}}>
                <RNPickerSelect
                      selectedValue={this.state.selectedValue}
                      onValueChange={(itemValue, itemIndex) => this.setState({selectedValue : itemValue})}
                      items={[
                        { label: 'English', value: 'English' },
                        { label: 'Indonesia', value: 'Indonesia' },
                    ]}
                />
                </View>
                <View style= {{height: 1, marginStart: 17, marginEnd: 17, marginTop: 6, backgroundColor: '#BDBDBD'}}/>

                {/* {
                  (this.state.spinnerShow) ?
                    <View></View>

                  :

                    <RNPickerSelect
                      selectedValue={this.state.selectedValue}
                      onValueChange={(itemValue, itemIndex) => this.setState({selectedValue : itemValue})}
                      items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />
                } */}
              </View>
            </View>    
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    containerGeneral: {
      flex: 1,
      backgroundColor: '#E8E7E7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#E8E7E7',
    },
    card: {
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 15,
      position: 'relative',
      elevation: 5,
      backgroundColor: '#014A75',
      width: '100%',
      height: '35%',
      alignItems: 'center',
    },
    cardImage: {
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#fff',
      width: '22%',
      height: '40%',
      borderRadius: 70,
      marginTop: 20,
    },
    cardDetailAkun: {
      width: '100%',
      height: '62%',
      backgroundColor: '#fff',
      marginTop: 15,
    },
    image: {
      width: '45px',
      height: '46px',
      flexDirection: 'column', 
      marginTop: '8%', 
      marginBottom: '4%'
    },
    titleOpeningText: {
      marginTop: 20,
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 18,
    },
    title: {
      color: '#000',
      fontWeight: 'bold',
      marginStart: 17,
      marginTop: 13,
    },
    textIsi: {
      color: '#000',
      marginStart: 17,
      marginTop: 7,
    }
  });
  