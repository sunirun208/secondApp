import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Flex = () => {
    return (
        <View style={StyleSheet.container}>
        <View style={StyleSheet.section}>
            <Image style={styles.image} source={require('../assets/lru.png')} />
        </View>

        <View style={[styles.section]}>
            <Text style={styles.text}>สมุนไพรท้องถิ่นเลย</Text>
        </View>

        <View style={styles.section}>
            <Image style={styles.coverScreenImage} source={require('../assets/samunpai.jpg')}/>
        </View>

        <View style={styles.screenSection}>
            <Image style={styles.image} source={require('../assets/flower1.jpg')}/>
            <Image style={styles.image} source={require('../assets/flower2.jpg')}/>
            <Image style={styles.image} source={require('../assets/flower3.jpg')}/>
        </View>

        <View style={[styles.section]}>
            <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text>
        </View>
        </View>
    );
};

    const styles = StyleSheet.create({
        container:{
            fles: 1,
            padding: 20,
            backgroundColor: 'blue',
            flexDirection: 'column',
        },

    section:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    coverScreenImage:{
        width: '50%',
        height: 100,//ปรับความสูงตามที่ต้องการ
        resizeMode: 'center',
        marginTop:100, //เลื่อนข้างล่างเพิ่มเติ่ม
    },
    screenSection:{
    flex:3, //ให้ส่วนนี้ใช้พื้นที่มากขึ้น
    justifyContent: 'center',
    alignItems:'center',
    marginVertical:'10',
    flexDirection:'row',
    marginTop:100,//เลื่อนลงข้างล่างเพิ่มเติ่ม
    },
    image: {
        width:150,
        height:150,
        marginHorizontal:10,//เพิ่ม margin แนวนอนระหว่างรูปภาพ
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:'blue'
    },
    });

    export default Flex;
    
    
