/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import * as LocalForage from 'localforage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import chromeExtensionDriver from './webdriver';
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
            LocalForage.defineDriver(chromeExtensionDriver)
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
                    return CordovaSQLiteDriver._driver;
                case 'indexeddb':
                    return LocalForage.INDEXEDDB;
                case 'websql':
                    return LocalForage.WEBSQL;
                case 'localstorage':
                    return LocalForage.LOCALSTORAGE;
                case "webExtensionLocalStorage":
                    return chromeExtensionDriver._driver;
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
export { Storage };
function Storage_tsickle_Closure_declarations() {
    /** @type {?} */
    Storage.prototype._dbPromise;
    /** @type {?} */
    Storage.prototype._driver;
}
/**
 * @hidden
 * @return {?}
 */
export function getDefaultConfig() {
    return {
        name: '_ionicstorage',
        storeName: '_ionickv',
        dbKey: '_ionickey',
        driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    };
}
/**
 * @hidden
 * @record
 */
export function StorageConfig() { }
function StorageConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    StorageConfig.prototype.name;
    /** @type {?|undefined} */
    StorageConfig.prototype.version;
    /** @type {?|undefined} */
    StorageConfig.prototype.size;
    /** @type {?|undefined} */
    StorageConfig.prototype.storeName;
    /** @type {?|undefined} */
    StorageConfig.prototype.description;
    /** @type {?|undefined} */
    StorageConfig.prototype.driverOrder;
    /** @type {?|undefined} */
    StorageConfig.prototype.dbKey;
}
/**
 * @hidden
 */
export var /** @type {?} */ StorageConfigToken = new InjectionToken('STORAGE_CONFIG_TOKEN');
/**
 * @hidden
 * @param {?} storageConfig
 * @return {?}
 */
