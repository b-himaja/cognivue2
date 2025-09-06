import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react';

interface RiskCardsProps {
  highRisk: number;
  mediumRisk: number;
  goodPractices: number;
}

const RiskCards: React.FC<RiskCardsProps> = ({ highRisk, mediumRisk, goodPractices }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* High Risk */}
      <div className="bg-gradient-to-br from-red-950/50 to-red-900/20 border border-red-700/60 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-red-400">High Risk</h4>
          <AlertCircle className="w-5 h-5 text-red-400" />
        </div>
        <div className="text-3xl font-bold text-red-400 mb-2">{highRisk}</div>
        <p className="text-sm text-red-400/80">Critical patterns detected</p>
      </div>

      {/* Medium Risk */}
      <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-900/15 border border-yellow-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-yellow-400">Medium Risk</h4>
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
        </div>
        <div className="text-3xl font-bold text-yellow-400 mb-2">{mediumRisk}</div>
        <p className="text-sm text-yellow-400/80">Moderate patterns found</p>
      </div>

      {/* Good Practices */}
      <div className="bg-gradient-to-br from-green-900/40 to-green-900/15 border border-green-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-green-400">Good Practices</h4>
          <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
        <div className="text-3xl font-bold text-green-400 mb-2">{goodPractices}</div>
        <p className="text-sm text-green-400/80">Ethical design elements</p>
      </div>
    </div>
  );
};

export default RiskCards;