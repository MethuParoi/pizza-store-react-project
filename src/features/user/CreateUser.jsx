import { useState } from 'react';
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-xl font-semibold">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input w-[30rem] mt-4"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div className="mt-8">
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
