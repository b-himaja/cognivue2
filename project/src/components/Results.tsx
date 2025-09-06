import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { AnalysisResult } from '../App';
import OverallScore from './OverallScore';
import RiskCards from './RiskCards';
import PatternScores from './PatternScores';
import KeyInsights from './KeyInsights';
import DarkPatterns from './DarkPatterns';

interface ResultsProps {
  result: AnalysisResult;
  onBackToSearch: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onBackToSearch }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'patterns'>('overview');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button and URL */}
      <div className="mb-8">
        <button
          onClick={onBackToSearch}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to search
        </button>
        <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-800/40 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Analysis Complete</h2>
          <p className="text-gray-400">Results for: <span className="text-white">{result.url}</span></p>
        </div>
      </div>

      {/* Overall Score */}
      <OverallScore score={result.overallScore} />

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-red-800/40">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-red-600 text-red-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('patterns')}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'patterns'
                  ? 'border-red-600 text-red-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              Dark Patterns
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <RiskCards
            highRisk={result.highRisk}
            mediumRisk={result.mediumRisk}
            goodPractices={result.goodPractices}
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <PatternScores scores={result.patternScores} />
            <KeyInsights insights={result.keyInsights} />
          </div>
        </div>
      )}

      {activeTab === 'patterns' && (
        <DarkPatterns patterns={result.darkPatterns} />
      )}
    </div>
  );
};

export default Results;