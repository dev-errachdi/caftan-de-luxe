export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-2 border-brand-ivory" />
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-2 border-brand-gold border-t-transparent animate-spin" />
      </div>
    </div>
  );
}