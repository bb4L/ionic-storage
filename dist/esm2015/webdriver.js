/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ webdriver = {
    _driver: "webExtensionLocalStorage",
    _support: chrome && chrome.runtime && chrome.runtime.id,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViZHJpdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmljL3N0b3JhZ2UvIiwic291cmNlcyI6WyJ3ZWJkcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHVCQUFNLFNBQVMsR0FBc0I7SUFDbkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzs7O0lBQ3ZELFlBQVk7UUFDVixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFDRCxLQUFLLENBQUMsUUFBNkI7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksUUFBUSxFQUFFO29CQUNaLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7OztJQUNELE9BQU8sQ0FBSSxHQUFXLEVBQUUsUUFBdUM7UUFDN0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxxQkFBSSxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEQsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDeEI7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USxFQUNSLFFBQXVDO1FBRXZDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMscUJBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDckI7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2QsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Q0FDRixDQUFDO0FBRUYsZUFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBjaHJvbWU6IGFueTtcbmNvbnN0IHdlYmRyaXZlcjogTG9jYWxGb3JhZ2VEcml2ZXIgPSB7XG4gIF9kcml2ZXI6IFwid2ViRXh0ZW5zaW9uTG9jYWxTdG9yYWdlXCIsXG4gIF9zdXBwb3J0OiBjaHJvbWUgJiYgY2hyb21lLnJ1bnRpbWUgJiYgY2hyb21lLnJ1bnRpbWUuaWQsXG4gIF9pbml0U3RvcmFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG4gIGNsZWFyKGNhbGxiYWNrPzogKGVycjogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldEl0ZW08VD4oa2V5OiBzdHJpbmcsIGNhbGxiYWNrPzogKGVycjogYW55LCB2YWx1ZTogVCkgPT4gdm9pZCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoa2V5LCByZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiA/IHJlc1trZXldIDogcmVzO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBpdGVyYXRlPFQsIFU+KFxuICAgIGl0ZXJhdGVlOiAodmFsdWU6IFQsIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IG51bWJlcikgPT4gVSxcbiAgICBjYWxsYmFjaz86IChlcnI6IGFueSwgcmVzdWx0OiBVKSA9PiB2b2lkXG4gICk6IFByb21pc2U8VT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgcmVzLmZvckVhY2goKGtleSwgaSkgPT4gaXRlcmF0ZWUocmVzW2tleV0sIGtleSwgaSkpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGtleShcbiAgICBrZXlJbmRleDogbnVtYmVyLFxuICAgIGNhbGxiYWNrPzogKGVycjogYW55LCBrZXk6IHN0cmluZykgPT4gdm9pZFxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgbGV0IHNvbDogc3RyaW5nID0gcmVzLmtleXMoKVtrZXlJbmRleF07XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHNvbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGtleXMoY2FsbGJhY2s/OiAoZXJyOiBhbnksIGtleXM6IHN0cmluZ1tdKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgcmVzID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgbGVuZ3RoKGNhbGxiYWNrPzogKGVycjogYW55LCBudW1iZXJPZktleXM6IG51bWJlcikgPT4gdm9pZCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMua2V5cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzLmtleXMubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVJdGVtKGtleTogc3RyaW5nLCBjYWxsYmFjaz86IChlcnI6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5LCByZXMgPT4ge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzZXRJdGVtPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBULFxuICAgIGNhbGxiYWNrPzogKGVycjogYW55LCB2YWx1ZTogVCkgPT4gdm9pZFxuICApOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChvYmosIHJlcyA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYmRyaXZlcjtcbi8vIGFkZCB0aGUgZHJpdmVyIHRvIGxvY2FsRm9yYWdlLlxuLy8gbG9jYWxmb3JhZ2UuZGVmaW5lRHJpdmVyKG15Q3VzdG9tRHJpdmVyKTtcbiJdfQ==