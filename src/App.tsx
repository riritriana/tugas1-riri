import React from "react";
import CandidateCard from "./components/CandidateCard";
import { candidates } from "./components/candidates";

const App: React.FC = () => {
  return (
    <div> 
      <div className="text-center p-8 "> 
        <h1 className="text-5xl p-6">PEMILIHAN KETUA OSIS</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default App;
