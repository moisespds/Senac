import React, {useState, createContext} from "react";
import { ScrollView, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NewsItem from "../components/NewsItem";

export const NewsContext = React.createContext()

export const NewsProvider = ({children}) => {

    const navigation = useNavigation()

    const [news, setNews] = useState([
          {
            imagem: require("../../assets/android1.png"),
            titulo:"Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
          {
            imagem: require("../../assets/android1.png"),
            titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
          {
            imagem: require("../../assets/android1.png"),
            titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
          {
            imagem: require("../../assets/android1.png"),
            titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
          {
            imagem: require("../../assets/android1.png"),
            titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
          {
            imagem: require("../../assets/android1.png"),
            titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
          {
            imagem: require("../../assets/android1.png"),
            titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
          {
            imagem: require("../../assets/android1.png"),
            titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
          },
        ])

   
//  const newsList = () => {
//   return(
//     <ScrollView style={styles.container}>
//       {news.map((n) => <TouchableOpacity onPress={() => navigation.navigate("News")}><NewsItem image={n.imagem} title={n.titulo}/></TouchableOpacity>)}
//     </ScrollView>
//     )}

    return (
        <NewsContext.Provider value={{news, setNews,}}>
            { children }
        </NewsContext.Provider>
    )
}