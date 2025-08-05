import React from 'react';

const Loader = () => {
  const text = 'Vasthushilpi...';

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="flex text-4xl md:text-5xl font-extrabold text-green-400 tracking-widest">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className={`opacity-0 animate-fade-in`}
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
