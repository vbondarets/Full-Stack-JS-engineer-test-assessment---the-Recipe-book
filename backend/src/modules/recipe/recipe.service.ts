import { Inject, Injectable } from '@nestjs/common';

import { cacheConsts } from 'src/shared/constants/cache.const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { ErrorService } from '../error/error.service';

@Injectable()
export class RecipeService {
  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private readonly errorService: ErrorService,
    @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
  ) {}

  //#region Auth

  public async getAll(): Promise<any> {
    return 'Hello World';
  }

  //#endregion Auth
}
