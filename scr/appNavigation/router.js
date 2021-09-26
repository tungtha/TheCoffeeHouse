import * as React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home';
import OrderScreen from '../screens/Order';
import ShopScreen from '../screens/Shop';
import SpecialScreen from '../screens/Special';
import OtherScreen from '../screens/Other';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Đặt hàng') {
              iconName = focused ? 'cafe' : 'cafe-outline';
            }
            else if (route.name === 'Cửa hàng') {
              iconName = focused ? 'today' : 'today-outline';
            }
            else if (route.name === 'Giỏ hàng') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            else if (route.name === 'Khác') {
              iconName = focused ? 'menu' : 'menu-outline';
            }


            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF7F24',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} options={{
          headerTitle: () =>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> <Icon name="person" size={22} color="#FF7F24" /> xin chào, Tùng  </Text>,
          headerRight: () =>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.Custom} >
                <Text>
                  <Icon name="document-text-outline" size={25} color="#FF7F24" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Custom1} >
                <Text>
                  <Icon name="notifications-outline" size={25} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
        }} />

        <Tab.Screen name="Đặt hàng" component={OrderScreen} options={{
          headerTitle: () =>

            <View style={{ flex: 1 }}>
              <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image
                  style={{ height: 30, width: 50 }}
                  source={{
                    uri: 'https://cdn.ntlogistics.vn/images/NTX/new_images/danh-gia-shipper-giao-hang-nhanh-qua-viec-dam-bao-an-toan-hang-hoa.jpg'
                  }} />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Giao hàng tận giường  <Icon name="chevron-down-outline" size={18} color="black" /></Text>
                  <Text>Các sản phẩm sẽ được giao nhanh nhất có thể</Text>
                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={styles.input1}
                  placeholder='Cà Phê Gói- Cà Phê Uống Liền '


                />
                <TouchableOpacity style={styles.icon}>
                  <Icon name="search-outline" size={20} color="black" />

                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <Icon name="heart-outline" size={20} color="black" />

                </TouchableOpacity>

              </View>
            </View>

          ,





          headerStyle: {
            height: 100
          },

        }} />
        <Tab.Screen name="Cửa hàng" component={ShopScreen} options={{
          headerTitle: () =>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }} >Cửa Hàng</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder='Tìm kiếm'
                />
                <TouchableOpacity style={{ marginTop: 10, marginRight: 5 }}>
                  <Icon name="search-outline" size={18} color="#D3D3D3" />
                </TouchableOpacity>
              </View>
            </View>,

          headerStyle: {
            height: 100
          },
          headerRight: () =>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <TouchableOpacity style={styles.Custom} >
                  <Text>
                    <Icon name="document-text-outline" size={25} color="#FF7F24" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Custom1} >
                  <Text>
                    <Icon name="notifications-outline" size={25} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 18 }}> <Icon name="map-outline" size={18} color="black" /> Bản đồ </Text>
              </TouchableOpacity>
            </View>
        }} />
        <Tab.Screen name="Giỏ hàng" component={SpecialScreen} options={{

          headerRight: () =>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.Custom} >
                <Text>
                  <Icon name="document-text-outline" size={25} color="#FF7F24" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Custom1} >
                <Text>
                  <Icon name="notifications-outline" size={25} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
        }} />
        <Tab.Screen name="Khác" component={OtherScreen} options={{
          headerRight: () =>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.Custom} >
                <Text>
                  <Icon name="document-text-outline" size={25} color="#FF7F24" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Custom1} >
                <View>
                  <Icon name="notifications-outline" size={25} color="black" />
                </View>
              </TouchableOpacity>
            </View>
        }} />
      </Tab.Navigator>
    </NavigationContainer >
  )
}

const styles = StyleSheet.create({
  Custom: {
    alignItems: 'center', marginRight: 10, color: 'white', borderWidth: 2.7, borderColor: '#F8F8FF',
    height: 40, width: 40, borderRadius: 50 / 2, justifyContent: 'center'
  },
  Custom1: {
    alignItems: 'center', marginRight: 15, borderWidth: 2.7, borderColor: '#F8F8FF',
    height: 40, width: 40, borderRadius: 50 / 2, justifyContent: 'center'
  },
  input: {
    height: 40, flexDirection: 'row',
    width: 250,
    borderWidth: 0.2,
    marginTop: 15, borderTopLeftRadius: 7, borderTopRightRadius: 7, borderBottomLeftRadius: 7, borderBottomRightRadius: 7
  },
  input1: {
    height: 35, backgroundColor: '#F5F5F5',
    width: 280,
    marginTop: 15, borderTopLeftRadius: 7, borderTopRightRadius: 7, borderBottomLeftRadius: 7, borderBottomRightRadius: 7
  },
  icon: {
    height: 35, backgroundColor: '#F5F5F5',
    width: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 10,
    marginTop: 15, borderTopLeftRadius: 7, borderTopRightRadius: 7, borderBottomLeftRadius: 7, borderBottomRightRadius: 7
  }


})