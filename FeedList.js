import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const feedListItem = ({ item }) => (
<View style={styles.feed_list_item}>
<Image
    style={styles.user_icon}
    source={{uri: item.user_icon}}
   />
<Image
    style={styles.content_feed}
    source={{uri: item.content_feed}}
    />
<Image
    style={styles.like_icon}
    source={{uri: item.like_icon}}
   />
<Text style={styles.description}>{item.description}</Text>
</View>
  );

const FeedList = ({ item }) => (
<FlatList
    style={styles.feed_list}
    data={item}
    renderItem={feedListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default FeedList;

const styles = StyleSheet.create({
    'user_icon': {
        'width': '10vw',
        'height': '10vw',
        'borderRadius': 50,
        'marginBottom': 5,
        'margin': 15
    },
    'content_feed': {
        'width': '100vw',
        'height': '80vw',
        'marginTop': 5
    },
    'like_icon': {
        'width': '7vw',
        'height': '7vw',
        'margin': 15,
        'borderRadius': 50,
        'marginTop': 5,
        'marginBottom': 5
    },
    'description': {
        'fontSize': 13,
        'fontWeight': '300',
        'paddingTop': 5,
        'marginHorizontal': 15
    }
});