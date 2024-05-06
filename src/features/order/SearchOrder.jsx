import React from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Search order by query
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="px-3 py-1 rounded-lg"
        type="text"
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
