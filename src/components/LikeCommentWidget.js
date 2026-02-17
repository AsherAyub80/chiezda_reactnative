import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';
import { appTextTheme } from '../constants/textStyle';

// MOCK ICONS for Like/Dislike if not in assets yet. 
// Using MaterialCommunityIcons or similar would be better, but sticking to pure View/Image/Text for strict compliance unless user has vector icons.
// User mentioned `assets/svg/comment.svg`.
// We will assume `isLiked` / `isDisliked` logic just changes colors/icons.

import Ionicons from '@expo/vector-icons/Ionicons'; // Standard in Expo

/**
 * Replicates Flutter's LikeCommentWidget.
 */
const LikeCommentWidget = ({
    count,
    isLikeWidget = true,
    isLiked = false,
    isDisliked = false,
    onLike,
    onDislike,
}) => {

    const getColor = () => {
        if (isLiked) {
            return '#237AC0';
        } else if (isDisliked) {
            return '#FF373A';
        }
        return '#F6E8CB';
    };

    const getIconColor = () => {
        if (isLiked || isDisliked) {
            return 'white';
        }
        return colors.text; // AppColors.textIconColor (using generic text color for now)
    };

    return (
        <View style={[styles.container, { backgroundColor: getColor() }]}>
            {isLikeWidget ? (
                <View style={styles.row}>
                    <TouchableOpacity onPress={onLike}>
                        <Ionicons
                            name={isLiked ? "thumbs-up" : "thumbs-up-outline"}
                            size={20}
                            color={getIconColor()}
                        />
                    </TouchableOpacity>
                    <View style={{ width: 4 }} />
                    <Text style={[styles.text, { color: getIconColor() }]}>
                        {count}
                    </Text>
                    <View style={{ width: 4 }} />
                    <TouchableOpacity onPress={onDislike}>
                        <Ionicons
                            name={isDisliked ? "thumbs-down" : "thumbs-down-outline"}
                            size={20}
                            color={getIconColor()}
                        />
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.row}>
                    {/* SvgPicture.asset('comment'.getSvg()) */}
                    {/* We use Ionicons chatbubble as placeholder or svg if available. User said comment.svg exists */}
                    {/* <SvgXml xml={...} /> if we loaded raw svg, or Image if using require. */}
                    {/* Since we are using expo-image or just Image for svgs in RN often (if using react-native-svg-transformer) or just icons. */}
                    {/* Let's use generic Icon for 'comment' to be safe, or try to load svg.comment if user setup allows. */}
                    {/* The user's assets.js exports `require`. `SvgUri` takes a uri, `SvgXml` takes string. */}
                    {/* If using `react-native-svg`, usually we assume `import CommentIcon from ...` */}
                    {/* For now, sticking to Ionicons to ensure it renders, as loading raw SVG require via SvgUri might fail without transformer. */}
                    <Ionicons name="chatbubble-outline" size={20} color={colors.text} />
                    <View style={{ width: 2 }} />
                    <Text style={[styles.text, { color: colors.text }]}>
                        {count}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default LikeCommentWidget;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        alignSelf: 'flex-start', // mainAxisSize: MainAxisSize.min
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        ...appTextTheme.bodySmall,
        fontSize: 14,
    },
});
