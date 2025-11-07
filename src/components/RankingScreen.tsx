import { ArrowLeft, Medal, TrendingUp, Crown, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface RankingScreenProps {
  onNavigate: (screen: string) => void;
}

export function RankingScreen({ onNavigate }: RankingScreenProps) {
  const topThree = [
    { rank: 2, name: 'Carlos S.', points: 2850, avatar: '👨', color: 'bg-blue-400', medal: '🥈' },
    { rank: 1, name: 'Ana M.', points: 3420, avatar: '👩', color: 'bg-amber-400', medal: '🥇' },
    { rank: 3, name: 'João P.', points: 2630, avatar: '🧑', color: 'bg-orange-400', medal: '🥉' },
  ];

  const restOfRanking = [
    { rank: 4, name: 'Mariana L.', points: 2480, avatar: '👩‍🦰', streak: 8 },
    { rank: 5, name: 'Pedro H.', points: 2350, avatar: '👨‍🦱', streak: 15 },
    { rank: 6, name: 'Juliana F.', points: 2200, avatar: '👱‍♀️', streak: 5 },
    { rank: 7, name: 'Roberto C.', points: 2050, avatar: '👴', streak: 20 },
    { rank: 8, name: 'Camila A.', points: 1920, avatar: '👩‍🦳', streak: 12 },
    { rank: 9, name: 'Lucas M.', points: 1850, avatar: '🧔', streak: 7 },
    { rank: 10, name: 'Maria (Você)', points: 1247, avatar: '👧', streak: 12, isYou: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 pt-12 pb-6 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white mb-1">Ranking</h2>
            <p className="text-white/80">Competição desta semana</p>
          </div>
          <Crown className="w-8 h-8 text-yellow-200" />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mt-6">
        <Tabs defaultValue="week" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white rounded-xl shadow-sm h-12">
            <TabsTrigger value="week" className="rounded-lg">Semana</TabsTrigger>
            <TabsTrigger value="month" className="rounded-lg">Mês</TabsTrigger>
            <TabsTrigger value="all" className="rounded-lg">Geral</TabsTrigger>
          </TabsList>

          <TabsContent value="week" className="mt-6">
            {/* Top 3 Podium */}
            <div className="flex items-end justify-center gap-2 mb-8">
              {/* 2nd Place */}
              <div className="flex flex-col items-center flex-1">
                <div className="relative mb-2">
                  <div className={`w-16 h-16 ${topThree[0].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl">{topThree[0].avatar}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {topThree[0].medal}
                  </div>
                </div>
                <p className="text-gray-800 mb-1">{topThree[0].name}</p>
                <p className="text-gray-600">{topThree[0].points}</p>
                <div className={`w-full ${topThree[0].color} rounded-t-xl mt-2 h-24 flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-2xl">2</span>
                </div>
              </div>

              {/* 1st Place */}
              <div className="flex flex-col items-center flex-1">
                <div className="relative mb-2">
                  <div className={`w-20 h-20 ${topThree[1].color} rounded-2xl flex items-center justify-center shadow-xl border-4 border-yellow-300`}>
                    <span className="text-4xl">{topThree[1].avatar}</span>
                  </div>
                  <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
                    {topThree[1].medal}
                  </div>
                </div>
                <p className="text-gray-800 mb-1">{topThree[1].name}</p>
                <p className="text-amber-600">{topThree[1].points}</p>
                <div className={`w-full ${topThree[1].color} rounded-t-xl mt-2 h-32 flex items-center justify-center shadow-xl`}>
                  <span className="text-white text-3xl">1</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="flex flex-col items-center flex-1">
                <div className="relative mb-2">
                  <div className={`w-16 h-16 ${topThree[2].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl">{topThree[2].avatar}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {topThree[2].medal}
                  </div>
                </div>
                <p className="text-gray-800 mb-1">{topThree[2].name}</p>
                <p className="text-gray-600">{topThree[2].points}</p>
                <div className={`w-full ${topThree[2].color} rounded-t-xl mt-2 h-20 flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-2xl">3</span>
                </div>
              </div>
            </div>

            {/* Rest of Ranking */}
            <div className="space-y-2">
              {restOfRanking.map((user) => (
                <Card 
                  key={user.rank}
                  className={`
                    p-4 border-2 shadow-sm
                    ${user.isYou 
                      ? 'bg-emerald-50 border-emerald-300 shadow-md' 
                      : 'bg-white border-gray-200'}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-10 h-10 flex items-center justify-center rounded-xl shrink-0
                      ${user.isYou ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}
                    `}>
                      <span className={user.isYou ? '' : ''}>{user.rank}</span>
                    </div>

                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <span className="text-2xl">{user.avatar}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`mb-1 ${user.isYou ? 'text-emerald-700' : 'text-gray-800'}`}>
                        {user.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">{user.points} pts</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-orange-600">{user.streak} 🔥</span>
                      </div>
                    </div>

                    {user.isYou && (
                      <Badge className="bg-emerald-500 hover:bg-emerald-600 border-0">
                        Você
                      </Badge>
                    )}

                    {user.streak >= 15 && !user.isYou && (
                      <Award className="w-5 h-5 text-amber-500" />
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Your Progress */}
            <Card className="mt-6 p-5 bg-gradient-to-r from-blue-500 to-purple-500 border-0 shadow-lg">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-white" />
                <div className="flex-1">
                  <p className="text-white mb-1">Continue subindo!</p>
                  <p className="text-white/90">
                    Você está a 603 pontos do Top 5
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="month" className="mt-6">
            <Card className="p-8 text-center">
              <Medal className="w-12 h-12 text-amber-500 mx-auto mb-3" />
              <p className="text-gray-600">Ranking mensal em breve!</p>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <Card className="p-8 text-center">
              <Crown className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <p className="text-gray-600">Ranking geral em breve!</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
