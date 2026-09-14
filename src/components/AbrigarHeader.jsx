import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AbrigarHeader({ title, image }) {
  const imageUrl = useBaseUrl(image);

  return (
    <div
      className="abr-header"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1>{title}</h1>
    </div>
  );
}