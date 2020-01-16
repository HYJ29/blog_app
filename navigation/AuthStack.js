import {createStackNavigator} from 'react-navigation-stack'
import SignInScreen from 'screens/SignInScreen'

const AuthStack = createStackNavigator({
    SignIn:SignInScreen
})

export default AuthStack