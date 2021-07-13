import { extend, configure } from 'vee-validate';
import { required, email, min, max } from 'vee-validate/dist/rules';
// import { i18n } from './i18n-setup';

configure({
  // defaultMessage: (field, values) => {
  //   // override the field name.
  //   values._field_ = i18n.t(`fields.${field}`);
  //   return i18n.t(`validation.${values._rule_}`, values);
  // },
  // defaultMessage: (field, values) => {
  //   console.error('${field}.${values._rule_}', `${field}.${values._rule_}`);
  //   return `${field}.${values._rule_}`;
  // },
});

// Install required rule and message.
extend('required', {
  ...required,
  // the values param is the placeholders values : can not append context so
  // it's better if we return key here, and use context with i18n in template
  // message: (_, values) => i18n.t(`${values._field_}.required`, values),
  message: `{_field_}.required`,
});

// Install email rule and message.
extend('email', email);

// Install min rule and message.
extend('min', {
  ...min,
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: '{_field_}.min',
});

// Install max rule and message.
extend('max', {
  ...max,
  validate(value, args) {
    return value.length <= args.length;
  },
  params: ['length'],
  message: `{_field_}.max`,
});

extend('bad_words', {
  validate(value, args = []) {
    const BAD_WORDS = ['fuck', 'fuc', ...args.blackList];
    return !BAD_WORDS.includes(`${value}`.toLowerCase());
  },
  params: ['blackList'],
  message: `{_field_}.bad_words`,
});
