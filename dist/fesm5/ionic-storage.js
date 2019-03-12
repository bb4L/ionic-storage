import { InjectionToken, NgModule } from '@angular/core';
import { defineDriver, createInstance, INDEXEDDB, WEBSQL, LOCALSTORAGE } from 'localforage';
import { _driver } from 'localforage-cordovasqlitedriver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ webdriver = {
    _driver: "webExtensionLocalStorage",
    _support: chrome && chrome.runtime && chrome.runtime.id,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGlvbmljL3N0b3JhZ2Uvd2ViZHJpdmVyLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9zdG9yYWdlLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcbmNvbnN0IHdlYmRyaXZlcjogTG9jYWxGb3JhZ2VEcml2ZXIgPSB7XG4gIF9kcml2ZXI6IFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCIsXG4gIF9zdXBwb3J0OiBjaHJvbWUgJiYgY2hyb21lLnJ1bnRpbWUgJiYgY2hyb21lLnJ1bnRpbWUuaWQsXG4gIF9pbml0U3RvcmFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG4gIGNsZWFyKGNhbGxiYWNrPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldEl0ZW08VD4oa2V5OiBzdHJpbmcsIGNhbGxiYWNrPzogKGVycjogYW55LCB2YWx1ZTogVCkgPT4gdm9pZCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoa2V5LCByZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiA/IHJlc1trZXldIDogcmVzO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBpdGVyYXRlPFQsIFU+KFxuICAgIGl0ZXJhdGVlOiAodmFsdWU6IFQsIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IG51bWJlcikgPT4gVSxcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwgcmVzdWx0OiBVKSA9PiB2b2lkXG4gICk6IFByb21pc2U8VT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgcmVzLmZvckVhY2goKGtleSwgaSkgPT4gaXRlcmF0ZWUocmVzW2tleV0sIGtleSwgaSkpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGtleShcbiAgICBrZXlJbmRleDogbnVtYmVyLFxuICAgIGNhbGxiYWNrPzogKGVycjogYW55LCBrZXk6IHN0cmluZykgPT4gdm9pZFxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgbGV0IHNvbDogc3RyaW5nID0gcmVzLmtleXMoKVtrZXlJbmRleF07XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHNvbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGtleXMoY2FsbGJhY2s/OiAoZXJyOiBhbnksIGtleXM6IHN0cmluZ1tdKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgbGVuZ3RoKGNhbGxiYWNrPzogKGVycjogYW55LCBudW1iZXJPZktleXM6IG51bWJlcikgPT4gdm9pZCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMua2V5cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzLmtleXMubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVJdGVtKGtleTogc3RyaW5nLCBjYWxsYmFjaz86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5LCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzZXRJdGVtPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBULFxuICAgIGNhbGxiYWNrPzogKGVycjogYW55LCB2YWx1ZTogVCkgPT4gdm9pZFxuICApOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChvYmosIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYmRyaXZlcjtcbi8vIGFkZCB0aGUgZHJpdmVyIHRvIGxvY2FsRm9yYWdlLlxuLy8gbG9jYWxmb3JhZ2UuZGVmaW5lRHJpdmVyKG15Q3VzdG9tRHJpdmVyKTtcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIExvY2FsRm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcblxuaW1wb3J0ICogYXMgQ29yZG92YVNRTGl0ZURyaXZlciBmcm9tICdsb2NhbGZvcmFnZS1jb3Jkb3Zhc3FsaXRlZHJpdmVyJztcblxuaW1wb3J0IGNocm9tZUV4dGVuc2lvbkRyaXZlciBmcm9tICcuL3dlYmRyaXZlcic7XG4vKipcbiAqIFN0b3JhZ2UgaXMgYW4gZWFzeSB3YXkgdG8gc3RvcmUga2V5L3ZhbHVlIHBhaXJzIGFuZCBKU09OIG9iamVjdHMuXG4gKiBTdG9yYWdlIHVzZXMgYSB2YXJpZXR5IG9mIHN0b3JhZ2UgZW5naW5lcyB1bmRlcm5lYXRoLCBwaWNraW5nIHRoZSBiZXN0IG9uZSBhdmFpbGFibGVcbiAqIGRlcGVuZGluZyBvbiB0aGUgcGxhdGZvcm0uXG4gKlxuICogV2hlbiBydW5uaW5nIGluIGEgbmF0aXZlIGFwcCBjb250ZXh0LCBTdG9yYWdlIHdpbGwgcHJpb3JpdGl6ZSB1c2luZyBTUUxpdGUsIGFzIGl0J3Mgb25lIG9mXG4gKiB0aGUgbW9zdCBzdGFibGUgYW5kIHdpZGVseSB1c2VkIGZpbGUtYmFzZWQgZGF0YWJhc2VzLCBhbmQgYXZvaWRzIHNvbWUgb2YgdGhlXG4gKiBwaXRmYWxscyBvZiB0aGluZ3MgbGlrZSBsb2NhbHN0b3JhZ2UgYW5kIEluZGV4ZWREQiwgc3VjaCBhcyB0aGUgT1MgZGVjaWRpbmcgdG8gY2xlYXIgb3V0IHN1Y2hcbiAqIGRhdGEgaW4gbG93IGRpc2stc3BhY2Ugc2l0dWF0aW9ucy5cbiAqXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGhlIHdlYiBvciBhcyBhIFByb2dyZXNzaXZlIFdlYiBBcHAsIFN0b3JhZ2Ugd2lsbCBhdHRlbXB0IHRvIHVzZVxuICogSW5kZXhlZERCLCBXZWJTUUwsIGFuZCBsb2NhbHN0b3JhZ2UsIGluIHRoYXQgb3JkZXIuXG4gKlxuICogQHVzYWdlXG4gKiBGaXJzdCwgaWYgeW91J2QgbGlrZSB0byB1c2UgU1FMaXRlLCBpbnN0YWxsIHRoZSBjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlIHBsdWdpbjpcbiAqIGBgYGJhc2hcbiAqIGlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlXG4gKiBgYGBcbiAqXG4gKiBOZXh0LCBpbnN0YWxsIHRoZSBwYWNrYWdlIChjb21lcyBieSBkZWZhdWx0IGZvciBJb25pYyBhcHBzID4gSW9uaWMgVjEpOlxuICogYGBgYmFzaFxuICogbnBtIGluc3RhbGwgLS1zYXZlIEBpb25pYy9zdG9yYWdlXG4gKiBgYGBcbiAqXG4gKiBOZXh0LCBhZGQgaXQgdG8gdGhlIGltcG9ydHMgbGlzdCBpbiB5b3VyIGBOZ01vZHVsZWAgZGVjbGFyYXRpb24gKGZvciBleGFtcGxlLCBpbiBgc3JjL2FwcC9hcHAubW9kdWxlLnRzYCk6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGRlY2xhcmF0aW9uczogW1xuICogICAgIC8vIC4uLlxuICogICBdLFxuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQnJvd3Nlck1vZHVsZSxcbiAqICAgICBJb25pY01vZHVsZS5mb3JSb290KE15QXBwKSxcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpXG4gKiAgIF0sXG4gKiAgIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcbiAqICAgZW50cnlDb21wb25lbnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgIF0sXG4gKiAgIHByb3ZpZGVyczogW1xuICogICAgIC8vIC4uLlxuICogICBdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuICpgYGBcbiAqXG4gKiBGaW5hbGx5LCBpbmplY3QgaXQgaW50byBhbnkgb2YgeW91ciBjb21wb25lbnRzIG9yIHBhZ2VzOlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuICogZXhwb3J0IGNsYXNzIE15QXBwIHtcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKSB7IH1cbiAqXG4gKiAgIC4uLlxuICpcbiAqICAgLy8gc2V0IGEga2V5L3ZhbHVlXG4gKiAgIHN0b3JhZ2Uuc2V0KCduYW1lJywgJ01heCcpO1xuICpcbiAqICAgLy8gT3IgdG8gZ2V0IGEga2V5L3ZhbHVlIHBhaXJcbiAqICAgc3RvcmFnZS5nZXQoJ2FnZScpLnRoZW4oKHZhbCkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdZb3VyIGFnZSBpcycsIHZhbCk7XG4gKiAgIH0pO1xuICogfVxuICogYGBgXG4gKlxuICpcbiAqICMjIyBDb25maWd1cmluZyBTdG9yYWdlXG4gKlxuICogVGhlIFN0b3JhZ2UgZW5naW5lIGNhbiBiZSBjb25maWd1cmVkIGJvdGggd2l0aCBzcGVjaWZpYyBzdG9yYWdlIGVuZ2luZSBwcmlvcml0aWVzLCBvciBjdXN0b20gY29uZmlndXJhdGlvblxuICogb3B0aW9ucyB0byBwYXNzIHRvIGxvY2FsRm9yYWdlLiBTZWUgdGhlIGxvY2FsRm9yYWdlIGNvbmZpZyBkb2NzIGZvciBwb3NzaWJsZSBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UjY29uZmlndXJhdGlvblxuICpcbiAqIE5vdGU6IEFueSBjdXN0b20gY29uZmlndXJhdGlvbnMgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGRlY2xhcmF0aW9uczogWy4uLl0sXG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCh7XG4gKiAgICAgICBuYW1lOiAnX19teWRiJyxcbiAgICAgICAgIGRyaXZlck9yZGVyOiBbJ2luZGV4ZWRkYicsICdzcWxpdGUnLCAnd2Vic3FsJ11cbiAqICAgICB9KVxuICogICBdLFxuICogICBib290c3RyYXA6IFsuLi5dLFxuICogICBlbnRyeUNvbXBvbmVudHM6IFsuLi5dLFxuICogICAgcHJvdmlkZXJzOiBbLi4uXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xuICBwcml2YXRlIF9kYlByb21pc2U6IFByb21pc2U8TG9jYWxGb3JhZ2U+O1xuICBwcml2YXRlIF9kcml2ZXI6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBTdG9yYWdlIGluc3RhbmNlIHVzaW5nIHRoZSBvcmRlciBvZiBkcml2ZXJzIGFuZCBhbnkgYWRkaXRpb25hbCBjb25maWdcbiAgICogb3B0aW9ucyB0byBwYXNzIHRvIExvY2FsRm9yYWdlLlxuICAgKlxuICAgKiBQb3NzaWJsZSBkcml2ZXIgb3B0aW9ucyBhcmU6IFsnc3FsaXRlJywgJ2luZGV4ZWRkYicsICd3ZWJzcWwnLCAnbG9jYWxzdG9yYWdlJ10gYW5kIHRoZVxuICAgKiBkZWZhdWx0IGlzIHRoYXQgZXhhY3Qgb3JkZXJpbmcuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IFN0b3JhZ2VDb25maWcpIHtcbiAgICB0aGlzLl9kYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgZGI6IExvY2FsRm9yYWdlO1xuXG4gICAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gZ2V0RGVmYXVsdENvbmZpZygpO1xuICAgICAgY29uc3QgYWN0dWFsQ29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcgfHwge30pO1xuXG4gICAgICBMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIoY2hyb21lRXh0ZW5zaW9uRHJpdmVyKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgZGIgPSBMb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZShhY3R1YWxDb25maWcpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgIGRiLnNldERyaXZlcih0aGlzLl9nZXREcml2ZXJPcmRlcihhY3R1YWxDb25maWcuZHJpdmVyT3JkZXIpKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9kcml2ZXIgPSBkYi5kcml2ZXIoKTtcbiAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiByZWplY3QocmVhc29uKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBkcml2ZXIgYmVpbmcgdXNlZC5cbiAgICogQHJldHVybnMgTmFtZSBvZiB0aGUgZHJpdmVyXG4gICAqL1xuICBnZXQgZHJpdmVyKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9kcml2ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmVmbGVjdCB0aGUgcmVhZGluZXNzIG9mIHRoZSBzdG9yZS5cbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdG9yZSBpcyByZWFkeVxuICAgKi9cbiAgcmVhZHkoKTogUHJvbWlzZTxMb2NhbEZvcmFnZT4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2U7XG4gIH1cblxuICAvKiogQGhpZGRlbiAqL1xuICBwcml2YXRlIF9nZXREcml2ZXJPcmRlcihkcml2ZXJPcmRlcikge1xuICAgIHJldHVybiBkcml2ZXJPcmRlci5tYXAoZHJpdmVyID0+IHtcbiAgICAgIHN3aXRjaCAoZHJpdmVyKSB7XG4gICAgICAgIGNhc2UgJ3NxbGl0ZSc6XG4gICAgICAgICAgcmV0dXJuIENvcmRvdmFTUUxpdGVEcml2ZXIuX2RyaXZlcjtcbiAgICAgICAgY2FzZSAnaW5kZXhlZGRiJzpcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuSU5ERVhFRERCO1xuICAgICAgICBjYXNlICd3ZWJzcWwnOlxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5XRUJTUUw7XG4gICAgICAgIGNhc2UgJ2xvY2Fsc3RvcmFnZSc6XG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRTtcbiAgICAgICAgY2FzZSBcIndlYkV4dGVuc2lvbkxvY2FsU3RvcmFnZVwiOlxuICAgICAgICAgIHJldHVybiBjaHJvbWVFeHRlbnNpb25Ecml2ZXIuX2RyaXZlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4ga2V5XG4gICAqL1xuICBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5nZXRJdGVtKGtleSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXkuXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgZm9yIHRoaXMga2V5XG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUga2V5IGFuZCB2YWx1ZSBhcmUgc2V0XG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5zZXRJdGVtKGtleSwgdmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW55IHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleS5cbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB2YWx1ZSBpcyByZW1vdmVkXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5yZW1vdmVJdGVtKGtleSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBlbnRpcmUga2V5IHZhbHVlIHN0b3JlLiBXQVJOSU5HOiBIT1QhXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RvcmUgaXMgY2xlYXJlZFxuICAgKi9cbiAgY2xlYXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmNsZWFyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbnVtYmVyIG9mIGtleXMgc3RvcmVkLlxuICAgKi9cbiAgbGVuZ3RoKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmxlbmd0aCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGtleXMgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmtleXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGVhY2gga2V5LHZhbHVlIHBhaXIuXG4gICAqIEBwYXJhbSBpdGVyYXRvckNhbGxiYWNrIGEgY2FsbGJhY2sgb2YgdGhlIGZvcm0gKHZhbHVlLCBrZXksIGl0ZXJhdGlvbk51bWJlcilcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpdGVyYXRpb24gaGFzIGZpbmlzaGVkLlxuICAgKi9cbiAgZm9yRWFjaChcbiAgICBpdGVyYXRvckNhbGxiYWNrOiAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogTnVtYmVyKSA9PiBhbnlcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLml0ZXJhdGUoaXRlcmF0b3JDYWxsYmFjaykpO1xuICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbmZpZygpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnX2lvbmljc3RvcmFnZScsXG4gICAgc3RvcmVOYW1lOiAnX2lvbmlja3YnLFxuICAgIGRiS2V5OiAnX2lvbmlja2V5JyxcbiAgICBkcml2ZXJPcmRlcjogWydzcWxpdGUnLCAnaW5kZXhlZGRiJywgJ3dlYnNxbCcsICdsb2NhbHN0b3JhZ2UnXVxuICB9O1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlQ29uZmlnIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmVyc2lvbj86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgc3RvcmVOYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZHJpdmVyT3JkZXI/OiBzdHJpbmdbXTtcbiAgZGJLZXk/OiBzdHJpbmc7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY29uc3QgU3RvcmFnZUNvbmZpZ1Rva2VuID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oXG4gICdTVE9SQUdFX0NPTkZJR19UT0tFTidcbik7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0b3JhZ2Uoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyk6IFN0b3JhZ2Uge1xuICBjb25zdCBjb25maWcgPSAhIXN0b3JhZ2VDb25maWcgPyBzdG9yYWdlQ29uZmlnIDogZ2V0RGVmYXVsdENvbmZpZygpO1xuICByZXR1cm4gbmV3IFN0b3JhZ2UoY29uZmlnKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXREZWZhdWx0Q29uZmlnLFxuICBwcm92aWRlU3RvcmFnZSxcbiAgU3RvcmFnZSxcbiAgU3RvcmFnZUNvbmZpZyxcbiAgU3RvcmFnZUNvbmZpZ1Rva2VuXG59IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCB7IFN0b3JhZ2VDb25maWcsIFN0b3JhZ2VDb25maWdUb2tlbiwgU3RvcmFnZSB9O1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIElvbmljU3RvcmFnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHN0b3JhZ2VDb25maWc6IFN0b3JhZ2VDb25maWcgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJb25pY1N0b3JhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBTdG9yYWdlQ29uZmlnVG9rZW4sIHVzZVZhbHVlOiBzdG9yYWdlQ29uZmlnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTdG9yYWdlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdG9yYWdlLFxuICAgICAgICAgIGRlcHM6IFtTdG9yYWdlQ29uZmlnVG9rZW5dXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTG9jYWxGb3JhZ2UuZGVmaW5lRHJpdmVyIiwiY2hyb21lRXh0ZW5zaW9uRHJpdmVyIiwiTG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2UiLCJDb3Jkb3ZhU1FMaXRlRHJpdmVyLl9kcml2ZXIiLCJMb2NhbEZvcmFnZS5JTkRFWEVEREIiLCJMb2NhbEZvcmFnZS5XRUJTUUwiLCJMb2NhbEZvcmFnZS5MT0NBTFNUT1JBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EscUJBQU0sU0FBUyxHQUFzQjtJQUNuQyxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLFFBQVEsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENB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