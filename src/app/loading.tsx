import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-t from-white via-amber-100 to-white flex flex-col items-center justify-center z-50">
      <div className="animate-pulse flex flex-col items-center gap-8">
        {/* Logo or Loading graphic */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-secondary opacity-70 animate-ping absolute inset-0"></div>
          <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center relative">
            <span className="text-4xl font-bold text-white">CRM</span>
          </div>
        </div>
        
        {/* Loading text with Persian content */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">در حال بارگذاری...</h2>
          <p className="text-gray-600">به همراه کارفرما خوش آمدید</p>
        </div>
        
        {/* Animated progress indicators */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 