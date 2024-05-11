import { useState } from "react";

const Rank = () => {

const [selectedRank, setSelectedRank] = useState("S")


  return (
    <>
    Rank
<div className="flex items-center justify-center gap-10" role="group">
<button
  type="button"
  className={`w-14 h-14 rounded-2xl border-2 border-red-500 ${selectedRank === 'S' ? 'bg-red-500' : 'bg-red-100 hover:bg-red-500'}`}
  onClick={()=> setSelectedRank("S")}>
  S
</button>

<button
  type="button"
  className={`w-14 h-14 rounded-2xl border-2 border-orange-500 ${selectedRank === 'A' ? 'bg-orange-500' : 'bg-orange-100 hover:bg-orange-500'}`}
  onClick={()=> setSelectedRank("A")}>
  A
</button>
<button
  type="button"
  className={`w-14 h-14 rounded-2xl border-2 border-yellow-500 ${selectedRank === 'B' ? 'bg-yellow-500' : 'bg-yellow-100 hover:bg-yellow-500'}`}
  onClick={()=> setSelectedRank("B")}>
  B
</button>
<button
  type="button"
  className={`w-14 h-14 rounded-2xl border-2 border-green-500 ${selectedRank === 'C' ? 'bg-green-500' : 'bg-green-100 hover:bg-green-500'}`}
  onClick={()=> setSelectedRank("C")}>
  C
</button>
<button
  type="button"
  className={`w-14 h-14 rounded-2xl border-2 border-gray-500 ${selectedRank === 'D' ? 'bg-gray-500' : 'bg-gray-100 hover:bg-gray-500'}`}
  onClick={()=> setSelectedRank("D")}>
  D
</button>
</div>
    </>
  );}

export default Rank;
