// Card Component Props
export interface CardProps {
  title: string;
  description: string;
  image?: string; // optional
}

// Button Component Props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}