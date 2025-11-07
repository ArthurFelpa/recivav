import { BookOpen, Trophy, Users, Target, Zap, Award } from 'lucide-react';
import { Progress } from './ui/progress';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 pt-12 pb-6 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white mb-1">Olá, Maria! 👋</h2>
            <p className="text-white/80">Continue sua jornada verde</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-white">1,247</span>
          </div>
        </div>

        {/* Progress Card */}
        <Card className="p-4 bg-white/95 backdrop-blur-sm border-0 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <p className="text-gray-600">Nível 7</p>
                <p className="text-emerald-600">Guardião Verde</p>
              </div>
            </div>
            <Award className="w-8 h-8 text-amber-500" />
          </div>
          <Progress value={65} className="h-3 bg-emerald-100" />
          <p className="text-gray-500 mt-2">350 pontos até o próximo nível</p>
        </Card>
      </div>

      {/* Daily Goal */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-800">Meta Diária</h3>
          <span className="text-emerald-600">3/5 completas</span>
        </div>
        <Card className="p-4 bg-white border-2 border-emerald-200 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-6 h-6 text-emerald-500" />
            <div className="flex-1">
              <p className="text-gray-800">Aprenda por 15 minutos</p>
              <p className="text-gray-500">9 minutos restantes</p>
            </div>
          </div>
          <Progress value={60} className="h-2 bg-emerald-100" />
        </Card>
      </div>

      {/* Main Actions */}
      <div className="px-6 mt-6">
        <h3 className="text-gray-800 mb-4">Atividades</h3>
        <div className="grid grid-cols-2 gap-4">
          <Card 
            onClick={() => onNavigate('learning')}
            className="p-6 bg-gradient-to-br from-emerald-400 to-green-500 border-0 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-md">
              <BookOpen className="w-6 h-6 text-emerald-500" />
            </div>
            <p className="text-white mb-1">Aprender</p>
            <p className="text-white/80">Novas lições</p>
          </Card>

          <Card 
            onClick={() => onNavigate('challenges')}
            className="p-6 bg-gradient-to-br from-blue-400 to-cyan-500 border-0 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-md">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-white mb-1">Desafios</p>
            <p className="text-white/80">3 novos hoje</p>
          </Card>

          <Card 
            onClick={() => onNavigate('ranking')}
            className="p-6 bg-gradient-to-br from-amber-400 to-orange-500 border-0 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-md">
              <Trophy className="w-6 h-6 text-amber-500" />
            </div>
            <p className="text-white mb-1">Ranking</p>
            <p className="text-white/80">Top 10 hoje</p>
          </Card>

          <Card 
            onClick={() => onNavigate('community')}
            className="p-6 bg-gradient-to-br from-purple-400 to-pink-500 border-0 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-md">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-white mb-1">Comunidade</p>
            <p className="text-white/80">12 novos posts</p>
          </Card>
        </div>
      </div>

      {/* Streak */}
      <div className="px-6 mt-6">
        <Card className="p-4 bg-gradient-to-r from-orange-400 to-red-400 border-0 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🔥</div>
              <div>
                <p className="text-white">Sequência de 12 dias!</p>
                <p className="text-white/80">Continue assim!</p>
              </div>
            </div>
            <div className="text-white text-right">
              <p className="text-3xl">12</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tips */}
      <div className="px-6 mt-6">
        <h3 className="text-gray-800 mb-4">Dica do Dia</h3>
        <Card className="p-4 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200 shadow-sm">
          <div className="flex gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <p className="text-gray-800 mb-1">Você sabia?</p>
              <p className="text-gray-600">
                Reciclar uma lata de alumínio economiza energia suficiente para alimentar uma TV por 3 horas!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
