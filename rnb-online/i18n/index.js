
import i18n from 'i18n-js';
const en = require('./en_EN');
const vi = require('./vi_VN');

i18n.fallbacks = true;
i18n.translations = { vi, en };
i18n.locale = 'vi';


i18n.defaultSeparator = '/'
i18n.translations = {
	en,
	vi
}
export const EN = 'en_EN';
export const VI = 'vi_VN';
export const LANG = {
	EN,
	VI
}

export const setLang = (lang) => {
	i18n.defaultLocale = lang
	i18n.locale = lang
}

export const getLang = () => {
	return i18n.locale
}

export default i18n;