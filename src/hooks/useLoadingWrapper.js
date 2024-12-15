import { setIsLoadingAction } from '@redux/loading/loadingSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useLoadingWrapper = () => {
  const d = useDispatch();

  return useCallback(
    async (cb) => {
      try {
        d(setIsLoadingAction(true));
        await cb();
      } catch (error) {
        // eslint-disable-next-line
        console.log(error.message);
      } finally {
        d(setIsLoadingAction(false));
      }
    },
    [d]
  );
};
