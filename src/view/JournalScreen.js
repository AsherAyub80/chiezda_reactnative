import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalScaffold from '../components/GlobalScaffold';
import LightGreenContainer from '../components/LightGreenContainer';
import PostCard from '../components/PostCard';
import PrimaryButton from '../components/PrimaryButton';
import { img, svg } from '../constants/assets';
import { colors } from '../constants/colors';
import { appTextTheme } from '../constants/textStyle';

const JournalScreen = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const navigation = useNavigation();


  return (
    <GlobalScaffold>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.blurContainer}>
          <Image
            source={img.blur_texture}
            style={[StyleSheet.absoluteFill, { width: '100%', height: '100%' }]}
            contentFit="cover"
          />

          <View style={styles.contentPadding}>
            {/* Header Section */}
            <View style={{ marginTop: 20 }}>
              <View style={styles.headerRow}>
                <Image
                  source={svg.book}
                  style={{ width: 24, height: 24, tintColor: colors.textPrimary }}
                  contentFit="contain"
                />
                <View style={{ width: 5 }} />
                <Text style={appTextTheme.bodyLarge}>My Journal</Text>
              </View>

              <View style={styles.subHeaderRow}>
                <View style={{ width: 25 }} />
                <View style={{ flex: 1 }}>
                  <Text style={appTextTheme.bodySmall}>
                    Your personal reflections, saved moments, and private thoughts.
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ height: 20 }} />

            <LightGreenContainer
              content="This is a gentle space for those processing loss. Share when you're ready, read when you need comfort. We're here with you."
              icon={<Ionicons name="lock-closed" size={24} color="#8EA48B" />}
            />

            <View style={{ height: 20 }} />

            {/* Filter Row */}
            <View style={styles.filterRow}>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => {

                  console.log("Filter Tapped");
                }}
              >
                <Image source={svg.filter} style={{ width: 20, height: 20 }} contentFit="contain" />
                <View style={{ width: 5 }} />
                <Text style={appTextTheme.bodySmall}>Filter by</Text>
              </TouchableOpacity>

              <View style={{ width: 10 }} />

              <View style={styles.filterButton}>
                <Image source={svg.arrow_updown} style={{ width: 20, height: 20 }} contentFit="contain" />
                <View style={{ width: 5 }} />
                <Text style={appTextTheme.bodySmall}>Oldest</Text>
              </View>
            </View>

            <View style={{ height: 20 }} />

            {/* New Entry Button */}
            <PrimaryButton
              text="+ New Entry"
              gradient={['#F7CDB9', '#E38470']}
              onPressed={() => {
                navigation.navigate('BuildSpace');

                console.log("New Entry Tapped");
              }}
              textStyle={{ fontSize: 14, color: '#0f0e0eff' }}
            />

            <View style={{ height: 20 }} />

            {/* Post List */}
            {[0, 1].map((index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <PostCard
                  isPublic={index !== 0}
                  title="Grateful for the quiet mornings."
                  description="Coffee, sunlight through the window, no rush. These small rituals keep me grounded."
                  name="Wil Bettelheim"
                  onMoreTap={() => {
                    console.log("More Tapped");
                  }}
                />
              </View>
            ))}

          </View>
        </View>
      </ScrollView>
    </GlobalScaffold>
  );
};

export default JournalScreen;

const styles = StyleSheet.create({
  blurContainer: {
    position: 'relative',
    minHeight: '100%',
  },
  contentPadding: {
    paddingHorizontal: 10,
    paddingTop: 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeaderRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F7F2E8',
    borderRadius: 15,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});