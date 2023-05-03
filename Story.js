import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storyItem = ({ item }) => (
<View style={styles.story_item}>
<Image
    style={styles.friends_story}
    source={{uri: item.friends_story}}
    />
<Text style={styles.name}>{item.name}</Text>
</View>
  );

const Story = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.story}
    data={item}
    renderItem={storyItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default Story;

const styles = StyleSheet.create({
    'friends_story': {
        'width': '17vw',
        'height': '17vw',
        'marginTop': 5,
        'borderRadius': 50,
        'borderWidth': 2,
        'borderColor': '#e13737',
        'marginLeft': 15
    },
    'name': {
        'color': '#0f0f0f',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingTop': 5,
        'marginLeft': 25
    }
});