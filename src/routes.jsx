// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import QuickSort from './sorts/QuickSort';
import MergeSort from './sorts/MergeSort';
import HeapSort from './sorts/HeapSort';
import BubbleSort from './sorts/BubbleSort';
import SelectionSort from './sorts/SelectionSort';
import InsertionSort from './sorts/InsertionSort';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quick-sort" element={<QuickSort />} />
      <Route path="/merge-sort" element={<MergeSort />} />
      <Route path="/heap-sort" element={<HeapSort />} />
      <Route path="/bubble-sort" element={<BubbleSort />} />
      <Route path="/selection-sort" element={<SelectionSort />} />
      <Route path="/insertion-sort" element={<InsertionSort />} />
    </Routes>
  );
};

export default AppRoutes;
