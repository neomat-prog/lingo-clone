import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  disabled,
  onClick,
  active,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 border-gray-200 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-4 transition-all duration-200 ease-in-out min-h-[200px] min-w-[180px] sm:min-h-[217px] sm:min-w-[200px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="w-full flex items-center justify-end h-6">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <CheckIcon className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>

      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-lg drop-shadow-md border border-gray-200 object-cover w-24 h-16 sm:w-28 sm:h-20"
      />

      <p className="text-neutral-700 text-center font-bold mt-4 text-sm sm:text-base">
        {title}
      </p>
    </div>
  );
};
