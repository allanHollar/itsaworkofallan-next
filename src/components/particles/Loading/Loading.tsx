"use client";

const LoadingThreeDotsJumping = () => {
  return (
    <div className="flex justify-center items-center gap-2 h-24">
      <span className="bg-[#A59D84] animate-jump delay-0 dot" />
      <span className="bg-[#DED0B6] animate-jump delay-100 dot" />
      <span className="bg-[#d9b89c] animate-jump delay-200 dot" />
      <style>
        {`
          .dot {
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            display: inline-block;
          }

          @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          .animate-jump {
            animation: jump 0.6s ease-in-out infinite;
          }

          .delay-0 { animation-delay: 0s; }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
};

export default LoadingThreeDotsJumping;
