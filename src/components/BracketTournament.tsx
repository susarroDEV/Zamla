import { BracketCard } from "./BracketCard";
import { useState, useEffect } from "react";

interface Team {
  teamId: number
  teamName: string
  teamLogo: string
  teamMembers: string[]
  hasWon: boolean
}

type Match = [Team, Team]

const initialTeams : Team[] = [
    {
      teamId: 1,
      teamName: "EliteStorm",
      teamLogo: "/EliteStormLogo.png",
      teamMembers: ["RayoYTs", "Platinum", "Srp_Seba", "VerkoVax", "susarro72"],
      hasWon: true,
    },
    {
      teamId: 2,
      teamName: "Cuscurros Estresados",
      teamLogo: "/CuscurrosEstresadosLogo.png",
      teamMembers: ["LucasOA", "WateoWBK", "dadoxnt", "Slayer2426", "Blaster_Terror"],
      hasWon: true,
    },
    {
      teamId: 3,
      teamName: "Los Cebollitas",
      teamLogo: "/LosCebollitasLogo.png",
      teamMembers: ["Santi", "Fede", "Nico", "Nacho", "Mati"],
      hasWon: true,
    },
    {
      teamId: 4,
      teamName: "Los Pibes",
      teamLogo: "/LosPibesLogo.png",
      teamMembers: ["Joaquin", "Tomas", "Franco", "Lautaro", "Santiago"],
      hasWon: true,
    },
 ]


function generateRandomMatch(teams: Team[]): Match | null {
  if (teams.length < 2) {
    return null;
  }

  const randomIndices: number[] = [];
  while (randomIndices.length < 2) {
    const randomIndex = Math.floor(Math.random() * teams.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  return [teams[randomIndices[0]], teams[randomIndices[1]]];
}

function handleEndOfRound(teams: Team[], loser: Team): Team[] {
  return teams.filter(team => team.teamId !== loser.teamId);
}

export function BracketTournament() {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [currentMatch, setCurrentMatch] = useState<Match | null>(null);

  useEffect(() => {
    setCurrentMatch(generateRandomMatch(teams));
  }, [teams]);

  const handleLoser = (loser: Team) => {
    setTeams(handleEndOfRound(teams, loser));
  };

  return (
    <main>
      <h1>Bracket Tournament</h1>
      {currentMatch && (
        <>
          <BracketCard team1={currentMatch[0]} team2={currentMatch[1]} />
          <button onClick={() => handleLoser(currentMatch[0])}>Team 1 Loses</button>
          <button onClick={() => handleLoser(currentMatch[1])}>Team 2 Loses</button>
        </>
      )}
    </main>
  );
}