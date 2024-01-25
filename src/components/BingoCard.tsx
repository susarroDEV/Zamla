
export function BingoCard(src: string, name: string, description: string) {
  return (
    <td>
      <img src={src} alt={`The Image Representing the ${name} Advancement`}/>
      <div>
        <h3>{ name }</h3>
        <p>{ description }</p>
      </div>
    </td>
  )
}