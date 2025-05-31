import { cn } from "@/lib/utils";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  gitURL,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  gitURL?: string;
}) => {

  return (
    <div
      className={cn(
        " group/bento group/pin relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border  border-neutral-200 bg-white  p-4   dark:border-white/[0.2] dark:bg-black dark:shadow-none shadow-[0_0_25px_rgba(255,255,255,0.6)]  hover:border-purple-400  ",
        className,
        
      )}
    >
      
      
      {header}

      <div className=" group-hover/bento:translate-x-2">
      
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold  text-neutral-600 dark:text-neutral-200">
          <a href={gitURL} target="_blank" rel="noopener noreferrer">{title}</a>
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
      
      
    </div>
  );
};