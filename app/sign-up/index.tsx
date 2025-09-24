import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../../css_variables/colors';
import { Link, useRouter } from 'expo-router';
import CheckBox from '@react-native-community/checkbox';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    // validação simples e redirecionamento
    if (password === confirmPassword) {
      console.log('Signed up');
      router.push('./login'); // redireciona para login ou qualquer outra página
    } else {
      alert('Passwords do not match or terms not accepted.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header com back */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={24} color={palette.text} />
        </Pressable>
        <Text style={styles.brand}>Join Piump</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Form */}
      <Text style={styles.subtitle}>Your essential services club starts here</Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        {/* <CheckBox value={agreed} onValueChange={setAgreed} /> */}
        <Text style={styles.checkboxText}>
          I agree to the <Text style={styles.linkText}>Terms & Privacy</Text>
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.primaryBtn} onPress={handleSubmit}>
        <Text style={styles.primaryText}>Sign up</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <Text style={styles.footer}>
        Already have an account?{' '}
        <Link href="./login" style={styles.linkText}>
          Log in
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
    color: palette.black,
  },
  subtitle: {
    marginTop: 18,
    fontSize: 16,
    color: palette.muted,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 16,
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    color: palette.text,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: palette.text,
  },
  linkText: {
    color: palette.primary,
    fontWeight: '600',
  },
  primaryBtn: {
    marginTop: 24,
    backgroundColor: palette.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: {
    color: palette.white,
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: palette.muted,
    fontSize: 14,
  },
});
