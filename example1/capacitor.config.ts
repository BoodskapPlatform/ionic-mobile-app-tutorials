import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.boodskaptutorial',
  appName: 'coordinates',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      GOOGLE_MAPS_ANDROID_API_KEY: 'AIzaSyBa0bLLKhNNFKfc_5OkiXmJZfSN33-CII0',
      GOOGLE_MAPS_IOS_API_KEY: 'AIzaSyBa0bLLKhNNFKfc_5OkiXmJZfSN33-CII0'
    }
  }
};

export default config;
