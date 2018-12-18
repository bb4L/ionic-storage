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
export default webdriver;
// add the driver to localForage.
// localforage.defineDriver(myCustomDriver);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViZHJpdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmljL3N0b3JhZ2UvIiwic291cmNlcyI6WyJ3ZWJkcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFCQUFNLFNBQVMsR0FBc0I7SUFDN0IsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxZQUFZOzs7SUFBWjtRQUNJLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzVCO0lBQ0QsS0FBSzs7OztJQUFMLFVBQU0sUUFBOEI7UUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQzFCLElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakI7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTzs7Ozs7O0lBQVAsVUFBVyxHQUFXLEVBQUUsUUFBdUM7UUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQSxHQUFHO2dCQUM3QixJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEIsQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDO0tBRU47SUFDRCxPQUFPOzs7Ozs7SUFBUCxVQUFjLFFBQStELEVBQUUsUUFBd0M7UUFDbkgsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQSxHQUFHO2dCQUM5QixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQ3BELElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQixDQUFDLENBQUM7U0FDTixDQUFDLENBQUM7S0FFTjtJQUVELEdBQUc7Ozs7O0lBQUgsVUFBSSxRQUFnQixFQUFFLFFBQTBDO1FBQzVELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUEsR0FBRztnQkFDOUIscUJBQUksR0FBRyxHQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdkI7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUNOO0lBQ0QsSUFBSTs7OztJQUFKLFVBQUssUUFBOEM7UUFDL0MsT0FBTyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFBLEdBQUc7Z0JBQzlCLElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQixDQUFDLENBQUM7U0FDTixDQUNKLENBQUM7S0FDTDtJQUNELE1BQU07Ozs7SUFBTixVQUFPLFFBQW9EO1FBQ3ZELE9BQU8sSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQSxHQUFHO2dCQUM5QixJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ25DO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQztTQUNOLENBQ0osQ0FBQztLQUNMO0lBQ0QsVUFBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxRQUE4QjtRQUNsRCxPQUFPLElBQUksT0FBTyxDQUNkLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDWixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQUEsR0FBRztnQkFDaEMsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqQjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEIsQ0FBQyxDQUFDO1NBQ04sQ0FDSixDQUFDO0tBQ0w7SUFDRCxPQUFPOzs7Ozs7O0lBQVAsVUFBVyxHQUFXLEVBQUUsS0FBUSxFQUFFLFFBQXVDO1FBQ3JFLE9BQU8sSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsRUFBRSxVQUFBLEdBQUc7Z0JBQ3RDLElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQixDQUFDLENBQUM7U0FDTixDQUNKLENBQUM7S0FDTDtDQUNSLENBQ0E7QUFFRCxlQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgbGV0IGNocm9tZTogYW55O1xyXG5jb25zdCB3ZWJkcml2ZXI6IExvY2FsRm9yYWdlRHJpdmVyID0ge1xyXG4gICAgICAgIF9kcml2ZXI6IFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCIsXHJcbiAgICAgICAgX2luaXRTdG9yYWdlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhcihjYWxsYmFjayA/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEl0ZW08VD4oa2V5OiBzdHJpbmcsIGNhbGxiYWNrPzogKGVycjogYW55LCB2YWx1ZTogVCkgPT4gdm9pZCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZXJhdGU8VCwgVT4oaXRlcmF0ZWU6ICh2YWx1ZTogVCwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogbnVtYmVyKSA9PiBVLCBjYWxsYmFjaz86IChlcnI6IGFueSwgcmVzdWx0OiBVKSA9PiB2b2lkKTogUHJvbWlzZTxVPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuZm9yRWFjaCgoa2V5LCBpKSA9PiBpdGVyYXRlZShyZXNba2V5XSwga2V5LCBpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAga2V5KGtleUluZGV4OiBudW1iZXIsIGNhbGxiYWNrPzogKGVycjogYW55LCBrZXk6IHN0cmluZykgPT4gdm9pZCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc29sOnN0cmluZyA9IHJlcy5rZXlzKClba2V5SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBzb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXlzKGNhbGxiYWNrID86IChlcnI6IGFueSwga2V5czogc3RyaW5nW10pID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlbmd0aChjYWxsYmFjayA/OiAoZXJyOiBhbnksIG51bWJlck9mS2V5czogbnVtYmVyKSA9PiB2b2lkKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcy5rZXlzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMua2V5cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZywgY2FsbGJhY2sgPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5LCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQsIGNhbGxiYWNrPzogKGVycjogYW55LCB2YWx1ZTogVCkgPT4gdm9pZCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtrZXk6IHZhbHVlfSwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbn1cclxuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViZHJpdmVyO1xyXG4vLyBhZGQgdGhlIGRyaXZlciB0byBsb2NhbEZvcmFnZS5cclxuLy8gbG9jYWxmb3JhZ2UuZGVmaW5lRHJpdmVyKG15Q3VzdG9tRHJpdmVyKTsiXX0=