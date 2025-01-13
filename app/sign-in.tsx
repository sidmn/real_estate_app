import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode="contain" />
        <View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn