import { InjectionToken, NgModule } from '@angular/core';
import { defineDriver, createInstance, INDEXEDDB, WEBSQL, LOCALSTORAGE } from 'localforage';
import { _driver } from 'localforage-cordovasqlitedriver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ webdriver = {
    _driver: "webExtensionLocalStorage",
    _support: chrome.runtime && chrome.runtime.id,
    /**
     * @return {?}
     */
    _initStorage() {
        return Promise.resolve();
    },
    /**
     * @param {?=} callback
     * @return {?}
     */
    clear(callback) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.clear(res => {
                if (callback) {
                    callback(res);
                }
                resolve(res);
            });
        });
    },
    /**
     * @template T
     * @param {?} key
     * @param {?=} callback
     * @return {?}
     */
    getItem(key, callback) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(key, res => {
                let /** @type {?} */ result = typeof key === "string" ? res[key] : res;
                if (callback) {
                    callback(null, result);
                }
                resolve(result);
            });
        });
    },
    /**
     * @template T, U
     * @param {?} iteratee
     * @param {?=} callback
     * @return {?}
     */
    iterate(iteratee, callback) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(null, res => {
                res.forEach((key, i) => iteratee(res[key], key, i));
                if (callback) {
                    callback(null, res);
                }
                resolve(res);
            });
        });
    },
    /**
     * @param {?} keyIndex
     * @param {?=} callback
     * @return {?}
     */
    key(keyIndex, callback) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(null, res => {
                let /** @type {?} */ sol = res.keys()[keyIndex];
                if (callback) {
                    callback(null, sol);
                }
                resolve(res);
            });
        });
    },
    /**
     * @param {?=} callback
     * @return {?}
     */
    keys(callback) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(null, res => {
                if (callback) {
                    callback(null, res);
                }
                resolve(res);
            });
        });
    },
    /**
     * @param {?=} callback
     * @return {?}
     */
    length(callback) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(null, res => {
                if (callback) {
                    callback(null, res.keys.length);
                }
                resolve(res.keys.length);
            });
        });
    },
    /**
     * @param {?} key
     * @param {?=} callback
     * @return {?}
     */
    removeItem(key, callback) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.remove(key, res => {
                if (callback) {
                    callback(res);
                }
                resolve(res);
            });
        });
    },
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @param {?=} callback
     * @return {?}
     */
    setItem(key, value, callback) {
        return new Promise((resolve, reject) => {
            let /** @type {?} */ obj = {};
            obj[key] = value;
            chrome.storage.local.set(obj, res => {
                if (callback) {
                    callback(null, res);
                }
                resolve(res);
            });
        });
    }
};
// add the driver to localForage.
// localforage.defineDriver(myCustomDriver);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Storage is an easy way to store key/value pairs and JSON objects.
 * Storage uses a variety of storage engines underneath, picking the best one available
 * depending on the platform.
 *
 * When running in a native app context, Storage will prioritize using SQLite, as it's one of
 * the most stable and widely used file-based databases, and avoids some of the
 * pitfalls of things like localstorage and IndexedDB, such as the OS deciding to clear out such
 * data in low disk-space situations.
 *
 * When running in the web or as a Progressive Web App, Storage will attempt to use
 * IndexedDB, WebSQL, and localstorage, in that order.
 *
 * \@usage
 * First, if you'd like to use SQLite, install the cordova-sqlite-storage plugin:
 * ```bash
 * ionic cordova plugin add cordova-sqlite-storage
 * ```
 *
 * Next, install the package (comes by default for Ionic apps > Ionic V1):
 * ```bash
 * npm install --save \@ionic/storage
 * ```
 *
 * Next, add it to the imports list in your `NgModule` declaration (for example, in `src/app/app.module.ts`):
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [
 *     // ...
 *   ],
 *   imports: [
 *     BrowserModule,
 *     IonicModule.forRoot(MyApp),
 *     IonicStorageModule.forRoot()
 *   ],
 *   bootstrap: [IonicApp],
 *   entryComponents: [
 *     // ...
 *   ],
 *   providers: [
 *     // ...
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * Finally, inject it into any of your components or pages:
 * ```typescript
 * import { Storage } from '\@ionic/storage';
 * export class MyApp {
 *   constructor(private storage: Storage) { }
 *
 *   ...
 *
 *   // set a key/value
 *   storage.set('name', 'Max');
 *
 *   // Or to get a key/value pair
 *   storage.get('age').then((val) => {
 *     console.log('Your age is', val);
 *   });
 * }
 * ```
 *
 *
 * ### Configuring Storage
 *
 * The Storage engine can be configured both with specific storage engine priorities, or custom configuration
 * options to pass to localForage. See the localForage config docs for possible options: https://github.com/localForage/localForage#configuration
 *
 * Note: Any custom configurations will be merged with the default configuration
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [...],
 *   imports: [
 *     IonicStorageModule.forRoot({
 *       name: '__mydb',
 * driverOrder: ['indexeddb', 'sqlite', 'websql']
 *     })
 *   ],
 *   bootstrap: [...],
 *   entryComponents: [...],
 *    providers: [...]
 * })
 * export class AppModule { }
 * ```
 */
class Storage {
    /**
     * Create a new Storage instance using the order of drivers and any additional config
     * options to pass to LocalForage.
     *
     * Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the
     * default is that exact ordering.
     * @param {?} config
     */
    constructor(config) {
        this._driver = null;
        this._dbPromise = new Promise((resolve, reject) => {
            let /** @type {?} */ db;
            const /** @type {?} */ defaultConfig = getDefaultConfig();
            const /** @type {?} */ actualConfig = Object.assign(defaultConfig, config || {});
            defineDriver(webdriver)
                .then(() => {
                db = createInstance(actualConfig);
            })
                .then(() => db.setDriver(this._getDriverOrder(actualConfig.driverOrder)))
                .then(() => {
                this._driver = db.driver();
                resolve(db);
            })
                .catch(reason => reject(reason));
        });
    }
    /**
     * Get the name of the driver being used.
     * @return {?} Name of the driver
     */
    get driver() {
        return this._driver;
    }
    /**
     * Reflect the readiness of the store.
     * @return {?} Returns a promise that resolves when the store is ready
     */
    ready() {
        return this._dbPromise;
    }
    /**
     * @hidden
     * @param {?} driverOrder
     * @return {?}
     */
    _getDriverOrder(driverOrder) {
        return driverOrder.map(driver => {
            switch (driver) {
                case 'sqlite':
                    return _driver;
                case 'indexeddb':
                    return INDEXEDDB;
                case 'websql':
                    return WEBSQL;
                case 'localstorage':
                    return LOCALSTORAGE;
                case "webExtensionLocalStorage":
                    return webdriver._driver;
            }
        });
    }
    /**
     * Get the value associated with the given key.
     * @param {?} key the key to identify this value
     * @return {?} Returns a promise with the value of the given key
     */
    get(key) {
        return this._dbPromise.then(db => db.getItem(key));
    }
    /**
     * Set the value for the given key.
     * @param {?} key the key to identify this value
     * @param {?} value the value for this key
     * @return {?} Returns a promise that resolves when the key and value are set
     */
    set(key, value) {
        return this._dbPromise.then(db => db.setItem(key, value));
    }
    /**
     * Remove any value associated with this key.
     * @param {?} key the key to identify this value
     * @return {?} Returns a promise that resolves when the value is removed
     */
    remove(key) {
        return this._dbPromise.then(db => db.removeItem(key));
    }
    /**
     * Clear the entire key value store. WARNING: HOT!
     * @return {?} Returns a promise that resolves when the store is cleared
     */
    clear() {
        return this._dbPromise.then(db => db.clear());
    }
    /**
     * @return {?} Returns a promise that resolves with the number of keys stored.
     */
    length() {
        return this._dbPromise.then(db => db.length());
    }
    /**
     * @return {?} Returns a promise that resolves with the keys in the store.
     */
    keys() {
        return this._dbPromise.then(db => db.keys());
    }
    /**
     * Iterate through each key,value pair.
     * @param {?} iteratorCallback a callback of the form (value, key, iterationNumber)
     * @return {?} Returns a promise that resolves when the iteration has finished.
     */
    forEach(iteratorCallback) {
        return this._dbPromise.then(db => db.iterate(iteratorCallback));
    }
}
/**
 * @hidden
 * @return {?}
 */
function getDefaultConfig() {
    return {
        name: '_ionicstorage',
        storeName: '_ionickv',
        dbKey: '_ionickey',
        driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    };
}
/**
 * @hidden
 */
const /** @type {?} */ StorageConfigToken = new InjectionToken('STORAGE_CONFIG_TOKEN');
/**
 * @hidden
 * @param {?} storageConfig
 * @return {?}
 */
function provideStorage(storageConfig) {
    const /** @type {?} */ config = !!storageConfig ? storageConfig : getDefaultConfig();
    return new Storage(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicStorageModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { StorageConfigToken, Storage, IonicStorageModule, provideStorage as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGlvbmljL3N0b3JhZ2Uvd2ViZHJpdmVyLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9zdG9yYWdlLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcbmNvbnN0IHdlYmRyaXZlcjogTG9jYWxGb3JhZ2VEcml2ZXIgPSB7XG4gIF9kcml2ZXI6IFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCIsXG4gIF9zdXBwb3J0OiBjaHJvbWUucnVudGltZSAmJiBjaHJvbWUucnVudGltZS5pZCxcbiAgX2luaXRTdG9yYWdlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbiAgY2xlYXIoY2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIocmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0SXRlbTxUPihrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChrZXksIHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiID8gcmVzW2tleV0gOiByZXM7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGl0ZXJhdGU8VCwgVT4oXG4gICAgaXRlcmF0ZWU6ICh2YWx1ZTogVCwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogbnVtYmVyKSA9PiBVLFxuICAgIGNhbGxiYWNrPzogKGVycjogYW55LCByZXN1bHQ6IFUpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxVPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICByZXMuZm9yRWFjaCgoa2V5LCBpKSA9PiBpdGVyYXRlZShyZXNba2V5XSwga2V5LCBpKSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAga2V5KFxuICAgIGtleUluZGV4OiBudW1iZXIsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIGtleTogc3RyaW5nKSA9PiB2b2lkXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBsZXQgc29sOiBzdHJpbmcgPSByZXMua2V5cygpW2tleUluZGV4XTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgc29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAga2V5cyhjYWxsYmFjaz86IChlcnI6IGFueSwga2V5czogc3RyaW5nW10pID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBsZW5ndGgoY2FsbGJhY2s/OiAoZXJyOiBhbnksIG51bWJlck9mS2V5czogbnVtYmVyKSA9PiB2b2lkKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcy5rZXlzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMua2V5cy5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcsIGNhbGxiYWNrPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXksIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNldEl0ZW08VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IFQsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkXG4gICk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgb2JqID0ge307XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KG9iaiwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2ViZHJpdmVyO1xuLy8gYWRkIHRoZSBkcml2ZXIgdG8gbG9jYWxGb3JhZ2UuXG4vLyBsb2NhbGZvcmFnZS5kZWZpbmVEcml2ZXIobXlDdXN0b21Ecml2ZXIpO1xuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgTG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuXG5pbXBvcnQgKiBhcyBDb3Jkb3ZhU1FMaXRlRHJpdmVyIGZyb20gJ2xvY2FsZm9yYWdlLWNvcmRvdmFzcWxpdGVkcml2ZXInO1xuXG5pbXBvcnQgY2hyb21lRXh0ZW5zaW9uRHJpdmVyIGZyb20gJy4vd2ViZHJpdmVyJztcbi8qKlxuICogU3RvcmFnZSBpcyBhbiBlYXN5IHdheSB0byBzdG9yZSBrZXkvdmFsdWUgcGFpcnMgYW5kIEpTT04gb2JqZWN0cy5cbiAqIFN0b3JhZ2UgdXNlcyBhIHZhcmlldHkgb2Ygc3RvcmFnZSBlbmdpbmVzIHVuZGVybmVhdGgsIHBpY2tpbmcgdGhlIGJlc3Qgb25lIGF2YWlsYWJsZVxuICogZGVwZW5kaW5nIG9uIHRoZSBwbGF0Zm9ybS5cbiAqXG4gKiBXaGVuIHJ1bm5pbmcgaW4gYSBuYXRpdmUgYXBwIGNvbnRleHQsIFN0b3JhZ2Ugd2lsbCBwcmlvcml0aXplIHVzaW5nIFNRTGl0ZSwgYXMgaXQncyBvbmUgb2ZcbiAqIHRoZSBtb3N0IHN0YWJsZSBhbmQgd2lkZWx5IHVzZWQgZmlsZS1iYXNlZCBkYXRhYmFzZXMsIGFuZCBhdm9pZHMgc29tZSBvZiB0aGVcbiAqIHBpdGZhbGxzIG9mIHRoaW5ncyBsaWtlIGxvY2Fsc3RvcmFnZSBhbmQgSW5kZXhlZERCLCBzdWNoIGFzIHRoZSBPUyBkZWNpZGluZyB0byBjbGVhciBvdXQgc3VjaFxuICogZGF0YSBpbiBsb3cgZGlzay1zcGFjZSBzaXR1YXRpb25zLlxuICpcbiAqIFdoZW4gcnVubmluZyBpbiB0aGUgd2ViIG9yIGFzIGEgUHJvZ3Jlc3NpdmUgV2ViIEFwcCwgU3RvcmFnZSB3aWxsIGF0dGVtcHQgdG8gdXNlXG4gKiBJbmRleGVkREIsIFdlYlNRTCwgYW5kIGxvY2Fsc3RvcmFnZSwgaW4gdGhhdCBvcmRlci5cbiAqXG4gKiBAdXNhZ2VcbiAqIEZpcnN0LCBpZiB5b3UnZCBsaWtlIHRvIHVzZSBTUUxpdGUsIGluc3RhbGwgdGhlIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2UgcGx1Z2luOlxuICogYGBgYmFzaFxuICogaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2VcbiAqIGBgYFxuICpcbiAqIE5leHQsIGluc3RhbGwgdGhlIHBhY2thZ2UgKGNvbWVzIGJ5IGRlZmF1bHQgZm9yIElvbmljIGFwcHMgPiBJb25pYyBWMSk6XG4gKiBgYGBiYXNoXG4gKiBucG0gaW5zdGFsbCAtLXNhdmUgQGlvbmljL3N0b3JhZ2VcbiAqIGBgYFxuICpcbiAqIE5leHQsIGFkZCBpdCB0byB0aGUgaW1wb3J0cyBsaXN0IGluIHlvdXIgYE5nTW9kdWxlYCBkZWNsYXJhdGlvbiAoZm9yIGV4YW1wbGUsIGluIGBzcmMvYXBwL2FwcC5tb2R1bGUudHNgKTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgZGVjbGFyYXRpb25zOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgIF0sXG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICBCcm93c2VyTW9kdWxlLFxuICogICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxuICogICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KClcbiAqICAgXSxcbiAqICAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxuICogICBlbnRyeUNvbXBvbmVudHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgXSxcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgIF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4gKmBgYFxuICpcbiAqIEZpbmFsbHksIGluamVjdCBpdCBpbnRvIGFueSBvZiB5b3VyIGNvbXBvbmVudHMgb3IgcGFnZXM6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4gKiBleHBvcnQgY2xhc3MgTXlBcHAge1xuICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UpIHsgfVxuICpcbiAqICAgLi4uXG4gKlxuICogICAvLyBzZXQgYSBrZXkvdmFsdWVcbiAqICAgc3RvcmFnZS5zZXQoJ25hbWUnLCAnTWF4Jyk7XG4gKlxuICogICAvLyBPciB0byBnZXQgYSBrZXkvdmFsdWUgcGFpclxuICogICBzdG9yYWdlLmdldCgnYWdlJykudGhlbigodmFsKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ1lvdXIgYWdlIGlzJywgdmFsKTtcbiAqICAgfSk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKlxuICogIyMjIENvbmZpZ3VyaW5nIFN0b3JhZ2VcbiAqXG4gKiBUaGUgU3RvcmFnZSBlbmdpbmUgY2FuIGJlIGNvbmZpZ3VyZWQgYm90aCB3aXRoIHNwZWNpZmljIHN0b3JhZ2UgZW5naW5lIHByaW9yaXRpZXMsIG9yIGN1c3RvbSBjb25maWd1cmF0aW9uXG4gKiBvcHRpb25zIHRvIHBhc3MgdG8gbG9jYWxGb3JhZ2UuIFNlZSB0aGUgbG9jYWxGb3JhZ2UgY29uZmlnIGRvY3MgZm9yIHBvc3NpYmxlIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2NhbEZvcmFnZS9sb2NhbEZvcmFnZSNjb25maWd1cmF0aW9uXG4gKlxuICogTm90ZTogQW55IGN1c3RvbSBjb25maWd1cmF0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgZGVjbGFyYXRpb25zOiBbLi4uXSxcbiAqICAgaW1wb3J0czogW1xuICogICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KHtcbiAqICAgICAgIG5hbWU6ICdfX215ZGInLFxuICAgICAgICAgZHJpdmVyT3JkZXI6IFsnaW5kZXhlZGRiJywgJ3NxbGl0ZScsICd3ZWJzcWwnXVxuICogICAgIH0pXG4gKiAgIF0sXG4gKiAgIGJvb3RzdHJhcDogWy4uLl0sXG4gKiAgIGVudHJ5Q29tcG9uZW50czogWy4uLl0sXG4gKiAgICBwcm92aWRlcnM6IFsuLi5dXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XG4gIHByaXZhdGUgX2RiUHJvbWlzZTogUHJvbWlzZTxMb2NhbEZvcmFnZT47XG4gIHByaXZhdGUgX2RyaXZlcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFN0b3JhZ2UgaW5zdGFuY2UgdXNpbmcgdGhlIG9yZGVyIG9mIGRyaXZlcnMgYW5kIGFueSBhZGRpdGlvbmFsIGNvbmZpZ1xuICAgKiBvcHRpb25zIHRvIHBhc3MgdG8gTG9jYWxGb3JhZ2UuXG4gICAqXG4gICAqIFBvc3NpYmxlIGRyaXZlciBvcHRpb25zIGFyZTogWydzcWxpdGUnLCAnaW5kZXhlZGRiJywgJ3dlYnNxbCcsICdsb2NhbHN0b3JhZ2UnXSBhbmQgdGhlXG4gICAqIGRlZmF1bHQgaXMgdGhhdCBleGFjdCBvcmRlcmluZy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU3RvcmFnZUNvbmZpZykge1xuICAgIHRoaXMuX2RiUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBkYjogTG9jYWxGb3JhZ2U7XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBnZXREZWZhdWx0Q29uZmlnKCk7XG4gICAgICBjb25zdCBhY3R1YWxDb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XG5cbiAgICAgIExvY2FsRm9yYWdlLmRlZmluZURyaXZlcihjaHJvbWVFeHRlbnNpb25Ecml2ZXIpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBkYiA9IExvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlKGFjdHVhbENvbmZpZyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgZGIuc2V0RHJpdmVyKHRoaXMuX2dldERyaXZlck9yZGVyKGFjdHVhbENvbmZpZy5kcml2ZXJPcmRlcikpXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyaXZlciA9IGRiLmRyaXZlcigpO1xuICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gocmVhc29uID0+IHJlamVjdChyZWFzb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRyaXZlciBiZWluZyB1c2VkLlxuICAgKiBAcmV0dXJucyBOYW1lIG9mIHRoZSBkcml2ZXJcbiAgICovXG4gIGdldCBkcml2ZXIoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RyaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZsZWN0IHRoZSByZWFkaW5lc3Mgb2YgdGhlIHN0b3JlLlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5XG4gICAqL1xuICByZWFkeSgpOiBQcm9taXNlPExvY2FsRm9yYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZTtcbiAgfVxuXG4gIC8qKiBAaGlkZGVuICovXG4gIHByaXZhdGUgX2dldERyaXZlck9yZGVyKGRyaXZlck9yZGVyKSB7XG4gICAgcmV0dXJuIGRyaXZlck9yZGVyLm1hcChkcml2ZXIgPT4ge1xuICAgICAgc3dpdGNoIChkcml2ZXIpIHtcbiAgICAgICAgY2FzZSAnc3FsaXRlJzpcbiAgICAgICAgICByZXR1cm4gQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyO1xuICAgICAgICBjYXNlICdpbmRleGVkZGInOlxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5JTkRFWEVEREI7XG4gICAgICAgIGNhc2UgJ3dlYnNxbCc6XG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLldFQlNRTDtcbiAgICAgICAgY2FzZSAnbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFO1xuICAgICAgICBjYXNlIFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCI6XG4gICAgICAgICAgcmV0dXJuIGNocm9tZUV4dGVuc2lvbkRyaXZlci5fZHJpdmVyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBrZXlcbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmdldEl0ZW0oa2V5KSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcbiAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBmb3IgdGhpcyBrZXlcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBrZXkgYW5kIHZhbHVlIGFyZSBzZXRcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnNldEl0ZW0oa2V5LCB2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbnkgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHZhbHVlIGlzIHJlbW92ZWRcbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnJlbW92ZUl0ZW0oa2V5KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGVudGlyZSBrZXkgdmFsdWUgc3RvcmUuIFdBUk5JTkc6IEhPVCFcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdG9yZSBpcyBjbGVhcmVkXG4gICAqL1xuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuY2xlYXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBudW1iZXIgb2Yga2V5cyBzdG9yZWQuXG4gICAqL1xuICBsZW5ndGgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIubGVuZ3RoKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5cyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIua2V5cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCBrZXksdmFsdWUgcGFpci5cbiAgICogQHBhcmFtIGl0ZXJhdG9yQ2FsbGJhY2sgYSBjYWxsYmFjayBvZiB0aGUgZm9ybSAodmFsdWUsIGtleSwgaXRlcmF0aW9uTnVtYmVyKVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGl0ZXJhdGlvbiBoYXMgZmluaXNoZWQuXG4gICAqL1xuICBmb3JFYWNoKFxuICAgIGl0ZXJhdG9yQ2FsbGJhY2s6ICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBOdW1iZXIpID0+IGFueVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuaXRlcmF0ZShpdGVyYXRvckNhbGxiYWNrKSk7XG4gIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29uZmlnKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdfaW9uaWNzdG9yYWdlJyxcbiAgICBzdG9yZU5hbWU6ICdfaW9uaWNrdicsXG4gICAgZGJLZXk6ICdfaW9uaWNrZXknLFxuICAgIGRyaXZlck9yZGVyOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddXG4gIH07XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VDb25maWcge1xuICBuYW1lPzogc3RyaW5nO1xuICB2ZXJzaW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBzdG9yZU5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkcml2ZXJPcmRlcj86IHN0cmluZ1tdO1xuICBkYktleT86IHN0cmluZztcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjb25zdCBTdG9yYWdlQ29uZmlnVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcbiAgJ1NUT1JBR0VfQ09ORklHX1RPS0VOJ1xuKTtcblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZShzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnKTogU3RvcmFnZSB7XG4gIGNvbnN0IGNvbmZpZyA9ICEhc3RvcmFnZUNvbmZpZyA/IHN0b3JhZ2VDb25maWcgOiBnZXREZWZhdWx0Q29uZmlnKCk7XG4gIHJldHVybiBuZXcgU3RvcmFnZShjb25maWcpO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldERlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVTdG9yYWdlLFxuICBTdG9yYWdlLFxuICBTdG9yYWdlQ29uZmlnLFxuICBTdG9yYWdlQ29uZmlnVG9rZW5cbn0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IHsgU3RvcmFnZUNvbmZpZywgU3RvcmFnZUNvbmZpZ1Rva2VuLCBTdG9yYWdlIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSW9uaWNTdG9yYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElvbmljU3RvcmFnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFN0b3JhZ2VDb25maWdUb2tlbiwgdXNlVmFsdWU6IHN0b3JhZ2VDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFN0b3JhZ2UsXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2UsXG4gICAgICAgICAgZGVwczogW1N0b3JhZ2VDb25maWdUb2tlbl1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIiLCJjaHJvbWVFeHRlbnNpb25Ecml2ZXIiLCJMb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZSIsIkNvcmRvdmFTUUxpdGVEcml2ZXIuX2RyaXZlciIsIkxvY2FsRm9yYWdlLklOREVYRUREQiIsIkxvY2FsRm9yYWdlLldFQlNRTCIsIkxvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSx1QkFBTSxTQUFTLEdBQXNCO0lBQ25DLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzs7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