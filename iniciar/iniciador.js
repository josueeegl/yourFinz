import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Icono } from "../navigation-bar";
import AppInicio from "../navigations/Inicio";
import AppPresupuesto from "../navigations/Presupuesto";
import AppOpc from "../navigations/Opciones";
import AppDinero from "../navigations/Dinero";
import AppGrafic from "../navigations/Graficas";

export const AppNavegador = createBottomTabNavigator(
  {
    Home: {
      screen: AppInicio,
      navigationOptions: {
        title: "Inicio",
      },
    },
    Presupuesto: {
      screen: AppPresupuesto,
      navigationOptions: {
        title: "Presu...",
      },
    },
    Dinero: {
      screen: AppDinero,
      navigationOptions: {
        title: "Historial",
      },
    },
    Graficas: {
      screen: AppGrafic,
      navigationOptions: {
        title: "Gráficas",
      },
    },
    Opciones: {
      screen: AppOpc,
      navigationOptions: {
        title: "Opciones",
      },
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        return (
          <Icono
            routeName={routeName}
            focused={focused}
            tintColor={tintColor}
            color={"#fff"}
          />
        );
      },

      tabBarOptions: {
        activeTintColor: "#4F93BC",
        labelStyle: {
          fontSize: 11,
          bottom: 15,
        },
        style: {
          position: "absolute",
          backgroundColor: "#47474F",
          height: 80,
          bottom: 0,
        },
      },
    }),
  }
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#4F93BC",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 15,
  },
});
