import { StyleSheet, Text, View } from 'react-native';
import { appTextTheme } from '../constants/textStyle';

/**
 * Replicates Flutter's LightGreenContainer.
 * 
 * Flutter:
 * Container(
 *   decoration: BoxDecoration(
 *     color: Color(0xffBED8BB).withValues(alpha: 0.4),
 *     borderRadius: BorderRadius.circular(25),
 *     border: Border.all(color: Color(0xffBED8BB)),
 *   ),
 *   padding: EdgeInsets.symmetric(horizontal: 10, vertical: 20),
 *   child: Row(..., Icon(icon, color: Color(0xff8EA48B)), ...),
 * )
 */
const LightGreenContainer = ({ content, icon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {/* Flutter uses Icon(icon), here we assume icon is an SVG URI or component passed in */}
                {/* If icon is an IconData (material icon), we might need VectorIcons. 
             But per user request, we stick to SVGs or images if possible, or just standard text/view for now if no specific icon lib. 
             The journal example passed `Icons.lock`. We can use a lock svg or similar.
         */}
                {icon && <View style={styles.iconContainer}>{icon}</View>}

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{content}</Text>
                </View>
            </View>
        </View>
    );
};

export default LightGreenContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(190, 216, 187, 0.4)', // Color(0xffBED8BB).withValues(alpha: 0.4)
        borderRadius: 25,
        borderColor: '#BED8BB',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center', // Row defaults to crossAxis center usually or we set it
    },
    iconContainer: {
        marginRight: 10, // 10.width
    },
    textContainer: {
        flex: 1, // Expanded
    },
    text: {
        ...appTextTheme.bodySmall,
        color: '#597456', // copyWith(color: Color(0xff597456))
    },
});
