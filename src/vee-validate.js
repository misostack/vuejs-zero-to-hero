import { extend, configure, setInteractionMode } from 'vee-validate';
import { required, email, min, max } from 'vee-validate/dist/rules';
// import { i18n } from './i18n-setup';
import CustomValidators from './validators';
// https://vee-validate.logaretm.com/v3/guide/interaction-and-ux.html#custom-modes
setInteractionMode('custom', (context) => {
  if (context.value === 'yes') {
    return {
      on: ['input'],
    };
  }

  return { on: ['blur', 'input'] };
});

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
    console.error('bad_words');
    const BAD_WORDS = ['fuck', 'fuc', ...args.blackList];
    return !BAD_WORDS.includes(`${value}`.toLowerCase());
  },
  params: ['blackList'],
  message: `{_field_}.bad_words`,
});

extend('custom', {
  validate(value, args) {
    if (value) {
      CustomValidators[args['name']](value).then(({ isValid, error }) => {
        console.error(error);
        return isValid;
      });
      return `${args['name']}`;
    }
    return true;
  },
  params: ['name'],
  message: `{_error_}`,
});
