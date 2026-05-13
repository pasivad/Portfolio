export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  download?: string | boolean;
  target?: string;
  rel?: string;
  className?: string;
  href?: string;
};
