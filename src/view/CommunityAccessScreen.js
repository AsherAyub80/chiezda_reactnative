import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PrimaryButton from '../components/Button';
import GlobalBackground from '../components/GlobalBackground';
import { colors } from '../constants/colors';
import { appTextTheme } from '../constants/textStyle';




const CommunityAccess = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const accessTile = ({ id, icon, title, subtitle }) => (
    <TouchableOpacity
      key={id}
      onPress={() => setSelected(id)}
      style={styles.tileContainer}
      activeOpacity={0.8}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color="#BF735A" />
        </View>

        <View style={styles.tileText}>
          <Text style={appTextTheme.bodyLarge}>{title}</Text>
          <Text style={{ ...appTextTheme.bodySmall, fontSize: 14 }}>{subtitle}</Text>
        </View>
      </View>

      <View
        style={[
          styles.radioOuter,
          selected === id && { borderColor: colors.textPrimary },
        ]}
      >
        {selected === id && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <GlobalBackground gradientStops={[0.8, 1]} isSpacer isRight={false} isLeft={false}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={{ height: 20 }} />

          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={15} color={colors.textPrimary} />
            </TouchableOpacity>

            <View style={{ width: 10 }} />

            <View>
              <Text style={{ ...appTextTheme.headlineLarge, fontSize: 20 }}>
                Community Access
              </Text>
              <Text style={{ ...appTextTheme.bodySmall, fontSize: 16 }}>
                Choose who can view and participate.
              </Text>
            </View>
          </View>

          <View style={{ height: 30 }} />

          {/* Tiles */}
          {accessTile({
            id: 'public',
            icon: 'globe-outline',
            title: 'Public',
            subtitle: 'Only approved members can view and participate.',
          })}

          <View style={{ height: 15 }} />

          {accessTile({
            id: 'private',
            icon: 'lock-closed-outline',
            title: 'Private',
            subtitle: 'Safe spaces for peer support',
          })}

          <View style={{ flex: 1 }} />

          <PrimaryButton
            text="Next"
            onPress={() => navigation.navigate('CommunityDetails')}
          />
          <View style={{ height: 10 }} />

        </View>
      </View>
    </GlobalBackground>
  );
};

export default CommunityAccess;

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 20 },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  backButton: {
    backgroundColor: colors.peachLight,
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.cardSecondary,
  },
  iconBox: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#FFE3C8',
  },
  tileText: { flex: 1, marginLeft: 12 },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.textMuted,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: colors.secondary },
});
