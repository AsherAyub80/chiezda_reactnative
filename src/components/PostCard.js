import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';
import { appTextTheme } from '../constants/textStyle';
import LikeCommentWidget from './LikeCommentWidget';

/**
 * Replicates Flutter's PostCard.
 */
const PostCard = ({
    isPublic,
    isTimeLine = false,
    post,
    title = '',
    description = '',
    name = '',
    onMoreTap,
    onTap,
}) => {
    const displayTitle = post?.title ?? title;
    const displayDescription = post?.description ?? description;
    const displayName = post?.name ?? name;
    const likes = post?.likes ?? 0;
    const isLiked = post?.isLiked ?? false;
    const isDisliked = post?.isDisliked ?? false;

    return (
        <TouchableOpacity onPress={onTap} activeOpacity={0.9}>
            <View style={styles.container}>
                <View style={styles.padding}>

                    {/* Header Row */}
                    <View style={styles.headerRow}>
                        {/* Avatar - mocked with network image or asset */}
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
                            style={styles.avatar}
                        />
                        {/* 10.width */}
                        <View style={{ width: 10 }} />

                        {/* Header Content */}
                        <View style={styles.headerContent}>
                            <View style={styles.nameRow}>
                                <Text style={styles.nameText}>{displayName}</Text>
                                <View style={{ width: 5 }} />
                                <Text style={styles.timeText}>2days ago</Text>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity onPress={onMoreTap}>
                                    <Ionicons name="ellipsis-horizontal" size={20} color={colors.text} />
                                </TouchableOpacity>
                            </View>

                            {!isTimeLine && (
                                <View style={styles.privacyRow}>
                                    <Ionicons
                                        name={isPublic ? "globe-outline" : "lock-closed-outline"}
                                        size={15}
                                        color={colors.textMuted}
                                    />
                                    <View style={{ width: 2 }} />
                                    <Text style={styles.privacyText}>
                                        {isPublic ? "Public" : 'Private'}
                                    </Text>
                                </View>
                            )}

                            {/* Spacing: isTimeLine ? 0.height : 10.height */}
                            <View style={{ height: isTimeLine ? 0 : 10 }} />

                            <Text style={styles.titleText}>{displayTitle}</Text>
                            <View style={{ height: 10 }} />
                            <Text style={styles.descText}>{displayDescription}</Text>
                        </View>
                    </View>

                    <View style={{ height: 10 }} />
                    <View style={styles.divider} />
                    <View style={{ height: 10 }} />

                    {isPublic ? (
                        <View style={styles.actionsRow}>
                            <LikeCommentWidget
                                count={likes}
                                isLiked={isLiked}
                                isDisliked={isDisliked}
                                isLikeWidget={true}
                            // onLike={() => {}} // Connect to provider if needed
                            // onDislike={() => {}}
                            />
                            <View style={{ width: 10 }} />
                            <LikeCommentWidget count={125} isLikeWidget={false} />
                        </View>
                    ) : (
                        <Text style={styles.privacyFooterText}>
                            Only you can see and manage this entry.
                        </Text>
                    )}

                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCF5E7', // Color(0xffFCF5E7)
        borderRadius: 15,
        marginBottom: 10,
    },
    padding: {
        padding: 15,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerContent: {
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30, // SizedBox(height: 30)
    },
    nameText: {
        ...appTextTheme.bodySmall,
        fontSize: 14,
        color: colors.textPrimary, // AppColors.text
    },
    timeText: {
        ...appTextTheme.bodySmall,
        fontSize: 12,
        color: colors.textMuted, // AppColors.textMuted
    },
    privacyRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    privacyText: {
        ...appTextTheme.bodySmall,
        fontSize: 12,
        color: colors.textMuted,
    },
    titleText: {
        ...appTextTheme.bodySmall,
        fontSize: 14,
        color: colors.textPrimary
    },
    descText: {
        ...appTextTheme.bodySmall,
        fontSize: 14,

        fontWeight: '300', // FontWeight.w300
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0', // Standard Divider color
    },
    actionsRow: {
        flexDirection: 'row',
    },
    privacyFooterText: {
        ...appTextTheme.bodySmall,
        fontSize: 12,
        color: colors.textMuted,
    },
});
