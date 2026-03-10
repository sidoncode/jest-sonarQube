// src/App.tsx
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import LoginForm from './components/LoginForm';
import UserCard from './components/UserCard';
import Badge from './components/Badge';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ color: '#1E3A5F' }}>Jest + React TSX + Vite Demo</h1>
      <p style={{ color: '#555' }}>This app demonstrates all components covered in the tutorial.</p>
      <hr />

      <section>
        <h2 style={{ color: '#2E86AB' }}>Greeting (Chapter 4)</h2>
        <Greeting name="Sid" age={32} />
      </section>
      <hr />

      <section>
        <h2 style={{ color: '#2E86AB' }}>Counter (Chapter 5)</h2>
        <Counter />
      </section>
      <hr />

      <section>
        <h2 style={{ color: '#2E86AB' }}>Login Form (Chapter 5 & 6)</h2>
        <LoginForm onSubmit={(email, pw) => alert(`Submitted: ${email} / ${pw}`)} />
      </section>
      <hr />

      <section>
        <h2 style={{ color: '#2E86AB' }}>User Card from API (Chapter 6)</h2>
        <UserCard userId={1} />
      </section>
      <hr />

      <section>
        <h2 style={{ color: '#2E86AB' }}>Badge (Chapter 8 — Snapshots)</h2>
        <Badge type="success" label="Passed" />
        {' '}
        <Badge type="error" label="Failed" />
        {' '}
        <Badge type="warning" label="Warning" />
        {' '}
        <Badge type="info" label="Info" />
      </section>
    </div>
  );
}

export default App;
