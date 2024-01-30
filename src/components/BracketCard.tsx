
interface Team {
  teamName: string
  teamLogo: string
  teamMembers: string[]
}

export function BracketCard({ team1, team2 }: { team1: Team, team2?: Team }) {
  return (
    <article className='bg-violet-950  flex-col w-[300px] border-black border-4 rounded-s-3xl rounded-e-lg overflow-hidden text-violet-50'>
      <section className='border-b-2 border-black flex gap-[5px] '>
        <img src={team1.teamLogo} alt={`The logo of the team ${team1.teamName}`} width={50} />
        <h6 className=' my-4'>
          {team1.teamName}
        </h6>
      </section>
      
      {team2 && <section className='flex gap-[5px]'>
        <img src={team2.teamLogo} alt={`The logo of the team ${team2.teamName}`} width={50} />
        <h6 className='my-4'>
          {team2.teamName}
        </h6>
      </section>}
    </article>
  )
}