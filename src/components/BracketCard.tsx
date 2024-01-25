
interface Team {
  teamName: string
  teamLogo: string
  teamMembers: string[]
}

export function BracketCard({ team }: { team: Team }) {

  const handleClick = () => {
    const listPlayers = document.getElementById(`list-players-of-${team.teamName}`)
    if (listPlayers) {
      listPlayers.classList.toggle("hidden")
    }
  }

  return (
    <article className='bracket-card flex m-20 p-2 justify-start items-end gap-5 relative'>
      <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-down-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 6h5l7 10h6" />
          <path d="M18 19l3 -3l-3 -3" />
        </svg>
      </button>
      <img src={team.teamLogo} alt={`The logo of the Team ${team.teamName}`} width={70} />
      <h2 className='w-20'>{team.teamName}</h2>
      <ul id={`list-players-of-${team.teamName}`} className="hidden absolute">
        {team.teamMembers.map((member: string) => (
          <li>{member}</li>
        ))}
      </ul>
      <div className='w-[275px] p-[2px] rounded-full bg-black absolute top-[80px] left-[25px]'/>
    </article>
  )
}