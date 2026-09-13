import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from './Cardsection';
import processdataObject from './Hooks';
import type { CardobjectTypelekhaholo } from './type';


const explore = () => {
  const { etaholoparameter, loadinghocchekina } = processdataObject();

  const [stack, setstack] = useState<CardobjectTypelekhaholo[]>([]);

  const addtostack = (tech: CardobjectTypelekhaholo) => {
    let alreadyache = false;

    for (let i = 0; i < stack.length; i++) {
      if (stack[i].id === tech.id) {
        alreadyache = true;
        break;
      }
    }

    if (alreadyache) {
      toast.warning( "already added");
      return;
    }

    setstack(function (prev) {
      return [...prev, tech];
    });

    toast.success('Add to stack successfully');
  };

  const removefromstack = (id: string) => {
    let stacthkeitemguloRemovekoraholo: CardobjectTypelekhaholo | undefined = undefined;

    for (let i = 0; i < stack.length; i++) {
      if (stack[i].id === id) {
        stacthkeitemguloRemovekoraholo = stack[i];
        break;
      }
    }

    setstack(function (prev) {
      return prev.filter(function (item) {
        return item.id !== id;
      });
    });

    if (stacthkeitemguloRemovekoraholo) {
      toast.info(stacthkeitemguloRemovekoraholo.name + 'remove');
    }
  };

  const removeall = () => {
    if (stack.length === 0) {
      return;
    }

    setstack([]);
    toast.info('remove all');
  };

  const explorepage = (
    <div className="container mx-auto px-[30px] my-[50px] md:my-[80px]">

      <div className="mb-[40px]">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1E293B]">
          Explore the <span className='[background-image:var(--brand-gradient)] bg-clip-text text-transparent'>
            Technologies
          </span>
        </h2>
        <p className="text-[#475569] mt-[10px] text-[16px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loadinghocchekina ? (
        <div className="w-full py-[80px] flex items-center justify-center text-[#475569] text-[16px] font-medium">
          Loading technologies...
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px]">

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {etaholoparameter.map(function (onybyonesendingitem) {
              const isalreadyadded = stack.some(function (item) {
                return item.id === onybyonesendingitem.id;
              });

              const cardelement = (
                <Card
                  key={onybyonesendingitem.id}
                  sendingprops={onybyonesendingitem}
                  isadded={isalreadyadded}
                  onaddclick={addtostack}
                />
              );

              return cardelement;
            })}
          </div>

          <div className="lg:col-span-3 border border-[#E5E7EB] rounded-[12px] p-[24px] bg-white h-fit">
            <h3 className="font-bold text-[18px] mb-[8px] text-[#1E293B]">Your Stack</h3>
            <p className="text-[14px] text-[#475569] mb-[16px]">
              {stack.length === 0
                ? 'No technologies selected yet.'
                : stack.length + ' Technology Selected'}
            </p>

            <div className="border-t border-[#E5E7EB] mt-[16px] pt-[16px]">
              {stack.length === 0 ? (
                <div className="border border-dashed border-[#E2E8F0] rounded-[10px] py-[24px]">
                  <p className="text-center text-sm text-gray-400">Your stack is empty.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-[12px]">
                  {stack.map(function (stackitem) {
                    const stackitemelement = (
                      <div
                        key={stackitem.id}
                        className="flex items-center justify-between border border-[#E5E7EB] rounded-[10px] p-[12px]"
                      >
                        <div className="flex items-center gap-[10px]">
                          <img src={stackitem.icon} alt={stackitem.name} className="w-[28px] h-[28px]" />
                          <div>
                            <p className="text-[14px] font-semibold text-[#1E293B]">{stackitem.name}</p>
                            <p className="text-[12px] text-[#94A3B8]">{stackitem.category}</p>
                          </div>
                        </div>
                        <button
                          onClick={function () {
                            removefromstack(stackitem.id);
                          }}
                          aria-label={stackitem.name + ' remove korun'}
                          className="text-[#94A3B8] hover:text-[#EF4444] transition-colors text-[16px]"
                        >
                          ✕
                        </button>
                      </div>
                    );

                    return stackitemelement;
                  })}
                </div>
              )}

              {stack.length > 0 && (
                <button
                  onClick={removeall}
                  className="w-full mt-[16px] border border-[#FCA5A5] text-[#EF4444] font-semibold text-[14px] py-[10px] rounded-[8px] hover:bg-red-50 transition-colors"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );

  return explorepage;
};

export default explore;
