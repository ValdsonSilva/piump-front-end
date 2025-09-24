import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Platform,
} from 'react-native';
import { palette } from '../../css_variables/colors';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  visible: boolean;
  onClose: () => void;
  /** Número no formato internacional, ex: "5511999998888" */
  phone?: string;
  /** Mensagem inicial opcional */
  message?: string;
};

export default function ChatWithUsModal({
  visible,
  onClose,
  phone,
  message = '',
}: Props) {
  const openWhatsapp = async () => {
    const encoded = encodeURIComponent(message);
    const waDeepLink = `whatsapp://send?${phone ? `phone=${phone}&` : ''}text=${encoded}`;
    const waWeb = `https://wa.me/${phone ?? ''}${message ? `?text=${encoded}` : ''}`;

    const can = await Linking.canOpenURL('whatsapp://send');
    if (can) {
      Linking.openURL(waDeepLink);
    } else {
      Linking.openURL(waWeb);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      {/* BACKDROP */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* CARD */}
      <View style={styles.centerWrap} pointerEvents="box-none">
        <View style={styles.card}>
          {/* Close */}
          <Pressable style={styles.closeBtn} onPress={onClose} hitSlop={10}>
            <Ionicons name="close" size={24} color={palette.border ?? '#DADADA'} />
          </Pressable>

          {/* Content */}
          <Text style={styles.title}>Chat with us</Text>

          <Text style={styles.body}>
            You’ll be redirectioned to{'\n'}
            Whatsapp to talk with the{'\n'}
            Piump Team.
          </Text>

          <Pressable onPress={openWhatsapp} style={({ pressed }) => [
            styles.cta,
            pressed && { opacity: 0.9, transform: [{ scale: Platform.OS === 'ios' ? 0.99 : 1 }] },
          ]}>
            <Text style={styles.ctaText}>Open Whatsapp</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)', // cinza translúcido do mock
  },
  centerWrap: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: palette.white,
    borderRadius: 36, // cantos bem curvos como no mock
    paddingVertical: 28,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  closeBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
    opacity: 0.6,
  },
  title: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '800',
    color: palette.text,
  },
  body: {
    marginTop: 18,
    textAlign: 'left',
    alignSelf: 'center',
    width: '82%',
    fontSize: 16,
    lineHeight: 22,
    color: palette.text, // se tiver um cinza "muted", pode trocar aqui
  },
  cta: {
    marginTop: 24,
    alignSelf: 'center',
    width: 280,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary ?? palette.primary, // roxinho do mock
  },
  ctaText: {
    color: palette.white,
    fontWeight: '800',
    fontSize: 16,
  },
});
