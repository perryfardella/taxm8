export function LoadingDots() {
  return (
    <div className="flex gap-1">
      <div
        className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <div
        className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <div
        className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}
