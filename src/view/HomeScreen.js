import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import PrimaryButton from '../components/Button';
import CustomTextField from '../components/TextInputField';
import { img, svg } from '../constants/assets';
import { colors } from '../constants/colors';
import { appTextTheme } from '../constants/textStyle';

const { width } = Dimensions.get('window');

// Vector heart icon (react-native-svg) – smooth at any size; original viewBox 0 0 18 15
const HeartIcon = ({ size = 24 }) => {
  const w = 18;
  const h = 15;
  const scale = size / w;
  return (
    <Svg width={size} height={scale * h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <Path
        d="M0 5.00919C0 9.17165 3.4409 11.3894 5.95909 13.3752C6.84756 14.0754 7.70351 14.7353 8.55945 14.7353C9.4154 14.7353 10.2713 14.0762 11.1598 13.3743C13.6789 11.3903 17.1189 9.17165 17.1189 5.01004C17.1189 0.848435 12.4112 -2.10543 8.55945 1.89697C4.7077 -2.10543 0 0.846723 0 5.00919Z"
        fill="#B27373"
      />
    </Svg>
  );
};

const feelingsData = [
  { title: 'Great', icon: svg.great, color: '#FFEBF0', titleColor: '#A21634' },
  { title: 'Good', icon: svg.good, color: '#FFF9EE', titleColor: '#ED9F00' },
  { title: 'Okay', icon: svg.okay, color: '#FFEDDD', titleColor: '#FB8010' },
  { title: 'Bad', icon: svg.bad, color: '#D9FFEB', titleColor: '#0CA253' },
  { title: 'Struggling', icon: svg.struggling, color: '#FFE0DF', titleColor: '#E9342F' },
];

const gratitudeListData = [
  {
    content: 'I quit smoking and have started jogging and waking up early in the morning.',
    daysAgo: '2 days ago',
    index: 0,
  },
  {
    content: 'I quit smoking and have started jogging and waking up early in the morning.',
    daysAgo: '2 days ago',
    index: 1,
  },
];
const NotesAndGratitude = ({ content, showDelete = false, index: indexProp, daysAgo }) => (
    <View style={styles.noteCard}>
      <View style={styles.noteCardRow}>
        {/* Index badge at top */}
        {indexProp != null && (
          <>
            <View style={styles.gratitudeIndexBadge}>
              <Text style={[appTextTheme.bodySmall, { color: colors.peachDark }]}>
                {indexProp + 1}
              </Text>
            </View>
            <View style={{ width: 10 }} />
          </>
        )}
  
        {/* Text container with flex: 1 to allow wrapping */}
        <View style={{ flex: 1 }}>
          <Text style={[appTextTheme.bodySmall, styles.noteCardText]}>
            {content}
            {daysAgo && (
              <Text style={[appTextTheme.bodySmall, { color: colors.textMuted, fontSize: 12 }]}>
                {'  '}{daysAgo}
              </Text>
            )}
          </Text>
        </View>
  
        {/* Delete icon centered vertically */}
        {showDelete && (
          <View style={{ justifyContent: 'center', marginLeft: 8 }}>
            <Image source={svg.delete} style={{ width: 20, height: 20 }} contentFit="contain" />
          </View>
        )}
      </View>
    </View>
  );

const TopGlowyCard = () => (
  <ImageBackground
    source={img.funky_card}
    style={styles.topCard}
    imageStyle={styles.topCardImage}
  >
    <View style={{ height: 20 }} />
    <View style={styles.topCardHeader}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <Text style={[appTextTheme.bodySmall, { color: '#fff' }]}>Good Evening. </Text>
        <Text style={[appTextTheme.bodyMedium, { color: '#fff' }]}>Will</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.crownButton}>
        <Image source={svg.crown} style={{ width: 17, height: 17 }} />
        <View style={{ width: 4 }} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={[appTextTheme.bodySmall, { color: '#000', fontSize: 12 }]}>
          7 days left
        </Text>
      </TouchableOpacity>
    </View>

    <View style={{ height: 5 }} />
    <LinearGradient
      colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.7)']}
      start={[0, 0]}
      end={[0, 1]}
      locations={[0.3, 0.45]}
      style={styles.topCardAffirmation}
    >
      <View style={styles.affirmationInner}>
        <View style={styles.affirmationTitleRow}>
          <Image source={img.hand} style={{ width: 38, height: 38 }} />
          <Text style={[appTextTheme.bodySmall, { marginLeft: 4 ,color:'#9E5A4F'}]}> Today's Affirmation</Text>
        </View>
        <Text style={[appTextTheme.bodyLarge, styles.affirmationQuote]}>
          "Growth is not linear. Some days you bloom, some days you rest."
        </Text>
        <View style={{ height: 2 }} />
        <Text style={[appTextTheme.bodySmall, { fontSize: 12,justifyContent: 'center', textAlign: 'center'}]}>Daily Affirmations</Text>
      </View>
    </LinearGradient>
  </ImageBackground>
);

