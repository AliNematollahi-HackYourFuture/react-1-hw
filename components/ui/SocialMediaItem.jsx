export default function SocialMediaItem({ url, title, icon }) {
  return (
    <li>
      {icon ? <img height={25} src={icon} /> : ""}
      <a href={url}>{title}</a>
    </li>
  );
}
