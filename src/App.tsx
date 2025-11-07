import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { LearningScreen } from './components/LearningScreen';
import { ChallengesScreen } from './components/ChallengesScreen';
import { RankingScreen } from './components/RankingScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { CommunityScreen } from './components/CommunityScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { BottomNav } from './components/BottomNav';

type Screen = 'splash' | 'login' | 'home' | 'learning' | 'challenges' | 'ranking' | 'profile' | 'community' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
      setCurrentScreen('login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  // Show bottom nav for main app screens
  const showBottomNav = ['home', 'challenges', 'ranking', 'community', 'profile'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative">
        {/* Screens */}
        {currentScreen === 'splash' && showSplash && <SplashScreen />}
        {currentScreen === 'login' && <LoginScreen onContinue={() => handleNavigate('home')} />}
        {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
        {currentScreen === 'learning' && <LearningScreen onNavigate={handleNavigate} />}
        {currentScreen === 'challenges' && <ChallengesScreen onNavigate={handleNavigate} />}
        {currentScreen === 'ranking' && <RankingScreen onNavigate={handleNavigate} />}
        {currentScreen === 'profile' && <ProfileScreen onNavigate={handleNavigate} />}
        {currentScreen === 'community' && <CommunityScreen onNavigate={handleNavigate} />}
        {currentScreen === 'settings' && <SettingsScreen onNavigate={handleNavigate} />}

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNav 
            activeScreen={currentScreen} 
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
}