const HomeScreen = () => {
  const [note, setNote] = useState('');
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.container}
      start={[0, 0]}
      end={[0, 1]}
      locations={[0.5, 1]}
    >
      <View style={{ height: 5 }} />
      <View style={styles.contentWrapper}>
        <ImageBackground
          source={img.home_bg_texture}
          style={styles.contentBg}
          imageStyle={styles.contentBgImage}
          contentFit="cover"
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <TopGlowyCard />

            <View style={styles.contentPadding}>
              <View style={styles.feelingHeaderRow}>
                <Text style={[appTextTheme.bodySmall, {color:colors.textSecondary}]}>How are you feeling today?</Text>
                <Image source={svg.ellipse_centered} style={{ width: 24, height: 24 }} />
                <View style={{ width: 5 }} />
              </View>

              <View style={styles.feelingListWrapper}>
                <FlatList
                  horizontal
                  data={feelingsData}
                  keyExtractor={(item) => item.title}
                  contentContainerStyle={styles.feelingListContent}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View style={[styles.feelingTile, { backgroundColor: item.color }]}>
                      <Image source={item.icon} style={styles.feelingIcon} />
                      <Text style={[appTextTheme.bodySmall, { color: item.titleColor, marginTop: 5 }]}>
                        {item.title}
                      </Text>
                    </View>
                  )}
                />
              </View>

              <View style={{ height: 20 }} />
              <Text style={[appTextTheme.bodySmall, { marginBottom: 10 ,color:colors.textSecondary}]}>Add a note  (optional)</Text>
              <CustomTextField
                value={note}
                onChangeText={setNote}
                hint="What's on your mind?"
                maxLines={3}
                fillColor="#FEF6EF"
              />
              <View style={{ height: 10 }} />

              <NotesAndGratitude
                content="Met old friends after a long time and feeling great."
                showDelete
              />

              <View style={{ height: 15 }} />
              <PrimaryButton
                text="Save Mood"
                onPress={() => {
                //navigate to my journal
                navigation.navigate('Journal');
                }}
                width={width - 40}
                height={55}
              />
              <View style={{ height: 10 }} />

              <View style={styles.gratitudePracticeRow}>
                <Image source={svg.star2} style={{ width: 20, height: 20 }} />
                <View style={{ width: 10 }} />
                <Text style={appTextTheme.bodyLarge}>Gratitude Practice</Text>
              </View>

              <View style={{ height: 20 }} />
              {gratitudeListData.map((item) => (
                <View key={item.index} style={{ marginBottom: 10 }}>
                  <NotesAndGratitude
                    content={item.content}
                    daysAgo={item.daysAgo}
                    index={item.index}
                  />
                </View>
              ))}

              <View style={{ height: 20 }} />
              <View style={styles.youreDoingGreatCard}>
                <View style={styles.youreDoingGreatRow}>
                  <View style={styles.heartAvatar}>
                    <HeartIcon size={24} />
                  </View>
                  <View style={{ width: 10 }} />
                  <View style={styles.youreDoingGreatText}>
                    <Text style={[appTextTheme.bodySmall, { color: colors.textPrimary,}]}>You're doing great</Text>
                    <View style={{ height: 4 }} />
                    <Text style={[appTextTheme.bodySmall, { color: colors.textSecondary, fontSize: 14 }]}>
                      Remember to be kind to yourself today. Every small step counts.
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ height: 110 }} />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentWrapper: { flex: 1, paddingHorizontal: 10 },
  contentBg: { flex: 1, borderTopLeftRadius: 24, borderTopRightRadius: 24, overflow: 'hidden' },
  contentBgImage: { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  scrollContent: { paddingBottom: 20 },
  contentPadding: { paddingHorizontal: 20 ,top:20},
  topCard: {
    width: '100%',
    borderRadius: 24,
    padding: 20,
    minHeight: 275,
    marginBottom: 0,
    overflow: 'hidden', // important
  },
  topCardImage: { borderRadius: 24 },
  topCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  crownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    borderColor: '#fff',
    maxWidth: 120,
  },
  topCardAffirmation: {
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    minHeight: 146,
    justifyContent: 'center',
    alignItems: 'center',
  },
  affirmationInner: { width: '100%' },
  affirmationTitleRow: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginBottom: 0 },
  affirmationQuote: { textAlign: 'center', marginBottom: 4,marginTop:5 },
  feelingHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  feelingListWrapper: { height: 100, marginTop: 4 },
  feelingListContent: { paddingVertical: 10, paddingRight: 10 },
  feelingTile: {
    minWidth: 80,        // minimum width for small titles
    paddingHorizontal: 10, // allow tile to expand for longer titles
    height: 85.5,
    borderRadius: 12,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feelingIcon: {
    width: 30,
    height: 30,
    contentFit: 'contain',
  },
  
  noteCard: {
    width: '100%',
    minHeight: 80,
    backgroundColor: colors.cardSecondary,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.divider,
    padding: 12,
  },
  noteCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteCardText: {
    fontSize: 16,
color:colors.textSecondary   
  },
  gratitudeIndexBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    justifyContent: 'flex-start', // keeps text at top of badge
    alignItems: 'flex-start',     // left-align text
    marginTop: 2,
  },
  gratitudePracticeRow: { flexDirection: 'row', alignItems: 'center' },
  youreDoingGreatCard: { width: '100%', backgroundColor: '#FDF0E8', borderRadius: 15, borderWidth: 2, borderColor: '#FDF0E8', padding: 10 },
  youreDoingGreatRow: { flexDirection: 'row', alignItems: 'center', padding: 8 },
  heartAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FDE8E8', justifyContent: 'center', alignItems: 'center' },
  youreDoingGreatText: { flex: 1 },
});
