export default function PulsatingBorder({ orientation = 'horizontal', className = '' }) {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div 
      className={`relative bg-zinc-200 overflow-hidden z-50 ${
        isHorizontal ? 'h-2 w-full' : 'w-2 h-full'
      } ${className}`}
    >
      <div 
        className={`absolute ${
          isHorizontal 
            ? 'h-full w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent' 
            : 'w-full h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent'
        }`}
        style={{
          animation: isHorizontal 
            ? 'slideHorizontal 2s ease-in-out infinite'
            : 'slideVertical 2s ease-in-out infinite',
        }}
      ></div>
    </div>
  );
}
  