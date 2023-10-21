import { writable } from 'svelte/store';
export { titlecase, sentencecase, round } from "./filters";

export const store = writable();