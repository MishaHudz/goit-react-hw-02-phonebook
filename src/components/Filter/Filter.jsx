export function Filter({ handleChange, filter }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={handleChange}
          value={filter}
        />
      </label>
    </>
  );
}
