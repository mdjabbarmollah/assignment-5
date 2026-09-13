import { useState, useEffect } from 'react';
import type { CardobjectTypelekhaholo } from './type';

const jsonfilethekedatar_requestdeya_ooseta_process_kore_return_kora = () => {
  const [etaholoparameter, etaHolofunciton] = useState<CardobjectTypelekhaholo[]>([]);
  const [loadinghocchekina, loadingsetkorarjonno] = useState<boolean>(true);

  useEffect(() => {

    loadingsetkorarjonno(true);//tr

    fetch('/JsondataFromAi.json')
      .then((res) => res.json())

      .then((data) => etaHolofunciton(data))
      
      .catch((err) => console.error('Data load e problem hoyeche:', err))

      .finally(() => loadingsetkorarjonno(false));
  }, []);

  return { etaholoparameter, loadinghocchekina };
};

export default jsonfilethekedatar_requestdeya_ooseta_process_kore_return_kora;