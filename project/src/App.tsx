import React, { useState } from 'react';
import { Eye, AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import UrlInputForm from './components/UrlInputForm';
import Results from './components/Results';

export interface AnalysisResult {
  url: string;
  overallScore: number;
  highRisk: number;
  mediumRisk: number;
  goodPractices: number;
  patternScores: {
    name: string;
    score: number;
    maxScore: number;
  }[];
  keyInsights: string[];
  darkPatterns: string[];
}

function App() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async (url: string) => {
    setIsAnalyzing(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        url,
        overallScore: 3.3,
        highRisk: 0,
        mediumRisk: 0,
        goodPractices: 6,
        patternScores: [
          { name: "Pre-Checked Consent Box", score: 30, maxScore: 100 },
          { name: "Upselling", score: 40, maxScore: 100 },
          { name: "Roach Motel", score: 30, maxScore: 100 }
        ],
        keyInsights: ["No critical insights to show."],
        darkPatterns: []
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleBackToSearch = () => {
    setAnalysisResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {!analysisResult && !isAnalyzing && (
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Eye className="w-12 h-12 text-red-600 mr-4" />
                  <div className="absolute -top-1 -left-1 w-14 h-14 border-2 border-red-600 rounded-full opacity-30"></div>
                </div>
                <h1 className="text-5xl font-bold">Cognivue</h1>
              </div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Uncover deceptive patterns and persuasive language across the web. Enter a URL to begin your analysis.
              </p>
            </div>

            {/* URL Input Form */}
            <UrlInputForm onAnalyze={handleAnalyze} />
          </div>
        )}

        {isAnalyzing && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-800/40 rounded-lg p-12">
              <div className="animate-spin w-16 h-16 border-4 border-red-600/30 border-t-red-600 rounded-full mx-auto mb-6"></div>
              <h2 className="text-2xl font-semibold mb-4">Analyzing Website...</h2>
              <p className="text-gray-400">Scanning for dark patterns and deceptive techniques</p>
            </div>
          </div>
        )}

        {analysisResult && (
          <Results result={analysisResult} onBackToSearch={handleBackToSearch} />
        )}
      </div>
    </div>
  );
}

export default App;