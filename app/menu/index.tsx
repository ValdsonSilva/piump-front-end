import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { palette } from "../../css_variables/colors";
import { Token } from "../../lib/api";

export default function Menu() {
    const router = useRouter();

    const auth = () => {
        Token.clear()
        router.push('./')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.brand}>PIUMP</Text>
                <View style={{ flexDirection: "row", gap: 14 }}>
                    <Feather name="log-out" size={20} color={palette.text} onPress={auth} />
                    <Ionicons name="person-outline" size={20} color={palette.text} />
                </View>
            </View>

            {/* Greeting */}
            <Text style={styles.hello}>Hello,John</Text>
            <Text style={styles.subHello}>Your signature services,{"\n"}one tap away.</Text>

            {/* CTA */}
            <Link asChild href="./booking">
                <TouchableOpacity style={styles.bookBtn}>
                    <Text style={styles.bookBtnText}>BOOK A SERVICE.</Text>
                </TouchableOpacity>
            </Link>

            {/* Services grid */}
            <View style={styles.grid}>
                <ServiceCircle
                    icon={<MaterialCommunityIcons name="door-open" size={28} color={palette.primary} />}
                    label={"Trash Bin\n& entry"}
                />
                <ServiceCircle soon label={"Other\nservice"} />
                <ServiceCircle soon label={"Grooming"} icon={<Feather name="scissors" size={28} color={palette.primary} />} />
                <ServiceCircle icon={<Ionicons name="car-outline" size={28} color={palette.primary} />} label={"Car care"} />
                <ServiceCircle soon icon={<Ionicons name="bag-outline" size={28} color={palette.primary} />} label={"Delivery"} />
                <ServiceCircle soon icon={<Ionicons name="storefront-outline" size={28} color={palette.primary} />} label={"Grooming"} />
            </View>

            {/* Next booking card + search fab */}
            <View style={styles.nextBookingWrap}>
                <View style={styles.nextBooking}>
                    <Text style={styles.nextTitle}>Your next booking</Text>
                    <Link href="/bookings/next" style={styles.viewDetails}>
                        View Details
                    </Link>
                </View>
                <TouchableOpacity style={styles.fab}>
                    <Ionicons name="search" size={18} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Bottom tabs (illustrativo) */}
            <View style={styles.tabs}>
                <View style={styles.tabItemActive}>
                    <Ionicons name="home" size={20} color="#fff" />
                </View>
                <Ionicons name="apps-outline" size={22} color={palette.muted} />
                <Ionicons name="crop-outline" size={22} color={palette.muted} />
                <Ionicons name="school-outline" size={22} color={palette.muted} />
            </View>
            <View style={styles.tabLabels}>
                <Text style={styles.tabLabel}>Home</Text>
                <Text style={styles.tabLabel}>Services</Text>
                <Text style={styles.tabLabel}>Membership</Text>
                <Text style={styles.tabLabel}>Education</Text>
            </View>

            {/* Membership gradient card */}
            <LinearGradient
                colors={["#6F3FF5", "#7AA9FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.memberCard}
            >
                <Text style={styles.memberTitle}>Piump Signature Membership</Text>
                <Text style={styles.memberSub}>Essential services,elevated.</Text>

                <TouchableOpacity style={styles.upgradeBtn}>
                    <Text style={styles.upgradeText}>Upgrade plan</Text>
                </TouchableOpacity>
            </LinearGradient>
        </ScrollView>
    );
}

function ServiceCircle({
    icon,
    label,
    soon,
}: {
    icon?: React.ReactNode;
    label: string;
    soon?: boolean;
}) {
    return (
        <View style={styles.serviceItem}>
            <View style={styles.circle}>
                {icon ?? <Ionicons name="ellipse-outline" size={28} color={palette.primary} />}
                {soon && (
                    <View style={styles.soonBadge}>
                        <Text style={styles.soonText}>SOON</Text>
                    </View>
                )}
            </View>
            <Text style={styles.serviceLabel}>{label}</Text>
        </View>
    );
}

const CIRCLE = 76;

const styles = StyleSheet.create({
    container: {
        paddingTop: 26,
        paddingBottom: 28,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },

    /* Header */
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    brand: {
        fontSize: 26,
        fontWeight: "800",
        letterSpacing: 1,
        color: "#8B7BFF",
    },

    /* Greeting */
    hello: {
        marginTop: 20,
        fontSize: 28,
        fontWeight: "700",
        color: palette.text,
    },
    subHello: {
        marginTop: 8,
        color: "#B7B7A8", // tom esverdeado suave como no mock
        fontSize: 16,
        lineHeight: 22,
    },

    /* CTA */
    bookBtn: {
        marginTop: 18,
        backgroundColor: palette.primary,
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        elevation: 2,
    },
    bookBtnText: {
        color: "#fff",
        fontWeight: "800",
        letterSpacing: 0.5,
    },

    /* Grid */
    grid: {
        marginTop: 18,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,                 // se o seu RN não suportar gap, remova e use margins nos itens
        justifyContent: 'flex-start',
    },
    serviceItem: {
        width: "30%",
        alignItems: "center",
    },
    circle: {
        width: CIRCLE,
        height: CIRCLE,
        borderRadius: CIRCLE / 2,
        borderWidth: 2,
        borderColor: "#CBB4FF",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#fff",
    },
    soonBadge: {
        position: "absolute",
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: "#EFEAFD",
        alignItems: "center",
        justifyContent: "center",
    },
    soonText: {
        fontSize: 12,
        fontWeight: "700",
        color: palette.text,
    },
    serviceLabel: {
        marginTop: 8,
        textAlign: "center",
        color: palette.text,
    },

    /* Next booking */
    nextBookingWrap: {
        marginTop: 14,
        position: "relative",
    },
    nextBooking: {
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nextTitle: {
        color: palette.text,
    },
    viewDetails: {
        color: palette.muted,
        fontWeight: "600",
    },
    fab: {
        position: "absolute",
        right: -2,
        top: -18,
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: palette.primary,
        elevation: 2,
    },

    /* Tabs (ilustrativo) */
    tabs: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    tabItemActive: {
        width: 28,
        height: 28,
        borderRadius: 6,
        backgroundColor: palette.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    tabLabels: {
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "space-evenly",
        // margin: 20,
    },
    tabLabel: {
        color: palette.muted,
        fontSize: 12,
        // marginLeft: 50,
    },

    /* Membership card */
    memberCard: {
        marginTop: 18,
        borderRadius: 16,
        padding: 18,
    },
    memberTitle: {
        color: "#fff",
        fontWeight: "800",
        fontSize: 16,
        marginBottom: 6,
    },
    memberSub: {
        color: "#E9E6FF",
        marginBottom: 16,
    },
    upgradeBtn: {
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    upgradeText: {
        color: palette.text,
        fontWeight: "700",
    },
});
