import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Image, SafeAreaView, FlatList, ScrollView, Button} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import LayoutPengaturan from './pages/LayoutPengaturan';
import LayoutHome from './pages/LayoutHome';
import LayoutProfile from './pages/LayoutProfile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

export default class App extends Component {
  render(){
    return(
      <SafeAreaView style={{flex: 1}}>
        <AppTabNavigator/>
      </SafeAreaView>
    )
  }
}

class HomeScreen extends Component {

  render(){
    return (
      <View style={styles.container}>
        <LayoutHome/>  
      </View>
    );
  }
}

const Stack = createStackNavigator();

class PengaturanScreen extends Component {

  PengaturanScreenDua({ navigation }) {
    return (
      <View style={stylesPengaturan.containerBgPengaturan}>
      <View style={stylesPengaturan.containerPengaturan}>
        <View style={{marginTop: '7%', marginStart: '5%'}}>
          <Text style= {{alignItems: 'center'}}>
            e-Statement
          </Text>
        </View>
  
        <View style={{marginTop: '6%', width: '68%', alignItems: 'flex-end'}}>
          <Image
            style = {{width: 25, height: 25}}
            source = {require('./assets/ic_right_arrow_debt_card.png')}
          />
        </View>
      </View>
  
      <View style={stylesPengaturan.containerPengaturan}>
        <View style={{marginTop: '7%', marginStart: '5%'}}>
          <Text style= {{alignItems: 'center'}}>
            Pemeliharaan Rekening
          </Text>
        </View>
  
        <View style={{marginTop: '6%', width: '49%', alignItems: 'flex-end'}}>
          <Image
            style = {{width: 25, height: 25}}
            source = {require('./assets/ic_right_arrow_debt_card.png')}
          />
        </View>
      </View>
  
      <TouchableOpacity style={stylesPengaturan.containerPengaturan} onPress={() => navigation.navigate('Ubah Password')}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginTop: '6%', marginStart: '5%'}}>
          <Text style= {{alignItems: 'center'}}>
            Ubah Password
          </Text>
        </View>
  
        <View style={{marginTop: '5%', width: '67%', alignItems: 'flex-end'}}>
          <Image
            style = {{width: 25, height: 25}}
            source = {require('./assets/ic_right_arrow_debt_card.png')}
          />
        </View>
      </View>
      </TouchableOpacity>
  
      <View style={stylesPengaturan.containerPengaturan}>
        <View style={{marginTop: '7%', marginStart: '5%'}}>
          <Text style= {{alignItems: 'center'}}>
            Ubah MPIN
          </Text>
        </View>
  
        <View style={{marginTop: '6%', width: '69%', alignItems: 'flex-end'}}>
          <Image
            style = {{width: 25, height: 25}}
            source = {require('./assets/ic_right_arrow_debt_card.png')}
          />
        </View>
      </View>
  
      <View style={stylesPengaturan.containerPengaturan}>
        <View style={{marginTop: '7%', marginStart: '5%'}}>
          <Text style= {{alignItems: 'center'}}>
            Bantuan
          </Text>
        </View>
  
        <View style={{marginTop: '6%', width: '74%', alignItems: 'flex-end'}}>
          <Image
            style = {{width: 25, height: 25}}
            source = {require('./assets/ic_right_arrow_debt_card.png')}
          />
        </View>
      </View>
  
