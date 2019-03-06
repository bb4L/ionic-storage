/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { provideStorage, Storage, StorageConfigToken } from './storage';
export { StorageConfigToken, Storage };
export class IonicStorageModule {
    /**
     * @param {?=} storageConfig
     * @return {?}
     */
    static forRoot(storageConfig = null) {
        return {
            ngModule: IonicStorageModule,
            providers: [
                { provide: StorageConfigToken, useValue: storageConfig },
                {
                    provide: Storage,
                    useFactory: provideStorage,
                    deps: [StorageConfigToken]
                }
            ]
        };
    }
}
IonicStorageModule.decorators = [
    { type: NgModule },
];
function IonicStorageModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    IonicStorageModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    IonicStorageModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvc3RvcmFnZS8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBRUwsY0FBYyxFQUNkLE9BQU8sRUFFUCxrQkFBa0IsRUFDbkIsTUFBTSxXQUFXLENBQUM7QUFFbkIsT0FBTyxFQUFpQixrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUd0RCxNQUFNOzs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQStCLElBQUk7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7Z0JBQ3hEO29CQUNFLE9BQU8sRUFBRSxPQUFPO29CQUNoQixVQUFVLEVBQUUsY0FBYztvQkFDMUIsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzNCO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7OztZQWRGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdENvbmZpZyxcbiAgcHJvdmlkZVN0b3JhZ2UsXG4gIFN0b3JhZ2UsXG4gIFN0b3JhZ2VDb25maWcsXG4gIFN0b3JhZ2VDb25maWdUb2tlblxufSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgeyBTdG9yYWdlQ29uZmlnLCBTdG9yYWdlQ29uZmlnVG9rZW4sIFN0b3JhZ2UgfTtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBJb25pY1N0b3JhZ2VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW9uaWNTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU3RvcmFnZUNvbmZpZ1Rva2VuLCB1c2VWYWx1ZTogc3RvcmFnZUNvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU3RvcmFnZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBwcm92aWRlU3RvcmFnZSxcbiAgICAgICAgICBkZXBzOiBbU3RvcmFnZUNvbmZpZ1Rva2VuXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19