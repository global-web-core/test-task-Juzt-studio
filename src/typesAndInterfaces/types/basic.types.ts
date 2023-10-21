import { NAME_PAGES, CONTROLLERS, METHOD_HTTP, CODE_ANSWER } from "../../globals/constants/constants";

export type Pages = keyof typeof  NAME_PAGES;
export type Controllers = keyof typeof  CONTROLLERS;
export type MethodHttp = keyof typeof METHOD_HTTP;
export type CodeAnswer = (typeof CODE_ANSWER)[keyof typeof CODE_ANSWER];