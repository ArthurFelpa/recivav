import { ArrowLeft, Moon, Sun, Bell, Globe, Shield, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-slate-600 pt-12 pb-6 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white mb-1">Configurações</h2>
            <p className="text-white/80">Personalize seu aplicativo</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Account Section */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">Conta</h3>
          <Card className="p-0 bg-white border-0 shadow-sm overflow-hidden">
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-2xl">👧</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-800">Maria Silva</p>
                <p className="text-gray-500">maria.silva@email.com</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </Card>
        </div>

        {/* Appearance Section */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">Aparência</h3>
          <Card className="p-0 bg-white border-0 shadow-sm overflow-hidden divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Sun className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-800">Modo Claro</p>
                  <p className="text-gray-500">Tema do aplicativo</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Moon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-800">Modo Escuro</p>
                  <p className="text-gray-500">Ativar à noite</p>
                </div>
              </div>
              <Switch />
            </div>
          </Card>
        </div>

        {/* Notifications Section */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">Notificações</h3>
          <Card className="p-0 bg-white border-0 shadow-sm overflow-hidden divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-gray-800">Lembretes Diários</p>
                  <p className="text-gray-500">Receber lembretes para estudar</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <p className="text-gray-800">Avisos de Sequência</p>
                  <p className="text-gray-500">Manter sua sequência ativa</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <div>
                  <p className="text-gray-800">Atividade da Comunidade</p>
                  <p className="text-gray-500">Novos posts e comentários</p>
                </div>
              </div>
              <Switch />
            </div>
          </Card>
        </div>

        {/* Language & Region */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">Idioma e Região</h3>
          <Card className="p-0 bg-white border-0 shadow-sm overflow-hidden">
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-gray-800">Idioma</p>
                  <p className="text-gray-500">Português (Brasil)</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </Card>
        </div>

        {/* Privacy & Support */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">Privacidade e Suporte</h3>
          <Card className="p-0 bg-white border-0 shadow-sm overflow-hidden divide-y divide-gray-100">
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-gray-800">Privacidade</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-gray-800">Central de Ajuda</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </Card>
        </div>

        {/* About */}
        <div>
          <Card className="p-0 bg-white border-0 shadow-sm overflow-hidden">
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">ℹ️</span>
                </div>
                <div className="text-left">
                  <p className="text-gray-800">Sobre o EcoLingo</p>
                  <p className="text-gray-500">Versão 1.0.0</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </Card>
        </div>

        {/* Logout */}
        <Card className="p-0 bg-white border-0 shadow-sm overflow-hidden">
          <button className="w-full p-4 flex items-center gap-3 hover:bg-red-50 transition-colors">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-red-600">Sair da conta</p>
          </button>
        </Card>

        {/* Info Card */}
        <Card className="p-5 bg-gradient-to-r from-emerald-400 to-green-500 border-0 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-5xl">🌍</span>
            <div className="flex-1">
              <p className="text-white mb-1">Continue aprendendo!</p>
              <p className="text-white/90">
                Cada dia aprendendo é um passo para salvar o planeta
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
