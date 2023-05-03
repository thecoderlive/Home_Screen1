import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Story from './Story'
import FeedList from './FeedList'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<Text style={styles.app_name}>{item.app_name}</Text>
<Story item={item.story}/>
<FeedList item={item.feed_list}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    'app_name': {
        'color': '#0d0c0c',
        'fontSize': 20,
        'fontWeight': '500',
        'paddingHorizontal': 15,
        'paddingTop': 10,
        'marginBottom': 15
    }
});