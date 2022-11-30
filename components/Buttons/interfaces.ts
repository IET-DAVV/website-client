export interface IBasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  classes?: string[];
  variant?: 'filled' | 'outlined' | 'text';
}
