import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ routeName, focused, horizontal, tintColor, color }) => {
  let iconName, iconColor;
  if (routeName === "Home") {
    iconName = `home${focused ? "" : "-outline"}`;
    iconColor = focused ? "#4F93BC" : "black";
    return (
      <Ionicons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  } else if (routeName === "Presupuesto") {
    iconName = `account-cash${focused ? "" : "-outline"}`;
    iconColor = focused ? "#4F93BC" : "black";
    return (
      <MaterialCommunityIcons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  } else if (routeName === "Opciones") {
    iconColor = focused ? "#4F93BC" : "black";
    iconName = `person-circle${focused ? "" : "-outline"}`;
    return (
      <Ionicons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  } else if (routeName === "Dinero") {
    iconName = `cash${focused ? "" : "-outline"}`;
    iconColor = focused ? "#4F93BC" : "black";
    return (
      <Ionicons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  }
};
