// src/lib/updates.ts
import * as Updates from 'expo-updates';
import Constants from 'expo-constants';

export const isExpoGo = Constants.appOwnership === 'expo';
export const canUseOTA = Updates.isEnabled && !__DEV__ && !isExpoGo;

export async function maybeCheckUpdates() {
  if (!canUseOTA) {
    console.log('OTA desabilitado em Expo Go/dev');
    return;
  }
  try {
    const res = await Updates.checkForUpdateAsync();
    if (res.isAvailable) {
      const d = await Updates.fetchUpdateAsync();
      if (d.isNew) await Updates.reloadAsync();
    }
  } catch (e) {
    console.log('expo-updates error', e);
  }
}
