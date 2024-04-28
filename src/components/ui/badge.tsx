import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "shadow-text inline-flex select-none items-center justify-center rounded-full px-4 py-2 font-semibold capitalize text-white",
  {
    variants: {
      variant: {
        normal: "bg-[#A8A77A]",
        fire: "bg-[#EE8130]",
        water: "bg-[#6390F0]",
        electric: "bg-[#F7D02C]",
        grass: "bg-[#7AC74C]",
        ice: "bg-[#96D9D6]",
        fighting: "bg-[#C22E28]",
        poison: "bg-[#A33EA1]",
        ground: "bg-[#E2BF65]",
        flying: "bg-[#A98FF3]",
        psychic: "bg-[#F95587]",
        bug: "bg-[#A6B91A]",
        rock: "bg-[#B6A136]",
        ghost: "bg-[#735797]",
        dragon: "bg-[#6F35FC]",
        dark: "bg-[#705746]",
        steel: "bg-[#B7B7CE]",
        fairy: "bg-[#D685AD]",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
