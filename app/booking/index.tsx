import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Pressable, ScrollView } from "react-native";
import { palette } from "../../css_variables/colors"; // ou adicione no próprio arqui
import { Link } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { binsPlans } from "../../objects/binsPlans";


const BookService = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        zipCode: "",
        bins: "1 bin",
        time: "AM",
        payment: "On time payment",
    });

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Link href="./menu" asChild>
                    <Pressable hitSlop={8}>
                        <Ionicons name="chevron-back" size={24} color={palette.text} />
                    </Pressable>
                </Link>
                <Text style={styles.title}>Book your service</Text>
            </View>

            {/* Info Banner */}
            <Text style={styles.infoBanner}>Bookings after 11:00 AM are scheduled for tomorrow.</Text>

            {/* Form Fields */}
            {["Full name", "Email", "Phone", "ZIP Code"].map((placeholder, i) => (
                <TextInput
                    key={i}
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={(value) => handleChange(placeholder.toLowerCase().replace(" ", ""), value)}
                />
            ))}

            {/* Bins Selection */}
            <Text style={styles.subtitle}># of bins</Text>
            <View style={styles.ofBinsContainer}>
                {binsPlans.map((option, i) => (
                    <TouchableOpacity
                        key={i}
                        style={[
                            styles.binsOptionButton,
                            formData.bins === option.name && styles.selectedOptionButton,
                        ]}
                        onPress={() => handleChange("bins", option.name)}
                    >
                        <Text style={styles.optionText}>{option.name}</Text>
                        <Text style={styles.description}>{option.description}</Text>
                    </TouchableOpacity>
                ))}
            </View>


            {/* Time Selection */}
            <View style={styles.timeContainer}>
                {["AM", "PM"].map((time, i) => (
                    <TouchableOpacity
                        key={i}
                        style={[styles.timeButton, formData.time === time && styles.selectedTimeButton]}
                        onPress={() => handleChange("time", time)}
                    >
                        <Text style={styles.timeText}>{time}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Payment Options */}
            {["On time payment", "Subscription"].map((paymentOption, i) => {
                const selected = formData.payment === paymentOption;

                return (
                    <TouchableOpacity
                        key={i}
                        style={[
                            styles.paymentOptionButton,                 
                            formData.payment === paymentOption && styles.selectedOptionButton,
                        ]}
                        onPress={() => handleChange("payment", paymentOption)}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <MaterialCommunityIcons
                                name={selected ? "radiobox-marked" : "radiobox-blank"} // ou "circle-outline" / "check-circle"
                                size={20}
                                color={selected ? "#2563eb" : "#9ca3af"}
                            />
                            <Text style={styles.paymentOptionText}>{paymentOption}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}

            {/* Confirm Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Pay $30.00 now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: palette.white,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    backButton: {
        padding: 10,
    },
    backText: {
        fontSize: 18,
        color: palette.text,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: palette.text,
        flex: 1,
        textAlign: "center",
    },
    infoBanner: {
        backgroundColor: "#F5F3D7",
        paddingVertical: 8,
        textAlign: "center",
        marginBottom: 20,
        color: "#000000",
        fontSize: 14,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 10,
    },
    ofBinsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginTop: 18,
        flexWrap: 'wrap',
        justifyContent: "center",
    },
    binsOptionButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 8,
        width: 142,
        height: 58,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    paymentOptionButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedOptionButton: {
        color: palette.white,
        backgroundColor: palette.primary,
    },
    optionText: {
        fontSize: 16,
        color: palette.text,
    },
    paymentOptionText: {
        fontSize: 16,
        color: palette.black
    }
    ,
    description: {
        color: palette.gray,
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 400,
    },
    timeContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    timeButton: {
        flex: 1,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 15,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedTimeButton: {
        backgroundColor: palette.primary,
    },
    timeText: {
        fontSize: 16,
        color: palette.black,
    },
    submitButton: {
        backgroundColor: palette.primary,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    submitButtonText: {
        color: palette.white,
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default BookService;
