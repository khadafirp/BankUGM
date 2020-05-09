import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

export default class LayoutPengaturan extends Component {

    render(){
      return (
        <View style={styles.containerBgPengaturan}>
          <View style={styles.containerPengaturan}>
            <View style={{marginTop: '7%', marginStart: '5%'}}>
              <Text style= {{alignItems: 'center'}}>
                e-Statement
              </Text>
            </View>
  
            <View style={{marginTop: '6%', width: '68%', alignItems: 'flex-end'}}>
              <Image
                style = {{width: 25, height: 25}}
                source = {require('../assets/ic_right_arrow_debt_card.png')}
              />
            </View>
          </View>
  
          <View style={styles.containerPengaturan}>
            <View style={{marginTop: '7%', marginStart: '5%'}}>
              <Text style= {{alignItems: 'center'}}>
                Pemeliharaan Rekening
              </Text>
            </View>
  
            <View style={{marginTop: '6%', width: '49%', alignItems: 'flex-end'}}>
              <Image
                style = {{width: 25, height: 25}}
                source = {require('../assets/ic_right_arrow_debt_card.png')}
              />
            </View>
          </View>
  
          <View style={styles.containerPengaturan}>
            <View style={{marginTop: '7%', marginStart: '5%'}}>
              <Text style= {{alignItems: 'center'}}>
                Ubah Password
              </Text>
            </View>
  
            <View style={{marginTop: '6%', width: '62%', alignItems: 'flex-end'}}>
              <Image
                style = {{width: 25, height: 25}}
                source = {require('../assets/ic_right_arrow_debt_card.png')}
              />
            </View>
          </View>
  
          <View style={styles.containerPengaturan}>
            <View style={{marginTop: '7%', marginStart: '5%'}}>
              <Text style= {{alignItems: 'center'}}>
                Ubah MPIN
              </Text>
            </View>
  
            <View style={{marginTop: '6%', width: '69%', alignItems: 'flex-end'}}>
              <Image
                style = {{width: 25, height: 25}}
                source = {require('../assets/ic_right_arrow_debt_card.png')}
              />
            </View>
          </View>
  
          <View style={styles.containerPengaturan}>
            <View style={{marginTop: '7%', marginStart: '5%'}}>
              <Text style= {{alignItems: 'center'}}>
                Bantuan
              </Text>
            </View>
  
            <View style={{marginTop: '6%', width: '74%', alignItems: 'flex-end'}}>
              <Image
                style = {{width: 25, height: 25}}
                source = {require('../assets/ic_right_arrow_debt_card.png')}
              />
            </View>
          </View>
  
          <View style={styles.containerPengaturan}>
            <View style={{marginTop: '7%', marginStart: '5%'}}>
              <Text style= {{alignItems: 'center'}}>
                Hubungi Kami
              </Text>
            </View>
  
            <View style={{marginTop: '6%', width: '64%', alignItems: 'flex-end'}}>
              <Image
                style = {{width: 25, height: 25}}
                source = {require('../assets/ic_right_arrow_debt_card.png')}
              />
            </View>
          </View>
  
          <View style={styles.containerPengaturan}>
            <View style={{marginTop: '7%', marginStart: '5%'}}>
              <Text style= {{alignItems: 'center'}}>
                Tentang UGM Mobile Banking
              </Text>
            </View>
  
            <View style={{marginTop: '6%', width: '37%', alignItems: 'flex-end'}}>
              <Image
                style = {{width: 25, height: 25}}
                source = {require('../assets/ic_right_arrow_debt_card.png')}
              />
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
      backgroundColor: '#E8E7E7',
    },
    card: {
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 15,
      position: 'relative',
      elevation: 5,
      backgroundColor: '#014A75',
      width: '100%',
      height: '52%',
    },
    image: {
      width: '45px',
      height: '46px',
      flexDirection: 'column', 
      marginTop: '8%', 
      marginBottom: '4%'
    },
    titleText: {
      marginTop: '5%',
      marginStart: 17,
      color: '#000',
      fontWeight: 'bold',
      fontSize: 13
    },
    containerBtnCard: {
      borderRadius: 4,
      marginTop: '3%',
      marginStart: 17,
      flexDirection: 'row',
      position: 'relative',
      elevation: 5,
      shadowOpacity: 0.1,
      backgroundColor: '#fff',
      width: '90%',
      height: '13%',
    },
    textName: {
      color: '#014A75'
    },
    textCardNumber: {
      marginTop: 8,
    },
    titleOpeningText: {
      marginTop: 4,
      color: "#fff",
      fontWeight: 'bold',
    },
    containerFiturCard: {
      borderRadius: 4,
      flexDirection: 'row',
      position: 'relative',
      elevation: 5,
      shadowOpacity: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      width: 50,
      height: 50,
    },
    imageFitur: {
      borderRadius: 4,
      width: 50,
      height: 50,
    },
    titleFitur: {
      flex: 1,
      fontSize: 11,
      textAlign: 'center',
      color: '#fff',
      marginTop: 6,
      marginBottom: 10,
    },
    containerBgPengaturan: {
      height: "100%",
      backgroundColor: '#E8E7E7',
    },
    containerPengaturan: {
      borderRadius: 4,
      marginTop: 1,
      flexDirection: 'row',
      position: 'relative',
      backgroundColor: '#fff',
      width: '100%',
      height: '11%',
    },
  });
  