import type { CardobjectTypelekhaholo } from './type';

interface cardsprops {
  sendingprops: CardobjectTypelekhaholo;
  isadded: boolean;
  onaddclick: (tech: CardobjectTypelekhaholo) => void;
}

const difficultycolor = (difficulty: CardobjectTypelekhaholo['difficulty']) => {
  if (difficulty === 'Beginner-Friendly') {
    return 'text-[#475569]';
  } else if (difficulty === 'Intermediate') {
    return 'text-[#475569]';
  } else {
    return 'text-[#475569]';
  }
};

const badgecolor = (badge: string | undefined) => {
  if (badge === 'Popular') {
    return 'bg-pink-50 text-pink-500';
  } else if (badge === 'Versatile') {
    return 'bg-green-50 text-green-600';
  } else if (badge === 'Fast') {
    return 'bg-orange-50 text-orange-600';
  } else if (badge === 'Standard') {
    return 'bg-emerald-50 text-emerald-600';
  } else if (badge === 'Top SQL') {
    return 'bg-blue-50 text-blue-600';
  } else if (badge === 'Cache') {
    return 'bg-red-50 text-red-600';
  } else if (badge === 'Ubiquitous') {
    return 'bg-amber-50 text-amber-600';
  } else if (badge === 'Essential') {
    return 'bg-sky-50 text-sky-600';
  } else if (badge === 'Robust') {
    return 'bg-slate-100 text-slate-500';
  } else if (badge === 'Modern') {
    return 'bg-cyan-50 text-cyan-600';
  } else if (badge === 'Containers') {
    return 'bg-indigo-50 text-indigo-600';
  } else {
    return 'bg-pink-50 text-pink-500';
  }
};

const cards = ({ sendingprops, isadded, onaddclick }: cardsprops) => {
  const handleaddclick = () => {
    if (!isadded) {
      onaddclick(sendingprops);
    }
  };

  const difficultytextcolor = difficultycolor(sendingprops.difficulty);
  const badgeclassname = badgecolor(sendingprops.badge);

  const buttonclassname = isadded
    ? 'w-full py-[10px] rounded-[8px] font-semibold text-[14px] transition-colors bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
    : 'w-full py-[10px] rounded-[8px] font-semibold text-[14px] transition-colors bg-[#0F172A] text-white hover:bg-gray-800';

  const cardui = (
    <div className="border border-[#E5E7EB] rounded-[16px] p-[24px] bg-white hover:shadow-md transition-shadow">

      <div className="flex justify-between items-start mb-[16px]">
        <img src={sendingprops.icon} alt={sendingprops.name} className="w-[48px] h-[48px]" />

        {sendingprops.badge && (
          <span className={'text-[12px] font-bold px-[12px] py-[4px] rounded-full ' + badgeclassname}>
            {sendingprops.badge}
          </span>
        )}
      </div>

      <h3 className="font-bold text-[20px] mb-[8px] text-[#1E293B]">{sendingprops.name}</h3>
      <p className="text-[#475569] text-[14px] leading-relaxed mb-[20px] line-clamp-3">
        {sendingprops.description}
      </p>

      <div className="flex justify-between items-center text-[13px] font-medium text-[#64748B] mb-[20px]">
        <span className="bg-[#F1F5F9] text-[#475569] px-[10px] py-[3px] rounded-full">
          {sendingprops.category}
        </span>
        <span className={'font-semibold ' + difficultytextcolor}>
          {sendingprops.difficulty}
        </span>
        <span className="flex items-center gap-[4px] text-[#F59E0B] font-bold">
          ⭐ {sendingprops.rating}
        </span>
      </div>

      <button onClick={handleaddclick} disabled={isadded} className={buttonclassname}>
        {isadded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );

  return cardui;
};

export default cards;
