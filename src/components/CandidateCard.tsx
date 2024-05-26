
import { Candidate } from "./candidates";

interface CandidateCardProps {
  candidate: Candidate;
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
    const showAlert = () => {
        alert(`Name Kandidat : ${candidate.name}\n Nomor Urut : ${candidate.number}\n\n Ayo Tentukan Pilihan Kalian!\n Tumbuhkan Semangat, Wujudkan Perubahan!\n`);
      };
    
    
  return (
    <div className="bg-blue-100 border border-[#141010] p-5 rounded-lg w-[320px] text-center shadow-md  transition-shadow duration-200 hover:shadow-lg hover:scale-105">
      <div className=" ">
        <p className='text-4xl text-blue-700 bg-white font-bold '>{candidate.number}</p>
        <img src={candidate.photo} alt={candidate.name} />
      </div>
      <h2 className="text-xl font-bold">{candidate.name}</h2>
      <h3  className="text-xl font-bold">{candidate.year}</h3>
      <button className="bg-white border text-red-700 border-[#141010] p-1 duration-200 hover:shadow-lg hover:scale-105" onClick={() => showAlert()}>Lihat Selengkapnya</button>

    </div>
  );
}
