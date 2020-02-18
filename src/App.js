import React from 'react';
import BasicRouting from './components/BasicRouting';
import NestedRouting from './components/NestedRouting';
import { MoreHooks } from './components/MoreHooks';

export default function App() {
  return (
    <>
      <BasicRouting />
      <hr />
      <NestedRouting />
      <hr />
      <MoreHooks />
    </>
  );
}
