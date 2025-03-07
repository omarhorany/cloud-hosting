import { TbLoader3 } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <TbLoader3 className="w-24 h-24 text-purple-400 animate-spin" />
    </div>
  );
}
