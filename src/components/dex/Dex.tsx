import Rank from "components/rank/Rank";
import { useEffect, useState } from "react";

const Dex = () => {

    
const [beers, setBeers] = useState<object[]>();

const [orderedBeers, setOrderedBeers ] = useState<object[][]>([[],[],[],[],[]]);

const afficherNom = (nom: any) => {

  console.log(nom)

  }
  localStorage.setItem("myBiere", JSON.stringify([{id : 0, name: "caca", color : '58', rank : "S"}, {id : 1, name: "pipi", color : '38', rank : "A"}]))
  useEffect(() => {
    
    if(localStorage.getItem('myBiere')==null){
    }else{
      const temp =JSON.parse(localStorage.getItem('myBiere')!)
      setBeers([...temp]);  
      console.log(orderedBeers);

        beers?.forEach(beer => {
            switch(beer.rank){
                case "S":
                    orderedBeers[0].push({id : beer.id, name : beer.name});
                    break;
                case "A":
                    orderedBeers[1].push({id : beer.id, name : beer.name});
                    break;
                case "B":
                    orderedBeers[2].push({id : beer.id, name : beer.name});
                    break;
                case "C":
                    orderedBeers[3].push({id : beer.id, name : beer.name});
                    break;
                case "D":
                    orderedBeers[4].push({id : beer.id, name : beer.name});
                    break;
                default:
                    break;
            }
        });
    }
  }, []);


  return (
    <>
        <div className="w-full min-h-14 flex border-2 border-black">
            <div className="bg-red-500 w-14 flex items-center justify-center shrink-0">
                <p>S</p>
            </div>
            <div>
                {orderedBeers[0]!.map(beer => (
                <button className="btn btn-outline btn-primary" key={beer.id}>{beer.name}</button>
                ))}
            </div>
        </div>
        <div className="w-full min-h-14 flex border-2 border-black">
            <div className="bg-orange-500 w-14 flex items-center justify-center shrink-0">
                <p>A</p>
            </div>
            <div>
            {orderedBeers[1]!.map(beer => (
                <button className="btn btn-outline btn-primary" key={beer.id}>{beer.name}</button>
                ))}
            </div>
        </div>
        <div className="w-full min-h-14 flex border-2 border-black">
            <div className="bg-yellow-500 w-14 flex items-center justify-center shrink-0">
                <p>B</p>
            </div>
            <div>
            {orderedBeers[2]!.map(beer => (
                <button className="btn btn-outline btn-primary" key={beer.id}>{beer.name}</button>
                ))}
            </div>
        </div>
        <div className="w-full min-h-14 flex border-2 border-black">
            <div className="bg-green-500 w-14 flex items-center justify-center shrink-0">
                <p>C</p>
            </div>
            <div>
            {orderedBeers[3]!.map(beer => (
                <button className="btn btn-outline btn-primary" key={beer.id}>{beer.name}</button>
                ))}
            </div>
        </div>
        <div className="w-full min-h-14 flex border-2 border-black">
            <div className="bg-blue-500 w-14 flex items-center justify-center shrink-0">
                <p>D</p>
            </div>
            <div>
            {orderedBeers[4]!.map(beer => (
                <button className="btn btn-outline btn-primary" key={beer.id}>{beer.name}</button>
                ))}
            </div>
        </div>
    </>
  );}

export default Dex;
