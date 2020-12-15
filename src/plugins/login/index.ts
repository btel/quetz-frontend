import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { DOMUtils } from '@jupyterlab/apputils';

import { ellipsesIcon } from '@jupyterlab/ui-components';

import { Widget } from '@lumino/widgets';

import { ILogInMenu } from '../topbar/tokens';

/**
 * The main plugin.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'quetz:login',
  autoStart: true,
  optional: [ILogInMenu],
  activate: (app: JupyterFrontEnd, logInMenu: ILogInMenu): void => {
    const node = document.createElement('div');
    node.textContent = 'LogIn with GitHub';
    const button = new Widget({ node });
    button.id = DOMUtils.createDomID();
    button.title.label = 'LogIn';
    button.title.caption = 'LogIn with GitHub';
    button.title.icon = ellipsesIcon;

    if (logInMenu) {
      logInMenu.addItem(button);
    }
  }
};

export default plugin;