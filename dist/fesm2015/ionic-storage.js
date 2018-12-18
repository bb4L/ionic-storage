import { InjectionToken, NgModule } from '@angular/core';
import { defineDriver, createInstance, INDEXEDDB, WEBSQL, LOCALSTORAGE } from 'localforage';
import { _driver } from 'localforage-cordovasqlitedriver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ webdriver = {
    _driver: "webExtensionSyncStorage",
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
            chrome.storage.sync.clear(res => {
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
            chrome.storage.sync.get(key, res => {
                if (callback) {
                    callback(null, res);
                }
                resolve(res);
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
            chrome.storage.sync.get(null, res => {
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
            chrome.storage.sync.get(null, res => {
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
            chrome.storage.sync.get(null, res => {
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
            chrome.storage.sync.get(null, res => {
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
            chrome.storage.sync.remove(key, res => {
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
            chrome.storage.sync.set({ key: value }, res => {
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
                case "webExtensionSyncStorage":
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGlvbmljL3N0b3JhZ2Uvd2ViZHJpdmVyLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9zdG9yYWdlLnRzIiwibmc6Ly9AaW9uaWMvc3RvcmFnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcclxuY29uc3Qgd2ViZHJpdmVyOiBMb2NhbEZvcmFnZURyaXZlciA9IHtcclxuICAgICAgICBfZHJpdmVyOiBcIndlYkV4dGVuc2lvblN5bmNTdG9yYWdlXCIsXHJcbiAgICAgICAgX2luaXRTdG9yYWdlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhcihjYWxsYmFjayA/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuY2xlYXIocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0SXRlbTxUPihrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChrZXksIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVyYXRlPFQsIFU+KGl0ZXJhdGVlOiAodmFsdWU6IFQsIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IG51bWJlcikgPT4gVSwgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHJlc3VsdDogVSkgPT4gdm9pZCk6IFByb21pc2U8VT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuZm9yRWFjaCgoa2V5LCBpKSA9PiBpdGVyYXRlZShyZXNba2V5XSwga2V5LCBpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAga2V5KGtleUluZGV4OiBudW1iZXIsIGNhbGxiYWNrPzogKGVycjogYW55LCBrZXk6IHN0cmluZykgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb2w6c3RyaW5nID0gcmVzLmtleXMoKVtrZXlJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXMoY2FsbGJhY2sgPzogKGVycjogYW55LCBrZXlzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZW5ndGgoY2FsbGJhY2sgPzogKGVycjogYW55LCBudW1iZXJPZktleXM6IG51bWJlcikgPT4gdm9pZCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcy5rZXlzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMua2V5cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZywgY2FsbGJhY2sgPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShrZXksIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJdGVtPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCwgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7a2V5OiB2YWx1ZX0sIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG59XHJcbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYmRyaXZlcjtcclxuLy8gYWRkIHRoZSBkcml2ZXIgdG8gbG9jYWxGb3JhZ2UuXHJcbi8vIGxvY2FsZm9yYWdlLmRlZmluZURyaXZlcihteUN1c3RvbURyaXZlcik7IiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCAqIGFzIExvY2FsRm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcclxuXHJcbmltcG9ydCAqIGFzIENvcmRvdmFTUUxpdGVEcml2ZXIgZnJvbSAnbG9jYWxmb3JhZ2UtY29yZG92YXNxbGl0ZWRyaXZlcic7XHJcblxyXG5pbXBvcnQgY2hyb21lRXh0ZW5zaW9uRHJpdmVyIGZyb20gJy4vd2ViZHJpdmVyJztcclxuLyoqXHJcbiAqIFN0b3JhZ2UgaXMgYW4gZWFzeSB3YXkgdG8gc3RvcmUga2V5L3ZhbHVlIHBhaXJzIGFuZCBKU09OIG9iamVjdHMuXHJcbiAqIFN0b3JhZ2UgdXNlcyBhIHZhcmlldHkgb2Ygc3RvcmFnZSBlbmdpbmVzIHVuZGVybmVhdGgsIHBpY2tpbmcgdGhlIGJlc3Qgb25lIGF2YWlsYWJsZVxyXG4gKiBkZXBlbmRpbmcgb24gdGhlIHBsYXRmb3JtLlxyXG4gKlxyXG4gKiBXaGVuIHJ1bm5pbmcgaW4gYSBuYXRpdmUgYXBwIGNvbnRleHQsIFN0b3JhZ2Ugd2lsbCBwcmlvcml0aXplIHVzaW5nIFNRTGl0ZSwgYXMgaXQncyBvbmUgb2ZcclxuICogdGhlIG1vc3Qgc3RhYmxlIGFuZCB3aWRlbHkgdXNlZCBmaWxlLWJhc2VkIGRhdGFiYXNlcywgYW5kIGF2b2lkcyBzb21lIG9mIHRoZVxyXG4gKiBwaXRmYWxscyBvZiB0aGluZ3MgbGlrZSBsb2NhbHN0b3JhZ2UgYW5kIEluZGV4ZWREQiwgc3VjaCBhcyB0aGUgT1MgZGVjaWRpbmcgdG8gY2xlYXIgb3V0IHN1Y2hcclxuICogZGF0YSBpbiBsb3cgZGlzay1zcGFjZSBzaXR1YXRpb25zLlxyXG4gKlxyXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGhlIHdlYiBvciBhcyBhIFByb2dyZXNzaXZlIFdlYiBBcHAsIFN0b3JhZ2Ugd2lsbCBhdHRlbXB0IHRvIHVzZVxyXG4gKiBJbmRleGVkREIsIFdlYlNRTCwgYW5kIGxvY2Fsc3RvcmFnZSwgaW4gdGhhdCBvcmRlci5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIEZpcnN0LCBpZiB5b3UnZCBsaWtlIHRvIHVzZSBTUUxpdGUsIGluc3RhbGwgdGhlIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2UgcGx1Z2luOlxyXG4gKiBgYGBiYXNoXHJcbiAqIGlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOZXh0LCBpbnN0YWxsIHRoZSBwYWNrYWdlIChjb21lcyBieSBkZWZhdWx0IGZvciBJb25pYyBhcHBzID4gSW9uaWMgVjEpOlxyXG4gKiBgYGBiYXNoXHJcbiAqIG5wbSBpbnN0YWxsIC0tc2F2ZSBAaW9uaWMvc3RvcmFnZVxyXG4gKiBgYGBcclxuICpcclxuICogTmV4dCwgYWRkIGl0IHRvIHRoZSBpbXBvcnRzIGxpc3QgaW4geW91ciBgTmdNb2R1bGVgIGRlY2xhcmF0aW9uIChmb3IgZXhhbXBsZSwgaW4gYHNyYy9hcHAvYXBwLm1vZHVsZS50c2ApOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBkZWNsYXJhdGlvbnM6IFtcclxuICogICAgIC8vIC4uLlxyXG4gKiAgIF0sXHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgQnJvd3Nlck1vZHVsZSxcclxuICogICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxyXG4gKiAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKVxyXG4gKiAgIF0sXHJcbiAqICAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxyXG4gKiAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gKiAgICAgLy8gLi4uXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIC8vIC4uLlxyXG4gKiAgIF1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKmBgYFxyXG4gKlxyXG4gKiBGaW5hbGx5LCBpbmplY3QgaXQgaW50byBhbnkgb2YgeW91ciBjb21wb25lbnRzIG9yIHBhZ2VzOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcblxyXG4gKiBleHBvcnQgY2xhc3MgTXlBcHAge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSkgeyB9XHJcbiAqXHJcbiAqICAgLi4uXHJcbiAqXHJcbiAqICAgLy8gc2V0IGEga2V5L3ZhbHVlXHJcbiAqICAgc3RvcmFnZS5zZXQoJ25hbWUnLCAnTWF4Jyk7XHJcbiAqXHJcbiAqICAgLy8gT3IgdG8gZ2V0IGEga2V5L3ZhbHVlIHBhaXJcclxuICogICBzdG9yYWdlLmdldCgnYWdlJykudGhlbigodmFsKSA9PiB7XHJcbiAqICAgICBjb25zb2xlLmxvZygnWW91ciBhZ2UgaXMnLCB2YWwpO1xyXG4gKiAgIH0pO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKlxyXG4gKiAjIyMgQ29uZmlndXJpbmcgU3RvcmFnZVxyXG4gKlxyXG4gKiBUaGUgU3RvcmFnZSBlbmdpbmUgY2FuIGJlIGNvbmZpZ3VyZWQgYm90aCB3aXRoIHNwZWNpZmljIHN0b3JhZ2UgZW5naW5lIHByaW9yaXRpZXMsIG9yIGN1c3RvbSBjb25maWd1cmF0aW9uXHJcbiAqIG9wdGlvbnMgdG8gcGFzcyB0byBsb2NhbEZvcmFnZS4gU2VlIHRoZSBsb2NhbEZvcmFnZSBjb25maWcgZG9jcyBmb3IgcG9zc2libGUgb3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlI2NvbmZpZ3VyYXRpb25cclxuICpcclxuICogTm90ZTogQW55IGN1c3RvbSBjb25maWd1cmF0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgZGVjbGFyYXRpb25zOiBbLi4uXSxcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCh7XHJcbiAqICAgICAgIG5hbWU6ICdfX215ZGInLFxyXG4gICAgICAgICBkcml2ZXJPcmRlcjogWydpbmRleGVkZGInLCAnc3FsaXRlJywgJ3dlYnNxbCddXHJcbiAqICAgICB9KVxyXG4gKiAgIF0sXHJcbiAqICAgYm9vdHN0cmFwOiBbLi4uXSxcclxuICogICBlbnRyeUNvbXBvbmVudHM6IFsuLi5dLFxyXG4gKiAgICBwcm92aWRlcnM6IFsuLi5dXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xyXG4gIHByaXZhdGUgX2RiUHJvbWlzZTogUHJvbWlzZTxMb2NhbEZvcmFnZT47XHJcbiAgcHJpdmF0ZSBfZHJpdmVyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgU3RvcmFnZSBpbnN0YW5jZSB1c2luZyB0aGUgb3JkZXIgb2YgZHJpdmVycyBhbmQgYW55IGFkZGl0aW9uYWwgY29uZmlnXHJcbiAgICogb3B0aW9ucyB0byBwYXNzIHRvIExvY2FsRm9yYWdlLlxyXG4gICAqXHJcbiAgICogUG9zc2libGUgZHJpdmVyIG9wdGlvbnMgYXJlOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddIGFuZCB0aGVcclxuICAgKiBkZWZhdWx0IGlzIHRoYXQgZXhhY3Qgb3JkZXJpbmcuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBTdG9yYWdlQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9kYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBkYjogTG9jYWxGb3JhZ2U7XHJcblxyXG4gICAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gZ2V0RGVmYXVsdENvbmZpZygpO1xyXG4gICAgICBjb25zdCBhY3R1YWxDb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XHJcblxyXG4gICAgICBMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIoY2hyb21lRXh0ZW5zaW9uRHJpdmVyKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGRiID0gTG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2UoYWN0dWFsQ29uZmlnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+XHJcbiAgICAgICAgICBkYi5zZXREcml2ZXIodGhpcy5fZ2V0RHJpdmVyT3JkZXIoYWN0dWFsQ29uZmlnLmRyaXZlck9yZGVyKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fZHJpdmVyID0gZGIuZHJpdmVyKCk7XHJcbiAgICAgICAgICByZXNvbHZlKGRiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChyZWFzb24gPT4gcmVqZWN0KHJlYXNvbikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRyaXZlciBiZWluZyB1c2VkLlxyXG4gICAqIEByZXR1cm5zIE5hbWUgb2YgdGhlIGRyaXZlclxyXG4gICAqL1xyXG4gIGdldCBkcml2ZXIoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmbGVjdCB0aGUgcmVhZGluZXNzIG9mIHRoZSBzdG9yZS5cclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5XHJcbiAgICovXHJcbiAgcmVhZHkoKTogUHJvbWlzZTxMb2NhbEZvcmFnZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAaGlkZGVuICovXHJcbiAgcHJpdmF0ZSBfZ2V0RHJpdmVyT3JkZXIoZHJpdmVyT3JkZXIpIHtcclxuICAgIHJldHVybiBkcml2ZXJPcmRlci5tYXAoZHJpdmVyID0+IHtcclxuICAgICAgc3dpdGNoIChkcml2ZXIpIHtcclxuICAgICAgICBjYXNlICdzcWxpdGUnOlxyXG4gICAgICAgICAgcmV0dXJuIENvcmRvdmFTUUxpdGVEcml2ZXIuX2RyaXZlcjtcclxuICAgICAgICBjYXNlICdpbmRleGVkZGInOlxyXG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLklOREVYRUREQjtcclxuICAgICAgICBjYXNlICd3ZWJzcWwnOlxyXG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLldFQlNRTDtcclxuICAgICAgICBjYXNlICdsb2NhbHN0b3JhZ2UnOlxyXG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRTtcclxuICAgICAgICBjYXNlIFwid2ViRXh0ZW5zaW9uU3luY1N0b3JhZ2VcIjpcclxuICAgICAgICAgIHJldHVybiBjaHJvbWVFeHRlbnNpb25Ecml2ZXIuX2RyaXZlcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGtleVxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuZ2V0SXRlbShrZXkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXkuXHJcbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcclxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIGZvciB0aGlzIGtleVxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUga2V5IGFuZCB2YWx1ZSBhcmUgc2V0XHJcbiAgICovXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5zZXRJdGVtKGtleSwgdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbnkgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB2YWx1ZSBpcyByZW1vdmVkXHJcbiAgICovXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5yZW1vdmVJdGVtKGtleSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGVudGlyZSBrZXkgdmFsdWUgc3RvcmUuIFdBUk5JTkc6IEhPVCFcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIGNsZWFyZWRcclxuICAgKi9cclxuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5jbGVhcigpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbnVtYmVyIG9mIGtleXMgc3RvcmVkLlxyXG4gICAqL1xyXG4gIGxlbmd0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmxlbmd0aCgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5cyBpbiB0aGUgc3RvcmUuXHJcbiAgICovXHJcbiAga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIua2V5cygpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSx2YWx1ZSBwYWlyLlxyXG4gICAqIEBwYXJhbSBpdGVyYXRvckNhbGxiYWNrIGEgY2FsbGJhY2sgb2YgdGhlIGZvcm0gKHZhbHVlLCBrZXksIGl0ZXJhdGlvbk51bWJlcilcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGl0ZXJhdGlvbiBoYXMgZmluaXNoZWQuXHJcbiAgICovXHJcbiAgZm9yRWFjaChcclxuICAgIGl0ZXJhdG9yQ2FsbGJhY2s6ICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBOdW1iZXIpID0+IGFueVxyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLml0ZXJhdGUoaXRlcmF0b3JDYWxsYmFjaykpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDb25maWcoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdfaW9uaWNzdG9yYWdlJyxcclxuICAgIHN0b3JlTmFtZTogJ19pb25pY2t2JyxcclxuICAgIGRiS2V5OiAnX2lvbmlja2V5JyxcclxuICAgIGRyaXZlck9yZGVyOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlQ29uZmlnIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIHZlcnNpb24/OiBudW1iZXI7XHJcbiAgc2l6ZT86IG51bWJlcjtcclxuICBzdG9yZU5hbWU/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgZHJpdmVyT3JkZXI/OiBzdHJpbmdbXTtcclxuICBkYktleT86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGNvbnN0IFN0b3JhZ2VDb25maWdUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KFxyXG4gICdTVE9SQUdFX0NPTkZJR19UT0tFTidcclxuKTtcclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZShzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnKTogU3RvcmFnZSB7XHJcbiAgY29uc3QgY29uZmlnID0gISFzdG9yYWdlQ29uZmlnID8gc3RvcmFnZUNvbmZpZyA6IGdldERlZmF1bHRDb25maWcoKTtcclxuICByZXR1cm4gbmV3IFN0b3JhZ2UoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRDb25maWcsXHJcbiAgcHJvdmlkZVN0b3JhZ2UsXHJcbiAgU3RvcmFnZSxcclxuICBTdG9yYWdlQ29uZmlnLFxyXG4gIFN0b3JhZ2VDb25maWdUb2tlblxyXG59IGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgeyBTdG9yYWdlQ29uZmlnLCBTdG9yYWdlQ29uZmlnVG9rZW4sIFN0b3JhZ2UgfTtcclxuXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBJb25pY1N0b3JhZ2VNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KHN0b3JhZ2VDb25maWc6IFN0b3JhZ2VDb25maWcgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW9uaWNTdG9yYWdlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IFN0b3JhZ2VDb25maWdUb2tlbiwgdXNlVmFsdWU6IHN0b3JhZ2VDb25maWcgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBTdG9yYWdlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2UsXHJcbiAgICAgICAgICBkZXBzOiBbU3RvcmFnZUNvbmZpZ1Rva2VuXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxvY2FsRm9yYWdlLmRlZmluZURyaXZlciIsImNocm9tZUV4dGVuc2lvbkRyaXZlciIsIkxvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlIiwiQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyIiwiTG9jYWxGb3JhZ2UuSU5ERVhFRERCIiwiTG9jYWxGb3JhZ2UuV0VCU1FMIiwiTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLHVCQUFNLFNBQVMsR0FBc0I7SUFDN0IsT0FBTyxFQUFFLHlCQUF5Qjs7OztJQUNsQyxZQUFZO1FBQ1IsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDNUI7Ozs7O0lBQ0QsS0FBSyxDQUFDLFFBQThCO1FBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDekIsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLEdB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