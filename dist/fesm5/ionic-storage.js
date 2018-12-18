import { InjectionToken, NgModule } from '@angular/core';
import { defineDriver, createInstance, INDEXEDDB, WEBSQL, LOCALSTORAGE } from 'localforage';
import { _driver } from 'localforage-cordovasqlitedriver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ webdriver = {
    _driver: "webExtensionLocalStorage",
    _initStorage: /**
     * @return {?}
     */
    function () {
        return Promise.resolve();
    },
    clear: /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
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
     */
    function (key, callback) {
        return new Promise(function (resolve, reject) {
            chrome.storage.local.get(key, function (res) {
                if (callback) {
                    callback(null, res);
                }
                resolve(res);
            });
        });
    },
    iterate: /**
     * @template T, U
     * @param {?} iteratee
     * @param {?=} callback
     * @return {?}
     */
    function (iteratee, callback) {
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
     */
    function (keyIndex, callback) {
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
     */
    function (callback) {
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
     */
    function (callback) {
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
     */
    function (key, callback) {
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
     */
    function (key, value, callback) {
        return new Promise(function (resolve, reject) {
            chrome.storage.local.set({ key: value }, function (res) {
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
var  /**
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
Storage = /** @class */ (function () {
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
            defineDriver(webdriver)
                .then(function () {
                db = createInstance(actualConfig);
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
         */
        function () {
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
var /** @type {?} */ StorageConfigToken = new InjectionToken('STORAGE_CONFIG_TOKEN');
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
        if (storageConfig === void 0) { storageConfig = null; }
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
        { type: NgModule },
    ];
    return IonicStorageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { StorageConfigToken, Storage, IonicStorageModule, provideStorage as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGlvbmljL3N0b3JhZ2Uvd2ViZHJpdmVyLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9zdG9yYWdlLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcclxuY29uc3Qgd2ViZHJpdmVyOiBMb2NhbEZvcmFnZURyaXZlciA9IHtcclxuICAgICAgICBfZHJpdmVyOiBcIndlYkV4dGVuc2lvbkxvY2FsU3RvcmFnZVwiLFxyXG4gICAgICAgIF9pbml0U3RvcmFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXIoY2FsbGJhY2sgPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChrZXksIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVyYXRlPFQsIFU+KGl0ZXJhdGVlOiAodmFsdWU6IFQsIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IG51bWJlcikgPT4gVSwgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHJlc3VsdDogVSkgPT4gdm9pZCk6IFByb21pc2U8VT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmZvckVhY2goKGtleSwgaSkgPT4gaXRlcmF0ZWUocmVzW2tleV0sIGtleSwgaSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGtleShrZXlJbmRleDogbnVtYmVyLCBjYWxsYmFjaz86IChlcnI6IGFueSwga2V5OiBzdHJpbmcpID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNvbDpzdHJpbmcgPSByZXMua2V5cygpW2tleUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgc29sKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5cyhjYWxsYmFjayA/OiAoZXJyOiBhbnksIGtleXM6IHN0cmluZ1tdKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZW5ndGgoY2FsbGJhY2sgPzogKGVycjogYW55LCBudW1iZXJPZktleXM6IG51bWJlcikgPT4gdm9pZCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMua2V5cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmtleXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcsIGNhbGxiYWNrID86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEl0ZW08VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBULCBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7a2V5OiB2YWx1ZX0sIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG59XHJcbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYmRyaXZlcjtcclxuLy8gYWRkIHRoZSBkcml2ZXIgdG8gbG9jYWxGb3JhZ2UuXHJcbi8vIGxvY2FsZm9yYWdlLmRlZmluZURyaXZlcihteUN1c3RvbURyaXZlcik7IiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCAqIGFzIExvY2FsRm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcclxuXHJcbmltcG9ydCAqIGFzIENvcmRvdmFTUUxpdGVEcml2ZXIgZnJvbSAnbG9jYWxmb3JhZ2UtY29yZG92YXNxbGl0ZWRyaXZlcic7XHJcblxyXG5pbXBvcnQgY2hyb21lRXh0ZW5zaW9uRHJpdmVyIGZyb20gJy4vd2ViZHJpdmVyJztcclxuLyoqXHJcbiAqIFN0b3JhZ2UgaXMgYW4gZWFzeSB3YXkgdG8gc3RvcmUga2V5L3ZhbHVlIHBhaXJzIGFuZCBKU09OIG9iamVjdHMuXHJcbiAqIFN0b3JhZ2UgdXNlcyBhIHZhcmlldHkgb2Ygc3RvcmFnZSBlbmdpbmVzIHVuZGVybmVhdGgsIHBpY2tpbmcgdGhlIGJlc3Qgb25lIGF2YWlsYWJsZVxyXG4gKiBkZXBlbmRpbmcgb24gdGhlIHBsYXRmb3JtLlxyXG4gKlxyXG4gKiBXaGVuIHJ1bm5pbmcgaW4gYSBuYXRpdmUgYXBwIGNvbnRleHQsIFN0b3JhZ2Ugd2lsbCBwcmlvcml0aXplIHVzaW5nIFNRTGl0ZSwgYXMgaXQncyBvbmUgb2ZcclxuICogdGhlIG1vc3Qgc3RhYmxlIGFuZCB3aWRlbHkgdXNlZCBmaWxlLWJhc2VkIGRhdGFiYXNlcywgYW5kIGF2b2lkcyBzb21lIG9mIHRoZVxyXG4gKiBwaXRmYWxscyBvZiB0aGluZ3MgbGlrZSBsb2NhbHN0b3JhZ2UgYW5kIEluZGV4ZWREQiwgc3VjaCBhcyB0aGUgT1MgZGVjaWRpbmcgdG8gY2xlYXIgb3V0IHN1Y2hcclxuICogZGF0YSBpbiBsb3cgZGlzay1zcGFjZSBzaXR1YXRpb25zLlxyXG4gKlxyXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGhlIHdlYiBvciBhcyBhIFByb2dyZXNzaXZlIFdlYiBBcHAsIFN0b3JhZ2Ugd2lsbCBhdHRlbXB0IHRvIHVzZVxyXG4gKiBJbmRleGVkREIsIFdlYlNRTCwgYW5kIGxvY2Fsc3RvcmFnZSwgaW4gdGhhdCBvcmRlci5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIEZpcnN0LCBpZiB5b3UnZCBsaWtlIHRvIHVzZSBTUUxpdGUsIGluc3RhbGwgdGhlIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2UgcGx1Z2luOlxyXG4gKiBgYGBiYXNoXHJcbiAqIGlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOZXh0LCBpbnN0YWxsIHRoZSBwYWNrYWdlIChjb21lcyBieSBkZWZhdWx0IGZvciBJb25pYyBhcHBzID4gSW9uaWMgVjEpOlxyXG4gKiBgYGBiYXNoXHJcbiAqIG5wbSBpbnN0YWxsIC0tc2F2ZSBAaW9uaWMvc3RvcmFnZVxyXG4gKiBgYGBcclxuICpcclxuICogTmV4dCwgYWRkIGl0IHRvIHRoZSBpbXBvcnRzIGxpc3QgaW4geW91ciBgTmdNb2R1bGVgIGRlY2xhcmF0aW9uIChmb3IgZXhhbXBsZSwgaW4gYHNyYy9hcHAvYXBwLm1vZHVsZS50c2ApOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBkZWNsYXJhdGlvbnM6IFtcclxuICogICAgIC8vIC4uLlxyXG4gKiAgIF0sXHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgQnJvd3Nlck1vZHVsZSxcclxuICogICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxyXG4gKiAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKVxyXG4gKiAgIF0sXHJcbiAqICAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxyXG4gKiAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gKiAgICAgLy8gLi4uXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIC8vIC4uLlxyXG4gKiAgIF1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKmBgYFxyXG4gKlxyXG4gKiBGaW5hbGx5LCBpbmplY3QgaXQgaW50byBhbnkgb2YgeW91ciBjb21wb25lbnRzIG9yIHBhZ2VzOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcblxyXG4gKiBleHBvcnQgY2xhc3MgTXlBcHAge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSkgeyB9XHJcbiAqXHJcbiAqICAgLi4uXHJcbiAqXHJcbiAqICAgLy8gc2V0IGEga2V5L3ZhbHVlXHJcbiAqICAgc3RvcmFnZS5zZXQoJ25hbWUnLCAnTWF4Jyk7XHJcbiAqXHJcbiAqICAgLy8gT3IgdG8gZ2V0IGEga2V5L3ZhbHVlIHBhaXJcclxuICogICBzdG9yYWdlLmdldCgnYWdlJykudGhlbigodmFsKSA9PiB7XHJcbiAqICAgICBjb25zb2xlLmxvZygnWW91ciBhZ2UgaXMnLCB2YWwpO1xyXG4gKiAgIH0pO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKlxyXG4gKiAjIyMgQ29uZmlndXJpbmcgU3RvcmFnZVxyXG4gKlxyXG4gKiBUaGUgU3RvcmFnZSBlbmdpbmUgY2FuIGJlIGNvbmZpZ3VyZWQgYm90aCB3aXRoIHNwZWNpZmljIHN0b3JhZ2UgZW5naW5lIHByaW9yaXRpZXMsIG9yIGN1c3RvbSBjb25maWd1cmF0aW9uXHJcbiAqIG9wdGlvbnMgdG8gcGFzcyB0byBsb2NhbEZvcmFnZS4gU2VlIHRoZSBsb2NhbEZvcmFnZSBjb25maWcgZG9jcyBmb3IgcG9zc2libGUgb3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlI2NvbmZpZ3VyYXRpb25cclxuICpcclxuICogTm90ZTogQW55IGN1c3RvbSBjb25maWd1cmF0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgZGVjbGFyYXRpb25zOiBbLi4uXSxcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCh7XHJcbiAqICAgICAgIG5hbWU6ICdfX215ZGInLFxyXG4gICAgICAgICBkcml2ZXJPcmRlcjogWydpbmRleGVkZGInLCAnc3FsaXRlJywgJ3dlYnNxbCddXHJcbiAqICAgICB9KVxyXG4gKiAgIF0sXHJcbiAqICAgYm9vdHN0cmFwOiBbLi4uXSxcclxuICogICBlbnRyeUNvbXBvbmVudHM6IFsuLi5dLFxyXG4gKiAgICBwcm92aWRlcnM6IFsuLi5dXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xyXG4gIHByaXZhdGUgX2RiUHJvbWlzZTogUHJvbWlzZTxMb2NhbEZvcmFnZT47XHJcbiAgcHJpdmF0ZSBfZHJpdmVyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgU3RvcmFnZSBpbnN0YW5jZSB1c2luZyB0aGUgb3JkZXIgb2YgZHJpdmVycyBhbmQgYW55IGFkZGl0aW9uYWwgY29uZmlnXHJcbiAgICogb3B0aW9ucyB0byBwYXNzIHRvIExvY2FsRm9yYWdlLlxyXG4gICAqXHJcbiAgICogUG9zc2libGUgZHJpdmVyIG9wdGlvbnMgYXJlOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddIGFuZCB0aGVcclxuICAgKiBkZWZhdWx0IGlzIHRoYXQgZXhhY3Qgb3JkZXJpbmcuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBTdG9yYWdlQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9kYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBkYjogTG9jYWxGb3JhZ2U7XHJcblxyXG4gICAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gZ2V0RGVmYXVsdENvbmZpZygpO1xyXG4gICAgICBjb25zdCBhY3R1YWxDb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XHJcblxyXG4gICAgICBMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIoY2hyb21lRXh0ZW5zaW9uRHJpdmVyKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGRiID0gTG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2UoYWN0dWFsQ29uZmlnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+XHJcbiAgICAgICAgICBkYi5zZXREcml2ZXIodGhpcy5fZ2V0RHJpdmVyT3JkZXIoYWN0dWFsQ29uZmlnLmRyaXZlck9yZGVyKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fZHJpdmVyID0gZGIuZHJpdmVyKCk7XHJcbiAgICAgICAgICByZXNvbHZlKGRiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChyZWFzb24gPT4gcmVqZWN0KHJlYXNvbikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRyaXZlciBiZWluZyB1c2VkLlxyXG4gICAqIEByZXR1cm5zIE5hbWUgb2YgdGhlIGRyaXZlclxyXG4gICAqL1xyXG4gIGdldCBkcml2ZXIoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmbGVjdCB0aGUgcmVhZGluZXNzIG9mIHRoZSBzdG9yZS5cclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5XHJcbiAgICovXHJcbiAgcmVhZHkoKTogUHJvbWlzZTxMb2NhbEZvcmFnZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAaGlkZGVuICovXHJcbiAgcHJpdmF0ZSBfZ2V0RHJpdmVyT3JkZXIoZHJpdmVyT3JkZXIpIHtcclxuICAgIHJldHVybiBkcml2ZXJPcmRlci5tYXAoZHJpdmVyID0+IHtcclxuICAgICAgc3dpdGNoIChkcml2ZXIpIHtcclxuICAgICAgICBjYXNlICdzcWxpdGUnOlxyXG4gICAgICAgICAgcmV0dXJuIENvcmRvdmFTUUxpdGVEcml2ZXIuX2RyaXZlcjtcclxuICAgICAgICBjYXNlICdpbmRleGVkZGInOlxyXG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLklOREVYRUREQjtcclxuICAgICAgICBjYXNlICd3ZWJzcWwnOlxyXG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLldFQlNRTDtcclxuICAgICAgICBjYXNlICdsb2NhbHN0b3JhZ2UnOlxyXG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRTtcclxuICAgICAgICBjYXNlIFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCI6XHJcbiAgICAgICAgICByZXR1cm4gY2hyb21lRXh0ZW5zaW9uRHJpdmVyLl9kcml2ZXI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cclxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBrZXlcclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmdldEl0ZW0oa2V5KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXHJcbiAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBmb3IgdGhpcyBrZXlcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGtleSBhbmQgdmFsdWUgYXJlIHNldFxyXG4gICAqL1xyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuc2V0SXRlbShrZXksIHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYW55IHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleS5cclxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdmFsdWUgaXMgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIucmVtb3ZlSXRlbShrZXkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIHRoZSBlbnRpcmUga2V5IHZhbHVlIHN0b3JlLiBXQVJOSU5HOiBIT1QhXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdG9yZSBpcyBjbGVhcmVkXHJcbiAgICovXHJcbiAgY2xlYXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuY2xlYXIoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG51bWJlciBvZiBrZXlzIHN0b3JlZC5cclxuICAgKi9cclxuICBsZW5ndGgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5sZW5ndGgoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGtleXMgaW4gdGhlIHN0b3JlLlxyXG4gICAqL1xyXG4gIGtleXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmtleXMoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCBrZXksdmFsdWUgcGFpci5cclxuICAgKiBAcGFyYW0gaXRlcmF0b3JDYWxsYmFjayBhIGNhbGxiYWNrIG9mIHRoZSBmb3JtICh2YWx1ZSwga2V5LCBpdGVyYXRpb25OdW1iZXIpXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpdGVyYXRpb24gaGFzIGZpbmlzaGVkLlxyXG4gICAqL1xyXG4gIGZvckVhY2goXHJcbiAgICBpdGVyYXRvckNhbGxiYWNrOiAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogTnVtYmVyKSA9PiBhbnlcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5pdGVyYXRlKGl0ZXJhdG9yQ2FsbGJhY2spKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29uZmlnKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnX2lvbmljc3RvcmFnZScsXHJcbiAgICBzdG9yZU5hbWU6ICdfaW9uaWNrdicsXHJcbiAgICBkYktleTogJ19pb25pY2tleScsXHJcbiAgICBkcml2ZXJPcmRlcjogWydzcWxpdGUnLCAnaW5kZXhlZGRiJywgJ3dlYnNxbCcsICdsb2NhbHN0b3JhZ2UnXVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZUNvbmZpZyB7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gIHNpemU/OiBudW1iZXI7XHJcbiAgc3RvcmVOYW1lPzogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGRyaXZlck9yZGVyPzogc3RyaW5nW107XHJcbiAgZGJLZXk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBjb25zdCBTdG9yYWdlQ29uZmlnVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcclxuICAnU1RPUkFHRV9DT05GSUdfVE9LRU4nXHJcbik7XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0b3JhZ2Uoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyk6IFN0b3JhZ2Uge1xyXG4gIGNvbnN0IGNvbmZpZyA9ICEhc3RvcmFnZUNvbmZpZyA/IHN0b3JhZ2VDb25maWcgOiBnZXREZWZhdWx0Q29uZmlnKCk7XHJcbiAgcmV0dXJuIG5ldyBTdG9yYWdlKGNvbmZpZyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBnZXREZWZhdWx0Q29uZmlnLFxyXG4gIHByb3ZpZGVTdG9yYWdlLFxyXG4gIFN0b3JhZ2UsXHJcbiAgU3RvcmFnZUNvbmZpZyxcclxuICBTdG9yYWdlQ29uZmlnVG9rZW5cclxufSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IHsgU3RvcmFnZUNvbmZpZywgU3RvcmFnZUNvbmZpZ1Rva2VuLCBTdG9yYWdlIH07XHJcblxyXG5ATmdNb2R1bGUoKVxyXG5leHBvcnQgY2xhc3MgSW9uaWNTdG9yYWdlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElvbmljU3RvcmFnZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBTdG9yYWdlQ29uZmlnVG9rZW4sIHVzZVZhbHVlOiBzdG9yYWdlQ29uZmlnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU3RvcmFnZSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdG9yYWdlLFxyXG4gICAgICAgICAgZGVwczogW1N0b3JhZ2VDb25maWdUb2tlbl1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIiLCJjaHJvbWVFeHRlbnNpb25Ecml2ZXIiLCJMb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZSIsIkNvcmRvdmFTUUxpdGVEcml2ZXIuX2RyaXZlciIsIkxvY2FsRm9yYWdlLklOREVYRUREQiIsIkxvY2FsRm9yYWdlLldFQlNRTCIsIkxvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxxQkFBTSxTQUFTLEdBQXNCO0lBQzdCLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsWUFBWTs7O0lBQVo7UUFDSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM1QjtJQUNELEtBQUs7Ozs7SUFBTCxVQUFNLFFBQThCO1FBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUMxQixJQUFJLFFBQVEs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