      <TouchableOpacity style={stylesPengaturan.containerPengaturan} onPress={() => navigation.navigate('Hubungi Kami')}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginTop: '6%', marginStart: '5%'}}>
          <Text style= {{alignItems: 'center'}}>
            Hubungi Kami
          </Text>
        </View>
  
        <View style={{marginTop: '5%', width: '67%', alignItems: 'flex-end'}}>
          <Image
            style = {{width: 25, height: 25}}
            source = {require('./assets/ic_right_arrow_debt_card.png')}
          />
        </View>
      </View>
      </TouchableOpacity>
  
      <View style={stylesPengaturan.containerPengaturan}>
        <View style={{marginTop: '7%', marginStart: '5%'}}>
          <Text style= {{alignItems: 'center'}}>
            Tentang UGM Mobile Banking
          </Text>
        </View>
  
        <View style={{marginTop: '6%', width: '37%', alignItems: 'flex-end'}}>
          <Image
            style = {{width: 25, height: 25}}
            source = {require('./assets/ic_right_arrow_debt_card.png')}
          />
        </View>
      </View>
  
    </View>
    );
  }
  
  state = {
    toggleBtn: true,
  }

  UbahPassword = () => {
  
    return (
      <View style={{height: "100%", width: '100%', backgroundColor: '#fff',}}>
        <View style={{margin: 8, marginTop: 10}}>
          <Text style= {{fontWeight: 'bold'}}>
            Password Lama
          </Text>

        <View style= {styles.textInputPassword}>
         <TextInput 
          activeOpacity = { 0.8 } 
          style = { styles.visibilityBtn }
          secureTextEntry = {this.state.toggleBtn}
        />
          <TouchableOpacity style={{height: 25, width: 25, marginStart: 300,}} onPress={() => { (this.state.toggleBtn === true) ? this.setState({toggleBtn: false}) : this.setState({toggleBtn: true}) 
            console.log(this.state.toggleBtn) }}>
              <Image style = { styles.btnImage }
                source = { ( this.state.toggleBtn === true ) ? require('./assets/invisible.png') : require('./assets/visibility.png') }  
              />
            </TouchableOpacity>
          </View>
        </View>
  
        <TouchableOpacity>
          <View
            style={{width: '100%', height: '22%', marginTop: 179, alignItems: 'center', justifyContent: 'center', backgroundColor: '#014A75'}}>
              <Text style={{color: '#fff', fontWeight: 'bold', size: 13}}>
                KIRIM SARAN
              </Text>
          </View>
          </TouchableOpacity>
      </View>
    );
  }

  HubungiKamiScreen() {
    return (
      <View style={{height: "100%", backgroundColor: '#E8E7E7',}}>
        <TextInput
          style={{width: '90%', height: '50%', margin: 20, backgroundColor: '#fff'}}
        />
  
      <TouchableOpacity>
        <View
          style={{width: '100%', height: '22%', marginTop: 179, alignItems: 'center', justifyContent: 'center', backgroundColor: '#014A75'}}>
            <Text style={{color: '#fff', fontWeight: 'bold', size: 13}}>
              KIRIM SARAN
            </Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Pengaturan">
          <Stack.Screen name="Pengaturan" component={this.PengaturanScreenDua} />
          <Stack.Screen name="Hubungi Kami" component={this.HubungiKamiScreen} />
          <Stack.Screen name="Ubah Password" component={this.UbahPassword} />
        </Stack.Navigator>
      </NavigationContainer>
      // <View>
      // <LayoutPengaturan/>  
      // </View>    
    );
  }
}

class ProfileScreen extends Component {
  render(){
    return (
      <View style={styles.containerGeneral}>
        <LayoutProfile/>
      </View>
    );
  }
}

class LogoutScreen extends Component {
  render(){
    return (
      <View style={styles.containerGeneral}>
        <Text>Logout Screen !</Text>
      </View>
    );
  }
}

const AppTabNavigator = createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen, 
         navigationOptions: {
           tabBarLabel: 'Beranda',
           tabBarIcon:({tintColor}) => (
             <Icon name= "ios-home" color= {tintColor} size= {24}/>
           )
         }},
  Pengaturan: {screen: PengaturanScreen, 
    navigationOptions: {
      tabBarLabel: 'Pengaturan',
      tabBarIcon:({tintColor}) => (
        <Icon name= "ios-settings" color= {tintColor} size= {24}/>
      )
    }},
    Profile: {screen: ProfileScreen, 
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon:({tintColor}) => (
          <Icon name= "ios-person" color= {tintColor} size= {24}/>
        )
    }},
    Logout: {screen: LogoutScreen, 
      navigationOptions: {
        tabBarLabel: 'Logout',
        tabBarIcon:({tintColor}) => (
          <Icon name= "ios-exit" color= {tintColor} size= {24}/>
        )
      }},

}, {
  activeTintColor: '#014A75',
  shifting: false
})

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
  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: "100%",
    padding: 7,
    justifyContent: 'center'
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    tintColor: '#c2c2c2'
  },
  textInputPassword: {
    width: '100%',
    backgroundColor: '#ededed',
    marginTop: 8,
    justifyContent: "center",
    borderRadius: 50,
    height: 40, 
    padding: 10
  },
});

const stylesPengaturan = StyleSheet.create({
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
    width: 375,
    height: 60,
  },
});
