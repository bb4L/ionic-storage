import { InjectionToken, NgModule } from '@angular/core';
import { defineDriver, createInstance, INDEXEDDB, WEBSQL, LOCALSTORAGE } from 'localforage';
import { _driver } from 'localforage-cordovasqlitedriver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ webdriver = {
    _driver: "webExtensionLocalStorage",
    _support: chrome.runtime && chrome.runtime.id,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGlvbmljL3N0b3JhZ2Uvd2ViZHJpdmVyLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9zdG9yYWdlLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcbmNvbnN0IHdlYmRyaXZlcjogTG9jYWxGb3JhZ2VEcml2ZXIgPSB7XG4gIF9kcml2ZXI6IFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCIsXG4gIF9zdXBwb3J0OiBjaHJvbWUucnVudGltZSAmJiBjaHJvbWUucnVudGltZS5pZCxcbiAgX2luaXRTdG9yYWdlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbiAgY2xlYXIoY2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIocmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0SXRlbTxUPihrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChrZXksIHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiID8gcmVzW2tleV0gOiByZXM7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGl0ZXJhdGU8VCwgVT4oXG4gICAgaXRlcmF0ZWU6ICh2YWx1ZTogVCwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogbnVtYmVyKSA9PiBVLFxuICAgIGNhbGxiYWNrPzogKGVycjogYW55LCByZXN1bHQ6IFUpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxVPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICByZXMuZm9yRWFjaCgoa2V5LCBpKSA9PiBpdGVyYXRlZShyZXNba2V5XSwga2V5LCBpKSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAga2V5KFxuICAgIGtleUluZGV4OiBudW1iZXIsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIGtleTogc3RyaW5nKSA9PiB2b2lkXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBsZXQgc29sOiBzdHJpbmcgPSByZXMua2V5cygpW2tleUluZGV4XTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgc29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAga2V5cyhjYWxsYmFjaz86IChlcnI6IGFueSwga2V5czogc3RyaW5nW10pID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBsZW5ndGgoY2FsbGJhY2s/OiAoZXJyOiBhbnksIG51bWJlck9mS2V5czogbnVtYmVyKSA9PiB2b2lkKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcy5rZXlzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMua2V5cy5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcsIGNhbGxiYWNrPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXksIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNldEl0ZW08VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IFQsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkXG4gICk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgb2JqID0ge307XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KG9iaiwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2ViZHJpdmVyO1xuLy8gYWRkIHRoZSBkcml2ZXIgdG8gbG9jYWxGb3JhZ2UuXG4vLyBsb2NhbGZvcmFnZS5kZWZpbmVEcml2ZXIobXlDdXN0b21Ecml2ZXIpO1xuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgTG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuXG5pbXBvcnQgKiBhcyBDb3Jkb3ZhU1FMaXRlRHJpdmVyIGZyb20gJ2xvY2FsZm9yYWdlLWNvcmRvdmFzcWxpdGVkcml2ZXInO1xuXG5pbXBvcnQgY2hyb21lRXh0ZW5zaW9uRHJpdmVyIGZyb20gJy4vd2ViZHJpdmVyJztcbi8qKlxuICogU3RvcmFnZSBpcyBhbiBlYXN5IHdheSB0byBzdG9yZSBrZXkvdmFsdWUgcGFpcnMgYW5kIEpTT04gb2JqZWN0cy5cbiAqIFN0b3JhZ2UgdXNlcyBhIHZhcmlldHkgb2Ygc3RvcmFnZSBlbmdpbmVzIHVuZGVybmVhdGgsIHBpY2tpbmcgdGhlIGJlc3Qgb25lIGF2YWlsYWJsZVxuICogZGVwZW5kaW5nIG9uIHRoZSBwbGF0Zm9ybS5cbiAqXG4gKiBXaGVuIHJ1bm5pbmcgaW4gYSBuYXRpdmUgYXBwIGNvbnRleHQsIFN0b3JhZ2Ugd2lsbCBwcmlvcml0aXplIHVzaW5nIFNRTGl0ZSwgYXMgaXQncyBvbmUgb2ZcbiAqIHRoZSBtb3N0IHN0YWJsZSBhbmQgd2lkZWx5IHVzZWQgZmlsZS1iYXNlZCBkYXRhYmFzZXMsIGFuZCBhdm9pZHMgc29tZSBvZiB0aGVcbiAqIHBpdGZhbGxzIG9mIHRoaW5ncyBsaWtlIGxvY2Fsc3RvcmFnZSBhbmQgSW5kZXhlZERCLCBzdWNoIGFzIHRoZSBPUyBkZWNpZGluZyB0byBjbGVhciBvdXQgc3VjaFxuICogZGF0YSBpbiBsb3cgZGlzay1zcGFjZSBzaXR1YXRpb25zLlxuICpcbiAqIFdoZW4gcnVubmluZyBpbiB0aGUgd2ViIG9yIGFzIGEgUHJvZ3Jlc3NpdmUgV2ViIEFwcCwgU3RvcmFnZSB3aWxsIGF0dGVtcHQgdG8gdXNlXG4gKiBJbmRleGVkREIsIFdlYlNRTCwgYW5kIGxvY2Fsc3RvcmFnZSwgaW4gdGhhdCBvcmRlci5cbiAqXG4gKiBAdXNhZ2VcbiAqIEZpcnN0LCBpZiB5b3UnZCBsaWtlIHRvIHVzZSBTUUxpdGUsIGluc3RhbGwgdGhlIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2UgcGx1Z2luOlxuICogYGBgYmFzaFxuICogaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2VcbiAqIGBgYFxuICpcbiAqIE5leHQsIGluc3RhbGwgdGhlIHBhY2thZ2UgKGNvbWVzIGJ5IGRlZmF1bHQgZm9yIElvbmljIGFwcHMgPiBJb25pYyBWMSk6XG4gKiBgYGBiYXNoXG4gKiBucG0gaW5zdGFsbCAtLXNhdmUgQGlvbmljL3N0b3JhZ2VcbiAqIGBgYFxuICpcbiAqIE5leHQsIGFkZCBpdCB0byB0aGUgaW1wb3J0cyBsaXN0IGluIHlvdXIgYE5nTW9kdWxlYCBkZWNsYXJhdGlvbiAoZm9yIGV4YW1wbGUsIGluIGBzcmMvYXBwL2FwcC5tb2R1bGUudHNgKTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgZGVjbGFyYXRpb25zOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgIF0sXG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICBCcm93c2VyTW9kdWxlLFxuICogICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxuICogICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KClcbiAqICAgXSxcbiAqICAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxuICogICBlbnRyeUNvbXBvbmVudHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgXSxcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgIF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4gKmBgYFxuICpcbiAqIEZpbmFsbHksIGluamVjdCBpdCBpbnRvIGFueSBvZiB5b3VyIGNvbXBvbmVudHMgb3IgcGFnZXM6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4gKiBleHBvcnQgY2xhc3MgTXlBcHAge1xuICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UpIHsgfVxuICpcbiAqICAgLi4uXG4gKlxuICogICAvLyBzZXQgYSBrZXkvdmFsdWVcbiAqICAgc3RvcmFnZS5zZXQoJ25hbWUnLCAnTWF4Jyk7XG4gKlxuICogICAvLyBPciB0byBnZXQgYSBrZXkvdmFsdWUgcGFpclxuICogICBzdG9yYWdlLmdldCgnYWdlJykudGhlbigodmFsKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ1lvdXIgYWdlIGlzJywgdmFsKTtcbiAqICAgfSk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKlxuICogIyMjIENvbmZpZ3VyaW5nIFN0b3JhZ2VcbiAqXG4gKiBUaGUgU3RvcmFnZSBlbmdpbmUgY2FuIGJlIGNvbmZpZ3VyZWQgYm90aCB3aXRoIHNwZWNpZmljIHN0b3JhZ2UgZW5naW5lIHByaW9yaXRpZXMsIG9yIGN1c3RvbSBjb25maWd1cmF0aW9uXG4gKiBvcHRpb25zIHRvIHBhc3MgdG8gbG9jYWxGb3JhZ2UuIFNlZSB0aGUgbG9jYWxGb3JhZ2UgY29uZmlnIGRvY3MgZm9yIHBvc3NpYmxlIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2NhbEZvcmFnZS9sb2NhbEZvcmFnZSNjb25maWd1cmF0aW9uXG4gKlxuICogTm90ZTogQW55IGN1c3RvbSBjb25maWd1cmF0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgZGVjbGFyYXRpb25zOiBbLi4uXSxcbiAqICAgaW1wb3J0czogW1xuICogICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KHtcbiAqICAgICAgIG5hbWU6ICdfX215ZGInLFxuICAgICAgICAgZHJpdmVyT3JkZXI6IFsnaW5kZXhlZGRiJywgJ3NxbGl0ZScsICd3ZWJzcWwnXVxuICogICAgIH0pXG4gKiAgIF0sXG4gKiAgIGJvb3RzdHJhcDogWy4uLl0sXG4gKiAgIGVudHJ5Q29tcG9uZW50czogWy4uLl0sXG4gKiAgICBwcm92aWRlcnM6IFsuLi5dXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XG4gIHByaXZhdGUgX2RiUHJvbWlzZTogUHJvbWlzZTxMb2NhbEZvcmFnZT47XG4gIHByaXZhdGUgX2RyaXZlcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFN0b3JhZ2UgaW5zdGFuY2UgdXNpbmcgdGhlIG9yZGVyIG9mIGRyaXZlcnMgYW5kIGFueSBhZGRpdGlvbmFsIGNvbmZpZ1xuICAgKiBvcHRpb25zIHRvIHBhc3MgdG8gTG9jYWxGb3JhZ2UuXG4gICAqXG4gICAqIFBvc3NpYmxlIGRyaXZlciBvcHRpb25zIGFyZTogWydzcWxpdGUnLCAnaW5kZXhlZGRiJywgJ3dlYnNxbCcsICdsb2NhbHN0b3JhZ2UnXSBhbmQgdGhlXG4gICAqIGRlZmF1bHQgaXMgdGhhdCBleGFjdCBvcmRlcmluZy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU3RvcmFnZUNvbmZpZykge1xuICAgIHRoaXMuX2RiUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBkYjogTG9jYWxGb3JhZ2U7XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBnZXREZWZhdWx0Q29uZmlnKCk7XG4gICAgICBjb25zdCBhY3R1YWxDb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XG5cbiAgICAgIExvY2FsRm9yYWdlLmRlZmluZURyaXZlcihjaHJvbWVFeHRlbnNpb25Ecml2ZXIpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBkYiA9IExvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlKGFjdHVhbENvbmZpZyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgZGIuc2V0RHJpdmVyKHRoaXMuX2dldERyaXZlck9yZGVyKGFjdHVhbENvbmZpZy5kcml2ZXJPcmRlcikpXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyaXZlciA9IGRiLmRyaXZlcigpO1xuICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gocmVhc29uID0+IHJlamVjdChyZWFzb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRyaXZlciBiZWluZyB1c2VkLlxuICAgKiBAcmV0dXJucyBOYW1lIG9mIHRoZSBkcml2ZXJcbiAgICovXG4gIGdldCBkcml2ZXIoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RyaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZsZWN0IHRoZSByZWFkaW5lc3Mgb2YgdGhlIHN0b3JlLlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5XG4gICAqL1xuICByZWFkeSgpOiBQcm9taXNlPExvY2FsRm9yYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZTtcbiAgfVxuXG4gIC8qKiBAaGlkZGVuICovXG4gIHByaXZhdGUgX2dldERyaXZlck9yZGVyKGRyaXZlck9yZGVyKSB7XG4gICAgcmV0dXJuIGRyaXZlck9yZGVyLm1hcChkcml2ZXIgPT4ge1xuICAgICAgc3dpdGNoIChkcml2ZXIpIHtcbiAgICAgICAgY2FzZSAnc3FsaXRlJzpcbiAgICAgICAgICByZXR1cm4gQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyO1xuICAgICAgICBjYXNlICdpbmRleGVkZGInOlxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5JTkRFWEVEREI7XG4gICAgICAgIGNhc2UgJ3dlYnNxbCc6XG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLldFQlNRTDtcbiAgICAgICAgY2FzZSAnbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFO1xuICAgICAgICBjYXNlIFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCI6XG4gICAgICAgICAgcmV0dXJuIGNocm9tZUV4dGVuc2lvbkRyaXZlci5fZHJpdmVyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBrZXlcbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmdldEl0ZW0oa2V5KSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcbiAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBmb3IgdGhpcyBrZXlcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBrZXkgYW5kIHZhbHVlIGFyZSBzZXRcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnNldEl0ZW0oa2V5LCB2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbnkgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHZhbHVlIGlzIHJlbW92ZWRcbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnJlbW92ZUl0ZW0oa2V5KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGVudGlyZSBrZXkgdmFsdWUgc3RvcmUuIFdBUk5JTkc6IEhPVCFcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdG9yZSBpcyBjbGVhcmVkXG4gICAqL1xuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuY2xlYXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBudW1iZXIgb2Yga2V5cyBzdG9yZWQuXG4gICAqL1xuICBsZW5ndGgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIubGVuZ3RoKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5cyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIua2V5cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCBrZXksdmFsdWUgcGFpci5cbiAgICogQHBhcmFtIGl0ZXJhdG9yQ2FsbGJhY2sgYSBjYWxsYmFjayBvZiB0aGUgZm9ybSAodmFsdWUsIGtleSwgaXRlcmF0aW9uTnVtYmVyKVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGl0ZXJhdGlvbiBoYXMgZmluaXNoZWQuXG4gICAqL1xuICBmb3JFYWNoKFxuICAgIGl0ZXJhdG9yQ2FsbGJhY2s6ICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBOdW1iZXIpID0+IGFueVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuaXRlcmF0ZShpdGVyYXRvckNhbGxiYWNrKSk7XG4gIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29uZmlnKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdfaW9uaWNzdG9yYWdlJyxcbiAgICBzdG9yZU5hbWU6ICdfaW9uaWNrdicsXG4gICAgZGJLZXk6ICdfaW9uaWNrZXknLFxuICAgIGRyaXZlck9yZGVyOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddXG4gIH07XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VDb25maWcge1xuICBuYW1lPzogc3RyaW5nO1xuICB2ZXJzaW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBzdG9yZU5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkcml2ZXJPcmRlcj86IHN0cmluZ1tdO1xuICBkYktleT86IHN0cmluZztcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjb25zdCBTdG9yYWdlQ29uZmlnVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcbiAgJ1NUT1JBR0VfQ09ORklHX1RPS0VOJ1xuKTtcblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZShzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnKTogU3RvcmFnZSB7XG4gIGNvbnN0IGNvbmZpZyA9ICEhc3RvcmFnZUNvbmZpZyA/IHN0b3JhZ2VDb25maWcgOiBnZXREZWZhdWx0Q29uZmlnKCk7XG4gIHJldHVybiBuZXcgU3RvcmFnZShjb25maWcpO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldERlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVTdG9yYWdlLFxuICBTdG9yYWdlLFxuICBTdG9yYWdlQ29uZmlnLFxuICBTdG9yYWdlQ29uZmlnVG9rZW5cbn0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IHsgU3RvcmFnZUNvbmZpZywgU3RvcmFnZUNvbmZpZ1Rva2VuLCBTdG9yYWdlIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSW9uaWNTdG9yYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElvbmljU3RvcmFnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFN0b3JhZ2VDb25maWdUb2tlbiwgdXNlVmFsdWU6IHN0b3JhZ2VDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFN0b3JhZ2UsXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2UsXG4gICAgICAgICAgZGVwczogW1N0b3JhZ2VDb25maWdUb2tlbl1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIiLCJjaHJvbWVFeHRlbnNpb25Ecml2ZXIiLCJMb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZSIsIkNvcmRvdmFTUUxpdGVEcml2ZXIuX2RyaXZlciIsIkxvY2FsRm9yYWdlLklOREVYRUREQiIsIkxvY2FsRm9yYWdlLldFQlNRTCIsIkxvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxxQkFBTSxTQUFTLEdBQXNCO0lBQ25DLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lB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