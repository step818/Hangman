export default function PlayButton({ title, image, description }) {
  return (
    <div>
      <button>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </button>
    </div>
  );
}
