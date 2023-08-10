import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean; // o ponto de interrogação significa opicional, esse componente não tem obrigação de receber esse tipo.
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}