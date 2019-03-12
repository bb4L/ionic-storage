(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('localforage'), require('localforage-cordovasqlitedriver')) :
    typeof define === 'function' && define.amd ? define('@ionic/storage', ['exports', '@angular/core', 'localforage', 'localforage-cordovasqlitedriver'], factory) :
    (factory((global.ionic = global.ionic || {}, global.ionic.storage = {}),global.ng.core,null,null));
}(this, (function (exports,core,LocalForage,CordovaSQLiteDriver) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ webdriver = {
        _driver: "webExtensionLocalStorage",
        _support: chrome && chrome.runtime && chrome.runtime.id,
        _initStorage: /**
         * @return {?}
         */ function () {
            return Promise.resolve();
        },
        clear: /**
         * @param {?=} callback
         * @return {?}
         */ function (callback) {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.clear(function (res) {
                    if (callback) {
                        callback(res);
                    }
                    resolve(res);
                });
            });
        },
        getItem: /**
         * @template T
         * @param {?} key
         * @param {?=} callback
         * @return {?}
         */ function (key, callback) {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get(key, function (res) {
                    var /** @type {?} */ result = typeof key === "string" ? res[key] : res;
                    if (callback) {
                        callback(null, result);
                    }
                    resolve(result);
                });
            });
        },
        iterate: /**
         * @template T, U
         * @param {?} iteratee
         * @param {?=} callback
         * @return {?}
         */ function (iteratee, callback) {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get(null, function (res) {
                    res.forEach(function (key, i) { return iteratee(res[key], key, i); });
                    if (callback) {
                        callback(null, res);
                    }
                    resolve(res);
                });
            });
        },
        key: /**
         * @param {?} keyIndex
         * @param {?=} callback
         * @return {?}
         */ function (keyIndex, callback) {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get(null, function (res) {
                    var /** @type {?} */ sol = res.keys()[keyIndex];
                    if (callback) {
                        callback(null, sol);
                    }
                    resolve(res);
                });
            });
        },
        keys: /**
         * @param {?=} callback
         * @return {?}
         */ function (callback) {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get(null, function (res) {
                    if (callback) {
                        callback(null, res);
                    }
                    resolve(res);
                });
            });
        },
        length: /**
         * @param {?=} callback
         * @return {?}
         */ function (callback) {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get(null, function (res) {
                    if (callback) {
                        callback(null, res.keys.length);
                    }
                    resolve(res.keys.length);
                });
            });
        },
        removeItem: /**
         * @param {?} key
         * @param {?=} callback
         * @return {?}
         */ function (key, callback) {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.remove(key, function (res) {
                    if (callback) {
                        callback(res);
                    }
                    resolve(res);
                });
            });
        },
        setItem: /**
         * @template T
         * @param {?} key
         * @param {?} value
         * @param {?=} callback
         * @return {?}
         */ function (key, value, callback) {
            return new Promise(function (resolve, reject) {
                var /** @type {?} */ obj = {};
                obj[key] = value;
                chrome.storage.local.set(obj, function (res) {
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
    var /**
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
     */ Storage = /** @class */ (function () {
        /**
         * Create a new Storage instance using the order of drivers and any additional config
         * options to pass to LocalForage.
         *
         * Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the
         * default is that exact ordering.
         */
        function Storage(config) {
            var _this = this;
            this._driver = null;
            this._dbPromise = new Promise(function (resolve, reject) {
                var /** @type {?} */ db;
                var /** @type {?} */ defaultConfig = getDefaultConfig();
                var /** @type {?} */ actualConfig = Object.assign(defaultConfig, config || {});
                LocalForage.defineDriver(webdriver)
                    .then(function () {
                    db = LocalForage.createInstance(actualConfig);
                })
                    .then(function () {
                    return db.setDriver(_this._getDriverOrder(actualConfig.driverOrder));
                })
                    .then(function () {
                    _this._driver = db.driver();
                    resolve(db);
                })
                    .catch(function (reason) { return reject(reason); });
            });
        }
        Object.defineProperty(Storage.prototype, "driver", {
            /**
             * Get the name of the driver being used.
             * @returns Name of the driver
             */
            get: /**
             * Get the name of the driver being used.
             * @return {?} Name of the driver
             */ function () {
                return this._driver;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Reflect the readiness of the store.
         * @returns Returns a promise that resolves when the store is ready
         */
        /**
         * Reflect the readiness of the store.
         * @return {?} Returns a promise that resolves when the store is ready
         */
        Storage.prototype.ready = /**
         * Reflect the readiness of the store.
         * @return {?} Returns a promise that resolves when the store is ready
         */
            function () {
                return this._dbPromise;
            };
        /**
         * @hidden
         * @param {?} driverOrder
         * @return {?}
         */
        Storage.prototype._getDriverOrder = /**
         * @hidden
         * @param {?} driverOrder
         * @return {?}
         */
            function (driverOrder) {
                return driverOrder.map(function (driver) {
                    switch (driver) {
                        case 'sqlite':
                            return CordovaSQLiteDriver._driver;
                        case 'indexeddb':
                            return LocalForage.INDEXEDDB;
                        case 'websql':
                            return LocalForage.WEBSQL;
                        case 'localstorage':
                            return LocalForage.LOCALSTORAGE;
                        case "webExtensionLocalStorage":
                            return webdriver._driver;
                    }
                });
            };
        /**
         * Get the value associated with the given key.
         * @param key the key to identify this value
         * @returns Returns a promise with the value of the given key
         */
        /**
         * Get the value associated with the given key.
         * @param {?} key the key to identify this value
         * @return {?} Returns a promise with the value of the given key
         */
        Storage.prototype.get = /**
         * Get the value associated with the given key.
         * @param {?} key the key to identify this value
         * @return {?} Returns a promise with the value of the given key
         */
            function (key) {
                return this._dbPromise.then(function (db) { return db.getItem(key); });
            };
        /**
         * Set the value for the given key.
         * @param key the key to identify this value
         * @param value the value for this key
         * @returns Returns a promise that resolves when the key and value are set
         */
        /**
         * Set the value for the given key.
         * @param {?} key the key to identify this value
         * @param {?} value the value for this key
         * @return {?} Returns a promise that resolves when the key and value are set
         */
        Storage.prototype.set = /**
         * Set the value for the given key.
         * @param {?} key the key to identify this value
         * @param {?} value the value for this key
         * @return {?} Returns a promise that resolves when the key and value are set
         */
            function (key, value) {
                return this._dbPromise.then(function (db) { return db.setItem(key, value); });
            };
        /**
         * Remove any value associated with this key.
         * @param key the key to identify this value
         * @returns Returns a promise that resolves when the value is removed
         */
        /**
         * Remove any value associated with this key.
         * @param {?} key the key to identify this value
         * @return {?} Returns a promise that resolves when the value is removed
         */
        Storage.prototype.remove = /**
         * Remove any value associated with this key.
         * @param {?} key the key to identify this value
         * @return {?} Returns a promise that resolves when the value is removed
         */
            function (key) {
                return this._dbPromise.then(function (db) { return db.removeItem(key); });
            };
        /**
         * Clear the entire key value store. WARNING: HOT!
         * @returns Returns a promise that resolves when the store is cleared
         */
        /**
         * Clear the entire key value store. WARNING: HOT!
         * @return {?} Returns a promise that resolves when the store is cleared
         */
        Storage.prototype.clear = /**
         * Clear the entire key value store. WARNING: HOT!
         * @return {?} Returns a promise that resolves when the store is cleared
         */
            function () {
                return this._dbPromise.then(function (db) { return db.clear(); });
            };
        /**
         * @returns Returns a promise that resolves with the number of keys stored.
         */
        /**
         * @return {?} Returns a promise that resolves with the number of keys stored.
         */
        Storage.prototype.length = /**
         * @return {?} Returns a promise that resolves with the number of keys stored.
         */
            function () {
                return this._dbPromise.then(function (db) { return db.length(); });
            };
        /**
         * @returns Returns a promise that resolves with the keys in the store.
         */
        /**
         * @return {?} Returns a promise that resolves with the keys in the store.
         */
        Storage.prototype.keys = /**
         * @return {?} Returns a promise that resolves with the keys in the store.
         */
            function () {
                return this._dbPromise.then(function (db) { return db.keys(); });
            };
        /**
         * Iterate through each key,value pair.
         * @param iteratorCallback a callback of the form (value, key, iterationNumber)
         * @returns Returns a promise that resolves when the iteration has finished.
         */
        /**
         * Iterate through each key,value pair.
         * @param {?} iteratorCallback a callback of the form (value, key, iterationNumber)
         * @return {?} Returns a promise that resolves when the iteration has finished.
         */
        Storage.prototype.forEach = /**
         * Iterate through each key,value pair.
         * @param {?} iteratorCallback a callback of the form (value, key, iterationNumber)
         * @return {?} Returns a promise that resolves when the iteration has finished.
         */
            function (iteratorCallback) {
                return this._dbPromise.then(function (db) { return db.iterate(iteratorCallback); });
            };
        return Storage;
    }());
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
    var /** @type {?} */ StorageConfigToken = new core.InjectionToken('STORAGE_CONFIG_TOKEN');
    /**
     * @hidden
     * @param {?} storageConfig
     * @return {?}
     */
    function provideStorage(storageConfig) {
        var /** @type {?} */ config = !!storageConfig ? storageConfig : getDefaultConfig();
        return new Storage(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var IonicStorageModule = /** @class */ (function () {
        function IonicStorageModule() {
        }
        /**
         * @param {?=} storageConfig
         * @return {?}
         */
        IonicStorageModule.forRoot = /**
         * @param {?=} storageConfig
         * @return {?}
         */
            function (storageConfig) {
                if (storageConfig === void 0) {
                    storageConfig = null;
                }
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
            };
        IonicStorageModule.decorators = [
            { type: core.NgModule },
        ];
        return IonicStorageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.StorageConfigToken = StorageConfigToken;
    exports.Storage = Storage;
    exports.IonicStorageModule = IonicStorageModule;
    exports.ɵa = provideStorage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bpb25pYy9zdG9yYWdlL3dlYmRyaXZlci50cyIsIm5nOi8vQGlvbmljL3N0b3JhZ2Uvc3RvcmFnZS50cyIsIm5nOi8vQGlvbmljL3N0b3JhZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBsZXQgY2hyb21lOiBhbnk7XG5jb25zdCB3ZWJkcml2ZXI6IExvY2FsRm9yYWdlRHJpdmVyID0ge1xuICBfZHJpdmVyOiBcIndlYkV4dGVuc2lvbkxvY2FsU3RvcmFnZVwiLFxuICBfc3VwcG9ydDogY2hyb21lICYmIGNocm9tZS5ydW50aW1lICYmIGNocm9tZS5ydW50aW1lLmlkLFxuICBfaW5pdFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuICBjbGVhcihjYWxsYmFjaz86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcihyZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSwgcmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgPyByZXNba2V5XSA6IHJlcztcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgaXRlcmF0ZTxULCBVPihcbiAgICBpdGVyYXRlZTogKHZhbHVlOiBULCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBudW1iZXIpID0+IFUsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHJlc3VsdDogVSkgPT4gdm9pZFxuICApOiBQcm9taXNlPFU+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIHJlcy5mb3JFYWNoKChrZXksIGkpID0+IGl0ZXJhdGVlKHJlc1trZXldLCBrZXksIGkpKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBrZXkoXG4gICAga2V5SW5kZXg6IG51bWJlcixcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwga2V5OiBzdHJpbmcpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGxldCBzb2w6IHN0cmluZyA9IHJlcy5rZXlzKClba2V5SW5kZXhdO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCBzb2wpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBrZXlzKGNhbGxiYWNrPzogKGVycjogYW55LCBrZXlzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGxlbmd0aChjYWxsYmFjaz86IChlcnI6IGFueSwgbnVtYmVyT2ZLZXlzOiBudW1iZXIpID0+IHZvaWQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzLmtleXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcy5rZXlzLmxlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2V0SXRlbTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZTogVCxcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQob2JqLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWJkcml2ZXI7XG4vLyBhZGQgdGhlIGRyaXZlciB0byBsb2NhbEZvcmFnZS5cbi8vIGxvY2FsZm9yYWdlLmRlZmluZURyaXZlcihteUN1c3RvbURyaXZlcik7XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBMb2NhbEZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5cbmltcG9ydCAqIGFzIENvcmRvdmFTUUxpdGVEcml2ZXIgZnJvbSAnbG9jYWxmb3JhZ2UtY29yZG92YXNxbGl0ZWRyaXZlcic7XG5cbmltcG9ydCBjaHJvbWVFeHRlbnNpb25Ecml2ZXIgZnJvbSAnLi93ZWJkcml2ZXInO1xuLyoqXG4gKiBTdG9yYWdlIGlzIGFuIGVhc3kgd2F5IHRvIHN0b3JlIGtleS92YWx1ZSBwYWlycyBhbmQgSlNPTiBvYmplY3RzLlxuICogU3RvcmFnZSB1c2VzIGEgdmFyaWV0eSBvZiBzdG9yYWdlIGVuZ2luZXMgdW5kZXJuZWF0aCwgcGlja2luZyB0aGUgYmVzdCBvbmUgYXZhaWxhYmxlXG4gKiBkZXBlbmRpbmcgb24gdGhlIHBsYXRmb3JtLlxuICpcbiAqIFdoZW4gcnVubmluZyBpbiBhIG5hdGl2ZSBhcHAgY29udGV4dCwgU3RvcmFnZSB3aWxsIHByaW9yaXRpemUgdXNpbmcgU1FMaXRlLCBhcyBpdCdzIG9uZSBvZlxuICogdGhlIG1vc3Qgc3RhYmxlIGFuZCB3aWRlbHkgdXNlZCBmaWxlLWJhc2VkIGRhdGFiYXNlcywgYW5kIGF2b2lkcyBzb21lIG9mIHRoZVxuICogcGl0ZmFsbHMgb2YgdGhpbmdzIGxpa2UgbG9jYWxzdG9yYWdlIGFuZCBJbmRleGVkREIsIHN1Y2ggYXMgdGhlIE9TIGRlY2lkaW5nIHRvIGNsZWFyIG91dCBzdWNoXG4gKiBkYXRhIGluIGxvdyBkaXNrLXNwYWNlIHNpdHVhdGlvbnMuXG4gKlxuICogV2hlbiBydW5uaW5nIGluIHRoZSB3ZWIgb3IgYXMgYSBQcm9ncmVzc2l2ZSBXZWIgQXBwLCBTdG9yYWdlIHdpbGwgYXR0ZW1wdCB0byB1c2VcbiAqIEluZGV4ZWREQiwgV2ViU1FMLCBhbmQgbG9jYWxzdG9yYWdlLCBpbiB0aGF0IG9yZGVyLlxuICpcbiAqIEB1c2FnZVxuICogRmlyc3QsIGlmIHlvdSdkIGxpa2UgdG8gdXNlIFNRTGl0ZSwgaW5zdGFsbCB0aGUgY29yZG92YS1zcWxpdGUtc3RvcmFnZSBwbHVnaW46XG4gKiBgYGBiYXNoXG4gKiBpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1zcWxpdGUtc3RvcmFnZVxuICogYGBgXG4gKlxuICogTmV4dCwgaW5zdGFsbCB0aGUgcGFja2FnZSAoY29tZXMgYnkgZGVmYXVsdCBmb3IgSW9uaWMgYXBwcyA+IElvbmljIFYxKTpcbiAqIGBgYGJhc2hcbiAqIG5wbSBpbnN0YWxsIC0tc2F2ZSBAaW9uaWMvc3RvcmFnZVxuICogYGBgXG4gKlxuICogTmV4dCwgYWRkIGl0IHRvIHRoZSBpbXBvcnRzIGxpc3QgaW4geW91ciBgTmdNb2R1bGVgIGRlY2xhcmF0aW9uIChmb3IgZXhhbXBsZSwgaW4gYHNyYy9hcHAvYXBwLm1vZHVsZS50c2ApOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBkZWNsYXJhdGlvbnM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgXSxcbiAqICAgaW1wb3J0czogW1xuICogICAgIEJyb3dzZXJNb2R1bGUsXG4gKiAgICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXG4gKiAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKVxuICogICBdLFxuICogICBib290c3RyYXA6IFtJb25pY0FwcF0sXG4gKiAgIGVudHJ5Q29tcG9uZW50czogW1xuICogICAgIC8vIC4uLlxuICogICBdLFxuICogICBwcm92aWRlcnM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiAqYGBgXG4gKlxuICogRmluYWxseSwgaW5qZWN0IGl0IGludG8gYW55IG9mIHlvdXIgY29tcG9uZW50cyBvciBwYWdlczpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5cbiAqIGV4cG9ydCBjbGFzcyBNeUFwcCB7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSkgeyB9XG4gKlxuICogICAuLi5cbiAqXG4gKiAgIC8vIHNldCBhIGtleS92YWx1ZVxuICogICBzdG9yYWdlLnNldCgnbmFtZScsICdNYXgnKTtcbiAqXG4gKiAgIC8vIE9yIHRvIGdldCBhIGtleS92YWx1ZSBwYWlyXG4gKiAgIHN0b3JhZ2UuZ2V0KCdhZ2UnKS50aGVuKCh2YWwpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnWW91ciBhZ2UgaXMnLCB2YWwpO1xuICogICB9KTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqXG4gKiAjIyMgQ29uZmlndXJpbmcgU3RvcmFnZVxuICpcbiAqIFRoZSBTdG9yYWdlIGVuZ2luZSBjYW4gYmUgY29uZmlndXJlZCBib3RoIHdpdGggc3BlY2lmaWMgc3RvcmFnZSBlbmdpbmUgcHJpb3JpdGllcywgb3IgY3VzdG9tIGNvbmZpZ3VyYXRpb25cbiAqIG9wdGlvbnMgdG8gcGFzcyB0byBsb2NhbEZvcmFnZS4gU2VlIHRoZSBsb2NhbEZvcmFnZSBjb25maWcgZG9jcyBmb3IgcG9zc2libGUgb3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlI2NvbmZpZ3VyYXRpb25cbiAqXG4gKiBOb3RlOiBBbnkgY3VzdG9tIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBkZWNsYXJhdGlvbnM6IFsuLi5dLFxuICogICBpbXBvcnRzOiBbXG4gKiAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3Qoe1xuICogICAgICAgbmFtZTogJ19fbXlkYicsXG4gICAgICAgICBkcml2ZXJPcmRlcjogWydpbmRleGVkZGInLCAnc3FsaXRlJywgJ3dlYnNxbCddXG4gKiAgICAgfSlcbiAqICAgXSxcbiAqICAgYm9vdHN0cmFwOiBbLi4uXSxcbiAqICAgZW50cnlDb21wb25lbnRzOiBbLi4uXSxcbiAqICAgIHByb3ZpZGVyczogWy4uLl1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcbiAgcHJpdmF0ZSBfZGJQcm9taXNlOiBQcm9taXNlPExvY2FsRm9yYWdlPjtcbiAgcHJpdmF0ZSBfZHJpdmVyOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgU3RvcmFnZSBpbnN0YW5jZSB1c2luZyB0aGUgb3JkZXIgb2YgZHJpdmVycyBhbmQgYW55IGFkZGl0aW9uYWwgY29uZmlnXG4gICAqIG9wdGlvbnMgdG8gcGFzcyB0byBMb2NhbEZvcmFnZS5cbiAgICpcbiAgICogUG9zc2libGUgZHJpdmVyIG9wdGlvbnMgYXJlOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddIGFuZCB0aGVcbiAgICogZGVmYXVsdCBpcyB0aGF0IGV4YWN0IG9yZGVyaW5nLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBTdG9yYWdlQ29uZmlnKSB7XG4gICAgdGhpcy5fZGJQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGRiOiBMb2NhbEZvcmFnZTtcblxuICAgICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IGdldERlZmF1bHRDb25maWcoKTtcbiAgICAgIGNvbnN0IGFjdHVhbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcblxuICAgICAgTG9jYWxGb3JhZ2UuZGVmaW5lRHJpdmVyKGNocm9tZUV4dGVuc2lvbkRyaXZlcilcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGRiID0gTG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2UoYWN0dWFsQ29uZmlnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICBkYi5zZXREcml2ZXIodGhpcy5fZ2V0RHJpdmVyT3JkZXIoYWN0dWFsQ29uZmlnLmRyaXZlck9yZGVyKSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJpdmVyID0gZGIuZHJpdmVyKCk7XG4gICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChyZWFzb24gPT4gcmVqZWN0KHJlYXNvbikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgZHJpdmVyIGJlaW5nIHVzZWQuXG4gICAqIEByZXR1cm5zIE5hbWUgb2YgdGhlIGRyaXZlclxuICAgKi9cbiAgZ2V0IGRyaXZlcigpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZmxlY3QgdGhlIHJlYWRpbmVzcyBvZiB0aGUgc3RvcmUuXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RvcmUgaXMgcmVhZHlcbiAgICovXG4gIHJlYWR5KCk6IFByb21pc2U8TG9jYWxGb3JhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlO1xuICB9XG5cbiAgLyoqIEBoaWRkZW4gKi9cbiAgcHJpdmF0ZSBfZ2V0RHJpdmVyT3JkZXIoZHJpdmVyT3JkZXIpIHtcbiAgICByZXR1cm4gZHJpdmVyT3JkZXIubWFwKGRyaXZlciA9PiB7XG4gICAgICBzd2l0Y2ggKGRyaXZlcikge1xuICAgICAgICBjYXNlICdzcWxpdGUnOlxuICAgICAgICAgIHJldHVybiBDb3Jkb3ZhU1FMaXRlRHJpdmVyLl9kcml2ZXI7XG4gICAgICAgIGNhc2UgJ2luZGV4ZWRkYic6XG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLklOREVYRUREQjtcbiAgICAgICAgY2FzZSAnd2Vic3FsJzpcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuV0VCU1FMO1xuICAgICAgICBjYXNlICdsb2NhbHN0b3JhZ2UnOlxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5MT0NBTFNUT1JBR0U7XG4gICAgICAgIGNhc2UgXCJ3ZWJFeHRlbnNpb25Mb2NhbFN0b3JhZ2VcIjpcbiAgICAgICAgICByZXR1cm4gY2hyb21lRXh0ZW5zaW9uRHJpdmVyLl9kcml2ZXI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGtleVxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuZ2V0SXRlbShrZXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIGZvciB0aGlzIGtleVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGtleSBhbmQgdmFsdWUgYXJlIHNldFxuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuc2V0SXRlbShrZXksIHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFueSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXkuXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdmFsdWUgaXMgcmVtb3ZlZFxuICAgKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIucmVtb3ZlSXRlbShrZXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZW50aXJlIGtleSB2YWx1ZSBzdG9yZS4gV0FSTklORzogSE9UIVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIGNsZWFyZWRcbiAgICovXG4gIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5jbGVhcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG51bWJlciBvZiBrZXlzIHN0b3JlZC5cbiAgICovXG4gIGxlbmd0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5sZW5ndGgoKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBrZXlzIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGtleXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5rZXlzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSx2YWx1ZSBwYWlyLlxuICAgKiBAcGFyYW0gaXRlcmF0b3JDYWxsYmFjayBhIGNhbGxiYWNrIG9mIHRoZSBmb3JtICh2YWx1ZSwga2V5LCBpdGVyYXRpb25OdW1iZXIpXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaXRlcmF0aW9uIGhhcyBmaW5pc2hlZC5cbiAgICovXG4gIGZvckVhY2goXG4gICAgaXRlcmF0b3JDYWxsYmFjazogKHZhbHVlOiBhbnksIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IE51bWJlcikgPT4gYW55XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5pdGVyYXRlKGl0ZXJhdG9yQ2FsbGJhY2spKTtcbiAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDb25maWcoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ19pb25pY3N0b3JhZ2UnLFxuICAgIHN0b3JlTmFtZTogJ19pb25pY2t2JyxcbiAgICBkYktleTogJ19pb25pY2tleScsXG4gICAgZHJpdmVyT3JkZXI6IFsnc3FsaXRlJywgJ2luZGV4ZWRkYicsICd3ZWJzcWwnLCAnbG9jYWxzdG9yYWdlJ11cbiAgfTtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZUNvbmZpZyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZlcnNpb24/OiBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIHN0b3JlTmFtZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRyaXZlck9yZGVyPzogc3RyaW5nW107XG4gIGRiS2V5Pzogc3RyaW5nO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNvbnN0IFN0b3JhZ2VDb25maWdUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KFxuICAnU1RPUkFHRV9DT05GSUdfVE9LRU4nXG4pO1xuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlKHN0b3JhZ2VDb25maWc6IFN0b3JhZ2VDb25maWcpOiBTdG9yYWdlIHtcbiAgY29uc3QgY29uZmlnID0gISFzdG9yYWdlQ29uZmlnID8gc3RvcmFnZUNvbmZpZyA6IGdldERlZmF1bHRDb25maWcoKTtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlKGNvbmZpZyk7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdENvbmZpZyxcbiAgcHJvdmlkZVN0b3JhZ2UsXG4gIFN0b3JhZ2UsXG4gIFN0b3JhZ2VDb25maWcsXG4gIFN0b3JhZ2VDb25maWdUb2tlblxufSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgeyBTdG9yYWdlQ29uZmlnLCBTdG9yYWdlQ29uZmlnVG9rZW4sIFN0b3JhZ2UgfTtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBJb25pY1N0b3JhZ2VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW9uaWNTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU3RvcmFnZUNvbmZpZ1Rva2VuLCB1c2VWYWx1ZTogc3RvcmFnZUNvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU3RvcmFnZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBwcm92aWRlU3RvcmFnZSxcbiAgICAgICAgICBkZXBzOiBbU3RvcmFnZUNvbmZpZ1Rva2VuXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxvY2FsRm9yYWdlLmRlZmluZURyaXZlciIsImNocm9tZUV4dGVuc2lvbkRyaXZlciIsIkxvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlIiwiQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyIiwiTG9jYWxGb3JhZ2UuSU5ERVhFRERCIiwiTG9jYWxGb3JhZ2UuV0VCU1FMIiwiTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFIiwiSW5qZWN0aW9uVG9rZW4iLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNBLHFCQUFNLFNBQVMsR0FBc0I7UUFDbkMsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxRQUFRLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3ZELFlBQVk7O1lBQVo7WUFDRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUNELEtBQUs7OztZQUFMLFVBQU0sUUFBNkI7WUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO29CQUM1QixJQUFJLFFBQVEsRUFBRTt3QkFDWixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNkLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTzs7Ozs7WUFBUCxVQUFXLEdBQVcsRUFBRSxRQUF1QztZQUM3RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQSxHQUFHO29CQUMvQixxQkFBSSxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3RELElBQUksUUFBUSxFQUFFO3dCQUNaLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ3hCO29CQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakIsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPOzs7OztZQUFQLFVBQ0UsUUFBK0QsRUFDL0QsUUFBd0M7WUFFeEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUEsR0FBRztvQkFDaEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7b0JBQ3BELElBQUksUUFBUSxFQUFFO3dCQUNaLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3JCO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSjtRQUVELEdBQUc7Ozs7WUFBSCxVQUNFLFFBQWdCLEVBQ2hCLFFBQTBDO1lBRTFDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFBLEdBQUc7b0JBQ2hDLHFCQUFJLEdBQUcsR0FBVyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksUUFBUSxFQUFFO3dCQUNaLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3JCO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSjtRQUNELElBQUk7OztZQUFKLFVBQUssUUFBNkM7WUFDaEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUEsR0FBRztvQkFDaEMsSUFBSSxRQUFRLEVBQUU7d0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDckI7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNkLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTTs7O1lBQU4sVUFBTyxRQUFtRDtZQUN4RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQSxHQUFHO29CQUNoQyxJQUFJLFFBQVEsRUFBRTt3QkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2pDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMxQixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSjtRQUNELFVBQVU7Ozs7WUFBVixVQUFXLEdBQVcsRUFBRSxRQUE2QjtZQUNuRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBQSxHQUFHO29CQUNsQyxJQUFJLFFBQVEsRUFBRTt3QkFDWixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNkLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTzs7Ozs7O1lBQVAsVUFDRSxHQUFXLEVBQ1gsS0FBUSxFQUNSLFFBQXVDO1lBRXZDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMscUJBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUEsR0FBRztvQkFDL0IsSUFBSSxRQUFRLEVBQUU7d0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDckI7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNkLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNKO0tBQ0YsQ0FBQztBQUVGOzs7Ozs7O0FDekdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQUE7Ozs7Ozs7O1FBV0UsaUJBQVksTUFBcUI7WUFBakMsaUJBb0JDOzJCQTdCeUIsSUFBSTtZQVU1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzVDLHFCQUFJLEVBQWUsQ0FBQztnQkFFcEIscUJBQU0sYUFBYSxHQUFHLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3pDLHFCQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBRWhFQSx3QkFBd0IsQ0FBQ0MsU0FBcUIsQ0FBQztxQkFDNUMsSUFBSSxDQUFDO29CQUNKLEVBQUUsR0FBR0MsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQy9DLENBQUM7cUJBQ0QsSUFBSSxDQUFDO29CQUNKLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFBQSxDQUM3RDtxQkFDQSxJQUFJLENBQUM7b0JBQ0osS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDYixDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1NBQ0o7UUFNRCxzQkFBSSwyQkFBTTs7Ozs7Ozs7Z0JBQVY7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCOzs7V0FBQTs7Ozs7Ozs7O1FBTUQsdUJBQUs7Ozs7WUFBTDtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7Ozs7OztRQUdPLGlDQUFlOzs7OztzQkFBQyxXQUFXO2dCQUNqQyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNO29CQUMzQixRQUFRLE1BQU07d0JBQ1osS0FBSyxRQUFROzRCQUNYLE9BQU9DLDJCQUEyQixDQUFDO3dCQUNyQyxLQUFLLFdBQVc7NEJBQ2QsT0FBT0MscUJBQXFCLENBQUM7d0JBQy9CLEtBQUssUUFBUTs0QkFDWCxPQUFPQyxrQkFBa0IsQ0FBQzt3QkFDNUIsS0FBSyxjQUFjOzRCQUNqQixPQUFPQyx3QkFBd0IsQ0FBQzt3QkFDbEMsS0FBSywwQkFBMEI7NEJBQzdCLE9BQU9MLFNBQXFCLENBQUMsT0FBTyxDQUFDO3FCQUN4QztpQkFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztRQVFMLHFCQUFHOzs7OztZQUFILFVBQUksR0FBVztnQkFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDcEQ7Ozs7Ozs7Ozs7Ozs7UUFRRCxxQkFBRzs7Ozs7O1lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBVTtnQkFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUMzRDs7Ozs7Ozs7Ozs7UUFPRCx3QkFBTTs7Ozs7WUFBTixVQUFPLEdBQVc7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUN2RDs7Ozs7Ozs7O1FBTUQsdUJBQUs7Ozs7WUFBTDtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFBLENBQUMsQ0FBQzthQUMvQzs7Ozs7OztRQUtELHdCQUFNOzs7WUFBTjtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFBLENBQUMsQ0FBQzthQUNoRDs7Ozs7OztRQUtELHNCQUFJOzs7WUFBSjtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQzthQUM5Qzs7Ozs7Ozs7Ozs7UUFPRCx5QkFBTzs7Ozs7WUFBUCxVQUNFLGdCQUEyRTtnQkFFM0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDakU7c0JBbk9IO1FBb09DLENBQUE7Ozs7O0FBR0Q7UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLFVBQVU7WUFDckIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDO1NBQy9ELENBQUM7S0FDSDs7OztBQWNELHlCQUFhLGtCQUFrQixHQUFHLElBQUlNLG1CQUFjLENBQ2xELHNCQUFzQixDQUN2QixDQUFDOzs7Ozs7QUFHRiw0QkFBK0IsYUFBNEI7UUFDekQscUJBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLEdBQUcsYUFBYSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDcEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1Qjs7Ozs7O0FDcFFEOzs7Ozs7O1FBYVMsMEJBQU87Ozs7WUFBZCxVQUFlLGFBQW1DO2dCQUFuQyw4QkFBQTtvQkFBQSxvQkFBbUM7O2dCQUNoRCxPQUFPO29CQUNMLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO3dCQUN4RDs0QkFDRSxPQUFPLEVBQUUsT0FBTzs0QkFDaEIsVUFBVSxFQUFFLGNBQWM7NEJBQzFCLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7O29CQWRGQyxhQUFROztpQ0FYVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9