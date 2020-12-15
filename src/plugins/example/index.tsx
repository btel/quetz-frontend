/* eslint-disable */
// @ts-nocheck
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { DOMUtils, ReactWidget } from '@jupyterlab/apputils';
import React from 'react';
import { jupyterIcon } from '@jupyterlab/ui-components';
import ChannelsApp from './channels';

import { IMainMenu } from '../top/tokens';

/**
 * The command ids used by the main plugin.
 */
export namespace CommandIDs {
  export const open = 'jupyterlab-app-template:open';
}

/**
 * A Table Lumino Widget that wraps a TableApp.
 */
export class TableWidget extends ReactWidget {
  /**
   * Constructs a new CounterWidget.
   */
  constructor() {
    super();
    this.addClass('jp-ReactWidget');
  }

  render(): JSX.Element {
    return <ChannelsApp />;
  }
}

/**
 * The main plugin.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-app-template:main',
  autoStart: true,
  optional: [IMainMenu],
  activate: (app: JupyterFrontEnd, menu: IMainMenu | null): void => {
    const { shell } = app;

    const widget = new TableWidget();
    widget.id = DOMUtils.createDomID();
    widget.title.label = 'React table experiment';
    widget.title.icon = jupyterIcon;
    widget.title.closable = false;
    shell.add(widget, 'main');
  }
};

export default plugin;
