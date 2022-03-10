const VARIABLE = "ciccio";
const json = require(`../src/${VARIABLE}.json`);

export default function Home() {
  return (
    <div>
      <h1>{json.name}</h1>
    </div>
  );
}
