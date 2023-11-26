'use client'

import React from 'react'
import Header from '../components/Layout/Header'

import {Card, Divider, Subtitle, Text} from '@tremor/react'
import CityPicker from '../components/CityPicker'


function weatherPage() {
  
  return (
    <>
    <Header/>
    <div className='min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center'>
    <Card className='mt-28 max-w-4xl mx-auto bg-white-300 '>
      <Text className='text-6xl font-bold text-center mb-10'>
        Weather AI
      </Text>
      <Subtitle className='text-xl text-center'>
      Empowering Your Day with Precision: Weather AI - Next 24 Hours Forecast using OpenWeatherMap and Tensorflow.js
      </Subtitle>

      <Divider className='my-10'/>

      <Card className='bg-gradient-to-br from-[#394F68] to-[#183B7E]'>
        <CityPicker/>
      </Card>
    </Card>
    </div>
    </>
  )
}

export default weatherPage