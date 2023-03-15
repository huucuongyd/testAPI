import { I18nContext } from 'nestjs-i18n';
export declare class AppController {
    getData(lang: string, i18n: I18nContext): Promise<any>;
}
