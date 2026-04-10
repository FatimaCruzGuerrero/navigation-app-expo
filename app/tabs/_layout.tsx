import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: 'purple', 
            headerShown: false,
            // tabBarStyle: {
            //     backgroundColor: 'black'
            // },
            // tabBarActiveBackgroundColor: "red",
            // tabBarShowLabel: false 
            }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add" color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="heart" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout
