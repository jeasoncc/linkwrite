import { initDatabaseFunction } from 'db';
import { createContext } from 'react';

export const collcetionContext = createContext(await initDatabaseFunction());
