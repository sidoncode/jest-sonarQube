// src/components/Greeting.tsx
// ─── Chapter 4: Simple Component ────────────────────────────────
interface Props {
  name: string;
  age?: number;
}

const Greeting = ({ name, age }: Props) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age !== undefined && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;
