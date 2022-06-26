import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetch = (url, navigation) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    AsyncStorage.getItem("token").then(async(x) => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          authorization: x,
        },
      });
      if (response.status == 200) {
        const data = await response.json();
        setData(data);
        setLoading(false);
        if (data.length === 0) {
          setInfo(false);
        } else {
          setInfo(true);
        }
      } else {
        Alert.alert("Error");
      }
    });
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
    const focusListener = navigation.addListener("didFocus", () => {
      fetchData();
    });
    return () => {
      // clean up event listener
      focusListener.remove();
    };
  }, [loading]);

  return { setLoading, loading, data, info };
};

export default useFetch;
