import React from 'react';
import BasicRouting from './components/BasicRouting';
import NestedRouting from './components/NestedRouting';
import { MoreHooks } from './components/MoreHooks';
import RoutingConfig from './components/RoutingConfig';
import RoutingWithAuth from './components/RoutingWithAuth';

export default function App() {
  return (
    <>
    <div>Basic routing</div>
      <BasicRouting />
      <hr />
      <div>Nested routing</div>
      <NestedRouting />
      <hr />
      <div>More on hooks available</div>
      <MoreHooks />
      <hr />
      <div>Us a routing config</div>
      <RoutingConfig />
      <hr />
      <div>Routing with auth (Secure route)</div>
      <RoutingWithAuth />
    </>
  );
}
