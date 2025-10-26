import Character from "./Character";

export default function CharacterGroup({ value }: { value: string[] | string }) {
  const characters = Array.isArray(value) ? value : value.split('');
  return (
    <div className="cursor-pointer gap-1">
      {characters.map((character, index) => (
        <Character key={`${character}-${index}`} value={character} />
      ))}
    </div>
  );
}
