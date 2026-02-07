// "use client";

// type DashboardCardProps = {
//   title: string;
//   description: string;
//   onClick: () => void;
// };

// export default function DashboardCard({
//   title,
//   description,
//   onClick,
// }: DashboardCardProps) {
//   return (
//     <div
//       onClick={onClick}
//       className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 
//                  hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
//     >
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">
//         {title}
//       </h2>

//       <p className="text-gray-600 text-sm">
//         {description}
//       </p>
//     </div>
//   );
// }

"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/context/LanguageContext";

type DashboardCardProps = {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  onClick: () => void;
};

export default function DashboardCard({
  titleKey,
  descriptionKey,
  onClick,
}: DashboardCardProps) {
  const { t } = useLanguage();

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 
                 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {t(titleKey)}
      </h2>

      <p className="text-gray-600 text-sm">
        {t(descriptionKey)}
      </p>
    </div>
  );
}

