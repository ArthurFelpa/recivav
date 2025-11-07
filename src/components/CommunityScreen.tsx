import { ArrowLeft, Heart, MessageCircle, Share2, Plus } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityScreenProps {
  onNavigate: (screen: string) => void;
}

export function CommunityScreen({ onNavigate }: CommunityScreenProps) {
  const posts = [
    {
      id: 1,
      user: { name: 'Ana M.', avatar: '👩', level: 'Nível 12' },
      content: 'Hoje reciclei 5 garrafas plásticas! Cada pequena ação conta para um planeta melhor 🌍',
      image: 'https://images.unsplash.com/photo-1666804855649-77057e76281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjIwOTYzODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      likes: 24,
      comments: 8,
      time: 'há 2 horas',
      tags: ['Reciclagem', 'Dica']
    },
    {
      id: 2,
      user: { name: 'Carlos S.', avatar: '👨', level: 'Nível 10' },
      content: 'Instalei painéis solares em casa! Estou economizando 60% na conta de energia ☀️⚡',
      image: 'https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMHBhbmVsc3xlbnwxfHx8fDE3NjIxNzY0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      likes: 42,
      comments: 15,
      time: 'há 5 horas',
      tags: ['Energia', 'Conquista']
    },
    {
      id: 3,
      user: { name: 'Juliana F.', avatar: '👱‍♀️', level: 'Nível 8' },
      content: 'Comecei uma horta vertical no meu apartamento! É incrível ver as plantas crescendo 🌱',
      image: 'https://images.unsplash.com/photo-1625409588021-8c8a6ad82d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMG5hdHVyZSUyMGxlYXZlc3xlbnwxfHx8fDE3NjIxMzYwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      likes: 31,
      comments: 12,
      time: 'há 1 dia',
      tags: ['Natureza', 'Dica']
    },
    {
      id: 4,
      user: { name: 'Pedro H.', avatar: '👨‍🦱', level: 'Nível 9' },
      content: 'Troquei todas as sacolas plásticas por reutilizáveis! Pequenas mudanças fazem diferença 🛍️',
      likes: 18,
      comments: 5,
      time: 'há 2 dias',
      tags: ['Consumo']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 pt-12 pb-6 px-6 rounded-b-[2rem] shadow-lg sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white mb-1">Comunidade</h2>
            <p className="text-white/80">Compartilhe suas conquistas</p>
          </div>
          <Button 
            size="icon"
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0"
          >
            <Plus className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="px-6 py-4 overflow-x-auto">
        <div className="flex gap-2 whitespace-nowrap">
          <Badge className="bg-purple-500 hover:bg-purple-600 border-0 rounded-full px-4 py-2 cursor-pointer">
            Todos
          </Badge>
          <Badge variant="outline" className="border-purple-300 text-purple-600 rounded-full px-4 py-2 cursor-pointer">
            Reciclagem
          </Badge>
          <Badge variant="outline" className="border-purple-300 text-purple-600 rounded-full px-4 py-2 cursor-pointer">
            Energia
          </Badge>
          <Badge variant="outline" className="border-purple-300 text-purple-600 rounded-full px-4 py-2 cursor-pointer">
            Dicas
          </Badge>
          <Badge variant="outline" className="border-purple-300 text-purple-600 rounded-full px-4 py-2 cursor-pointer">
            Conquistas
          </Badge>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="px-6 space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-0 bg-white border-0 shadow-lg overflow-hidden">
            {/* Post Header */}
            <div className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-md text-2xl">
                {post.user.avatar}
              </div>
              <div className="flex-1">
                <p className="text-gray-800">{post.user.name}</p>
                <p className="text-gray-500">{post.user.level} • {post.time}</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-gray-700 mb-3">{post.content}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="border-purple-200 text-purple-600 rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.content}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Post Actions */}
            <div className="p-4 flex items-center justify-around border-t border-gray-100">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-purple-500 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Compartilhar</span>
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Motivational Card */}
      <div className="px-6 mt-6">
        <Card className="p-5 bg-gradient-to-r from-teal-400 to-emerald-400 border-0 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-5xl">💬</span>
            <div className="flex-1">
              <p className="text-white mb-1">Compartilhe suas ideias!</p>
              <p className="text-white/90">
                Inspire outras pessoas com suas ações sustentáveis
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-20">
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
