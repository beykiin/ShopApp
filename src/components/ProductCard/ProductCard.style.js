import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    upperContainer:{
        flex:1, 
    },
    container:{
        backgroundColor: 'gainsboro',
        margin:15,
        borderRadius:10,
        width: Dimensions.get('window').width/2.5,
        height: Dimensions.get('window').height/3.5,
        flex:1,
        
    },
    image:{
        height: Dimensions.get('window').height/6,
        width:'85%',
        alignSelf: 'center',
        marginTop:10,
        resizeMode: 'contain', 
        backgroundColor:"white",
        borderRadius:10,
        
        
    },
    title:{
        color:'black',
        fontWeight: 'bold',
        fontSize:11,
        
    },
    innerContainer:{
        padding:10,
    },
    price:{
        color:"grey",
        fontWeight: "bold",
        fontSize:8,
    },
    inStock:{
        color:  "red",
        fontWeight:"bold",

    },
})