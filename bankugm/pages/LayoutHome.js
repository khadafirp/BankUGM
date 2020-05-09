import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

export default class LayoutHome extends Component {

    state = {
        data: [
          {
              "image": require("../assets/ic_transfer.png"),
              "title": "Transfer"
          },
          {
              "image": require("../assets/ic_bayar.png"),
              "title": "Bayar"
          },
          {
              "image": require("../assets/ic_beli.png"),
              "title": "Beli"
          },
          {
              "image": require("../assets/ic_transaksi_tertunda.png"),
              "title": "Transaksi Tertunda"
          },
          {
              "image": require("../assets/ic_favorit.png"),
              "title": "Favoritku"
          },
          {
              "image": require("../assets/ic_status_transaksi.png"),
              "title": "Status Transaksi"
          },
          {
              "image": require("../assets/ic_kurs_bunga.png"),
              "title": "Kurs dan Suku Bunga"
          },
          {
              "image": require("../assets/ic_pinjaman.png"),
              "title": "Pinjaman"
          },
        ]
      }
    
      render(){
        return (
          <View style={styles.container}>
            
            <View style= {styles.card}>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: '3%', marginStart: '5%'}}>
                  <Image style= {{width: 160, height: 50}}
                    source = {require('../assets/logo_ugm.png')}
                  />
                </View>
    
                {/* <View style={{marginTop: '6%', marginStart: 3}}>
                  <Image style= {{width: 110, height: 40}}
                    source = {require('./assets/text_ugm_logo.png')}
                  />
                </View> */}
    
                <View style={{marginTop: '6%', marginStart: '40%'}}>
                  <Image
                    style= {{width: 32, height: 32}}
                    source = {require('../assets/ic_notification.png')}
                  />
                </View>
              </View>
    
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.titleOpeningText}>
                  Selamat Malam, Khadafi!
                </Text>
              </View>
    
              <View style= {{height: 180, width: '100%', marginTop: 20}}>
                  <View style= {{height: 180, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <FlatList
                    numColumns= {4}
                    data={this.state.data}
                    scrollEnabled= {false}
                    showsVerticalScrollIndicator={false}
                      renderItem={({item}) =>
                      <View style={{width: 90, alignItems: 'center'}}>
                        <View style= {styles.containerFiturCard}>
                          <Image style= {styles.imageFitur}  source={item.image}/>
                        </View>
                        <View style= {{ alignItems: 'center', width: 80, position: 'relative'}}>
                          <Text style= {styles.titleFitur}>{item.title}</Text>
                        </View>
                      </View>
                      }
                      keyExtractor={item => item.image}
                    />
                  </View>
              </View>
            </View>
    
            <View>
              <Text style={styles.titleText}>
                Kartu Debit
              </Text>
            </View>
    
            <View style={styles.containerBtnCard}>
              <View style={{marginTop: '5%', marginStart: '5%'}}>
                <Image
                  style= {{width: 70, height: 44}}
                  source = {require('../assets/ic_debt_card.png')}
                />
              </View>
    
              <View style={{marginTop: '5%', marginStart: '5%'}}>
                <Text style= {styles.textName}>
                  Khadafi Rohman Prihanda
                </Text>
    
                <Text style={styles.textCardNumber}>
                  234125158123
                </Text>
              </View>
    
              <View style={{marginTop: '8%', marginStart: '8%'}}>
                <Image
                  style = {{width: 25, height: 25}}
                  source = {require('../assets/ic_right_arrow_debt_card.png')}
                />
              </View>
            </View>
    
            <View>
              <Text style={styles.titleText}>
                Kartu Privilege
              </Text>
            </View>
    
            <View style={styles.containerBtnCard}>
            <View style={{marginTop: '5%', marginStart: '5%'}}>
                <Image
                  style= {{width: 70, height: 44}}
                  source = {require('../assets/ic_privilege_card.png')}
                />
              </View>
    
              <View style={{marginTop: '5%', marginStart: '5%'}}>
                <Text style= {styles.textName}>
                  Khadafi Rohman Prihanda
                </Text>
    
                <Text style={styles.textCardNumber}>
                  234125158123
                </Text>
              </View>
    
              <View style={{marginTop: '8%', marginStart: '8%'}}>
                <Image
                  style = {{width: 25, height: 25}}
                  source = {require('../assets/ic_right_arrow_privilege_card.png')}
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
  