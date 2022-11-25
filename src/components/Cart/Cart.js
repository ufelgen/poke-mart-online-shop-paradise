export default function Cart({ array }) {
  return (
    <>
      <p>Warenkorb</p>
      <ul>
        {array.map(({ cost, name, sprites, id }) => (
          <li key={id}>
            <h2>{name}</h2>
            <img alt="pokepommes" src={sprites?.default} />
            <p>Price: {cost}</p>{" "}
            <button
              type="button"
              //  onClick={() => onDelete(id, }
            >
              löschen
            </button>
          </li>
        ))}
      </ul>
      <hr></hr>
    </>
  );
}
