'use client';

import React, { useState } from "react";
import axios from "axios";

export const Calculator: React.FC = () => {
  const [numBookmakers, setNumBookmakers] = useState<number>(1);
  const [odds, setOdds] = useState<number[][]>([[1.0, 1.0, 1.0]]);
  const [deposits, setDeposits] = useState<number[]>([500]);
  const [result, setResult] = useState<any>(null);

  const handleNumBookmakersChange = (value: number) => {
    setNumBookmakers(value);
    const newOdds = Array.from({ length: value }, (_, i) => odds[i] || [1.0, 1.0, 1.0]);
    const newDeposits = Array.from({ length: value }, (_, i) => deposits[i] || 500);
    setOdds(newOdds);
    setDeposits(newDeposits);
  };

  const handleOptimize = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/optimize", {
        num_bookmakers: numBookmakers,
        odds: odds,
        deposits: deposits,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error optimizing bet distribution:", error);
    }
  };

  const handleOddsChange = (index: number, outcome: number, value: number) => {
    const newOdds = [...odds];
    newOdds[index][outcome] = value;
    setOdds(newOdds);
  };

  const handleDepositChange = (index: number, value: number) => {
    const newDeposits = [...deposits];
    newDeposits[index] = value;
    setDeposits(newDeposits);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Bet Optimization</h1>
        <label className="block mb-2">
          Number of Bookmakers:
          <input
            type="number"
            value={numBookmakers}
            onChange={(e) => handleNumBookmakersChange(parseInt(e.target.value))}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            min="1"
            max="15"
          />
        </label>

        {Array.from({ length: numBookmakers }).map((_, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg font-bold mb-2">Bookmaker {index + 1}</h2>
            <label className="block mb-2">
              Outcome 1 Odds:
              <input
                type="number"
                value={odds[index][0]}
                onChange={(e) => handleOddsChange(index, 0, parseFloat(e.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                step="0.01"
                min="1"
              />
            </label>
            <label className="block mb-2">
              Draw Odds:
              <input
                type="number"
                value={odds[index][1]}
                onChange={(e) => handleOddsChange(index, 1, parseFloat(e.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                step="0.01"
                min="1"
              />
            </label>
            <label className="block mb-2">
              Outcome 2 Odds:
              <input
                type="number"
                value={odds[index][2]}
                onChange={(e) => handleOddsChange(index, 2, parseFloat(e.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                step="0.01"
                min="1"
              />
            </label>
            <label className="block mb-2">
              Deposit Amount:
              <input
                type="number"
                value={deposits[index]}
                onChange={(e) => handleDepositChange(index, parseFloat(e.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                step="0.01"
                min="0"
              />
            </label>
          </div>
        ))}

        <button
          onClick={handleOptimize}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Optimize
        </button>

        {result && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Optimal Distribution</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
