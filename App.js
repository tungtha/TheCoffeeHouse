import React from 'react'
import { View, button, Touchable, Text, FlatList, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
]
export default function Cart() {

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 5 }}>
      <View>

        <Image
          style={{ height: 150, width: '100%' }}
          source={{
            uri: 'https://lh3.googleusercontent.com/proxy/tecWr6A1m6cFWvkcDHMYopITyFmQgzK7ukwRPCwhdipH-7u9V5A1oF0bm4C9OZdsJPx9CU-Ioao2DR-f70MS63zPgXUJLiX0Klz0zL_eZr-EGvndRrHf-fHXjvk--Ks4uw8OAmZ17MEHJIDQPsV0R2t5RMqk9U3K4YmeDtoojx8',
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold' }}>Textured Cotton Skort </Text>
          <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold' }}>$19.99</Text>
        </View>
      </View>
      <View style={styles.lineStyle} />
      <View>
        <Text style={{ fontSize: 20, marginTop: 25 }}> Color: black  </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{
          alignItems: 'center', marginTop: 10, borderWidth: 3,
          backgroundColor: 'white', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
        }}>
          <View style={{ backgroundColor: 'black', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
        </View>

        <View style={{
          alignItems: 'center', marginTop: 10, marginLeft: 5,
          backgroundColor: 'yellow', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center', borderColor: 'white',
        }}>
        </View>

      </View>
      <Text style={{ fontSize: 20, marginTop: 20 }}>Size:</Text>
      <View style={{
        flexDirection: 'row', marginTop: 10,
        justifyContent: 'space-around'
      }}>
        <Text style={{ height: 35, width: 55, borderWidth: 0.5, fontSize: 17, alignItems: 'center', textAlign: 'center' }}>XL</Text>
        <Text style={{ height: 35, width: 55, borderWidth: 0.5, fontSize: 17, alignItems: 'center', textAlign: 'center' }}>L</Text>
        <Text style={{ height: 35, width: 55, borderWidth: 2.5, borderColor: 'yellow', fontSize: 17, alignItems: 'center', textAlign: 'center' }}>M</Text>
        <Text style={{ height: 35, width: 55, borderWidth: 0.5, fontSize: 17, alignItems: 'center', textAlign: 'center' }}>S</Text>
        <Text style={{ height: 35, width: 55, borderWidth: 0.5, fontSize: 17, alignItems: 'center', textAlign: 'center' }}>XS</Text>
      </View>
      <TouchableOpacity style={{
        justifyContent: 'center', marginTop: 10, paddingBottom: 10, flex: 0.5, alignItems: 'center',
        backgroundColor: 'yellow', height: 50, width: 400, borderWidth: 1
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  )
  return (
    <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>Textured Cotton Skort </Text>
          </View>
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}

        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch',



  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  lineStyle: {
    borderWidth: 0.3,
    borderColor: 'black',
    marginTop: 50,

  },


});