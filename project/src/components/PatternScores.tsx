import React from 'react';

interface PatternScore {
  name: string;
  score: number;
  maxScore: number;
}

interface PatternScoresProps {
  scores: PatternScore[];
}

const PatternScores: React.FC<PatternScoresProps> = ({ scores }) => {
  return (
    <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-800/40 rounded-lg p-6">
      <h4 className="text-lg font-semibold mb-6">Pattern Scores</h4>
      <div className="space-y-6">
        {scores.map((pattern, index) => {
          const percentage = (pattern.score / pattern.maxScore) * 100;
          return (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">{pattern.name}</span>
                <span className="text-sm text-gray-400">{pattern.score}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-red-700 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatternScores;