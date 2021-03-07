import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from "../screens/SignIn";
import { Dashboard } from "../screens/Dashboard";
import { UserProfile } from "../screens/UserProfile";
import { Map } from "../screens/Map";
import { FarmProfile } from "../screens/FarmProfile";
import { HarvestLog } from "../screens/HarvestLog";
import { AddCrop } from "../screens/AddCrop";
import { HarvestOverview } from "../screens/HarvestOverview";

const Stack = createStackNavigator();

const StackNavigation = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                          }}/>
            <Stack.Screen name="Dashboard" component={Dashboard}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="UserProfile" component={UserProfile}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="Map" component={Map}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="FarmProfile" component={FarmProfile}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="HarvestLog" component={HarvestLog}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="AddCrop" component={AddCrop}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="HarvestOverview" component={HarvestOverview}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
        </Stack.Navigator>
    );
};

export { StackNavigation }
