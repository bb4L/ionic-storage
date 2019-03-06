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
export default webdriver;
// add the driver to localForage.
// localforage.defineDriver(myCustomDriver);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViZHJpdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmljL3N0b3JhZ2UvIiwic291cmNlcyI6WyJ3ZWJkcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHVCQUFNLFNBQVMsR0FBc0I7SUFDbkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7SUFDN0MsWUFBWTtRQUNWLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzFCOzs7OztJQUNELEtBQUssQ0FBQyxRQUE2QjtRQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKOzs7Ozs7O0lBQ0QsT0FBTyxDQUFJLEdBQVcsRUFBRSxRQUF1QztRQUM3RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLHFCQUFJLE1BQU0sR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUN0RCxJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxPQUFP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dUM7UUFFdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxxQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNyQjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjtDQUNGLENBQUM7QUFFRixlQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgbGV0IGNocm9tZTogYW55O1xuY29uc3Qgd2ViZHJpdmVyOiBMb2NhbEZvcmFnZURyaXZlciA9IHtcbiAgX2RyaXZlcjogXCJ3ZWJFeHRlbnNpb25Mb2NhbFN0b3JhZ2VcIixcbiAgX3N1cHBvcnQ6IGNocm9tZS5ydW50aW1lICYmIGNocm9tZS5ydW50aW1lLmlkLFxuICBfaW5pdFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuICBjbGVhcihjYWxsYmFjaz86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcihyZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSwgcmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgPyByZXNba2V5XSA6IHJlcztcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgaXRlcmF0ZTxULCBVPihcbiAgICBpdGVyYXRlZTogKHZhbHVlOiBULCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBudW1iZXIpID0+IFUsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHJlc3VsdDogVSkgPT4gdm9pZFxuICApOiBQcm9taXNlPFU+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIHJlcy5mb3JFYWNoKChrZXksIGkpID0+IGl0ZXJhdGVlKHJlc1trZXldLCBrZXksIGkpKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBrZXkoXG4gICAga2V5SW5kZXg6IG51bWJlcixcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwga2V5OiBzdHJpbmcpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGxldCBzb2w6IHN0cmluZyA9IHJlcy5rZXlzKClba2V5SW5kZXhdO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCBzb2wpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBrZXlzKGNhbGxiYWNrPzogKGVycjogYW55LCBrZXlzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGxlbmd0aChjYWxsYmFjaz86IChlcnI6IGFueSwgbnVtYmVyT2ZLZXlzOiBudW1iZXIpID0+IHZvaWQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzLmtleXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcy5rZXlzLmxlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2V0SXRlbTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZTogVCxcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQob2JqLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWJkcml2ZXI7XG4vLyBhZGQgdGhlIGRyaXZlciB0byBsb2NhbEZvcmFnZS5cbi8vIGxvY2FsZm9yYWdlLmRlZmluZURyaXZlcihteUN1c3RvbURyaXZlcik7XG4iXX0=