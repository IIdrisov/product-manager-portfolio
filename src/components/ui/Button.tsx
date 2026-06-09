import { cn } from "@/lib/utils";

type ButtonVariant = "ghost" | "primary" | "outline" | "white" | "status";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  ghost:
    "hover:bg-primary/5 text-primary px-4 h-12 py-3 rounded-full text-base font-normal",
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/80 font-inter-tight px-6 h-12 py-3 rounded-full text-base",
  outline:
    "border-2 border-white/40 hover:bg-white/10 text-white font-inter-tight px-4 md:px-6 h-10 md:h-auto py-3 rounded-full text-base gap-2",
  white:
    "bg-white text-primary hover:bg-white/80 px-4 pl-1 md:pl-2 md:pr-5 h-9 md:h-auto py-3 rounded-full text-base gap-2",
  status:
    "bg-background text-primary px-4 md:px-6 h-10 md:h-auto py-3 rounded-full text-base gap-2 hover:bg-[#03F172] md:hover:bg-transparent",
};

export function Button({
  className,
  variant = "ghost",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
