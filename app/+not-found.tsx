import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { palette } from '../css_variables/colors';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      {/* Header simples com back */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={palette.text} />
        </Pressable>
        <Text style={styles.brand}>PIUMP</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Cartão central */}
      <View style={styles.card}>
        <View style={styles.badge}>
          <Ionicons name="compass-outline" size={26} color={palette.primary} />
        </View>

        <Text style={styles.title}>Page not found</Text>
        <Text style={styles.subtitle}>
          We couldn’t find what you’re looking for.{'\n'}
          Let’s get you back on track.
        </Text>

        {/* CTA principal - gradiente */}
        <Link asChild href="/">
          <Pressable>
            <LinearGradient
              colors={[palette.primary, palette.gray]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.primaryBtn}
            >
              <Text style={styles.primaryText}>Back to Home</Text>
            </LinearGradient>
          </Pressable>
        </Link>

        {/* CTA secundário - contorno */}
        <Link asChild href="./login">
          <Pressable style={styles.ghostBtn}>
            <Text style={styles.ghostText}>Open Services</Text>
          </Pressable>
        </Link>
      </View>

      {/* Rodapé com dica */}
      <View style={styles.footer}>
        <Ionicons name="chatbubbles-outline" size={16} color={palette.muted} />
        <Text style={styles.footerText}> Need help? Check our support in the app.</Text>
      </View>
    </View>
  );
}

const CARD_RADIUS = 28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    width: 24,
  },
  brand: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 1,
    color: palette.primary, // mesmo tom do logotipo
  },

  card: {
    marginTop: 28,
    paddingHorizontal: 22,
    paddingVertical: 26,
    borderRadius: CARD_RADIUS,
    backgroundColor: palette.white,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  badge: {
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '800',
    color: palette.text,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    color: palette.muted,
    fontSize: 14.5,
    lineHeight: 20,
  },

  primaryBtn: {
    marginTop: 18,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryText: {
    color: palette.white,
    fontWeight: '800',
    fontSize: 16,
  },

  ghostBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  ghostText: {
    color: palette.primary,
    fontWeight: '700',
    fontSize: 15,
  },

  footer: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: palette.muted,
    fontSize: 12.5,
    marginLeft: 6,
  },
});
