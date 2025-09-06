import React from 'react';

interface DarkPatternsProps {
  patterns: string[];
}

const DarkPatterns: React.FC<DarkPatternsProps> = ({ patterns }) => {
  return (
    <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-800/40 rounded-lg p-8">
      {patterns.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No deceptive patterns detected.</div>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Detected Dark Patterns</h3>
          <div className="space-y-4">
            {patterns.map((pattern, index) => (
              <div
                key={index}
                className="bg-red-950/30 border border-red-700/50 rounded-lg p-4"
              >
                <p className="text-gray-300">{pattern}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkPatterns;