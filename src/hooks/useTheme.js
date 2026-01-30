import { useContext } from 'react';
import { ThemeContext } from '../theme.Context.js';

export function useTheme() {
    return useContext(ThemeContext);
}