import {Center, Text, Icon} from 'native-base'
import { Fontisto } from '@expo/vector-icons'
import React from 'react'
import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

export function SignIn() {
  const {signIn, isUserLoading} = useAuth()
  return (
    <Center flex={1} bgColor="gray.900" px={8}>
      <Logo width={212} height={40}/>

      <Button 
        title='ENTRAR COM GOOGLE'
        type='SECONDARY'
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{_spinner: {color: 'white'}}}
      />

      <Text
        color="gray.300"
        textAlign="center"
        mt={4}
      >
        Não utilizamos nenhuma informação além {'\n'} 
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}