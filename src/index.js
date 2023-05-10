import React from 'react';
import { createRoot } from 'react-dom/client';
import BrowsersList from './component/BrowsersList';
import data from './data/data.json';

const root = createRoot(document.getElementById('root'));
root.render(<BrowsersList list={data} />);
