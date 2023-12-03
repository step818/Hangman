export default function PlayButton({ title, image, description, onClickitty }) {
  return (
    <div>
      <button onClick={onClickitty}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </button>
    </div>
  );
}
