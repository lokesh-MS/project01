import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './Components/flatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
<ElevatedCards/>
<FancyCards/>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
