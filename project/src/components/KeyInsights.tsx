import React from 'react';
import { Info } from 'lucide-react';

interface KeyInsightsProps {
  insights: string[];
}

const KeyInsights: React.FC<KeyInsightsProps> = ({ insights }) => {
  return (
    <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-800/40 rounded-lg p-6">
      <h4 className="text-lg font-semibold mb-6">Key Insights</h4>
      {insights.length > 0 ? (
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-300">{insight}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">No critical insights to show.</p>
      )}
    </div>
  );
};

export default KeyInsights;