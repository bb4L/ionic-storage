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
export default webdriver;
// add the driver to localForage.
// localforage.defineDriver(myCustomDriver);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViZHJpdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmljL3N0b3JhZ2UvIiwic291cmNlcyI6WyJ3ZWJkcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFCQUFNLFNBQVMsR0FBc0I7SUFDbkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDN0MsWUFBWTs7O0lBQVo7UUFDRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMxQjtJQUNELEtBQUs7Ozs7SUFBTCxVQUFNLFFBQTZCO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUM1QixJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2QsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPOzs7Ozs7SUFBUCxVQUFXLEdBQVcsRUFBRSxRQUF1QztRQUM3RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFBLEdBQUc7Z0JBQy9CLHFCQUFJLE1BQU0sR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUN0RCxJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLENB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QUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUEsR0FBRztnQkFDL0IsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDckI7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2QsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Q0FDRixDQUFDO0FBRUYsZUFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcbmNvbnN0IHdlYmRyaXZlcjogTG9jYWxGb3JhZ2VEcml2ZXIgPSB7XG4gIF9kcml2ZXI6IFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCIsXG4gIF9zdXBwb3J0OiBjaHJvbWUucnVudGltZSAmJiBjaHJvbWUucnVudGltZS5pZCxcbiAgX2luaXRTdG9yYWdlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbiAgY2xlYXIoY2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIocmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0SXRlbTxUPihrZXk6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChrZXksIHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiID8gcmVzW2tleV0gOiByZXM7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGl0ZXJhdGU8VCwgVT4oXG4gICAgaXRlcmF0ZWU6ICh2YWx1ZTogVCwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogbnVtYmVyKSA9PiBVLFxuICAgIGNhbGxiYWNrPzogKGVycjogYW55LCByZXN1bHQ6IFUpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxVPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICByZXMuZm9yRWFjaCgoa2V5LCBpKSA9PiBpdGVyYXRlZShyZXNba2V5XSwga2V5LCBpKSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAga2V5KFxuICAgIGtleUluZGV4OiBudW1iZXIsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIGtleTogc3RyaW5nKSA9PiB2b2lkXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBsZXQgc29sOiBzdHJpbmcgPSByZXMua2V5cygpW2tleUluZGV4XTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgc29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAga2V5cyhjYWxsYmFjaz86IChlcnI6IGFueSwga2V5czogc3RyaW5nW10pID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBsZW5ndGgoY2FsbGJhY2s/OiAoZXJyOiBhbnksIG51bWJlck9mS2V5czogbnVtYmVyKSA9PiB2b2lkKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcy5rZXlzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMua2V5cy5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcsIGNhbGxiYWNrPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXksIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNldEl0ZW08VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IFQsXG4gICAgY2FsbGJhY2s/OiAoZXJyOiBhbnksIHZhbHVlOiBUKSA9PiB2b2lkXG4gICk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgb2JqID0ge307XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KG9iaiwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2ViZHJpdmVyO1xuLy8gYWRkIHRoZSBkcml2ZXIgdG8gbG9jYWxGb3JhZ2UuXG4vLyBsb2NhbGZvcmFnZS5kZWZpbmVEcml2ZXIobXlDdXN0b21Ecml2ZXIpO1xuIl19