import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function MealDetailScreen(props) {
    var item = props.route.params.item
    console.log('detail' + props.route.params.item.isVegetaria)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.item}>
                <ImageBackground
                    style={{
                        height: 280,
                        resizeMode: 'cover',
                        width: null,
                    }}
                    source={{ uri: item.imageUrl }}
                >
                    <View style={styles.infoContainer}>
                        <View>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', bottom: 10 }}>{item.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, alignItems: 'center', alignContent: 'center', }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{item.duration}m</Text>
                            <Text style={{ fontWeight: 'bold' }}>{item.complexity.toUpperCase()}</Text>
                            <Text style={{ fontWeight: 'bold' }}>{item.affordability.toUpperCase()}</Text>
                        </View>
                    </View>

                </ImageBackground>
                <View>
                    <Text style={styles.ingredientss}>Ingredients</Text>
                    {item.ingredients.map((item, key) => (
                        <Text style={styles.ingredientText} key={key}> {item} </Text>)
                    )}

                </View>
                <View>
                    <Text style={styles.ingredientss }>Directions</Text>

                    { item.steps.map((item, key)=>(
<Text style={styles.ingredientText} key={key}> { item } </Text>)
)}

                </View>

                <View style={{flexDirection:'row',marginTop:25 ,alignItems:'center',flex:1,}}>
                 <Text style={styles.additionInfo}>Gluton Free</Text>
                 <Text>{item.isGlutenFree.toString()}</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                 <Text style={styles.additionInfo}>Vegan</Text>
                 <Text >{item.isVegan.toString()}</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                 <Text style={styles.additionInfo}>Vegetatian</Text>
                 <Text>{props.route.params.item.isVegetaria.toString()}</Text>

                </View>
                <View style={{flexDirection:'row',marginBottom:10}}>
                 <Text style={styles.additionInfo}>Lactos Free</Text>
                 <Text>{item.isLactoseFree.toString()}</Text>

                </View>









            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,

        overflow: "hidden",
        borderRadius: 10,
        alignContent: 'center',
        marginTop: 10,
    },
    ingredientText: {
        fontSize: 15,
        color: 'grey'



    },
    additionInfo:{
    fontSize:17, 
    fontWeight:'bold',
    marginRight:10
    },
    nameContainer: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '25%',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute', // child
        bottom: 0, // position where you want
        left: 0,
        opacity: 0.7
    },
    ingredientss: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 10,
        justifyContent:'flex-start',
        textAlign:'left'

    },
    infoContainer: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '25%',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute', // child
        bottom: 0, // position where you want
        left: 0,
    }

})