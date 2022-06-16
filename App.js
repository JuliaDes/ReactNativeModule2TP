import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={styles.column}>
      <Image
        style={styles.rover}
        source={require('./assets/Michael_Faraday_001 (1).jpg')}>
      </Image>
      </View>
      <View style={styles.column}>
      <Text style = {styles.text}>Michael FARADAY </Text>
      <Text> Michael Faraday (Newington, 22 septembre 1791 - Hampton Court, 25 août 1867) est un physicien et un chimiste britannique, connu pour ses travaux fondamentaux dans le domaine de l'électromagnétisme, l'électrochimie, le diamagnétisme, et l'électrolyse.</Text>
      </View>
    </View>

    <View style={styles.row}>
      <View style={styles.column}>
      <Image
        style={styles.rover}
        source={require('./assets/260px-Tesla-bulb.jpg')}>
      </Image>
      </View>
      <View style={styles.column}>
      <Text style = {styles.text}>Nikola TESLA </Text>
      <Text> Nikola Tesla (en serbe cyrillique : Никола Тесла), né dans la nuit du 9 au 10 juillet 1856 à Smiljan dans l'Empire d'Autriche (actuelle Croatie) et mort le 7 janvier 1943 à New York, est un inventeur et ingénieur américain d'origine serbe. Il est notoirement connu pour son rôle prépondérant dans le développement et l'adoption du courant alternatif pour le transport et la distribution de l'électricité.</Text>
      </View>
    </View>
    

    <View style={styles.row}>
      <View style={styles.column}>
      <Image
        style={styles.rover}
        source={require('./assets/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg')}>
      </Image>
      </View>
      <View style={styles.column}>
      <Text style = {styles.text}>Benjamin Franklin </Text>
      <Text> Benjamin Franklin ,né le 17 janvier 1706 à Boston et mort le 17 avril 1790 à Philadelphie, est un imprimeur, éditeur, écrivain, naturaliste, inventeur, abolitionniste et homme politique américain.</Text>
      </View>
    </View>

    <View style={styles.row}>
      <View style={styles.column}>
      <Image
        style={styles.rover}
        source={require('./assets/Ampere_Andre_1825.jpg')}>
      </Image>
      </View>
      <View style={styles.column}>
      <Text style = {styles.text}>  André-Marie AMPÈRE </Text>
      <Text>  André-Marie Ampère (Lyon1, 20 janvier 1775 – Marseille, 10 juin 1836) est un mathématicien, physicien, chimiste et philosophe français. Il a été membre de l'Académie des sciences, ainsi que professeur à l'École polytechnique et au Collège de France.</Text>
      </View>
    </View>

    
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  rover: {
   width: 150,
   height: 150
  },
  text : {
    // flex :.25,
    // display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowa: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  paddingTop: 30

  }
});