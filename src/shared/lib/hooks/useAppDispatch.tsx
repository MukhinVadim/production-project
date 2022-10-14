import { AppDispatch } from 'app/providers/store/storeConfig';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
