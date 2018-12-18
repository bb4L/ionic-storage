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
                    var /** @type {?} */ result = typeof key === 'string' ? res[key] : res;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bpb25pYy9zdG9yYWdlL3dlYmRyaXZlci50cyIsIm5nOi8vQGlvbmljL3N0b3JhZ2Uvc3RvcmFnZS50cyIsIm5nOi8vQGlvbmljL3N0b3JhZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBsZXQgY2hyb21lOiBhbnk7XHJcbmNvbnN0IHdlYmRyaXZlcjogTG9jYWxGb3JhZ2VEcml2ZXIgPSB7XHJcbiAgICAgICAgX2RyaXZlcjogXCJ3ZWJFeHRlbnNpb25Mb2NhbFN0b3JhZ2VcIixcclxuICAgICAgICBfaW5pdFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsZWFyKGNhbGxiYWNrID86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0SXRlbTxUPihrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoa2V5LCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyA/IHJlc1trZXldIDogcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlcmF0ZTxULCBVPihpdGVyYXRlZTogKHZhbHVlOiBULCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBudW1iZXIpID0+IFUsIGNhbGxiYWNrPzogKGVycjogYW55LCByZXN1bHQ6IFUpID0+IHZvaWQpOiBQcm9taXNlPFU+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKChrZXksIGkpID0+IGl0ZXJhdGVlKHJlc1trZXldLCBrZXksIGkpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBrZXkoa2V5SW5kZXg6IG51bWJlciwgY2FsbGJhY2s/OiAoZXJyOiBhbnksIGtleTogc3RyaW5nKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb2w6c3RyaW5nID0gcmVzLmtleXMoKVtrZXlJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXMoY2FsbGJhY2sgPzogKGVycjogYW55LCBrZXlzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVuZ3RoKGNhbGxiYWNrID86IChlcnI6IGFueSwgbnVtYmVyT2ZLZXlzOiBudW1iZXIpID0+IHZvaWQpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzLmtleXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5rZXlzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nLCBjYWxsYmFjayA/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXksIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJdGVtPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCwgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge31cclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KG9iaiwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbn1cclxuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViZHJpdmVyO1xyXG4vLyBhZGQgdGhlIGRyaXZlciB0byBsb2NhbEZvcmFnZS5cclxuLy8gbG9jYWxmb3JhZ2UuZGVmaW5lRHJpdmVyKG15Q3VzdG9tRHJpdmVyKTsiLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgTG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xyXG5cclxuaW1wb3J0ICogYXMgQ29yZG92YVNRTGl0ZURyaXZlciBmcm9tICdsb2NhbGZvcmFnZS1jb3Jkb3Zhc3FsaXRlZHJpdmVyJztcclxuXHJcbmltcG9ydCBjaHJvbWVFeHRlbnNpb25Ecml2ZXIgZnJvbSAnLi93ZWJkcml2ZXInO1xyXG4vKipcclxuICogU3RvcmFnZSBpcyBhbiBlYXN5IHdheSB0byBzdG9yZSBrZXkvdmFsdWUgcGFpcnMgYW5kIEpTT04gb2JqZWN0cy5cclxuICogU3RvcmFnZSB1c2VzIGEgdmFyaWV0eSBvZiBzdG9yYWdlIGVuZ2luZXMgdW5kZXJuZWF0aCwgcGlja2luZyB0aGUgYmVzdCBvbmUgYXZhaWxhYmxlXHJcbiAqIGRlcGVuZGluZyBvbiB0aGUgcGxhdGZvcm0uXHJcbiAqXHJcbiAqIFdoZW4gcnVubmluZyBpbiBhIG5hdGl2ZSBhcHAgY29udGV4dCwgU3RvcmFnZSB3aWxsIHByaW9yaXRpemUgdXNpbmcgU1FMaXRlLCBhcyBpdCdzIG9uZSBvZlxyXG4gKiB0aGUgbW9zdCBzdGFibGUgYW5kIHdpZGVseSB1c2VkIGZpbGUtYmFzZWQgZGF0YWJhc2VzLCBhbmQgYXZvaWRzIHNvbWUgb2YgdGhlXHJcbiAqIHBpdGZhbGxzIG9mIHRoaW5ncyBsaWtlIGxvY2Fsc3RvcmFnZSBhbmQgSW5kZXhlZERCLCBzdWNoIGFzIHRoZSBPUyBkZWNpZGluZyB0byBjbGVhciBvdXQgc3VjaFxyXG4gKiBkYXRhIGluIGxvdyBkaXNrLXNwYWNlIHNpdHVhdGlvbnMuXHJcbiAqXHJcbiAqIFdoZW4gcnVubmluZyBpbiB0aGUgd2ViIG9yIGFzIGEgUHJvZ3Jlc3NpdmUgV2ViIEFwcCwgU3RvcmFnZSB3aWxsIGF0dGVtcHQgdG8gdXNlXHJcbiAqIEluZGV4ZWREQiwgV2ViU1FMLCBhbmQgbG9jYWxzdG9yYWdlLCBpbiB0aGF0IG9yZGVyLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogRmlyc3QsIGlmIHlvdSdkIGxpa2UgdG8gdXNlIFNRTGl0ZSwgaW5zdGFsbCB0aGUgY29yZG92YS1zcWxpdGUtc3RvcmFnZSBwbHVnaW46XHJcbiAqIGBgYGJhc2hcclxuICogaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2VcclxuICogYGBgXHJcbiAqXHJcbiAqIE5leHQsIGluc3RhbGwgdGhlIHBhY2thZ2UgKGNvbWVzIGJ5IGRlZmF1bHQgZm9yIElvbmljIGFwcHMgPiBJb25pYyBWMSk6XHJcbiAqIGBgYGJhc2hcclxuICogbnBtIGluc3RhbGwgLS1zYXZlIEBpb25pYy9zdG9yYWdlXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOZXh0LCBhZGQgaXQgdG8gdGhlIGltcG9ydHMgbGlzdCBpbiB5b3VyIGBOZ01vZHVsZWAgZGVjbGFyYXRpb24gKGZvciBleGFtcGxlLCBpbiBgc3JjL2FwcC9hcHAubW9kdWxlLnRzYCk6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGRlY2xhcmF0aW9uczogW1xyXG4gKiAgICAgLy8gLi4uXHJcbiAqICAgXSxcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBCcm93c2VyTW9kdWxlLFxyXG4gKiAgICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXHJcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpXHJcbiAqICAgXSxcclxuICogICBib290c3RyYXA6IFtJb25pY0FwcF0sXHJcbiAqICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAqICAgICAvLyAuLi5cclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW1xyXG4gKiAgICAgLy8gLi4uXHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqYGBgXHJcbiAqXHJcbiAqIEZpbmFsbHksIGluamVjdCBpdCBpbnRvIGFueSBvZiB5b3VyIGNvbXBvbmVudHMgb3IgcGFnZXM6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuXHJcbiAqIGV4cG9ydCBjbGFzcyBNeUFwcCB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKSB7IH1cclxuICpcclxuICogICAuLi5cclxuICpcclxuICogICAvLyBzZXQgYSBrZXkvdmFsdWVcclxuICogICBzdG9yYWdlLnNldCgnbmFtZScsICdNYXgnKTtcclxuICpcclxuICogICAvLyBPciB0byBnZXQgYSBrZXkvdmFsdWUgcGFpclxyXG4gKiAgIHN0b3JhZ2UuZ2V0KCdhZ2UnKS50aGVuKCh2YWwpID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKCdZb3VyIGFnZSBpcycsIHZhbCk7XHJcbiAqICAgfSk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqXHJcbiAqICMjIyBDb25maWd1cmluZyBTdG9yYWdlXHJcbiAqXHJcbiAqIFRoZSBTdG9yYWdlIGVuZ2luZSBjYW4gYmUgY29uZmlndXJlZCBib3RoIHdpdGggc3BlY2lmaWMgc3RvcmFnZSBlbmdpbmUgcHJpb3JpdGllcywgb3IgY3VzdG9tIGNvbmZpZ3VyYXRpb25cclxuICogb3B0aW9ucyB0byBwYXNzIHRvIGxvY2FsRm9yYWdlLiBTZWUgdGhlIGxvY2FsRm9yYWdlIGNvbmZpZyBkb2NzIGZvciBwb3NzaWJsZSBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UjY29uZmlndXJhdGlvblxyXG4gKlxyXG4gKiBOb3RlOiBBbnkgY3VzdG9tIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBkZWNsYXJhdGlvbnM6IFsuLi5dLFxyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KHtcclxuICogICAgICAgbmFtZTogJ19fbXlkYicsXHJcbiAgICAgICAgIGRyaXZlck9yZGVyOiBbJ2luZGV4ZWRkYicsICdzcWxpdGUnLCAnd2Vic3FsJ11cclxuICogICAgIH0pXHJcbiAqICAgXSxcclxuICogICBib290c3RyYXA6IFsuLi5dLFxyXG4gKiAgIGVudHJ5Q29tcG9uZW50czogWy4uLl0sXHJcbiAqICAgIHByb3ZpZGVyczogWy4uLl1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgcHJpdmF0ZSBfZGJQcm9taXNlOiBQcm9taXNlPExvY2FsRm9yYWdlPjtcclxuICBwcml2YXRlIF9kcml2ZXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBTdG9yYWdlIGluc3RhbmNlIHVzaW5nIHRoZSBvcmRlciBvZiBkcml2ZXJzIGFuZCBhbnkgYWRkaXRpb25hbCBjb25maWdcclxuICAgKiBvcHRpb25zIHRvIHBhc3MgdG8gTG9jYWxGb3JhZ2UuXHJcbiAgICpcclxuICAgKiBQb3NzaWJsZSBkcml2ZXIgb3B0aW9ucyBhcmU6IFsnc3FsaXRlJywgJ2luZGV4ZWRkYicsICd3ZWJzcWwnLCAnbG9jYWxzdG9yYWdlJ10gYW5kIHRoZVxyXG4gICAqIGRlZmF1bHQgaXMgdGhhdCBleGFjdCBvcmRlcmluZy5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFN0b3JhZ2VDb25maWcpIHtcclxuICAgIHRoaXMuX2RiUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGRiOiBMb2NhbEZvcmFnZTtcclxuXHJcbiAgICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBnZXREZWZhdWx0Q29uZmlnKCk7XHJcbiAgICAgIGNvbnN0IGFjdHVhbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcclxuXHJcbiAgICAgIExvY2FsRm9yYWdlLmRlZmluZURyaXZlcihjaHJvbWVFeHRlbnNpb25Ecml2ZXIpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZGIgPSBMb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZShhY3R1YWxDb25maWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgIGRiLnNldERyaXZlcih0aGlzLl9nZXREcml2ZXJPcmRlcihhY3R1YWxDb25maWcuZHJpdmVyT3JkZXIpKVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9kcml2ZXIgPSBkYi5kcml2ZXIoKTtcclxuICAgICAgICAgIHJlc29sdmUoZGIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiByZWplY3QocmVhc29uKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgZHJpdmVyIGJlaW5nIHVzZWQuXHJcbiAgICogQHJldHVybnMgTmFtZSBvZiB0aGUgZHJpdmVyXHJcbiAgICovXHJcbiAgZ2V0IGRyaXZlcigpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kcml2ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZsZWN0IHRoZSByZWFkaW5lc3Mgb2YgdGhlIHN0b3JlLlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RvcmUgaXMgcmVhZHlcclxuICAgKi9cclxuICByZWFkeSgpOiBQcm9taXNlPExvY2FsRm9yYWdlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBoaWRkZW4gKi9cclxuICBwcml2YXRlIF9nZXREcml2ZXJPcmRlcihkcml2ZXJPcmRlcikge1xyXG4gICAgcmV0dXJuIGRyaXZlck9yZGVyLm1hcChkcml2ZXIgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGRyaXZlcikge1xyXG4gICAgICAgIGNhc2UgJ3NxbGl0ZSc6XHJcbiAgICAgICAgICByZXR1cm4gQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyO1xyXG4gICAgICAgIGNhc2UgJ2luZGV4ZWRkYic6XHJcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuSU5ERVhFRERCO1xyXG4gICAgICAgIGNhc2UgJ3dlYnNxbCc6XHJcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuV0VCU1FMO1xyXG4gICAgICAgIGNhc2UgJ2xvY2Fsc3RvcmFnZSc6XHJcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFO1xyXG4gICAgICAgIGNhc2UgXCJ3ZWJFeHRlbnNpb25Mb2NhbFN0b3JhZ2VcIjpcclxuICAgICAgICAgIHJldHVybiBjaHJvbWVFeHRlbnNpb25Ecml2ZXIuX2RyaXZlcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGtleVxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuZ2V0SXRlbShrZXkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXkuXHJcbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcclxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIGZvciB0aGlzIGtleVxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUga2V5IGFuZCB2YWx1ZSBhcmUgc2V0XHJcbiAgICovXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5zZXRJdGVtKGtleSwgdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbnkgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB2YWx1ZSBpcyByZW1vdmVkXHJcbiAgICovXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5yZW1vdmVJdGVtKGtleSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGVudGlyZSBrZXkgdmFsdWUgc3RvcmUuIFdBUk5JTkc6IEhPVCFcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIGNsZWFyZWRcclxuICAgKi9cclxuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5jbGVhcigpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbnVtYmVyIG9mIGtleXMgc3RvcmVkLlxyXG4gICAqL1xyXG4gIGxlbmd0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmxlbmd0aCgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5cyBpbiB0aGUgc3RvcmUuXHJcbiAgICovXHJcbiAga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIua2V5cygpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSx2YWx1ZSBwYWlyLlxyXG4gICAqIEBwYXJhbSBpdGVyYXRvckNhbGxiYWNrIGEgY2FsbGJhY2sgb2YgdGhlIGZvcm0gKHZhbHVlLCBrZXksIGl0ZXJhdGlvbk51bWJlcilcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGl0ZXJhdGlvbiBoYXMgZmluaXNoZWQuXHJcbiAgICovXHJcbiAgZm9yRWFjaChcclxuICAgIGl0ZXJhdG9yQ2FsbGJhY2s6ICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBOdW1iZXIpID0+IGFueVxyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLml0ZXJhdGUoaXRlcmF0b3JDYWxsYmFjaykpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDb25maWcoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdfaW9uaWNzdG9yYWdlJyxcclxuICAgIHN0b3JlTmFtZTogJ19pb25pY2t2JyxcclxuICAgIGRiS2V5OiAnX2lvbmlja2V5JyxcclxuICAgIGRyaXZlck9yZGVyOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlQ29uZmlnIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIHZlcnNpb24/OiBudW1iZXI7XHJcbiAgc2l6ZT86IG51bWJlcjtcclxuICBzdG9yZU5hbWU/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgZHJpdmVyT3JkZXI/OiBzdHJpbmdbXTtcclxuICBkYktleT86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGNvbnN0IFN0b3JhZ2VDb25maWdUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KFxyXG4gICdTVE9SQUdFX0NPTkZJR19UT0tFTidcclxuKTtcclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZShzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnKTogU3RvcmFnZSB7XHJcbiAgY29uc3QgY29uZmlnID0gISFzdG9yYWdlQ29uZmlnID8gc3RvcmFnZUNvbmZpZyA6IGdldERlZmF1bHRDb25maWcoKTtcclxuICByZXR1cm4gbmV3IFN0b3JhZ2UoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRDb25maWcsXHJcbiAgcHJvdmlkZVN0b3JhZ2UsXHJcbiAgU3RvcmFnZSxcclxuICBTdG9yYWdlQ29uZmlnLFxyXG4gIFN0b3JhZ2VDb25maWdUb2tlblxyXG59IGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgeyBTdG9yYWdlQ29uZmlnLCBTdG9yYWdlQ29uZmlnVG9rZW4sIFN0b3JhZ2UgfTtcclxuXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBJb25pY1N0b3JhZ2VNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KHN0b3JhZ2VDb25maWc6IFN0b3JhZ2VDb25maWcgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW9uaWNTdG9yYWdlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IFN0b3JhZ2VDb25maWdUb2tlbiwgdXNlVmFsdWU6IHN0b3JhZ2VDb25maWcgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBTdG9yYWdlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2UsXHJcbiAgICAgICAgICBkZXBzOiBbU3RvcmFnZUNvbmZpZ1Rva2VuXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxvY2FsRm9yYWdlLmRlZmluZURyaXZlciIsImNocm9tZUV4dGVuc2lvbkRyaXZlciIsIkxvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlIiwiQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyIiwiTG9jYWxGb3JhZ2UuSU5ERVhFRERCIiwiTG9jYWxGb3JhZ2UuV0VCU1FMIiwiTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFIiwiSW5qZWN0aW9uVG9rZW4iLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNBLHFCQUFNLFNBQVMsR0FBc0I7UUFDN0IsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxZQUFZOztZQUFaO1lBQ0ks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