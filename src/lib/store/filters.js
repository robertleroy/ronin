
export function titlecase(value) {
  if (!value) return '';
  value = value.toString().toLowerCase();
  return value.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

export function sentencecase(value) {
  if (!value) return ''
  value = value.toString()  ;
    return value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
}

export function round(num,d = 0) {
  return Math.round((num) * (Math.pow(10, d))) / (Math.pow(10, d));
} 

/* 
import { titlecase, sentencecase, round } from '$lib/js/filters'; 
titlecase(str)
sentencecase(str)
round(pi, 4)
*/  
