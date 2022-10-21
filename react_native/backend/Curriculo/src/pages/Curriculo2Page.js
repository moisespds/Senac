import { View } from "react-native";
import { curriculo } from "../../data";
import Bloco from "../components/Bloco";

export default function Curriculo2Page() {
  return (
    <View>
        {curriculo.map((bloco) => <Bloco titulo={bloco.titulo} subTitulo={bloco.subTitulo} infos={bloco.infos} imagem={bloco.imagem} infoDirection={bloco.infoDirection} />)}
    </View>
  );
}
