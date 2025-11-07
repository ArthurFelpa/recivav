import { useState } from 'react';
import { ArrowLeft, Check, X, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';

interface LearningScreenProps {
  onNavigate: (screen: string) => void;
}

export function LearningScreen({ onNavigate }: LearningScreenProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      type: 'multiple-choice',
      question: 'Qual cor de lixeira é usada para papel?',
      mascot: '📄',
      options: ['Verde', 'Azul', 'Vermelho', 'Amarelo'],
      correctAnswer: 1,
    },
    {
      type: 'multiple-choice',
      question: 'Quanto tempo leva para uma garrafa plástica se decompor?',
      mascot: '♻️',
      options: ['1 ano', '10 anos', '100 anos', '450 anos'],
      correctAnswer: 3,
    },
    {
      type: 'multiple-choice',
      question: 'Qual energia é renovável?',
      mascot: '☀️',
      options: ['Carvão', 'Petróleo', 'Solar', 'Gás natural'],
      correctAnswer: 2,
    },
  ];

  const currentQuestion = questions[questionIndex];
  const progress = ((questionIndex + 1) / questions.length) * 100;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    const correct = index === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 10);
    }

    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        // Quiz completed
        setTimeout(() => {
          onNavigate('home');
        }, 1500);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-3">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1">
            <Progress value={progress} className="h-3 bg-gray-200" />
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 rounded-full px-3 py-1">
            <span className="text-emerald-600">⚡</span>
            <span className="text-emerald-600">{score}</span>
          </div>
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={questionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="p-6"
        >
          {/* Mascot */}
          <div className="text-center mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="inline-block text-7xl mb-4"
            >
              {currentQuestion.mascot}
            </motion.div>
          </div>

          {/* Question Text */}
          <Card className="p-6 bg-white border-0 shadow-lg mb-6">
            <div className="flex items-start gap-3">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Volume2 className="w-5 h-5 text-blue-500" />
              </Button>
              <p className="text-gray-800 flex-1">
                {currentQuestion.question}
              </p>
            </div>
          </Card>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const showResult = isSelected && isCorrect !== null;
              const isWrong = showResult && !isCorrect;
              const isRight = showResult && isCorrect;
              const showCorrect = selectedAnswer !== null && index === currentQuestion.correctAnswer;

              return (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => selectedAnswer === null && handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`
                      w-full h-auto p-4 rounded-2xl border-2 transition-all
                      ${isSelected && !showResult ? 'border-blue-500 bg-blue-50' : ''}
                      ${isWrong ? 'border-red-500 bg-red-50' : ''}
                      ${isRight || showCorrect ? 'border-emerald-500 bg-emerald-50' : ''}
                      ${!isSelected && !showCorrect ? 'border-gray-300 bg-white hover:bg-gray-50' : ''}
                    `}
                    variant="outline"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`
                        ${isRight || showCorrect ? 'text-emerald-700' : ''}
                        ${isWrong ? 'text-red-700' : ''}
                        ${!showResult && !showCorrect ? 'text-gray-700' : ''}
                      `}>
                        {option}
                      </span>
                      {isRight || showCorrect ? (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      ) : null}
                      {isWrong ? (
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <X className="w-4 h-4 text-white" />
                        </div>
                      ) : null}
                    </div>
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {isCorrect !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`
                  mt-6 p-4 rounded-2xl
                  ${isCorrect ? 'bg-emerald-100 border-2 border-emerald-300' : 'bg-red-100 border-2 border-red-300'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {isCorrect ? '🎉' : '😅'}
                  </span>
                  <div>
                    <p className={isCorrect ? 'text-emerald-700' : 'text-red-700'}>
                      {isCorrect ? 'Excelente!' : 'Quase lá!'}
                    </p>
                    <p className={isCorrect ? 'text-emerald-600' : 'text-red-600'}>
                      {isCorrect 
                        ? 'Você ganhou 10 pontos!' 
                        : 'Continue praticando!'}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Completion Message */}
          {questionIndex === questions.length - 1 && isCorrect !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 text-center"
            >
              <div className="text-6xl mb-3">🏆</div>
              <h3 className="text-emerald-600 mb-2">Lição Concluída!</h3>
              <p className="text-gray-600">Você ganhou {score} pontos</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
