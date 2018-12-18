import { InjectionToken, NgModule } from '@angular/core';
import { defineDriver, createInstance, INDEXEDDB, WEBSQL, LOCALSTORAGE } from 'localforage';
import { _driver } from 'localforage-cordovasqlitedriver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ webdriver = {
    _driver: "webExtensionLocalStorage",
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
                let /** @type {?} */ result = typeof key === 'string' ? res[key] : res;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGlvbmljL3N0b3JhZ2Uvd2ViZHJpdmVyLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9zdG9yYWdlLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcclxuY29uc3Qgd2ViZHJpdmVyOiBMb2NhbEZvcmFnZURyaXZlciA9IHtcclxuICAgICAgICBfZHJpdmVyOiBcIndlYkV4dGVuc2lvbkxvY2FsU3RvcmFnZVwiLFxyXG4gICAgICAgIF9pbml0U3RvcmFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXIoY2FsbGJhY2sgPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChrZXksIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnID8gcmVzW2tleV0gOiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVyYXRlPFQsIFU+KGl0ZXJhdGVlOiAodmFsdWU6IFQsIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IG51bWJlcikgPT4gVSwgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHJlc3VsdDogVSkgPT4gdm9pZCk6IFByb21pc2U8VT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmZvckVhY2goKGtleSwgaSkgPT4gaXRlcmF0ZWUocmVzW2tleV0sIGtleSwgaSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGtleShrZXlJbmRleDogbnVtYmVyLCBjYWxsYmFjaz86IChlcnI6IGFueSwga2V5OiBzdHJpbmcpID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNvbDpzdHJpbmcgPSByZXMua2V5cygpW2tleUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgc29sKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5cyhjYWxsYmFjayA/OiAoZXJyOiBhbnksIGtleXM6IHN0cmluZ1tdKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZW5ndGgoY2FsbGJhY2sgPzogKGVycjogYW55LCBudW1iZXJPZktleXM6IG51bWJlcikgPT4gdm9pZCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMua2V5cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmtleXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcsIGNhbGxiYWNrID86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEl0ZW08VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBULCBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQob2JqLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxufVxyXG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWJkcml2ZXI7XHJcbi8vIGFkZCB0aGUgZHJpdmVyIHRvIGxvY2FsRm9yYWdlLlxyXG4vLyBsb2NhbGZvcmFnZS5kZWZpbmVEcml2ZXIobXlDdXN0b21Ecml2ZXIpOyIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBMb2NhbEZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBDb3Jkb3ZhU1FMaXRlRHJpdmVyIGZyb20gJ2xvY2FsZm9yYWdlLWNvcmRvdmFzcWxpdGVkcml2ZXInO1xyXG5cclxuaW1wb3J0IGNocm9tZUV4dGVuc2lvbkRyaXZlciBmcm9tICcuL3dlYmRyaXZlcic7XHJcbi8qKlxyXG4gKiBTdG9yYWdlIGlzIGFuIGVhc3kgd2F5IHRvIHN0b3JlIGtleS92YWx1ZSBwYWlycyBhbmQgSlNPTiBvYmplY3RzLlxyXG4gKiBTdG9yYWdlIHVzZXMgYSB2YXJpZXR5IG9mIHN0b3JhZ2UgZW5naW5lcyB1bmRlcm5lYXRoLCBwaWNraW5nIHRoZSBiZXN0IG9uZSBhdmFpbGFibGVcclxuICogZGVwZW5kaW5nIG9uIHRoZSBwbGF0Zm9ybS5cclxuICpcclxuICogV2hlbiBydW5uaW5nIGluIGEgbmF0aXZlIGFwcCBjb250ZXh0LCBTdG9yYWdlIHdpbGwgcHJpb3JpdGl6ZSB1c2luZyBTUUxpdGUsIGFzIGl0J3Mgb25lIG9mXHJcbiAqIHRoZSBtb3N0IHN0YWJsZSBhbmQgd2lkZWx5IHVzZWQgZmlsZS1iYXNlZCBkYXRhYmFzZXMsIGFuZCBhdm9pZHMgc29tZSBvZiB0aGVcclxuICogcGl0ZmFsbHMgb2YgdGhpbmdzIGxpa2UgbG9jYWxzdG9yYWdlIGFuZCBJbmRleGVkREIsIHN1Y2ggYXMgdGhlIE9TIGRlY2lkaW5nIHRvIGNsZWFyIG91dCBzdWNoXHJcbiAqIGRhdGEgaW4gbG93IGRpc2stc3BhY2Ugc2l0dWF0aW9ucy5cclxuICpcclxuICogV2hlbiBydW5uaW5nIGluIHRoZSB3ZWIgb3IgYXMgYSBQcm9ncmVzc2l2ZSBXZWIgQXBwLCBTdG9yYWdlIHdpbGwgYXR0ZW1wdCB0byB1c2VcclxuICogSW5kZXhlZERCLCBXZWJTUUwsIGFuZCBsb2NhbHN0b3JhZ2UsIGluIHRoYXQgb3JkZXIuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBGaXJzdCwgaWYgeW91J2QgbGlrZSB0byB1c2UgU1FMaXRlLCBpbnN0YWxsIHRoZSBjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlIHBsdWdpbjpcclxuICogYGBgYmFzaFxyXG4gKiBpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1zcWxpdGUtc3RvcmFnZVxyXG4gKiBgYGBcclxuICpcclxuICogTmV4dCwgaW5zdGFsbCB0aGUgcGFja2FnZSAoY29tZXMgYnkgZGVmYXVsdCBmb3IgSW9uaWMgYXBwcyA+IElvbmljIFYxKTpcclxuICogYGBgYmFzaFxyXG4gKiBucG0gaW5zdGFsbCAtLXNhdmUgQGlvbmljL3N0b3JhZ2VcclxuICogYGBgXHJcbiAqXHJcbiAqIE5leHQsIGFkZCBpdCB0byB0aGUgaW1wb3J0cyBsaXN0IGluIHlvdXIgYE5nTW9kdWxlYCBkZWNsYXJhdGlvbiAoZm9yIGV4YW1wbGUsIGluIGBzcmMvYXBwL2FwcC5tb2R1bGUudHNgKTpcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgZGVjbGFyYXRpb25zOiBbXHJcbiAqICAgICAvLyAuLi5cclxuICogICBdLFxyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAqICAgICBJb25pY01vZHVsZS5mb3JSb290KE15QXBwKSxcclxuICogICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KClcclxuICogICBdLFxyXG4gKiAgIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcclxuICogICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICogICAgIC8vIC4uLlxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICAvLyAuLi5cclxuICogICBdXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuICpgYGBcclxuICpcclxuICogRmluYWxseSwgaW5qZWN0IGl0IGludG8gYW55IG9mIHlvdXIgY29tcG9uZW50cyBvciBwYWdlczpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG5cclxuICogZXhwb3J0IGNsYXNzIE15QXBwIHtcclxuICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UpIHsgfVxyXG4gKlxyXG4gKiAgIC4uLlxyXG4gKlxyXG4gKiAgIC8vIHNldCBhIGtleS92YWx1ZVxyXG4gKiAgIHN0b3JhZ2Uuc2V0KCduYW1lJywgJ01heCcpO1xyXG4gKlxyXG4gKiAgIC8vIE9yIHRvIGdldCBhIGtleS92YWx1ZSBwYWlyXHJcbiAqICAgc3RvcmFnZS5nZXQoJ2FnZScpLnRoZW4oKHZhbCkgPT4ge1xyXG4gKiAgICAgY29uc29sZS5sb2coJ1lvdXIgYWdlIGlzJywgdmFsKTtcclxuICogICB9KTtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICpcclxuICogIyMjIENvbmZpZ3VyaW5nIFN0b3JhZ2VcclxuICpcclxuICogVGhlIFN0b3JhZ2UgZW5naW5lIGNhbiBiZSBjb25maWd1cmVkIGJvdGggd2l0aCBzcGVjaWZpYyBzdG9yYWdlIGVuZ2luZSBwcmlvcml0aWVzLCBvciBjdXN0b20gY29uZmlndXJhdGlvblxyXG4gKiBvcHRpb25zIHRvIHBhc3MgdG8gbG9jYWxGb3JhZ2UuIFNlZSB0aGUgbG9jYWxGb3JhZ2UgY29uZmlnIGRvY3MgZm9yIHBvc3NpYmxlIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2NhbEZvcmFnZS9sb2NhbEZvcmFnZSNjb25maWd1cmF0aW9uXHJcbiAqXHJcbiAqIE5vdGU6IEFueSBjdXN0b20gY29uZmlndXJhdGlvbnMgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGRlY2xhcmF0aW9uczogWy4uLl0sXHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3Qoe1xyXG4gKiAgICAgICBuYW1lOiAnX19teWRiJyxcclxuICAgICAgICAgZHJpdmVyT3JkZXI6IFsnaW5kZXhlZGRiJywgJ3NxbGl0ZScsICd3ZWJzcWwnXVxyXG4gKiAgICAgfSlcclxuICogICBdLFxyXG4gKiAgIGJvb3RzdHJhcDogWy4uLl0sXHJcbiAqICAgZW50cnlDb21wb25lbnRzOiBbLi4uXSxcclxuICogICAgcHJvdmlkZXJzOiBbLi4uXVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcclxuICBwcml2YXRlIF9kYlByb21pc2U6IFByb21pc2U8TG9jYWxGb3JhZ2U+O1xyXG4gIHByaXZhdGUgX2RyaXZlcjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IFN0b3JhZ2UgaW5zdGFuY2UgdXNpbmcgdGhlIG9yZGVyIG9mIGRyaXZlcnMgYW5kIGFueSBhZGRpdGlvbmFsIGNvbmZpZ1xyXG4gICAqIG9wdGlvbnMgdG8gcGFzcyB0byBMb2NhbEZvcmFnZS5cclxuICAgKlxyXG4gICAqIFBvc3NpYmxlIGRyaXZlciBvcHRpb25zIGFyZTogWydzcWxpdGUnLCAnaW5kZXhlZGRiJywgJ3dlYnNxbCcsICdsb2NhbHN0b3JhZ2UnXSBhbmQgdGhlXHJcbiAgICogZGVmYXVsdCBpcyB0aGF0IGV4YWN0IG9yZGVyaW5nLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU3RvcmFnZUNvbmZpZykge1xyXG4gICAgdGhpcy5fZGJQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgZGI6IExvY2FsRm9yYWdlO1xyXG5cclxuICAgICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IGdldERlZmF1bHRDb25maWcoKTtcclxuICAgICAgY29uc3QgYWN0dWFsQ29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcgfHwge30pO1xyXG5cclxuICAgICAgTG9jYWxGb3JhZ2UuZGVmaW5lRHJpdmVyKGNocm9tZUV4dGVuc2lvbkRyaXZlcilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYiA9IExvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlKGFjdHVhbENvbmZpZyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgZGIuc2V0RHJpdmVyKHRoaXMuX2dldERyaXZlck9yZGVyKGFjdHVhbENvbmZpZy5kcml2ZXJPcmRlcikpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2RyaXZlciA9IGRiLmRyaXZlcigpO1xyXG4gICAgICAgICAgcmVzb2x2ZShkYik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2gocmVhc29uID0+IHJlamVjdChyZWFzb24pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBkcml2ZXIgYmVpbmcgdXNlZC5cclxuICAgKiBAcmV0dXJucyBOYW1lIG9mIHRoZSBkcml2ZXJcclxuICAgKi9cclxuICBnZXQgZHJpdmVyKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyaXZlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZmxlY3QgdGhlIHJlYWRpbmVzcyBvZiB0aGUgc3RvcmUuXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdG9yZSBpcyByZWFkeVxyXG4gICAqL1xyXG4gIHJlYWR5KCk6IFByb21pc2U8TG9jYWxGb3JhZ2U+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQGhpZGRlbiAqL1xyXG4gIHByaXZhdGUgX2dldERyaXZlck9yZGVyKGRyaXZlck9yZGVyKSB7XHJcbiAgICByZXR1cm4gZHJpdmVyT3JkZXIubWFwKGRyaXZlciA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZHJpdmVyKSB7XHJcbiAgICAgICAgY2FzZSAnc3FsaXRlJzpcclxuICAgICAgICAgIHJldHVybiBDb3Jkb3ZhU1FMaXRlRHJpdmVyLl9kcml2ZXI7XHJcbiAgICAgICAgY2FzZSAnaW5kZXhlZGRiJzpcclxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5JTkRFWEVEREI7XHJcbiAgICAgICAgY2FzZSAnd2Vic3FsJzpcclxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5XRUJTUUw7XHJcbiAgICAgICAgY2FzZSAnbG9jYWxzdG9yYWdlJzpcclxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5MT0NBTFNUT1JBR0U7XHJcbiAgICAgICAgY2FzZSBcIndlYkV4dGVuc2lvbkxvY2FsU3RvcmFnZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIGNocm9tZUV4dGVuc2lvbkRyaXZlci5fZHJpdmVyO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXHJcbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4ga2V5XHJcbiAgICovXHJcbiAgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5nZXRJdGVtKGtleSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleS5cclxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxyXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgZm9yIHRoaXMga2V5XHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBrZXkgYW5kIHZhbHVlIGFyZSBzZXRcclxuICAgKi9cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnNldEl0ZW0oa2V5LCB2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFueSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXkuXHJcbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHZhbHVlIGlzIHJlbW92ZWRcclxuICAgKi9cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnJlbW92ZUl0ZW0oa2V5KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciB0aGUgZW50aXJlIGtleSB2YWx1ZSBzdG9yZS4gV0FSTklORzogSE9UIVxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RvcmUgaXMgY2xlYXJlZFxyXG4gICAqL1xyXG4gIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmNsZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBudW1iZXIgb2Yga2V5cyBzdG9yZWQuXHJcbiAgICovXHJcbiAgbGVuZ3RoKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIubGVuZ3RoKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBrZXlzIGluIHRoZSBzdG9yZS5cclxuICAgKi9cclxuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5rZXlzKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGVhY2gga2V5LHZhbHVlIHBhaXIuXHJcbiAgICogQHBhcmFtIGl0ZXJhdG9yQ2FsbGJhY2sgYSBjYWxsYmFjayBvZiB0aGUgZm9ybSAodmFsdWUsIGtleSwgaXRlcmF0aW9uTnVtYmVyKVxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaXRlcmF0aW9uIGhhcyBmaW5pc2hlZC5cclxuICAgKi9cclxuICBmb3JFYWNoKFxyXG4gICAgaXRlcmF0b3JDYWxsYmFjazogKHZhbHVlOiBhbnksIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IE51bWJlcikgPT4gYW55XHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuaXRlcmF0ZShpdGVyYXRvckNhbGxiYWNrKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbmZpZygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ19pb25pY3N0b3JhZ2UnLFxyXG4gICAgc3RvcmVOYW1lOiAnX2lvbmlja3YnLFxyXG4gICAgZGJLZXk6ICdfaW9uaWNrZXknLFxyXG4gICAgZHJpdmVyT3JkZXI6IFsnc3FsaXRlJywgJ2luZGV4ZWRkYicsICd3ZWJzcWwnLCAnbG9jYWxzdG9yYWdlJ11cclxuICB9O1xyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VDb25maWcge1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgdmVyc2lvbj86IG51bWJlcjtcclxuICBzaXplPzogbnVtYmVyO1xyXG4gIHN0b3JlTmFtZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBkcml2ZXJPcmRlcj86IHN0cmluZ1tdO1xyXG4gIGRiS2V5Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgY29uc3QgU3RvcmFnZUNvbmZpZ1Rva2VuID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oXHJcbiAgJ1NUT1JBR0VfQ09ORklHX1RPS0VOJ1xyXG4pO1xyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlKHN0b3JhZ2VDb25maWc6IFN0b3JhZ2VDb25maWcpOiBTdG9yYWdlIHtcclxuICBjb25zdCBjb25maWcgPSAhIXN0b3JhZ2VDb25maWcgPyBzdG9yYWdlQ29uZmlnIDogZ2V0RGVmYXVsdENvbmZpZygpO1xyXG4gIHJldHVybiBuZXcgU3RvcmFnZShjb25maWcpO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdENvbmZpZyxcclxuICBwcm92aWRlU3RvcmFnZSxcclxuICBTdG9yYWdlLFxyXG4gIFN0b3JhZ2VDb25maWcsXHJcbiAgU3RvcmFnZUNvbmZpZ1Rva2VuXHJcbn0gZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCB7IFN0b3JhZ2VDb25maWcsIFN0b3JhZ2VDb25maWdUb2tlbiwgU3RvcmFnZSB9O1xyXG5cclxuQE5nTW9kdWxlKClcclxuZXhwb3J0IGNsYXNzIElvbmljU3RvcmFnZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3Qoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBJb25pY1N0b3JhZ2VNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogU3RvcmFnZUNvbmZpZ1Rva2VuLCB1c2VWYWx1ZTogc3RvcmFnZUNvbmZpZyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IFN0b3JhZ2UsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBwcm92aWRlU3RvcmFnZSxcclxuICAgICAgICAgIGRlcHM6IFtTdG9yYWdlQ29uZmlnVG9rZW5dXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTG9jYWxGb3JhZ2UuZGVmaW5lRHJpdmVyIiwiY2hyb21lRXh0ZW5zaW9uRHJpdmVyIiwiTG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2UiLCJDb3Jkb3ZhU1FMaXRlRHJpdmVyLl9kcml2ZXIiLCJMb2NhbEZvcmFnZS5JTkRFWEVEREIiLCJMb2NhbEZvcmFnZS5XRUJTUUwiLCJMb2NhbEZvcmFnZS5MT0NBTFNUT1JBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsdUJBQU0sU0FBUyxHQUFzQjtJQUM3QixPQUFPLEVBQUUsMEJBQTBCOzs7O0lBQ25DLFlBQVk7UUFDUixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM1Qjs7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