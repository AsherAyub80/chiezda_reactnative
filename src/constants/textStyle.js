import { colors } from './colors';

/**
 * Loaded font family names (from @expo-google-fonts).
 * These must match the keys passed to useFonts() in App.js.
 */
export const fontFamilies = {
    CormorantRegular: 'Cormorant_400Regular',
    CormorantMedium: 'Cormorant_500Medium',
    CormorantBold: 'Cormorant_700Bold',
    OutfitRegular: 'Outfit_400Regular',
    OutfitMedium: 'Outfit_500Medium',
    OutfitBold: 'Outfit_700Bold',
};

/**
 * Base text styles (Flutter-like TextTheme).
 * Uses loaded font family names so fontFamily applies correctly.
 */
const baseTextTheme = {
    headlineLarge: {
        fontSize: 26,
        color: colors.textPrimary,
        fontFamily: fontFamilies.CormorantBold,
    },

    headlineMedium: {
        fontSize: 16,
        color: colors.textSecondary,
        fontFamily: fontFamilies.OutfitBold,
    },

    headlineSmall: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.OutfitBold,
    },

    bodySmall: {
        fontSize: 16,
        color: colors.textPrimary,
        fontFamily: fontFamilies.OutfitRegular,

    },

    bodyMedium: {
        fontSize: 18,
        color: '#000000',
        fontFamily: fontFamilies.OutfitMedium,
    },

    bodyLarge: {
        fontSize: 22,
        color: colors.textPrimary,
        fontFamily: fontFamilies.CormorantBold,
    },

    titleLarge: {
        fontSize: 20,
        color: colors.textPrimary,
        fontFamily: fontFamilies.CormorantRegular,
    },

    titleMedium: {
        fontSize: 22,
        color: colors.textPrimary,
        fontFamily: fontFamilies.CormorantBold,
    },

    titleSmall: {
        fontSize: 14,
        color: colors.textPrimary,
        fontFamily: fontFamilies.OutfitRegular,
    },
};

export const appTextTheme = baseTextTheme;

/**
 * copyWith – Flutter-style TextStyle.copyWith()
 */
export function copyWith(styleKey, overrides = {}) {
    const base = baseTextTheme[styleKey];
    if (!base) return overrides;
    return { ...base, ...overrides };
}
