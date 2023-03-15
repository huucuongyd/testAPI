import { Controller, Get, Query } from '@nestjs/common';
import { I18n, I18nContext, I18nLang } from 'nestjs-i18n';
import { concat } from 'rxjs';

@Controller()
export class AppController {
  @Get()
  async getData(@Query('lang') lang: string,@I18n() i18n: I18nContext): Promise<any> {
    console.log(lang)
    const data = "HELLO ARRAY"
    const array = data.split(" ")
    var res=" "
    array.forEach(element => {
      var test='test.';
      test = test.concat(element);
      res=res + i18n.t(test,)+" ";
    });
    return await res;
  }

}