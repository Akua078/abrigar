import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AbrigarHeader({ title, image, imagePosition = 'center' }) {
  const imageUrl = useBaseUrl(image);

  return (
    <div
      className="abr-header"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: imagePosition,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}