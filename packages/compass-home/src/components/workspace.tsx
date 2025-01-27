import React from 'react';
import { css } from '@mongodb-js/compass-components';

import WorkspaceContent from './workspace-content';
import type Namespace from '../types/namespace';
import {
  AppRegistryComponents,
  useAppRegistryComponent,
} from '../contexts/app-registry-context';

const verticalSplitStyles = css({
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto min-content',
  overflow: 'hidden',
});

const horizontalSplitStyles = css({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'min-content auto',
  minHeight: 0,
});

const homePageContentStyles = css({
  minHeight: 0,
  overflow: 'hidden',
});

const sidebarStyles = css({
  minHeight: 0,
});

export default function Workspace({
  namespace,
}: {
  namespace: Namespace;
}): React.ReactElement {
  const SidebarComponent = useAppRegistryComponent(
    AppRegistryComponents.SIDEBAR_COMPONENT
  );
  const GlobalShellComponent = useAppRegistryComponent(
    AppRegistryComponents.SHELL_COMPONENT
  );

  return (
    <>
      <div data-testid="home-view" className={verticalSplitStyles}>
        <div className={horizontalSplitStyles}>
          <div className={sidebarStyles}>
            {SidebarComponent && <SidebarComponent />}
          </div>
          <div className={homePageContentStyles}>
            <WorkspaceContent namespace={namespace} />
          </div>
        </div>
        <div>{GlobalShellComponent && <GlobalShellComponent />}</div>
      </div>
    </>
  );
}
