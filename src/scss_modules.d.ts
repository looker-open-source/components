/**
 * This tells the Typescript compiler that statements like `import styles from './button.scss'`
 * can be ignored when generating d.ts files. Without this ambient module definition the above
 * import statement would be copied to a d.ts file and effectively be an error in the distribution
 * version of the library.
 *
 * See https://www.typescriptlang.org/docs/handbook/modules.html#wildcard-module-declarations for more info.
 */
declare module '*.scss'
