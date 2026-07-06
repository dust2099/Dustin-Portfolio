import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
    const baseClasses = "w-20 h-8 flex items-center justify-center rounded-lg text-center transition transform duration-200 ease-in-out cursor-pointer hover:scale-110";
    
    const variantClasses = {
        primary: "bg-white text-black",
        secondary: "bg-gray-700 text-white",
        outline: "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white",
        ghost: "text-white hover:bg-white/20",
        link: "text-blue-400 hover:underline"
    };

    // 3. Concatenamos las clases base, las de la variante y las que pases por fuera
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}

export default Button;