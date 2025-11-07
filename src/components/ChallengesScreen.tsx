import { ArrowLeft, CheckCircle2, Circle, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ChallengesScreenProps {
  onNavigate: (screen: string) => void;
}

export function ChallengesScreen({ onNavigate }: ChallengesScreenProps) {
  const challenges = [
    {
      id: 1,
      title: 'Recicle 3 garrafas hoje',
      description: 'Separe 3 garrafas plásticas para reciclagem',
      points: 50,
      icon: '♻️',
      completed: true,
      category: 'Reciclagem'
    },
    {
      id: 2,
      title: 'Aprenda sobre energia solar',
      description: 'Complete a lição sobre painéis solares',
      points: 30,
      icon: '☀️',
      completed: true,
      category: 'Energia'
    },
    {
      id: 3,
      title: 'Economize água',
      description: 'Feche a torneira ao escovar os dentes',
      points: 20,
      icon: '💧',
      completed: false,
      category: 'Água'
    },
    {
      id: 4,
      title: 'Use sacola reutilizável',
      description: 'Leve sua própria sacola ao mercado',
      points: 40,
      icon: '🛍️',
      completed: false,
      category: 'Consumo'
    },
    {
      id: 5,
      title: 'Plante uma semente',
      description: 'Cultive uma planta em casa',
      points: 60,
      icon: '🌱',
      completed: false,
      category: 'Natureza'
    },
    {
      id: 6,
      title: 'Compartilhe uma dica',
      description: 'Poste uma dica eco na comunidade',
      points: 35,
      icon: '💬',
      completed: false,
      category: 'Social'
    }
  ];

  const completedCount = challenges.filter(c => c.completed).length;
  const totalPoints = challenges.filter(c => c.completed).reduce((sum, c) => sum + c.points, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 pt-12 pb-6 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white mb-1">Desafios Diários</h2>
            <p className="text-white/80">Complete e ganhe pontos</p>
          </div>
        </div>

        {/* Stats Card */}
        <Card className="p-4 bg-white/95 backdrop-blur-sm border-0 shadow-lg">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p className="text-gray-600 mb-1">Concluídos</p>
              <p className="text-blue-600">{completedCount}/{challenges.length}</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <p className="text-gray-600 mb-1">Pontos Hoje</p>
              <p className="text-amber-600">+{totalPoints}</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <p className="text-gray-600 mb-1">Sequência</p>
              <p className="text-orange-600">12 🔥</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Challenges List */}
      <div className="px-6 mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-800">Hoje</h3>
          <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-0">
            {challenges.length - completedCount} restantes
          </Badge>
        </div>

        {challenges.map((challenge) => (
          <Card 
            key={challenge.id}
            className={`
              p-4 border-2 shadow-sm transition-all
              ${challenge.completed 
                ? 'bg-emerald-50 border-emerald-200 opacity-75' 
                : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'}
            `}
          >
            <div className="flex items-start gap-4">
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm
                ${challenge.completed 
                  ? 'bg-emerald-100' 
                  : 'bg-gradient-to-br from-blue-400 to-cyan-400'}
              `}>
                <span className="text-3xl">{challenge.icon}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex-1">
                    <Badge 
                      variant="outline" 
                      className="mb-2 border-blue-200 text-blue-600"
                    >
                      {challenge.category}
                    </Badge>
                    <p className={`
                      mb-1
                      ${challenge.completed ? 'text-gray-500 line-through' : 'text-gray-800'}
                    `}>
                      {challenge.title}
                    </p>
                    <p className="text-gray-500">
                      {challenge.description}
                    </p>
                  </div>

                  {challenge.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
                  )}
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-amber-600">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-amber-600">+{challenge.points} pontos</span>
                  </div>

                  {!challenge.completed && (
                    <Button 
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 rounded-full h-8"
                    >
                      Começar
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Motivational Card */}
      <div className="px-6 mt-6">
        <Card className="p-5 bg-gradient-to-r from-purple-400 to-pink-400 border-0 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-5xl">🎯</span>
            <div className="flex-1">
              <p className="text-white mb-1">Continue assim!</p>
              <p className="text-white/90">
                Você está no caminho certo para salvar o planeta! 🌍
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
