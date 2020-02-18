import React from 'react';
import BasicRouting from './components/BasicRouting';
import NestedRouting from './components/NestedRouting';
import { MoreHooks } from './components/MoreHooks';
import RoutingConfig from './components/RoutingConfig';
import RoutingWithAuth from './components/RoutingWithAuth';

export default function App() {
  return (
    <>
      <BasicRouting />
      <hr />
      <NestedRouting />
      <hr />
      <MoreHooks />
      <hr />
      <RoutingConfig />
      <hr />
      <RoutingWithAuth />
    </>
  );
}
