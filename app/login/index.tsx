import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../../css_variables/colors';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onJoin = () => {
    // auth...
    router.push('./menu');
  };

  return (
    <View style={styles.container}>
      {/* Header com back */}
      <View style={styles.headerRow}>
        <Link href="/" asChild>
          <Pressable hitSlop={8}>
            <Ionicons name="chevron-back" size={24} color={palette.text} />
          </Pressable>
        </Link>
        <Text style={styles.title}>Welcome back</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subtitle}>
        Sign in to your essential{'\n'}Services club
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={palette.placeholder}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, { marginTop: 16 }]}
          placeholder="Password"
          placeholderTextColor={palette.placeholder}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Ele será redirecionado para o suporte do app */}
        <Link href="./forgot" style={styles.forgotLink}>
          Forgot password?
        </Link>

        <Pressable style={styles.joinBtn} onPress={onJoin}>
          <Text style={styles.joinText}>Join</Text>
        </Pressable>

        <Text style={styles.footer}>
          Don’t have an account?{' '}
          <Link href="./sign-up" style={styles.signupLink}>
            Sign up
          </Link>
        </Text>
      </View>
    </View>
  );
};

const FIELD_WIDTH = 320; // deixa próximo ao mock

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },

  headerRow: {
    width: '100%',
    maxWidth: 480,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '700',
    color: palette.text,
  },

  subtitle: {
    marginTop: 12,
    textAlign: 'center',
    color: palette.muted,
    fontSize: 16,
    lineHeight: 22,
  },

  form: {
    marginTop: 28,
    alignItems: 'center',
    width: '100%',
  },

  input: {
    width: FIELD_WIDTH,
    maxWidth: '90%',
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: palette.text,
    backgroundColor: '#FFFFFF',
  },

  forgotLink: {
    alignSelf: 'flex-end',
    marginTop: 8,
    marginRight: (Math.max(0, (FIELD_WIDTH - (FIELD_WIDTH * 0.9)) / 2) || 0),
    color: palette.muted,
    fontSize: 12.5,
  },

  joinBtn: {
    width: FIELD_WIDTH,
    maxWidth: '90%',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary,
    marginTop: 18,
  },

  joinText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

  footer: {
    marginTop: 24,
    color: palette.muted,
    textAlign: 'center',
    fontSize: 14,
  },

  signupLink: {
    color: palette.text,
    textDecorationLine: 'underline',
  },
});

export default Login;

