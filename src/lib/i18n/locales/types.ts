import en from './en';

const { optionsMenu, field } = en;

export type OptionsMenuKey = keyof (typeof optionsMenu);
export type FieldTextKey = keyof (typeof field);
