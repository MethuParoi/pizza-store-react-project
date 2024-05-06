import { useState } from 'react';

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
        className="border border-gray-300 p-2 w-[25rem] rounded-lg mt-4"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div className="mt-8">
          <button className="px-6 py-3 bg-yellow-500 border-transparent rounded-2xl text-yellow-50 text-lg font-semibold hover:bg-yellow-600 hover:text-yellow-100">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
