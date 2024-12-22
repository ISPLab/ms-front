import { Routes } from '@angular/router';
import { DemoPageComponent } from './demo-page/demo-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(`./demo-page-list/demo-page-list.component`).then(
        (mod) => mod.DemoPageListComponent,
      ),
  },
  {
    path: '',
    component: DemoPageComponent,
    children: [
      {
        path: 'ui-table',
        loadComponent: () =>
          import(`./ui-table-page/ui-table-page.component`).then(
            (mod) => mod.UiTablePageComponent,
          ),
      },
      {
        path: 'ui-modal',
        loadComponent: () =>
          import(`./ui-modal-page/ui-modal-page.component`).then(
            (mod) => mod.UiModalPageComponent,
          ),
      },
      {
        path: 'ui-form',
        loadComponent: () =>
          import(`./ui-form-page/ui-form-page.component`).then(
            (mod) => mod.UiFormPageComponent,
          ),
      },
      {
        path: 'ui-button',
        loadComponent: () =>
          import(`./ui-button-page/ui-button-page.component`).then(
            (mod) => mod.UiButtonPageComponent,
          ),
      },
      {
        path: 'ui-radio',
        loadComponent: () =>
          import(`./ui-radio-page/ui-radio-page.component`).then(
            (mod) => mod.UiRadioPageComponent,
          ),
      },
      {
        path: 'ui-checkbox',
        loadComponent: () =>
          import(`./ui-checkbox-page/ui-checkbox-page.component`).then(
            (mod) => mod.UiCheckboxPageComponent,
          ),
      },
      {
        path: 'ui-input',
        loadComponent: () =>
          import(`./ui-input-page/ui-input-page.component`).then(
            (mod) => mod.UiInputPageComponent,
          ),
      },
      {
        path: 'ui-select',
        loadComponent: () =>
          import(`./ui-select-page/ui-select-page.component`).then(
            (mod) => mod.UiSelectPageComponent,
          ),
      },
      {
        path: 'ui-textarea',
        loadComponent: () =>
          import(`./ui-textarea-page/ui-textarea-page.component`).then(
            (mod) => mod.UiTextareaPageComponent,
          ),
      },
      {
        path: 'ui-input-file',
        loadComponent: () =>
          import(`./ui-input-file-page/ui-input-file-page.component`).then(
            (mod) => mod.UiInputFilePageComponent,
          ),
      },
      {
        path: 'ui-datepicker',
        loadComponent: () =>
          import(`./ui-datepicker-page/ui-datepicker-page.component`).then(
            (mod) => mod.UiDatepickerPageComponent,
          ),
      },
      {
        path: 'ui-input-search',
        loadComponent: () =>
          import(`./ui-input-search-page/ui-input-search-page.component`).then(
            (mod) => mod.UiInputSearchPageComponent,
          ),
      },
    ],
  },
];
