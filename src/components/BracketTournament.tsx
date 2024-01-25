import { BracketCard } from "./BracketCard";

const teams = [
  {
    teamName: "EliteStorm",
    teamLogo: "/EliteStormLogo.png",
    teamMembers: ["RayoYTs", "Platinum", "Srp_Seba", "VerkoVax", "susarro72"]
  },
  {
    teamName: "Cuscurros Estresados",
    teamLogo: "/CuscurrosEstresadosLogo.png",
    teamMembers: ["LucasOA", "WateoWBK", "dadoxnt", "Slayer2426", "Blaster_Terror"]
  }
]

export function BracketTournament() {
  return (
    <main>
      <div className="relative h-auto bg-slate-500">
        <div className='relative h-auto'>
          <BracketCard 
            team = { teams[0] }
          />
          <div className=' h-[170px] p-[2px] bg-black absolute top-[80px] left-[376px]'/>
          <BracketCard
            team = { teams[1] }
          />
        </div>
        <BracketCard
          team = { teams[0] }
        />
      </div>
    </main>

  )
}

