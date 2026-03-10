// src/components/UserCard.tsx
// ─── Chapter 6: Component with API Fetch ────────────────────────
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  userId: number;
}

const UserCard = ({ userId }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
      })
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default UserCard;
