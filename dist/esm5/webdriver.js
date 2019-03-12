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
export default webdriver;
// add the driver to localForage.
// localforage.defineDriver(myCustomDriver);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViZHJpdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmljL3N0b3JhZ2UvIiwic291cmNlcyI6WyJ3ZWJkcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFCQUFNLFNBQVMsR0FBc0I7SUFDbkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ3ZELFlBQVk7OztJQUFaO1FBQ0UsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDMUI7SUFDRCxLQUFLOzs7O0lBQUwsVUFBTSxRQUE2QjtRQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDNUIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTzs7Ozs7O0lBQVAsVUFBVyxHQUFXLEVBQUUsUUFBdUM7UUFDN0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQSxHQUFHO2dCQUMvQixxQkFBSSxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEQsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0QsT0FBTyxDQUFDLE1B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akMscUJBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFBLEdBQUc7Z0JBQy9CLElBQUksUUFBUSxFQUFFO29CQUNaLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3JCO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKO0NBQ0YsQ0FBQztBQUVGLGVBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBsZXQgY2hyb21lOiBhbnk7XG5jb25zdCB3ZWJkcml2ZXI6IExvY2FsRm9yYWdlRHJpdmVyID0ge1xuICBfZHJpdmVyOiBcIndlYkV4dGVuc2lvbkxvY2FsU3RvcmFnZVwiLFxuICBfc3VwcG9ydDogY2hyb21lICYmIGNocm9tZS5ydW50aW1lICYmIGNocm9tZS5ydW50aW1lLmlkLFxuICBfaW5pdFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuICBjbGVhcihjYWxsYmFjaz86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcihyZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSwgcmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgPyByZXNba2V5XSA6IHJlcztcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgaXRlcmF0ZTxULCBVPihcbiAgICBpdGVyYXRlZTogKHZhbHVlOiBULCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBudW1iZXIpID0+IFUsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHJlc3VsdDogVSkgPT4gdm9pZFxuICApOiBQcm9taXNlPFU+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIHJlcy5mb3JFYWNoKChrZXksIGkpID0+IGl0ZXJhdGVlKHJlc1trZXldLCBrZXksIGkpKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBrZXkoXG4gICAga2V5SW5kZXg6IG51bWJlcixcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwga2V5OiBzdHJpbmcpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGxldCBzb2w6IHN0cmluZyA9IHJlcy5rZXlzKClba2V5SW5kZXhdO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCBzb2wpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBrZXlzKGNhbGxiYWNrPzogKGVycjogYW55LCBrZXlzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGxlbmd0aChjYWxsYmFjaz86IChlcnI6IGFueSwgbnVtYmVyT2ZLZXlzOiBudW1iZXIpID0+IHZvaWQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzLmtleXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcy5rZXlzLmxlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2V0SXRlbTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZTogVCxcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwgdmFsdWU6IFQpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQob2JqLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWJkcml2ZXI7XG4vLyBhZGQgdGhlIGRyaXZlciB0byBsb2NhbEZvcmFnZS5cbi8vIGxvY2FsZm9yYWdlLmRlZmluZURyaXZlcihteUN1c3RvbURyaXZlcik7XG4iXX0=