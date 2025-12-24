"use client";

type DashboardCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export default function DashboardCard({
  title,
  description,
  onClick,
}: DashboardCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 
                 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}
