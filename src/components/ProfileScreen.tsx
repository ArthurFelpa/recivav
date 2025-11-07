import { ArrowLeft, Edit, Award, Calendar, Zap, TrendingUp, Target, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const achievements = [
    { icon: '🌱', name: 'Primeiro Passo', description: 'Completou a primeira lição', unlocked: true },
    { icon: '🔥', name: 'Sequência de 7', description: '7 dias consecutivos', unlocked: true },
    { icon: '♻️', name: 'Reciclador', description: '50 lições de reciclagem', unlocked: true },
    { icon: '⚡', name: '1000 Pontos', description: 'Alcançou 1000 pontos', unlocked: true },
    { icon: '🏆', name: 'Top 10', description: 'Entrou no Top 10', unlocked: true },
    { icon: '💎', name: 'Mestre Verde', description: '100 lições completadas', unlocked: false },
    { icon: '👥', name: 'Social', description: '50 posts na comunidade', unlocked: false },
    { icon: '🌟', name: 'Lenda', description: '30 dias de sequência', unlocked: false },
  ];

  const recentActivity = [
    { date: 'Hoje', activity: 'Completou "Reciclagem de Plástico"', points: 30, icon: '📚' },
    { date: 'Hoje', activity: 'Concluiu desafio diário', points: 50, icon: '✅' },
    { date: 'Ontem', activity: 'Entrou no Top 10', points: 100, icon: '🏆' },
    { date: 'Ontem', activity: 'Completou "Energia Solar"', points: 30, icon: '☀️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 pt-12 pb-20 px-6 rounded-b-[3rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 text-9xl opacity-10">👤</div>
        
        <div className="relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 mb-6"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-4xl">👧</span>
                </div>
                <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Edit className="w-4 h-4 text-purple-500" />
                </button>
              </div>
              <div>
                <h2 className="text-white mb-1">Maria Silva</h2>
                <p className="text-white/80">Nível 7 • Guardião Verde</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="p-4 text-center bg-white border-0 shadow-lg">
            <Zap className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <p className="text-gray-800 mb-1">1,247</p>
            <p className="text-gray-500">Pontos</p>
          </Card>

          <Card className="p-4 text-center bg-white border-0 shadow-lg">
            <div className="text-2xl mx-auto mb-2">🔥</div>
            <p className="text-gray-800 mb-1">12</p>
            <p className="text-gray-500">Sequência</p>
          </Card>

          <Card className="p-4 text-center bg-white border-0 shadow-lg">
            <Award className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="text-gray-800 mb-1">8</p>
            <p className="text-gray-500">Conquistas</p>
          </Card>
        </div>

        {/* Progress to Next Level */}
        <Card className="p-5 bg-white border-0 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <p className="text-gray-800">Progresso</p>
                <p className="text-gray-600">Nível 7 → 8</p>
              </div>
            </div>
            <TrendingUp className="w-6 h-6 text-emerald-500" />
          </div>
          <Progress value={65} className="h-3 bg-emerald-100 mb-2" />
          <p className="text-gray-500">350 pontos até o próximo nível</p>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 bg-blue-50 border-2 border-blue-200 shadow-sm">
            <BookOpen className="w-6 h-6 text-blue-500 mb-2" />
            <p className="text-gray-800 mb-1">42</p>
            <p className="text-gray-600">Lições completas</p>
          </Card>

          <Card className="p-4 bg-green-50 border-2 border-green-200 shadow-sm">
            <Target className="w-6 h-6 text-green-500 mb-2" />
            <p className="text-gray-800 mb-1">28</p>
            <p className="text-gray-600">Desafios concluídos</p>
          </Card>

          <Card className="p-4 bg-amber-50 border-2 border-amber-200 shadow-sm">
            <Calendar className="w-6 h-6 text-amber-500 mb-2" />
            <p className="text-gray-800 mb-1">23</p>
            <p className="text-gray-600">Dias ativos</p>
          </Card>

          <Card className="p-4 bg-purple-50 border-2 border-purple-200 shadow-sm">
            <div className="text-2xl mb-2">👥</div>
            <p className="text-gray-800 mb-1">15</p>
            <p className="text-gray-600">Posts criados</p>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">Conquistas</h3>
            <Badge variant="secondary" className="bg-purple-100 text-purple-600 border-0">
              5/8 desbloqueadas
            </Badge>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`
                  aspect-square rounded-2xl flex items-center justify-center text-4xl
                  ${achievement.unlocked 
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg' 
                    : 'bg-gray-200 grayscale opacity-50'}
                `}
              >
                {achievement.icon}
              </div>
            ))}
          </div>

          {/* Achievement Details */}
          <div className="mt-4 space-y-2">
            {achievements.slice(0, 3).map((achievement, index) => (
              <Card key={index} className="p-3 bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md text-2xl">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">{achievement.name}</p>
                    <p className="text-gray-500">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="text-gray-800 mb-4">Atividades Recentes</h3>
          <div className="space-y-3">
            {recentActivity.map((item, index) => (
              <Card key={index} className="p-4 bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 mb-1">{item.activity}</p>
                    <p className="text-gray-500">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-600">+{item.points}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Edit Profile Button */}
        <Button className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl shadow-lg">
          Editar Perfil
        </Button>
      </div>
    </div>
  );
}
