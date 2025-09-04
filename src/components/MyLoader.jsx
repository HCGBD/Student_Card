import { Loader } from "lucide-react";

function MyLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader className="animate-spin text-green-500" size={32} />
      <span className='text-xs text-muted-foreground'>Loading...</span>
    </div>
  );
}

export default MyLoader;
