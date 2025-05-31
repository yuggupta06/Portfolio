import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { PinPerspective } from "../pin3d/3dpin";
import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          gitURL={item.gitURL}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ imageURL, gitURL }: { imageURL: string, gitURL: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={imageURL}
      alt="Project Preview"
      className="w-full h-full object-cover rounded-xl"
    />
      <PinPerspective 
        title={gitURL} href={gitURL} />
  </div>
);
const items = [
    {
      title: "Big Bear Farm Clone",
      gitURL:"https://github.com/yuggupta06/BigBearFarmCloneWebsite",
    description: "Fresh homemade jams, pickles, and preserves crafted with love.",
    header: <Skeleton imageURL="/images/big-bear.png" gitURL="https://github.com/yuggupta06/BigBearFarmCloneWebsite"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Media Insights Agent",
    gitURL:"https://github.com/yuggupta06/Social-Media-Insights-AI-Agent",
    description: "Analyzes social media data to uncover trends and audience behavior.",
    header: <Skeleton imageURL="/images/langflow.png" gitURL="https://github.com/yuggupta06/Social-Media-Insights-AI-Agent" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Arcane Combat",
    gitURL:"https://github.com/yuggupta06/Arcane-Combat",
    description: "Master elemental spells and combos in thrilling, fast-paced duels that test your skill and strategy.",
    header: <Skeleton imageURL="/images/arcane.png" gitURL="https://github.com/yuggupta06/Arcane-Combat" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Super-Pirate-World",
    gitURL:"https://github.com/yuggupta06/Super-Pirate-World",
    description: "Adventure through wild seas in this epic, treasure-hunting pirate game.",
    header: <Skeleton imageURL="/images/super-pirate.png" gitURL="https://github.com/yuggupta06/Super-Pirate-World" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Simon Game",
    gitURL:"https://github.com/yuggupta06/simon_",
    description: "Simon: Master the flashing colors, beat the impossible memory challenge!",
    header: <Skeleton imageURL="/images/simon.png" gitURL="https://github.com/yuggupta06/simon_" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
    {
    title: "Library Management System",
    gitURL:"https://github.com/yuggupta06/Library-Management-System",
    description: "Smart system to track books, users, and library activity.",
    header: <Skeleton imageURL="/images/library.jpg" gitURL="https://github.com/yuggupta06/Library-Management-System" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    gitURL:"https://github.com/yuggupta06/The-Spirit-of-Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageURL="dcv" gitURL={""}/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
  // <BentoGrid className="max-w-4xl mx-auto">
  //             {items.map((item, i) => (
  //               <PinContainer
  //             title="/ui.aceternity.com"
  //             href="https://twitter.com/mannupaaji"
  //           >
  //             <BentoGridItem
  //               key={i}
  //               title={item.title}
  //               gitURL={item.gitURL}
  //               description={item.description}
  //               header={item.header}
  //               icon={item.icon}
  //               className={i === 3 || i === 6 ? "md:col-span-2" : ""}
  //             />
  //           </PinContainer>
  //         ))}
  //   </BentoGrid>