export function provideStorage(storageConfig) {
    var /** @type {?} */ config = !!storageConfig ? storageConfig : getDefaultConfig();
    return new Storage(config);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9zdG9yYWdlLyIsInNvdXJjZXMiOlsic3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEtBQUssV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUUzQyxPQUFPLEtBQUssbUJBQW1CLE1BQU0saUNBQWlDLENBQUM7QUFFdkUsT0FBTyxxQkFBcUIsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRmhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUlFOzs7Ozs7T0FNRztJQUNILGlCQUFZLE1BQXFCO1FBQWpDLGlCQW9CQzt1QkE3QnlCLElBQUk7UUFVNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzVDLHFCQUFJLEVBQWUsQ0FBQztZQUVwQixxQkFBTSxhQUFhLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztZQUN6QyxxQkFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRWhFLFdBQVcsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUM7aUJBQzVDLElBQUksQ0FBQztnQkFDSixFQUFFLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQyxDQUFDO2lCQUNELElBQUksQ0FBQztnQkFDSixPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGVB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QUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0tBQ2pFO2tCQW5PSDtJQW9PQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBL0hELG1CQStIQzs7Ozs7Ozs7Ozs7QUFHRCxNQUFNO0lBQ0osT0FBTztRQUNMLElBQUksRUFBRSxlQUFlO1FBQ3JCLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQztLQUMvRCxDQUFDO0NBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjRCxNQUFNLENBQUMscUJBQU0sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQ2xELHNCQUFzQixDQUN2QixDQUFDOzs7Ozs7QUFHRixNQUFNLHlCQUF5QixhQUE0QjtJQUN6RCxxQkFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3BFLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgTG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xyXG5cclxuaW1wb3J0ICogYXMgQ29yZG92YVNRTGl0ZURyaXZlciBmcm9tICdsb2NhbGZvcmFnZS1jb3Jkb3Zhc3FsaXRlZHJpdmVyJztcclxuXHJcbmltcG9ydCBjaHJvbWVFeHRlbnNpb25Ecml2ZXIgZnJvbSAnLi93ZWJkcml2ZXInO1xyXG4vKipcclxuICogU3RvcmFnZSBpcyBhbiBlYXN5IHdheSB0byBzdG9yZSBrZXkvdmFsdWUgcGFpcnMgYW5kIEpTT04gb2JqZWN0cy5cclxuICogU3RvcmFnZSB1c2VzIGEgdmFyaWV0eSBvZiBzdG9yYWdlIGVuZ2luZXMgdW5kZXJuZWF0aCwgcGlja2luZyB0aGUgYmVzdCBvbmUgYXZhaWxhYmxlXHJcbiAqIGRlcGVuZGluZyBvbiB0aGUgcGxhdGZvcm0uXHJcbiAqXHJcbiAqIFdoZW4gcnVubmluZyBpbiBhIG5hdGl2ZSBhcHAgY29udGV4dCwgU3RvcmFnZSB3aWxsIHByaW9yaXRpemUgdXNpbmcgU1FMaXRlLCBhcyBpdCdzIG9uZSBvZlxyXG4gKiB0aGUgbW9zdCBzdGFibGUgYW5kIHdpZGVseSB1c2VkIGZpbGUtYmFzZWQgZGF0YWJhc2VzLCBhbmQgYXZvaWRzIHNvbWUgb2YgdGhlXHJcbiAqIHBpdGZhbGxzIG9mIHRoaW5ncyBsaWtlIGxvY2Fsc3RvcmFnZSBhbmQgSW5kZXhlZERCLCBzdWNoIGFzIHRoZSBPUyBkZWNpZGluZyB0byBjbGVhciBvdXQgc3VjaFxyXG4gKiBkYXRhIGluIGxvdyBkaXNrLXNwYWNlIHNpdHVhdGlvbnMuXHJcbiAqXHJcbiAqIFdoZW4gcnVubmluZyBpbiB0aGUgd2ViIG9yIGFzIGEgUHJvZ3Jlc3NpdmUgV2ViIEFwcCwgU3RvcmFnZSB3aWxsIGF0dGVtcHQgdG8gdXNlXHJcbiAqIEluZGV4ZWREQiwgV2ViU1FMLCBhbmQgbG9jYWxzdG9yYWdlLCBpbiB0aGF0IG9yZGVyLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogRmlyc3QsIGlmIHlvdSdkIGxpa2UgdG8gdXNlIFNRTGl0ZSwgaW5zdGFsbCB0aGUgY29yZG92YS1zcWxpdGUtc3RvcmFnZSBwbHVnaW46XHJcbiAqIGBgYGJhc2hcclxuICogaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtc3FsaXRlLXN0b3JhZ2VcclxuICogYGBgXHJcbiAqXHJcbiAqIE5leHQsIGluc3RhbGwgdGhlIHBhY2thZ2UgKGNvbWVzIGJ5IGRlZmF1bHQgZm9yIElvbmljIGFwcHMgPiBJb25pYyBWMSk6XHJcbiAqIGBgYGJhc2hcclxuICogbnBtIGluc3RhbGwgLS1zYXZlIEBpb25pYy9zdG9yYWdlXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOZXh0LCBhZGQgaXQgdG8gdGhlIGltcG9ydHMgbGlzdCBpbiB5b3VyIGBOZ01vZHVsZWAgZGVjbGFyYXRpb24gKGZvciBleGFtcGxlLCBpbiBgc3JjL2FwcC9hcHAubW9kdWxlLnRzYCk6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGRlY2xhcmF0aW9uczogW1xyXG4gKiAgICAgLy8gLi4uXHJcbiAqICAgXSxcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBCcm93c2VyTW9kdWxlLFxyXG4gKiAgICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXHJcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpXHJcbiAqICAgXSxcclxuICogICBib290c3RyYXA6IFtJb25pY0FwcF0sXHJcbiAqICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAqICAgICAvLyAuLi5cclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW1xyXG4gKiAgICAgLy8gLi4uXHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqYGBgXHJcbiAqXHJcbiAqIEZpbmFsbHksIGluamVjdCBpdCBpbnRvIGFueSBvZiB5b3VyIGNvbXBvbmVudHMgb3IgcGFnZXM6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuXHJcbiAqIGV4cG9ydCBjbGFzcyBNeUFwcCB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKSB7IH1cclxuICpcclxuICogICAuLi5cclxuICpcclxuICogICAvLyBzZXQgYSBrZXkvdmFsdWVcclxuICogICBzdG9yYWdlLnNldCgnbmFtZScsICdNYXgnKTtcclxuICpcclxuICogICAvLyBPciB0byBnZXQgYSBrZXkvdmFsdWUgcGFpclxyXG4gKiAgIHN0b3JhZ2UuZ2V0KCdhZ2UnKS50aGVuKCh2YWwpID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKCdZb3VyIGFnZSBpcycsIHZhbCk7XHJcbiAqICAgfSk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqXHJcbiAqICMjIyBDb25maWd1cmluZyBTdG9yYWdlXHJcbiAqXHJcbiAqIFRoZSBTdG9yYWdlIGVuZ2luZSBjYW4gYmUgY29uZmlndXJlZCBib3RoIHdpdGggc3BlY2lmaWMgc3RvcmFnZSBlbmdpbmUgcHJpb3JpdGllcywgb3IgY3VzdG9tIGNvbmZpZ3VyYXRpb25cclxuICogb3B0aW9ucyB0byBwYXNzIHRvIGxvY2FsRm9yYWdlLiBTZWUgdGhlIGxvY2FsRm9yYWdlIGNvbmZpZyBkb2NzIGZvciBwb3NzaWJsZSBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UjY29uZmlndXJhdGlvblxyXG4gKlxyXG4gKiBOb3RlOiBBbnkgY3VzdG9tIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBkZWNsYXJhdGlvbnM6IFsuLi5dLFxyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KHtcclxuICogICAgICAgbmFtZTogJ19fbXlkYicsXHJcbiAgICAgICAgIGRyaXZlck9yZGVyOiBbJ2luZGV4ZWRkYicsICdzcWxpdGUnLCAnd2Vic3FsJ11cclxuICogICAgIH0pXHJcbiAqICAgXSxcclxuICogICBib290c3RyYXA6IFsuLi5dLFxyXG4gKiAgIGVudHJ5Q29tcG9uZW50czogWy4uLl0sXHJcbiAqICAgIHByb3ZpZGVyczogWy4uLl1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgcHJpdmF0ZSBfZGJQcm9taXNlOiBQcm9taXNlPExvY2FsRm9yYWdlPjtcclxuICBwcml2YXRlIF9kcml2ZXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBTdG9yYWdlIGluc3RhbmNlIHVzaW5nIHRoZSBvcmRlciBvZiBkcml2ZXJzIGFuZCBhbnkgYWRkaXRpb25hbCBjb25maWdcclxuICAgKiBvcHRpb25zIHRvIHBhc3MgdG8gTG9jYWxGb3JhZ2UuXHJcbiAgICpcclxuICAgKiBQb3NzaWJsZSBkcml2ZXIgb3B0aW9ucyBhcmU6IFsnc3FsaXRlJywgJ2luZGV4ZWRkYicsICd3ZWJzcWwnLCAnbG9jYWxzdG9yYWdlJ10gYW5kIHRoZVxyXG4gICAqIGRlZmF1bHQgaXMgdGhhdCBleGFjdCBvcmRlcmluZy5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFN0b3JhZ2VDb25maWcpIHtcclxuICAgIHRoaXMuX2RiUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGRiOiBMb2NhbEZvcmFnZTtcclxuXHJcbiAgICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBnZXREZWZhdWx0Q29uZmlnKCk7XHJcbiAgICAgIGNvbnN0IGFjdHVhbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcclxuXHJcbiAgICAgIExvY2FsRm9yYWdlLmRlZmluZURyaXZlcihjaHJvbWVFeHRlbnNpb25Ecml2ZXIpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZGIgPSBMb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZShhY3R1YWxDb25maWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgIGRiLnNldERyaXZlcih0aGlzLl9nZXREcml2ZXJPcmRlcihhY3R1YWxDb25maWcuZHJpdmVyT3JkZXIpKVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9kcml2ZXIgPSBkYi5kcml2ZXIoKTtcclxuICAgICAgICAgIHJlc29sdmUoZGIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiByZWplY3QocmVhc29uKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgZHJpdmVyIGJlaW5nIHVzZWQuXHJcbiAgICogQHJldHVybnMgTmFtZSBvZiB0aGUgZHJpdmVyXHJcbiAgICovXHJcbiAgZ2V0IGRyaXZlcigpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kcml2ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZsZWN0IHRoZSByZWFkaW5lc3Mgb2YgdGhlIHN0b3JlLlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RvcmUgaXMgcmVhZHlcclxuICAgKi9cclxuICByZWFkeSgpOiBQcm9taXNlPExvY2FsRm9yYWdlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBoaWRkZW4gKi9cclxuICBwcml2YXRlIF9nZXREcml2ZXJPcmRlcihkcml2ZXJPcmRlcikge1xyXG4gICAgcmV0dXJuIGRyaXZlck9yZGVyLm1hcChkcml2ZXIgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGRyaXZlcikge1xyXG4gICAgICAgIGNhc2UgJ3NxbGl0ZSc6XHJcbiAgICAgICAgICByZXR1cm4gQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyO1xyXG4gICAgICAgIGNhc2UgJ2luZGV4ZWRkYic6XHJcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuSU5ERVhFRERCO1xyXG4gICAgICAgIGNhc2UgJ3dlYnNxbCc6XHJcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuV0VCU1FMO1xyXG4gICAgICAgIGNhc2UgJ2xvY2Fsc3RvcmFnZSc6XHJcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFO1xyXG4gICAgICAgIGNhc2UgXCJ3ZWJFeHRlbnNpb25Mb2NhbFN0b3JhZ2VcIjpcclxuICAgICAgICAgIHJldHVybiBjaHJvbWVFeHRlbnNpb25Ecml2ZXIuX2RyaXZlcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGtleVxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuZ2V0SXRlbShrZXkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXkuXHJcbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcclxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIGZvciB0aGlzIGtleVxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUga2V5IGFuZCB2YWx1ZSBhcmUgc2V0XHJcbiAgICovXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5zZXRJdGVtKGtleSwgdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbnkgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB2YWx1ZSBpcyByZW1vdmVkXHJcbiAgICovXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5yZW1vdmVJdGVtKGtleSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGVudGlyZSBrZXkgdmFsdWUgc3RvcmUuIFdBUk5JTkc6IEhPVCFcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIGNsZWFyZWRcclxuICAgKi9cclxuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5jbGVhcigpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbnVtYmVyIG9mIGtleXMgc3RvcmVkLlxyXG4gICAqL1xyXG4gIGxlbmd0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmxlbmd0aCgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5cyBpbiB0aGUgc3RvcmUuXHJcbiAgICovXHJcbiAga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIua2V5cygpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSx2YWx1ZSBwYWlyLlxyXG4gICAqIEBwYXJhbSBpdGVyYXRvckNhbGxiYWNrIGEgY2FsbGJhY2sgb2YgdGhlIGZvcm0gKHZhbHVlLCBrZXksIGl0ZXJhdGlvbk51bWJlcilcclxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGl0ZXJhdGlvbiBoYXMgZmluaXNoZWQuXHJcbiAgICovXHJcbiAgZm9yRWFjaChcclxuICAgIGl0ZXJhdG9yQ2FsbGJhY2s6ICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBOdW1iZXIpID0+IGFueVxyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLml0ZXJhdGUoaXRlcmF0b3JDYWxsYmFjaykpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDb25maWcoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdfaW9uaWNzdG9yYWdlJyxcclxuICAgIHN0b3JlTmFtZTogJ19pb25pY2t2JyxcclxuICAgIGRiS2V5OiAnX2lvbmlja2V5JyxcclxuICAgIGRyaXZlck9yZGVyOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlQ29uZmlnIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIHZlcnNpb24/OiBudW1iZXI7XHJcbiAgc2l6ZT86IG51bWJlcjtcclxuICBzdG9yZU5hbWU/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgZHJpdmVyT3JkZXI/OiBzdHJpbmdbXTtcclxuICBkYktleT86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGNvbnN0IFN0b3JhZ2VDb25maWdUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KFxyXG4gICdTVE9SQUdFX0NPTkZJR19UT0tFTidcclxuKTtcclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZShzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnKTogU3RvcmFnZSB7XHJcbiAgY29uc3QgY29uZmlnID0gISFzdG9yYWdlQ29uZmlnID8gc3RvcmFnZUNvbmZpZyA6IGdldERlZmF1bHRDb25maWcoKTtcclxuICByZXR1cm4gbmV3IFN0b3JhZ2UoY29uZmlnKTtcclxufVxyXG4iXX0=