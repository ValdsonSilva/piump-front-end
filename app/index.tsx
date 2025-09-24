import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { palette } from '../css_variables/colors';

const First = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top header / hero */}
      <View style={styles.hero}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headline}>All-in-One{'\n'}Platform</Text>
          <Text style={styles.subtitle}>
            Book trusted premium services{'\n'}
            when and where you need them.
          </Text>

          {/* Primary + Ghost buttons */}
          <View style={styles.ctaRow}>
            <Link asChild href="./login">
              <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Get started</Text>
              </TouchableOpacity>
            </Link>

            <Link asChild href="/">
              <TouchableOpacity style={styles.ghostBtn}>
                <Text style={styles.ghostBtnText}>Learn more</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* Circle icon cluster */}
        <View style={styles.circleBadge}>
          <View style={styles.circleContent}>
            <Ionicons name="home-outline" size={20} color={palette.primary} />
            <Ionicons name="bag-outline" size={20} color={palette.primary} />
            <MaterialCommunityIcons name="car-outline" size={20} color={palette.primary} />
            <MaterialCommunityIcons name="tools" size={20} color={palette.primary} />
          </View>
        </View>
      </View>

      {/* Services grid */}
      <View style={styles.grid}>
        <ServiceCard
          icon={<MaterialCommunityIcons name="content-cut" size={20} color={palette.primary} />}
          title={'Barber &\nGrooming'}
        />
        <ServiceCard
          icon={<Ionicons name="car-outline" size={20} color={palette.primary} />}
          title={'Car\nDetailing'}
        />
        <ServiceCard
          icon={<MaterialCommunityIcons name="spray-bottle" size={20} color={palette.primary} />}
          title={'Home\ncleaning'}
        />
        <ServiceCard
          icon={<FontAwesome5 name="box-open" size={18} color={palette.primary} />}
          title={'Premium\nDelivery'}
        />
      </View>

      {/* On-Demand section */}
      <View style={styles.ondemandRow}>
        <View style={styles.phoneSketch}>
          <View style={styles.phoneSpeaker} />
          <View style={styles.phoneIconRow}>
            <Ionicons name="person-circle-outline" size={28} color={palette.muted} />
            <Ionicons name="stats-chart-outline" size={24} color={palette.muted} />
            <Ionicons name="settings-outline" size={24} color={palette.muted} />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.sectionTitle}>On-Demand{'\n'}Anytime</Text>
          <Text style={styles.sectionSub}>Easy to access, easy to book!</Text>


          <Link asChild href="./login">
            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Explore services</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Bottom gradient banner */}
      <LinearGradient
        colors={['#6F3FF5', '#8BB9FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.joinBanner}
      >
        <Text style={styles.joinTitle}>Join the club</Text>
        <Text style={styles.joinSubtitle}>Essential services elevated</Text>
      </LinearGradient>
    </ScrollView>
  );
};

const ServiceCard = ({ icon, title, disable }: { icon: React.ReactNode; title: string, disable?: false }) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.card}>
    <View style={styles.cardIcon}>{icon}</View>
    <Text style={styles.cardText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: palette.surface,
  },

  /* HERO */
  hero: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  headline: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '700',
    color: palette.text,
  },
  subtitle: {
    marginTop: 12,
    color: palette.muted,
    fontSize: 13.5,
    lineHeight: 18,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  primaryBtn: {
    backgroundColor: palette.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: palette.cardShadow,
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  primaryBtnText: {
    color: 'white',
    fontWeight: '600',
  },
  ghostBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: palette.primary,
    backgroundColor: 'transparent',
  },
  ghostBtnText: {
    color: palette.primary,
    fontWeight: '600',
  },
  circleBadge: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 1,
    borderColor: palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  circleContent: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: palette.outline,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    rowGap: 6,
    columnGap: 6,
    padding: 6,
  },

  /* GRID */
  grid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.outline,
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: palette.cardShadow,
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: palette.chip,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    flex: 1,
    color: palette.text,
    fontSize: 12.5,
    lineHeight: 16,
    fontWeight: '600',
  },

  /* ON-DEMAND */
  ondemandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 26,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    color: palette.text,
  },
  sectionSub: {
    marginTop: 6,
    color: palette.muted,
    fontSize: 12.5,
  },
  secondaryBtn: {
    marginTop: 14,
    alignSelf: 'flex-start',
    backgroundColor: palette.primary,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  secondaryBtnText: {
    color: '#fff',
    fontWeight: '600',
  },

  /* Phone sketch (ilustração simples) */
  phoneSketch: {
    width: 120,
    height: 180,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: palette.outline,
    alignItems: 'center',
    paddingTop: 10,
  },
  phoneSpeaker: {
    width: 36,
    height: 6,
    borderRadius: 3,
    backgroundColor: palette.outline,
    marginBottom: 14,
  },
  phoneIconRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 6,
  },

  /* BOTTOM BANNER */
  joinBanner: {
    marginTop: 26,
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  joinTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  joinSubtitle: {
    color: '#F3F1FF',
    fontSize: 12.5,
  },
});

export default First;
