import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput  from 'react-native-phone-number-input';
const {height} =Dimensions.get('screen');
const height_logo = height* 0.28;

export default function login() {
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image 
                style={styles.logo}
                source={{
                    uri:'https://images.foody.vn/res/g78/776617/prof/s576x330/foody-upload-api-foody-mobile-the-coffee-house-190104191813.jpg'
                }} />
             </View>
            <View style={styles.footer}>
                <Text style={{fontSize: 18}}>Chào mừng bạn đến với </Text>
                <Text style={{fontSize : 30 , fontWeight:'bold', marginBottom:30}}>THE CoFFEE HoUSE</Text>
                <PhoneInput
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập số điện thoại"
                />
                <TouchableOpacity style={{
                    height: 50, backgroundColor: '#FF7F24',
                    width: 280,
                    margin: 10,
                    marginTop: 30,
                    padding: 10, borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 20 }}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={{ color: '#A9A9A9', fontSize: 15, marginTop: 20 }}>----------------------------Hoặc----------------------------</Text>
                <TouchableOpacity style={{
                    height: 42, backgroundColor: '#1874CD',
                    width: 280,
                    margin: 10,
                    marginTop: 30,
                    padding: 10, borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 15, color: 'white' }}> <Icon name="facebook-official" size={20} color="white" />   Tiếp tục bằng Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 42, backgroundColor: 'white',
                    width: 280,borderWidth: 0.5,
                    margin: 10,
                    marginTop: 10,
                    padding: 10, borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 15 }}> <Icon name="google-plus-official" size={20} color="black" />  Tiếp tục bằng Google</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 10}}>Tiếng Việt</Text>
            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFA54F'
        
    },
    header:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
        

    },
    footer:{
        flex: 7,
        backgroundColor:'#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems:'center',
    },
    logo: {
        height: height_logo,
        width: '100%',
    },
})