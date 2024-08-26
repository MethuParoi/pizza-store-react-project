import { useState } from 'react';
import Button from "../../ui/Button";
import { UpdateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(UpdateName(username));
    navigate("/menu");
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <p className="text-xl mx-auto font-semibold w-[20rem] sm:w-full">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          className="input w-[20rem] sm:w-[30rem] mt-4"
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {username !== "" && (
          <div className="mt-8">
            <Button type="primary">Start ordering</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;
